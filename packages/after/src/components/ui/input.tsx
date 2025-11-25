import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const inputVariants = cva(
  [
    'flex w-full',
    'px-2.5 py-2',
    'text-base font-sans',
    'text-(--input-fg)',
    'rounded-[var(--radius)]',
    'border border-solid border-(--input-border)',
    'bg-(--input-bg)',
    'transition-colors',
    'placeholder:text-(--input-placeholder)',
    'focus-visible:outline-none focus-visible:border-(--input-border-focus)',
    'disabled:cursor-not-allowed disabled:bg-(--input-disabled-bg) disabled:opacity-60',
  ],
  {
    variants: {
      error: {
        true: 'border-(--color-feedback-error) focus-visible:border-(--color-feedback-error)',
        false: '',
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ error, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input, inputVariants };
