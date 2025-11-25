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
    'rounded-[var(--radius)]',
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
          'bg-(--button-primary-bg)',
          'text-(--button-primary-fg)',
          'border-(--button-primary-border)',
          'hover:bg-(--button-primary-hover)',
        ],
        secondary: [
          'bg-(--button-secondary-bg)',
          'text-(--button-secondary-fg)',
          'border-(--button-secondary-border)',
          'hover:bg-(--button-secondary-hover)',
        ],
        destructive: [
          'bg-(--button-error-bg)',
          'text-(--button-error-fg)',
          'border-(--button-error-border)',
          'hover:bg-(--button-error-hover)',
        ],
        success: [
          'bg-(--button-success-bg)',
          'text-(--button-success-fg)',
          'border-(--button-success-border)',
          'hover:bg-(--button-success-hover)',
        ],
        outline: [
          'border-(--color-border-default)',
          'bg-transparent',
          'text-(--color-text-primary)',
          'hover:bg-neutral-100',
        ],
        ghost: [
          'bg-transparent',
          'text-(--color-text-primary)',
          'hover:bg-neutral-100',
        ],
        link: [
          'bg-transparent',
          'text-(--color-action-primary)',
          'border-transparent',
          'underline-offset-4',
          'hover:underline',
        ],
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-6 py-3 text-md',
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
