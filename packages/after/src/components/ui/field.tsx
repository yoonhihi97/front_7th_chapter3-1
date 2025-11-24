import * as React from 'react';

import { cn } from '@/lib/utils';

// Field Container
interface FieldProps {
  children: React.ReactNode;
  className?: string;
}

const Field = ({ children, className }: FieldProps) => (
  <div className={cn('grid gap-1.5', className)}>{children}</div>
);

// Field Description (Helper text)
interface FieldDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  error?: boolean;
}

const FieldDescription = React.forwardRef<HTMLParagraphElement, FieldDescriptionProps>(
  ({ className, error, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-xs text-text-muted', error && 'text-feedback-error', className)}
      role={error ? 'alert' : undefined}
      {...props}
    />
  )
);
FieldDescription.displayName = 'FieldDescription';

// Field Message (Error message)
const FieldMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    if (!children) return null;

    return (
      <p ref={ref} className={cn('text-xs text-feedback-error', className)} role="alert" {...props}>
        {children}
      </p>
    );
  }
);
FieldMessage.displayName = 'FieldMessage';

export { Field, FieldDescription, FieldMessage };
