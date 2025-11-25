import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// Mock window.confirm for delete operations
global.confirm = vi.fn(() => true);

// shadcn/ui Select 컴포넌트 테스트를 위한 PointerEvent Mock
// shadcn Select는 Radix UI 기반이며, 드롭다운 열기/닫기에 PointerEvent를 사용합니다.
// jsdom 환경에서는 PointerEvent가 제대로 구현되어 있지 않아 직접 모킹이 필요합니다.
class MockPointerEvent extends Event {
  button: number;
  ctrlKey: boolean;
  pointerType: string;

  constructor(type: string, props: PointerEventInit = {}) {
    super(type, props);
    this.button = props.button ?? 0;
    this.ctrlKey = props.ctrlKey ?? false;
    this.pointerType = props.pointerType ?? 'mouse';
  }
}

// PointerEvent 생성자를 Mock으로 교체
// 테스트 환경에서는 완전한 PointerEvent 구현이 필요하지 않으므로
// unknown을 거쳐 타입 단언을 수행합니다.
globalThis.PointerEvent = MockPointerEvent as unknown as typeof PointerEvent;

// Radix UI가 사용하는 HTMLElement 메서드들을 Mock으로 구현
// 실제 브라우저 환경이 아니므로 스크롤 및 포인터 캡처 기능을 빈 함수로 대체
globalThis.HTMLElement.prototype.scrollIntoView = vi.fn();
globalThis.HTMLElement.prototype.releasePointerCapture = vi.fn();
globalThis.HTMLElement.prototype.hasPointerCapture = vi.fn();
