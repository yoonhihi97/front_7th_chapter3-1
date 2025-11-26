import React from 'react';
import { useAlert } from '../../contexts/AlertContext';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';

/**
 * Alert variant를 UI Alert variant로 매핑
 */
const ALERT_VARIANT_MAP = {
  success: 'success',
  error: 'error',
  info: 'info',
  warning: 'warning',
} as const;

/**
 * AlertContainer - 전역 알림 표시 컴포넌트
 *
 * AlertContext의 알림들을 화면에 렌더링
 * ManagementPage 상단에 배치됨
 */
export const AlertContainer: React.FC = () => {
  const { alerts, hideAlert } = useAlert();

  if (alerts.length === 0) return null;

  return (
    <div className="mb-4 space-y-2">
      {alerts.map((alert) => (
        <Alert key={alert.id} variant={ALERT_VARIANT_MAP[alert.variant]} onClose={() => hideAlert(alert.id)}>
          <AlertTitle>{alert.title}</AlertTitle>
          <AlertDescription>{alert.message}</AlertDescription>
        </Alert>
      ))}
    </div>
  );
};
