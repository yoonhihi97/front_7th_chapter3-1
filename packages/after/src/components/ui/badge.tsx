import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center font-bold font-sans leading-none whitespace-nowrap rounded-[3px]',
  {
    variants: {
      variant: {
        primary: 'bg-action-primary text-action-primary-foreground',
        secondary: 'bg-badge-secondary text-badge-secondary-foreground',
        success: 'bg-feedback-success text-feedback-success-foreground',
        destructive: 'bg-feedback-error text-feedback-error-foreground',
        warning: 'bg-feedback-warning text-feedback-warning-foreground',
        info: 'bg-feedback-info text-feedback-info-foreground',
      },
      size: {
        sm: 'px-1 text-2xs h-4',
        md: 'px-2 text-xs h-5',
        lg: 'px-2.5 text-sm h-6',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
