"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header({ className, theme = "transparent" }: { className?: string, theme?: "transparent" | "light" }) {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const isDarkText = scrolled || theme === "light"

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)

      if (currentScrollY > lastScrollY && currentScrollY > 400) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Stop body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Bungalows", href: "/bungalows" },
    { name: "Destinations", href: "/destinations" },
    { name: "Experiences", href: "/experiences" },
    { name: "Journal", href: "/guides" },
    { name: "Our Story", href: "/about" },
  ]

  return (
    <>
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled 
            ? "bg-[#EDF4ED]/95 backdrop-blur-xl border-b border-[#244833]/15 shadow-[0_8px_30px_rgba(28,41,33,0.08)] py-3" 
            : "bg-[#EDF4ED]/90 backdrop-blur-md border-b border-[#D5E5D7] py-4 shadow-sm",
          className ? className : ""
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* LOGO (Only Pure Logo Image, Strictly Highlighted & Visible) */}
          <Link href="/" className="flex items-center group relative z-50 flex-shrink-0">
            <div className="flex items-center justify-center bg-white/95 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl border border-[#244833]/20 shadow-[0_4px_16px_rgba(36,72,51,0.08)] transition-all duration-300 group-hover:shadow-[0_8px_25px_rgba(36,72,51,0.18)] group-hover:scale-105 group-hover:border-[#244833]/40">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 flex-shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="Bungalow Stay Logo" 
                  fill
                  className="object-contain drop-shadow-sm"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION (Centered, Balanced Spacing, No Wrap) */}
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex mx-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-[11px] xl:text-[12px] uppercase tracking-[0.18em] font-semibold text-[#1C2921] hover:text-[#244833] transition-colors relative group py-1 whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#244833] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* ACTIONS (Properly Aligned & Flex-Shrink-0) */}
          <div className="flex items-center gap-3 sm:gap-4 relative z-50 flex-shrink-0">
            <Link 
              href="/bungalows"
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-[#244833]/25 text-[#1C2921] hover:border-[#244833] hover:text-[#244833] hover:bg-[#244833]/10 transition-all duration-300 shadow-sm"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Link>
            
            <Link 
              href="/bungalows" 
              className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 xl:px-7 xl:py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 bg-gradient-to-r from-[#244833] to-[#1A3626] text-white shadow-[0_4px_14px_rgba(36,72,51,0.22)] hover:shadow-[0_8px_20px_rgba(36,72,51,0.35)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              Reserve Now
            </Link>

            {/* MOBILE MENU TOGGLE */}
            <button 
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#244833]/25 text-[#1C2921] bg-white/90 backdrop-blur-md hover:border-[#244833] transition-colors shadow-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#EDF4ED]/98 backdrop-blur-2xl pt-32 px-6 pb-12 flex flex-col lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif text-[#1C2921] hover:text-[#244833] transition-colors block py-3 border-b border-[#D5E5D7]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pt-12"
            >
              <Link 
                href="/bungalows" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-[#244833] text-white text-center text-xs font-bold uppercase tracking-widest flex items-center justify-center shadow-lg"
              >
                Reserve Your Stay
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
