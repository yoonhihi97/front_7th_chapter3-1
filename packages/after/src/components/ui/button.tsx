import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'inline-block',
    'font-sans',
    'font-normal',
    'leading-[1.5]',
    'rounded-[3px]',
    'cursor-pointer',
    'border border-solid',
    'whitespace-nowrap',
    'disabled:opacity-60',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-action-primary',
          'text-action-primary-foreground',
          'border-action-primary-border',
          'hover:bg-action-primary-hover',
        ],
        secondary: [
          'bg-action-secondary',
          'text-action-secondary-foreground',
          'border-action-secondary-border',
          'hover:bg-action-secondary-hover',
        ],
        destructive: [
          'bg-feedback-error',
          'text-feedback-error-foreground',
          'border-feedback-error-border',
          'hover:bg-feedback-error-hover',
        ],
        success: [
          'bg-feedback-success',
          'text-feedback-success-foreground',
          'border-feedback-success-border',
          'hover:bg-feedback-success-hover',
        ],
        outline: [
          'border-border-default',
          'bg-transparent',
          'text-foreground',
          'hover:bg-state-muted',
        ],
        ghost: [
          'bg-transparent',
          'text-foreground',
          'hover:bg-state-muted',
        ],
        link: [
          'bg-transparent',
          'text-action-primary',
          'border-transparent',
          'underline-offset-4',
          'hover:underline',
        ],
      },
      size: {
        sm: 'px-3 py-1.5 text-[13px]',
        md: 'px-5 py-2.5 text-[14px]',
        lg: 'px-6 py-3 text-[15px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size = 'md',
      asChild = false,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
