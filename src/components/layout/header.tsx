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
            ? "bg-[#0E1210]/90 backdrop-blur-xl border-b border-[#C9A96E]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-4" 
            : theme === "light" 
              ? "bg-[#0E1210]/80 backdrop-blur-md border-b border-[#222B24] py-5"
              : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-7",
          className ? className : ""
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center group relative z-50">
            <div className="relative h-16 w-48 lg:h-20 lg:w-56 transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="Bungalow Stay Logo" 
                fill
                className="object-contain object-left brightness-0 invert drop-shadow-[0_2px_10px_rgba(201,169,110,0.3)] transition-all duration-500"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/80 hover:text-gold transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-6 relative z-50">
            <Link 
              href="/bungalows"
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/80 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Link>
            
            <Link 
              href="/bungalows" 
              className="hidden px-7 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 lg:block bg-gradient-to-r from-[#C9A96E] to-[#DFCAAB] text-[#080B09] hover:shadow-[0_0_25px_rgba(201,169,110,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Reserve Now
            </Link>

            {/* MOBILE MENU TOGGLE */}
            <button 
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white bg-white/5 backdrop-blur-md hover:border-gold hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className="fixed inset-0 z-40 bg-[#0E1210]/98 backdrop-blur-2xl pt-32 px-6 pb-12 flex flex-col lg:hidden overflow-y-auto"
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
                    className="text-3xl font-serif text-[#EDE8DE] hover:text-gold transition-colors block py-3 border-b border-white/10"
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
                className="w-full py-4 rounded-full bg-botanical text-white text-center text-xs font-bold uppercase tracking-widest flex items-center justify-center"
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
