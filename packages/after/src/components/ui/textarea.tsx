import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textareaVariants = cva(
  [
    'flex w-full',
    'min-h-[6em]',
    'px-[--spacing-textarea-x] py-[--spacing-textarea-y]',
    'text-lg font-sans font-normal',
    'leading-[--line-height-textarea]',
    'text-input',
    'rounded-[--radius-textarea]',
    'border-[length:--border-width-default] border-solid border-border-input',
    'bg-background',
    'resize-y',
    'transition-colors duration-200',
    'outline-none',
    'focus-visible:border-[length:--border-width-focus] focus-visible:border-border-focus',
    'focus-visible:px-[--spacing-textarea-x-focus] focus-visible:py-[--spacing-textarea-y-focus]',
    'disabled:cursor-not-allowed disabled:bg-state-muted',
  ],
  {
    variants: {
      error: {
        true: 'border-feedback-error focus-visible:border-feedback-error',
        false: '',
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ error, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
