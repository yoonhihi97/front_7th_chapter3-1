import { CircleCheckIcon, InfoIcon, Loader2Icon, OctagonXIcon, TriangleAlertIcon } from 'lucide-react';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'flex items-center gap-3 w-full rounded-[var(--radius)] border px-4 py-3 text-sm shadow-lg font-[family-name:var(--font-family-sans)]',
          success: 'bg-(--toast-success-bg) text-(--toast-success-fg) border-(--toast-success-border)',
          error: 'bg-(--toast-error-bg) text-(--toast-error-fg) border-(--toast-error-border)',
          info: 'bg-(--toast-info-bg) text-(--toast-info-fg) border-(--toast-info-border)',
          warning: 'bg-(--toast-warning-bg) text-(--toast-warning-fg) border-(--toast-warning-border)',
          title: 'font-medium',
          description: 'text-sm opacity-90',
        },
      }}
      {...props}
    />
  );
};

export { Toaster }
