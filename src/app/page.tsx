"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MapPin, Calendar, Users, Search, Star, Heart, ArrowRight, Play, ChevronRight, ChevronLeft, ShieldCheck, Award, Sparkles, Compass } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAF7] text-[#1C2921] selection:bg-gold selection:text-[#080B09]">
      <Header />
      
      <main className="flex-1" ref={containerRef}>
        
        {/* ==================== 01: CINEMATIC HERO ==================== */}
        <section className="relative h-screen min-h-[820px] w-full overflow-hidden flex items-center justify-center pt-20">
          <motion.div 
            style={{ y: yHero, opacity: opacityHero }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2560&auto=format&fit=crop"
              alt="Luxury private villa pool"
              fill
              className="object-cover animate-slow-pan"
              priority
            />
            {/* Luminous greenish-white luxury overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAF7]/90 via-[#F8FAF7]/60 to-[#F8FAF7]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAF7]/85 via-[#F8FAF7]/40 to-transparent" />
          </motion.div>

          <div className="container relative z-10 mx-auto px-6 lg:px-12 h-full flex flex-col justify-center pb-28">
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-4xl pt-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-[#244833]" />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#244833]">
                  The Art of Escapism
                </p>
              </div>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] leading-[0.95] tracking-tight text-[#1C2921] mb-8 text-balance">
                Stays That <br />
                <span className="italic font-normal text-[#244833]">Transcend</span> Time
              </h1>
              <p className="text-lg md:text-xl text-[#1C2921]/80 leading-relaxed max-w-xl font-normal mb-12 text-pretty">
                Discover India's most extraordinary architectural masterworks and private sanctuaries. Curated for the discerning traveler.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <Link 
                  href="/bungalows" 
                  className="bg-gradient-to-r from-[#244833] to-[#1A3626] text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.15em] shadow-[0_10px_30px_rgba(36,72,51,0.25)] hover:shadow-[0_15px_40px_rgba(36,72,51,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 group"
                >
                  Explore Collection 
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <Link 
                  href="/experiences" 
                  className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.15em] text-[#1C2921] hover:text-[#244833] transition-colors group"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#244833]/25 bg-white shadow-sm group-hover:border-[#244833] group-hover:bg-[#244833]/10 transition-all duration-300">
                    <Play className="h-4 w-4 fill-current ml-1 text-[#244833]" />
                  </span>
                  View Curated Films
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== 02: INTELLIGENT SEARCH (Greenish-White Glass Panel) ==================== */}
        <div className="container mx-auto px-6 lg:px-12 relative z-30 -mt-20 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_rgba(28,41,33,0.12)] border border-[#244833]/15 p-3 flex flex-col lg:flex-row items-center divide-y lg:divide-y-0 lg:divide-x divide-[#E2EAE3]"
          >
            <div className="flex-1 p-5 px-8 w-full flex items-center gap-5 cursor-pointer hover:bg-[#F8FAF7] rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none transition-colors group">
              <div className="w-11 h-11 rounded-full bg-[#ECF2ED] border border-[#244833]/15 flex items-center justify-center group-hover:border-[#244833] group-hover:bg-[#244833]/10 transition-colors">
                <MapPin className="w-5 h-5 text-[#244833]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#4E6B56] mb-1">Destination</p>
                <p className="text-sm font-semibold text-[#1C2921]">Where to?</p>
              </div>
            </div>
            <div className="flex-1 p-5 px-8 w-full flex items-center gap-5 cursor-pointer hover:bg-[#F8FAF7] transition-colors group">
              <div className="w-11 h-11 rounded-full bg-[#ECF2ED] border border-[#244833]/15 flex items-center justify-center group-hover:border-[#244833] group-hover:bg-[#244833]/10 transition-colors">
                <Calendar className="w-5 h-5 text-[#244833]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#4E6B56] mb-1">Check In</p>
                <p className="text-sm font-semibold text-[#1C2921]">Add dates</p>
              </div>
            </div>
            <div className="flex-1 p-5 px-8 w-full flex items-center gap-5 cursor-pointer hover:bg-[#F8FAF7] transition-colors group">
              <div className="w-11 h-11 rounded-full bg-[#ECF2ED] border border-[#244833]/15 flex items-center justify-center group-hover:border-[#244833] group-hover:bg-[#244833]/10 transition-colors">
                <Users className="w-5 h-5 text-[#244833]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#4E6B56] mb-1">Guests</p>
                <p className="text-sm font-semibold text-[#1C2921]">Add guests</p>
              </div>
            </div>
            <div className="p-3 w-full lg:w-auto">
              <Link 
                href="/bungalows"
                className="w-full lg:w-auto bg-gradient-to-r from-[#244833] to-[#1A3626] text-white px-10 py-5 rounded-2xl text-xs font-bold uppercase tracking-[0.15em] shadow-[0_8px_25px_rgba(36,72,51,0.3)] hover:shadow-[0_12px_35px_rgba(36,72,51,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" /> Search
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ==================== 03: THE BUNGALOW STANDARD (Greenish White Editorial Trust) ==================== */}
        <section className="py-28 bg-[#F0F5F1] relative overflow-hidden border-y border-[#E2EAE3]">
          {/* Subtle botanical ambient glow */}
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#244833]/5 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-8 bg-[#244833]" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#244833]">The Bungalow Standard</p>
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#1C2921] leading-[1.2] mb-8 text-balance">
                  Redefining the architecture of luxury hospitality.
                </h2>
                <p className="text-[#1C2921]/80 leading-relaxed mb-12 text-pretty text-lg font-light">
                  We don't just list properties; we curate experiences. Every home in our collection undergoes a rigorous 150-point inspection to ensure absolute perfection in design, comfort, and service.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                  {[
                    { title: "Meticulously Curated", desc: "Only 1 in 20 homes make the cut.", icon: ShieldCheck },
                    { title: "Concierge Service", desc: "Dedicated care from arrival to departure.", icon: Award },
                    { title: "Architectural Gems", desc: "Homes with exceptional design narratives.", icon: Compass },
                    { title: "Immaculate Standards", desc: "Hotel-grade linens and pristine spaces.", icon: Sparkles },
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      className="flex flex-col gap-4 p-5 rounded-2xl bg-white border border-[#E2EAE3] shadow-sm hover:border-[#244833]/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-full border border-[#244833]/20 bg-[#ECF2ED] flex items-center justify-center text-[#244833]">
                        <item.icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-[#1C2921] text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-[#1C2921]/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(28,41,33,0.12)] border border-[#E2EAE3] group">
                  <Image 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" 
                    alt="Interior architecture"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Stat Card (Greenish-White Glass) */}
                  <div className="absolute bottom-10 left-6 lg:left-10 bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-[#E2EAE3] shadow-xl max-w-[240px]">
                    <div className="flex items-center gap-3 mb-2">
                      <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                      <span className="font-serif text-2xl font-bold text-[#1C2921]">4.9/5</span>
                    </div>
                    <p className="text-xs text-[#1C2921]/70 font-medium">Average guest rating across 10,000+ stays.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 04: FEATURED MASTERWORKS ==================== */}
        <section className="py-32 bg-[#F8FAF7] relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-8 bg-[#244833]" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#244833]">Exclusive Collection</p>
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#1C2921]">Architectural Masterworks</h2>
              </div>
              <Link href="/bungalows" className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#244833] hover:text-[#1A3626] transition-colors flex items-center gap-2 group">
                Explore Collection <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                { name: "The Glasshouse", loc: "Lonavala, Maharashtra", price: "24,000", guests: 8, rating: 4.9, tags: ["Private Pool", "Forest View"], img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop" },
                { name: "Villa Serene", loc: "Assagao, Goa", price: "35,000", guests: 6, rating: 4.8, tags: ["Heritage", "Chef Included"], img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" },
                { name: "The Cliff Estate", loc: "Karjat, Maharashtra", price: "18,000", guests: 10, rating: 5.0, tags: ["Valley View", "Cinema Room"], img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop" },
              ].map((prop, i) => (
                <Link href="/bungalows/the-glasshouse" key={i} className="group cursor-pointer block bg-white rounded-3xl p-3 border border-[#E2EAE3] shadow-soft hover:shadow-xl hover:border-[#244833]/30 transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-5 shadow-sm group-hover:shadow-md transition-all">
                    <Image src={prop.img} alt={prop.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    <button 
                      type="button"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#1C2921] hover:bg-[#244833] hover:text-white transition-all z-10 shadow-sm"
                    >
                      <Heart className="w-4 h-4 stroke-[2]" />
                    </button>

                    <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2">
                      {prop.tags.map(tag => (
                        <span key={tag} className="bg-white/90 backdrop-blur-md text-[#244833] text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full font-bold shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-2xl text-[#1C2921] group-hover:text-[#244833] transition-colors">{prop.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span className="text-xs font-bold text-[#1C2921]">{prop.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#1C2921]/70 mb-4 flex items-center gap-1.5 font-medium"><MapPin className="w-3.5 h-3.5 text-[#244833]" /> {prop.loc} • {prop.guests} Guests</p>
                    
                    <div className="flex items-end justify-between pt-4 border-t border-[#E2EAE3]">
                      <p className="font-serif text-lg font-bold text-[#1C2921]">₹{prop.price} <span className="text-[10px] font-sans font-normal text-[#1C2921]/60 tracking-widest uppercase">/ Night</span></p>
                      <span className="text-xs font-bold text-[#244833] flex items-center gap-1 group-hover:translate-x-1 transition-transform">Explore <ArrowRight className="w-3.5 h-3.5" /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 05: CURATED EXPERIENCES (Layered Grid) ==================== */}
        <section className="py-32 bg-[#F0F5F1] text-[#1C2921] relative border-y border-[#E2EAE3]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-8 bg-[#244833]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#244833]">Curated For You</p>
                <div className="h-[2px] w-8 bg-[#244833]" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-[#1C2921] mb-6">Journeys by Design</h2>
              <p className="text-[#1C2921]/70 font-light text-lg">Whether seeking absolute solitude or spaces for grand celebrations, find the perfect canvas for your next escape.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:h-[600px]">
              
              {/* Large Feature */}
              <Link href="/experiences/heritage-estates" className="lg:col-span-7 relative rounded-3xl overflow-hidden group h-[400px] lg:h-full border border-[#E2EAE3] shadow-md hover:shadow-xl hover:border-[#244833]/30 transition-all">
                <Image src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1600&auto=format&fit=crop" alt="Heritage" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-200 mb-3 block">Signature Collection</span>
                  <h3 className="font-serif text-4xl text-white mb-3">Heritage Estates</h3>
                  <p className="text-white/80 text-sm max-w-md">Step back in time in meticulously restored colonial bungalows and ancestral homes.</p>
                </div>
              </Link>

              <div className="lg:col-span-5 flex flex-col gap-6 h-full">
                {/* Small Feature 1 */}
                <Link href="/experiences/wilderness-lodges" className="relative rounded-3xl overflow-hidden group flex-1 min-h-[300px] border border-[#E2EAE3] shadow-md hover:shadow-xl hover:border-[#244833]/30 transition-all">
                  <Image src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop" alt="Nature" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="font-serif text-2xl text-white mb-2">Wilderness Lodges</h3>
                    <p className="text-white/80 text-xs">Immersive nature retreats far from the city.</p>
                  </div>
                </Link>

                {/* Small Feature 2 */}
                <Link href="/experiences/private-pool-retreats" className="relative rounded-3xl overflow-hidden group flex-1 min-h-[300px] border border-[#E2EAE3] shadow-md hover:shadow-xl hover:border-[#244833]/30 transition-all">
                  <Image src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop" alt="Pools" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="font-serif text-2xl text-white mb-2">Private Pool Retreats</h3>
                    <p className="text-white/80 text-xs">Uninterrupted aquatic luxury.</p>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== 06: TESTIMONIAL / EDITORIAL ==================== */}
        <section className="py-32 bg-[#F8FAF7] relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center p-12 lg:p-16 rounded-[2.5rem] bg-white border border-[#E2EAE3] shadow-xl">
              <Star className="w-8 h-8 text-amber-500 fill-amber-500 mx-auto mb-10" />
              <h3 className="font-serif text-3xl md:text-5xl text-[#1C2921] leading-[1.3] mb-12 text-balance">
                "The attention to detail was magnificent. From the architecture to the private chef, every moment felt curated specifically for us. This is what true luxury feels like."
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#244833]">
                — Sarah & James, Stayed at The Glasshouse
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
