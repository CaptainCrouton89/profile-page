import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full min-w-0 border-[var(--border-width)] border-solid border-[var(--color-black)] bg-[var(--color-surface)] p-[var(--space-md)] text-[var(--color-white)] shadow-[var(--shadow-md)] transition-all duration-150 ease outline-none",
        "rounded-[var(--border-radius)]",
        "font-[family:var(--font-primary)] text-[var(--font-size-base)]",
        "placeholder:text-[var(--color-gray-mid)]",
        "focus:border-[var(--color-primary)] focus:shadow-[var(--shadow-orange)]",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white",
        "selection:bg-primary selection:text-primary-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Input }
