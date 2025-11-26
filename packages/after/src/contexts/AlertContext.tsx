import { toast } from 'sonner';

/**
 * 알림 옵션 인터페이스
 */
interface AlertOptions {
  /** 알림 제목 (선택) */
  title?: string;
  /** 자동 닫기 시간 (ms) */
  duration?: number;
}

/**
 * 기본 설정
 */
const DEFAULT_DURATION = 5000;
const DEFAULT_TITLES = {
  success: '성공',
  error: '오류',
  info: '알림',
  warning: '경고',
} as const;

/**
 * Alert API - Sonner toast 래핑
 *
 * 기존 alert.success(), alert.error() 인터페이스 유지
 * 내부적으로 Sonner의 toast 사용
 *
 * @example
 * ```tsx
 * alert.success('작업이 완료되었습니다');
 * alert.error('작업 실패', { title: '오류 발생' });
 * ```
 */
export const alert = {
  success: (message: string, options: AlertOptions = {}) => {
    const { title = DEFAULT_TITLES.success, duration = DEFAULT_DURATION } = options;
    toast.success(title, {
      description: message,
      duration,
    });
  },

  error: (message: string, options: AlertOptions = {}) => {
    const { title = DEFAULT_TITLES.error, duration = DEFAULT_DURATION } = options;
    toast.error(title, {
      description: message,
      duration,
    });
  },

  info: (message: string, options: AlertOptions = {}) => {
    const { title = DEFAULT_TITLES.info, duration = DEFAULT_DURATION } = options;
    toast.info(title, {
      description: message,
      duration,
    });
  },

  warning: (message: string, options: AlertOptions = {}) => {
    const { title = DEFAULT_TITLES.warning, duration = DEFAULT_DURATION } = options;
    toast.warning(title, {
      description: message,
      duration,
    });
  },
};

/**
 * useAlert Hook - 기존 인터페이스 호환성 유지
 *
 * @example
 * ```tsx
 * const { alert } = useAlert();
 * alert.success('성공!');
 * ```
 */
export const useAlert = () => {
  return { alert };
};
