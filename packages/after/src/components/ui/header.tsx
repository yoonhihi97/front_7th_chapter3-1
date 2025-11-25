import * as React from "react"
import { cn } from "@/lib/utils"

function Header({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="header"
      className={cn(
        "sticky top-0",
        "bg-(--card-bg) border-b border-(--card-border)",
        "shadow-sm",
        className
      )}
      style={{ zIndex: 'var(--z-index-sticky)' } as React.CSSProperties}
      {...props}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            L
          </div>
          <div>
            <h1 className="text-lg font-bold text-(--color-text-primary) leading-none">
              Hanghae Company
            </h1>
            <p className="text-[11px] text-(--color-text-secondary) leading-none mt-0.5">
              Design System Migration Project
            </p>
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-sm font-semibold text-(--color-text-primary)">
              Demo User
            </div>
            <div className="text-xs text-(--color-text-secondary)">
              demo@example.com
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-semibold text-base">
            DU
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }
