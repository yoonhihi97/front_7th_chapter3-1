import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

/**
 * 시스템에서 지원하는 알림 타입
 */
export type AlertVariant = 'success' | 'error' | 'info' | 'warning';

/**
 * 개별 알림 아이템 구조
 */
export interface AlertItem {
  id: string;
  variant: AlertVariant;
  title: string;
  message: string;
  duration?: number;
}

/**
 * 알림 옵션 인터페이스
 */
interface AlertOptions {
  /** 알림 제목 (선택) */
  title?: string;
  /** 자동 닫기 시간 (ms), 0이면 자동 닫기 안함 */
  duration?: number;
}

/**
 * Alert API 인터페이스 - 직관적인 메서드 제공
 */
interface AlertAPI {
  success: (message: string, options?: AlertOptions) => void;
  error: (message: string, options?: AlertOptions) => void;
  info: (message: string, options?: AlertOptions) => void;
  warning: (message: string, options?: AlertOptions) => void;
}

/**
 * Alert Context 값 인터페이스
 */
interface AlertContextValue {
  alerts: AlertItem[];
  alert: AlertAPI;
  hideAlert: (id: string) => void;
  clearAllAlerts: () => void;
}

const AlertContext = createContext<AlertContextValue | null>(null);

/**
 * 기본 설정
 */
const DEFAULT_DURATION = 5000; // 5초
const DEFAULT_TITLES: Record<AlertVariant, string> = {
  success: '성공',
  error: '오류',
  info: '알림',
  warning: '경고',
};

/**
 * AlertProvider - 전역 알림 상태 관리
 *
 * 주요 기능:
 * - alert.success(), alert.error() 등 직관적인 API
 * - crypto.randomUUID()로 안전한 ID 생성
 * - 여러 알림 큐 관리
 * - 자동 닫기 (기본 5초)
 * - 수동 닫기 가능
 *
 * @example
 * ```tsx
 * <AlertProvider>
 *   <App />
 * </AlertProvider>
 * ```
 */
export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<AlertItem[]>([]);
  const timerRefs = useRef<Map<string, NodeJS.Timeout>>(new Map());

  /**
   * 내부 알림 생성 함수
   */
  const createAlert = useCallback((variant: AlertVariant, message: string, options: AlertOptions = {}) => {
    const { title = DEFAULT_TITLES[variant], duration = DEFAULT_DURATION } = options;

    // UUID 생성 (브라우저 표준 API 사용)
    const id = crypto.randomUUID();

    const newAlert: AlertItem = {
      id,
      variant,
      title,
      message,
      duration,
    };

    setAlerts((prev) => [...prev, newAlert]);

    // duration 후 자동으로 닫기
    if (duration > 0) {
      const timer = setTimeout(() => {
        hideAlert(id);
      }, duration);

      timerRefs.current.set(id, timer);
    }
  }, []);

  /**
   * 특정 알림 수동으로 닫기
   */
  const hideAlert = useCallback((id: string) => {
    // 타이머가 있으면 제거
    const timer = timerRefs.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timerRefs.current.delete(id);
    }

    setAlerts((prev) => prev.filter((alertItem) => alertItem.id !== id));
  }, []);

  /**
   * 모든 알림 한번에 제거
   */
  const clearAllAlerts = useCallback(() => {
    // 모든 타이머 제거
    timerRefs.current.forEach((timer) => clearTimeout(timer));
    timerRefs.current.clear();

    setAlerts([]);
  }, []);

  /**
   * Alert API - 직관적인 메서드로 알림 표시
   */
  const alert: AlertAPI = {
    success: (message, options) => createAlert('success', message, options),
    error: (message, options) => createAlert('error', message, options),
    info: (message, options) => createAlert('info', message, options),
    warning: (message, options) => createAlert('warning', message, options),
  };

  const value: AlertContextValue = {
    alerts,
    alert,
    hideAlert,
    clearAllAlerts,
  };

  return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>;
};

/**
 * Alert 기능에 접근하기 위한 Hook
 *
 * @throws AlertProvider 외부에서 사용시 에러 발생
 *
 * @example
 * ```tsx
 * const { alert } = useAlert();
 *
 * // 간단한 성공 알림
 * alert.success('작업이 완료되었습니다');
 *
 * // 커스텀 제목과 duration
 * alert.error('작업 실패', {
 *   title: '데이터 저장 실패',
 *   duration: 10000
 * });
 *
 * // 자동 닫기 안함
 * alert.warning('중요한 알림', { duration: 0 });
 * ```
 */
export const useAlert = (): AlertContextValue => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error('useAlert must be used within AlertProvider');
  }

  return context;
};
