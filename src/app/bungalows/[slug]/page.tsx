"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
}

export default function PropertyDetailPage() {
  const [activeSection, setActiveSection] = useState("overview")
  
  // Handle sticky nav visibility
  const [showSubNav, setShowSubNav] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setShowSubNav(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#0A0D0B] text-charcoal selection:bg-gold selection:text-forest">
      {/* Absolute header for cinematic gallery hero */}
      <Header className="absolute top-0 w-full z-50 bg-transparent border-none text-white [&_a]:text-white [&_span]:text-white" />
      
      {/* Sticky Sub-Navigation (Ultra-Premium Detail) */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: showSubNav ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#0E1210]/95 backdrop-blur-xl border-b border-white/10 hidden md:block pt-4 shadow-2xl"
      >
        <div className="container mx-auto px-12 flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <span className="font-serif text-xl text-white">The Glasshouse</span>
            <div className="h-4 w-px bg-white/20" />
            <nav className="flex gap-6">
              {['Overview', 'Amenities', 'Spaces', 'Host'].map(item => (
                <button 
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-[10px] font-bold uppercase tracking-[0.15em] transition-colors ${activeSection === item.toLowerCase() ? 'text-gold border-b-2 border-gold pb-1' : 'text-white/60 hover:text-white'}`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-serif text-lg text-white">₹25,000 <span className="text-sm font-sans text-white/50">/ night</span></span>
            <Link href="/checkout" className="bg-gradient-to-r from-gold to-gold-light text-forest font-semibold px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] rounded-full hover:shadow-[0_0_25px_rgba(201,169,110,0.5)] transition-all">
              Reserve
            </Link>
          </div>
        </div>
      </motion.div>

      <main className="flex-1 pb-32">
        {/* 01 — HERO GALLERY (Editorial Mosaic) */}
        <section className="relative h-[90svh] min-h-[700px] w-full grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 p-1 md:p-2 bg-charcoal">
          <div className="relative md:col-span-2 md:row-span-2 h-full w-full overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop" 
              alt="The Glasshouse Exterior" 
              fill 
              className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
              priority
            />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
          </div>
          
          <div className="hidden md:block relative h-full w-full overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
              alt="Pool" 
              fill 
              className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
            />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
          </div>
          
          <div className="hidden md:block relative h-full w-full overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop" 
              alt="Living Room" 
              fill 
              className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
            />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
          </div>

          <div className="hidden md:block relative h-full w-full overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop" 
              alt="Bedroom" 
              fill 
              className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
            />
          </div>

          <div className="hidden md:block relative h-full w-full overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
              alt="Bathroom" 
              fill 
              className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-transparent" />
            <button className="absolute bottom-6 right-6 z-20 bg-ivory/90 backdrop-blur-md px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal hover:bg-white transition-colors">
              View Collection
            </button>
          </div>
        </section>

        {/* 02 — PROPERTY INFO & BOOKING WIDGET */}
        <div className="container mx-auto px-6 lg:px-12 pt-16 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 xl:gap-32">
            
            {/* Main Content Column */}
            <div className="space-y-24">
              
              {/* Title & Basics */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border-b border-white/10 pb-16">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-4">Private Villa</p>
                    <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">The Glasshouse</h1>
                    <p className="text-lg text-white/70 font-serif italic">Lonavala, Maharashtra</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-x-12 gap-y-6 text-[11px] font-bold tracking-[0.1em] text-gold uppercase">
                  <span>12 Guests</span>
                  <span>4 Bedrooms</span>
                  <span>5 Beds</span>
                  <span>5 Baths</span>
                  <span>Private Pool</span>
                </div>
              </motion.div>

              {/* The Story */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="font-serif text-3xl mb-8 text-white">The Architecture</h2>
                <div className="prose prose-lg text-charcoal/80 font-sans leading-[1.8] max-w-3xl font-light">
                  <p>
                    Set above the quiet green folds of the Western Ghats, the house opens onto a private terrace where mornings begin slowly. The Glasshouse is a masterclass in tropical modernism, blending raw concrete, warm local timber, and vast expanses of glass to erase the boundary between indoors and the surrounding rainforest.
                  </p>
                  <p className="mt-6">
                    Designed for ultimate privacy, the property features a 40-foot infinity pool that seemingly drops into the valley below. The central courtyard invites natural cross-ventilation, ensuring the home breathes with the mountain air. Every corner has been curated with bespoke mid-century furniture and artisanal local ceramics.
                  </p>
                </div>
              </motion.div>

              {/* Spaces / Rooms Gallery */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border-t border-white/10 pt-20">
                <h2 className="font-serif text-3xl mb-12 text-white">The Spaces</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-stone">
                      <Image src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop" alt="Master Suite" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
                    </div>
                    <h4 className="font-serif text-xl mb-1">Master Suite</h4>
                    <p className="text-sm text-charcoal/50">King Bed · En-suite · Valley View</p>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-stone">
                      <Image src="https://images.unsplash.com/photo-1598928506311-c55dd77b5a5c?q=80&w=2070&auto=format&fit=crop" alt="Guest Suite" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
                    </div>
                    <h4 className="font-serif text-xl mb-1">Guest Suite One</h4>
                    <p className="text-sm text-charcoal/50">Queen Bed · En-suite · Garden Access</p>
                  </div>
                </div>
              </motion.div>

              {/* Meet the Host */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border-y border-white/10 py-20 my-20">
                <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                  <div className="w-32 h-32 rounded-full overflow-hidden relative shrink-0 border-2 border-gold/40">
                    <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Host" fill className="object-cover" />
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl mb-4 text-white">Hosted by Elena</h2>
                    <p className="text-sm text-gold uppercase tracking-widest font-bold mb-6">Superhost · 5 Years Hosting</p>
                    <p className="text-charcoal/80 leading-relaxed max-w-2xl font-light">
                      "I built The Glasshouse as a personal sanctuary away from the chaos of Mumbai. My team and I are dedicated to ensuring your stay is completely frictionless, offering absolute privacy alongside anticipatory service. We can arrange private chefs, yoga instructors, or guided treks upon request."
                    </p>
                    <button className="mt-8 border border-gold/40 px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-forest transition-colors rounded-full">
                      Contact Host
                    </button>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Sticky Booking Panel (Ultra-Premium Dark Glass) */}
            <div className="relative hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}
                className="sticky top-40 bg-[#141A16] border border-white/10 rounded-3xl p-10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)]"
              >
                <div className="flex justify-between items-end mb-10 border-b border-white/10 pb-8">
                  <div>
                    <span className="font-serif text-4xl text-white">₹25,000</span>
                    <span className="text-white/40 ml-2 text-sm tracking-wide">/ night</span>
                  </div>
                </div>

                <div className="border border-white/10 rounded-2xl mb-8 bg-[#0E1210]/60 overflow-hidden">
                  <div className="flex border-b border-white/10">
                    <div className="flex-1 p-4 border-r border-white/10 cursor-pointer hover:bg-white/5 transition-colors">
                      <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-gold mb-2">Check-in</label>
                      <div className="text-sm text-white">Add date</div>
                    </div>
                    <div className="flex-1 p-4 cursor-pointer hover:bg-white/5 transition-colors">
                      <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-gold mb-2">Check-out</label>
                      <div className="text-sm text-white">Add date</div>
                    </div>
                  </div>
                  <div className="p-4 cursor-pointer hover:bg-white/5 transition-colors">
                    <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-gold mb-2">Guests</label>
                    <div className="text-sm text-white">2 Guests</div>
                  </div>
                </div>

                <Link href="/checkout" className="flex w-full items-center justify-center bg-gradient-to-r from-gold to-gold-light py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-forest rounded-full hover:shadow-[0_0_30px_rgba(201,169,110,0.6)] transition-all">
                  Reserve
                </Link>
                <p className="text-center text-xs text-white/40 mt-6 font-serif italic">You won't be charged yet</p>

              </motion.div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
