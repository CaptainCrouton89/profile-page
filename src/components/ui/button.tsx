import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold uppercase tracking-[0.05em] border-[3px] border-black transition-all duration-150 ease disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none rounded-none",
  {
    variants: {
      variant: {
        default: "bg-[#FF6B00] text-black [&]:!text-black shadow-[6px_6px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_black] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none",
        destructive:
          "bg-destructive text-white shadow-[6px_6px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_black] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none",
        outline:
          "border bg-background shadow-[6px_6px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_black] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-white text-black shadow-[6px_6px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_black] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none",
        ghost:
          "bg-transparent text-white shadow-[6px_6px_0_#333333] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#333333] hover:bg-[#1A1A1A] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none",
        link: "text-primary underline-offset-4 hover:underline shadow-none",
      },
      size: {
        default: "h-auto px-8 py-4 text-base has-[>svg]:px-6",
        sm: "h-auto px-6 py-2 text-sm has-[>svg]:px-4 gap-1.5 shadow-[3px_3px_0_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_black] active:translate-x-[3px] active:translate-y-[3px]",
        lg: "h-auto px-12 py-6 text-lg has-[>svg]:px-8",
        icon: "size-9 p-0 shadow-[3px_3px_0_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_black] active:translate-x-[3px] active:translate-y-[3px]",
        "icon-sm": "size-8 p-0 shadow-[3px_3px_0_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_black] active:translate-x-[3px] active:translate-y-[3px]",
        "icon-lg": "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
