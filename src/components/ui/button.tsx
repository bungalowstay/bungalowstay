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
            "bg-gold text-forest font-semibold hover:bg-gold-light hover:shadow-[0_0_20px_rgba(201,169,110,0.4)] transition-all duration-300": variant === "default",
            "bg-botanical text-forest font-semibold hover:bg-gold-light transition-all duration-300": variant === "primary",
            "bg-white text-charcoal border border-beige hover:border-gold/50 transition-all duration-300": variant === "secondary",
            "border border-gold/40 text-charcoal bg-transparent hover:bg-gold/10 hover:border-gold transition-all duration-300": variant === "outline",
            "text-charcoal hover:bg-[#DFEDE1] transition-all duration-300": variant === "ghost",
            "text-gold underline-offset-4 hover:underline transition-colors": variant === "link",
            
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
