import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "bg-(--card-bg) text-(--color-text-primary) flex flex-col gap-6 rounded-xl py-6 shadow-sm",
  {
    variants: {
      border: {
        true: "border border-(--card-border)",
        false: "",
      },
      stat: {
        info: "bg-blue-50 border border-blue-300 rounded-[var(--radius)] shadow-none gap-0 py-0",
        success: "bg-green-50 border border-green-400 rounded-[var(--radius)] shadow-none gap-0 py-0",
        warning: "bg-orange-50 border border-orange-300 rounded-[var(--radius)] shadow-none gap-0 py-0",
        error: "bg-red-50 border border-red-300 rounded-[var(--radius)] shadow-none gap-0 py-0",
        neutral: "bg-gray-100 border border-gray-400 rounded-[var(--radius)] shadow-none gap-0 py-0",
      },
    },
    defaultVariants: {
      border: false,
    },
  }
)

export interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

function Card({ className, stat, border, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ stat, border }), className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
