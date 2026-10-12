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
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal selection:bg-gold selection:text-ivory">
      <Header />
      
      <main className="flex-1" ref={containerRef}>
        
        {/* ==================== 01: CINEMATIC HERO ==================== */}
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center pt-20">
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
            {/* Sophisticated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-ivory" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          </motion.div>

          <div className="container relative z-10 mx-auto px-6 lg:px-12 h-full flex flex-col justify-center pb-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-gold" />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light">
                  The Art of Escapism
                </p>
              </div>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] leading-[0.95] tracking-tight text-white mb-8 text-balance">
                Stays That <br />
                <span className="italic font-light text-gold-light">Transcend</span> Time
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl font-light mb-12 text-pretty">
                Discover India's most extraordinary architectural masterworks and private sanctuaries. Curated for the discerning traveler.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <Link 
                  href="/bungalows" 
                  className="bg-gold text-ivory px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-forest hover:shadow-glow transition-all duration-500 flex items-center gap-3 group"
                >
                  Explore Collection 
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.15em] text-white hover:text-gold-light transition-colors group">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 backdrop-blur-sm group-hover:border-gold-light transition-colors">
                    <Play className="h-4 w-4 fill-current ml-1" />
                  </span>
                  View Film
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== 02: INTELLIGENT SEARCH (Elevated) ==================== */}
        <div className="container mx-auto px-6 lg:px-12 relative z-30 -mt-24 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-float border border-white/40 p-3 flex flex-col lg:flex-row items-center divide-y lg:divide-y-0 lg:divide-x divide-beige"
          >
            <div className="flex-1 p-5 px-8 w-full flex items-center gap-5 cursor-pointer hover:bg-cream rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none transition-colors group">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center group-hover:bg-white transition-colors">
                <MapPin className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/50 mb-1">Destination</p>
                <p className="text-sm font-medium text-charcoal">Where to?</p>
              </div>
            </div>
            <div className="flex-1 p-5 px-8 w-full flex items-center gap-5 cursor-pointer hover:bg-cream transition-colors group">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center group-hover:bg-white transition-colors">
                <Calendar className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/50 mb-1">Check In</p>
                <p className="text-sm font-medium text-charcoal">Add dates</p>
              </div>
            </div>
            <div className="flex-1 p-5 px-8 w-full flex items-center gap-5 cursor-pointer hover:bg-cream transition-colors group">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center group-hover:bg-white transition-colors">
                <Users className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/50 mb-1">Guests</p>
                <p className="text-sm font-medium text-charcoal">Add guests</p>
              </div>
            </div>
            <div className="p-3 w-full lg:w-auto">
              <button className="w-full lg:w-auto bg-botanical text-white px-10 py-5 rounded-2xl text-xs font-bold uppercase tracking-[0.1em] hover:bg-forest transition-colors flex items-center justify-center gap-2 shadow-soft">
                <Search className="w-4 h-4" /> Search
              </button>
            </div>
          </motion.div>
        </div>

        {/* ==================== 03: THE BUNGALOW STANDARD (Editorial Trust) ==================== */}
        <section className="py-24 bg-cream relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-beige/30 rounded-l-[100px] -mr-20" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-8 bg-gold" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">The Bungalow Standard</p>
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-charcoal leading-[1.2] mb-8 text-balance">
                  Redefining the architecture of luxury hospitality.
                </h2>
                <p className="text-charcoal/70 leading-relaxed mb-12 text-pretty text-lg font-light">
                  We don't just list properties; we curate experiences. Every home in our collection undergoes a rigorous 150-point inspection to ensure absolute perfection in design, comfort, and service.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                  {[
                    { title: "Meticulously Curated", desc: "Only 1 in 20 homes make the cut.", icon: ShieldCheck },
                    { title: "Concierge Service", desc: "Dedicated care from arrival to departure.", icon: Award },
                    { title: "Architectural Gems", desc: "Homes with exceptional design narratives.", icon: Compass },
                    { title: "Immaculate Standards", desc: "Hotel-grade linens and pristine spaces.", icon: Sparkles },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                        <item.icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-charcoal text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-charcoal/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-deep">
                  <Image 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" 
                    alt="Interior architecture"
                    fill
                    className="object-cover"
                  />
                  {/* Floating Stat Card */}
                  <div className="absolute bottom-10 -left-10 lg:left-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-float max-w-[240px]">
                    <div className="flex items-center gap-3 mb-2">
                      <Star className="w-5 h-5 text-gold fill-gold" />
                      <span className="font-serif text-2xl text-charcoal">4.9/5</span>
                    </div>
                    <p className="text-xs text-charcoal/60 font-medium">Average guest rating across 10,000+ stays.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 04: FEATURED MASTERWORKS ==================== */}
        <section className="py-32 bg-ivory">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-8 bg-gold" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Exclusive Collection</p>
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-charcoal">Architectural Masterworks</h2>
              </div>
              <Link href="/bungalows" className="text-[11px] font-bold uppercase tracking-[0.15em] text-charcoal hover:text-gold transition-colors flex items-center gap-2 group">
                Explore Collection <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                { name: "The Glasshouse", loc: "Lonavala, Maharashtra", price: "24,000", guests: 8, rating: 4.9, tags: ["Private Pool", "Forest View"], img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop" },
                { name: "Villa Serene", loc: "Assagao, Goa", price: "35,000", guests: 6, rating: 4.8, tags: ["Heritage", "Chef Included"], img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" },
                { name: "The Cliff Estate", loc: "Karjat, Maharashtra", price: "18,000", guests: 10, rating: 5.0, tags: ["Valley View", "Cinema Room"], img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop" },
              ].map((prop, i) => (
                <Link href="/bungalows/the-glasshouse" key={i} className="group cursor-pointer block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 shadow-soft group-hover:shadow-float transition-all duration-500">
                    <Image src={prop.img} alt={prop.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/10 opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                    
                    <button 
                      type="button"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all z-10"
                    >
                      <Heart className="w-5 h-5 stroke-[1.5]" />
                    </button>

                    <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap gap-2">
                      {prop.tags.map(tag => (
                        <span key={tag} className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-2xl text-charcoal group-hover:text-gold transition-colors">{prop.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                        <span className="text-xs font-bold">{prop.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-charcoal/60 mb-4 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {prop.loc} • {prop.guests} Guests</p>
                    
                    <div className="flex items-end justify-between pt-4 border-t border-beige">
                      <p className="font-serif text-lg text-charcoal">₹{prop.price} <span className="text-[10px] font-sans font-normal text-charcoal/50 tracking-widest uppercase">/ Night</span></p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 05: CURATED EXPERIENCES (Layered Grid) ==================== */}
        <section className="py-32 bg-forest text-white relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-gold-light" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light">Curated For You</p>
                <div className="h-[1px] w-8 bg-gold-light" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">Journeys by Design</h2>
              <p className="text-white/70 font-light text-lg">Whether seeking absolute solitude or spaces for grand celebrations, find the perfect canvas for your next escape.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:h-[600px]">
              
              {/* Large Feature */}
              <Link href="/experiences/heritage" className="lg:col-span-7 relative rounded-3xl overflow-hidden group h-[400px] lg:h-full">
                <Image src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1600&auto=format&fit=crop" alt="Heritage" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3 block">Signature Collection</span>
                  <h3 className="font-serif text-4xl text-white mb-3">Heritage Estates</h3>
                  <p className="text-white/70 text-sm max-w-md">Step back in time in meticulously restored colonial bungalows and ancestral homes.</p>
                </div>
              </Link>

              <div className="lg:col-span-5 flex flex-col gap-6 h-full">
                {/* Small Feature 1 */}
                <Link href="/experiences/nature" className="relative rounded-3xl overflow-hidden group flex-1 min-h-[300px]">
                  <Image src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop" alt="Nature" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="font-serif text-2xl text-white mb-2">Nature Retreats</h3>
                    <p className="text-white/70 text-xs">Immersive wilderness experiences.</p>
                  </div>
                </Link>

                {/* Small Feature 2 */}
                <Link href="/experiences/pools" className="relative rounded-3xl overflow-hidden group flex-1 min-h-[300px]">
                  <Image src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop" alt="Pools" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="font-serif text-2xl text-white mb-2">Private Pool Villas</h3>
                    <p className="text-white/70 text-xs">Uninterrupted aquatic luxury.</p>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== 06: TESTIMONIAL / EDITORIAL ==================== */}
        <section className="py-32 bg-ivory">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <Star className="w-8 h-8 text-gold fill-gold mx-auto mb-10" />
              <h3 className="font-serif text-3xl md:text-5xl text-charcoal leading-[1.3] mb-12 text-balance">
                "The attention to detail was magnificent. From the architecture to the private chef, every moment felt curated specifically for us. This is what true luxury feels like."
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal/50">
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
