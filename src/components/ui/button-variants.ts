import { cva, type VariantProps } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-charcoal disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-charcoal text-ivory hover:bg-charcoal/90",
        primary: "bg-bronze text-ivory hover:bg-bronze/90",
        secondary: "bg-forest text-ivory hover:bg-forest/90",
        outline: "border border-charcoal bg-transparent hover:bg-charcoal hover:text-ivory",
        ghost: "hover:bg-charcoal/10 hover:text-charcoal",
        link: "text-charcoal underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
