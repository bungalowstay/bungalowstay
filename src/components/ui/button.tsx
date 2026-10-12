import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "primary" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-charcoal disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-charcoal text-ivory hover:bg-charcoal/90": variant === "default",
            "bg-bronze text-ivory hover:bg-bronze/90": variant === "primary",
            "bg-forest text-ivory hover:bg-forest/90": variant === "secondary",
            "border border-charcoal bg-transparent hover:bg-charcoal hover:text-ivory": variant === "outline",
            "hover:bg-charcoal/10 hover:text-charcoal": variant === "ghost",
            "text-charcoal underline-offset-4 hover:underline": variant === "link",
            
            "h-10 px-6 py-2": size === "default",
            "h-8 rounded-md px-3 text-xs": size === "sm",
            "h-12 rounded-md px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
