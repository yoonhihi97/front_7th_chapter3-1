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
          success: 'bg-green-50 text-green-900 border-green-700',
          error: 'bg-red-50 text-red-900 border-red-700',
          info: 'bg-cyan-50 text-cyan-900 border-cyan-700',
          warning: 'bg-orange-50 text-orange-900 border-orange-700',
          title: 'font-medium',
          description: 'text-sm opacity-90',
        },
      }}
      {...props}
    />
  );
};

export { Toaster }
