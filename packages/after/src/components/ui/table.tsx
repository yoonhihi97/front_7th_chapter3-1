import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div data-slot="table-container" className="overflow-x-auto">
      <table
        data-slot="table"
        className={cn(
          'w-full border-collapse font-sans text-sm bg-(--table-bg)',
          className
        )}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot="table-header"
      className={cn('bg-(--table-header-bg)', className)}
      {...props}
    />
  );
}

const tableBodyVariants = cva('', {
  variants: {
    striped: {
      true: '[&>tr:nth-child(even)]:bg-(--table-stripe-bg)',
      false: '',
    },
  },
  defaultVariants: {
    striped: false,
  },
});

export interface TableBodyProps
  extends React.ComponentProps<'tbody'>,
    VariantProps<typeof tableBodyVariants> {}

function TableBody({ className, striped, ...props }: TableBodyProps) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(tableBodyVariants({ striped }), className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        'bg-(--table-header-bg) border-t font-medium [&>tr]:last:border-b-0',
        className
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn('hover:bg-(--table-row-hover-bg)', className)}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'p-4 text-left font-medium text-xs text-(--table-header-fg) uppercase tracking-[0.03em] border-b-2 border-(--table-border-strong)',
        className
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'p-4 text-(--table-cell-fg) border-b border-(--table-border) [tr:last-child_&]:border-b-0',
        className
      )}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
