import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-[var(--color-surface)] border-[3px] border-black", className)}
      style={{
        animation: 'pulse 1.5s ease-in-out infinite'
      }}
      {...props}
    />
  )
}

export { Skeleton }
