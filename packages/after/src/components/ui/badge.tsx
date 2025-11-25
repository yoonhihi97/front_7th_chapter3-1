import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center font-bold font-sans leading-none whitespace-nowrap',
  {
    variants: {
      variant: {
        primary: 'bg-(--badge-primary-bg) text-(--badge-primary-fg)',
        secondary: 'bg-(--badge-secondary-bg) text-(--badge-secondary-fg)',
        success: 'bg-(--badge-success-bg) text-(--badge-success-fg)',
        destructive: 'bg-(--badge-error-bg) text-(--badge-error-fg)',
        warning: 'bg-(--badge-warning-bg) text-(--badge-warning-fg)',
        info: 'bg-(--badge-info-bg) text-(--badge-info-fg)',
      },
      size: {
        sm: 'px-1 text-2xs h-4',
        md: 'px-2 text-xs h-5',
        lg: 'px-2.5 text-sm h-6',
      },
      pill: {
        true: 'rounded-full',
        false: 'rounded-[var(--radius)]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      pill: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, pill, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, pill, className }))}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
