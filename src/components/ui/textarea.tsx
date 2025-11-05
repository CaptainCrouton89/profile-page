import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full min-h-[120px] resize-y border-[var(--border-width)] border-solid border-[var(--color-black)] bg-[var(--color-surface)] p-[var(--space-md)] text-[var(--color-white)] shadow-[var(--shadow-md)] transition-all duration-150 ease outline-none",
        "rounded-[var(--border-radius)]",
        "font-[family:var(--font-primary)] text-[var(--font-size-base)]",
        "placeholder:text-[var(--color-gray-mid)]",
        "focus:border-[var(--color-primary)] focus:shadow-[var(--shadow-orange)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
