import * as React from 'react';

import { cn } from '@/lib/utils';

// Form Field Container
interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
}

const FormField = ({ children, className }: FormFieldProps) => (
  <div className={cn('grid gap-1.5', className)}>{children}</div>
);

// Form Description (Helper text)
interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  error?: boolean;
}

const FormDescription = React.forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ className, error, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-xs text-text-muted', error && 'text-feedback-error', className)}
      role={error ? 'alert' : undefined}
      {...props}
    />
  )
);
FormDescription.displayName = 'FormDescription';

// Form Message (Error message)
const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    if (!children) return null;

    return (
      <p ref={ref} className={cn('text-xs text-feedback-error', className)} role="alert" {...props}>
        {children}
      </p>
    );
  }
);
FormMessage.displayName = 'FormMessage';

export { FormField, FormDescription, FormMessage };
