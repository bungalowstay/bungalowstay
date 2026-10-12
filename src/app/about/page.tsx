"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { Play, ArrowRight, ShieldCheck, Compass, Users, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <Header theme="light" />
      
      <main className="flex-1 pt-32 pb-24">
        
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 lg:px-12 mb-32 pt-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-gold" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold text-balance">
                  Our Philosophy
                </p>
              </div>
              <h1 className="font-serif text-5xl lg:text-[5.5rem] leading-[1.1] tracking-tight mb-8">
                Redefining <br/>
                <span className="italic font-light text-gold">Luxury Stays</span>
              </h1>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-10 max-w-lg font-light text-pretty">
                Bungalow Stay was born from a simple belief: the best travel memories are made in spaces that feel both extraordinary and entirely your own. We curate India's finest independent homes for travelers who expect impeccable design and intuitive service.
              </p>
              <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.15em] text-charcoal hover:text-gold transition-colors group">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-beige group-hover:border-gold transition-colors">
                  <Play className="h-3.5 w-3.5 fill-current ml-1" />
                </span>
                Watch Our Journey
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 w-full aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-float"
            >
              <Image 
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop" 
                alt="Founders at a luxury bungalow" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="py-16 bg-forest text-ivory border-y border-gold/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 divide-x divide-white/10">
              {[
                { label: "Curated Homes", value: "250+" },
                { label: "Happy Guests", value: "50,000+" },
                { label: "Destinations", value: "45+" },
                { label: "Average Rating", value: "4.9/5" },
              ].map((stat, i) => (
                <div key={i} className="text-center px-4">
                  <p className="font-serif text-4xl lg:text-5xl text-gold mb-2">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR VALUES */}
        <section className="bg-cream py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-beige/30 rounded-l-[100px] -mr-20" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-24 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-gold" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">The Standard</p>
                <div className="h-[1px] w-8 bg-gold" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6 text-charcoal">The Bungalow Stay Promise</h2>
              <p className="text-charcoal/60 leading-relaxed font-light text-lg">Every property in our collection is rigorously inspected against our unyielding 150-point luxury standard.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                { title: "Design & Architecture", desc: "From heritage restorations to modern architectural marvels, every stay is a visual masterpiece.", icon: Compass, num: "01" },
                { title: "Impeccable Service", desc: "Our dedicated house staff, private chefs, and concierge team anticipate your needs.", icon: Users, num: "02" },
                { title: "Absolute Privacy", desc: "Your own private oasis. No shared lobbies, no crowded pools. Just perfect seclusion.", icon: ShieldCheck, num: "03" },
                { title: "Hotel-Grade Quality", desc: "Crisp 400-thread count linens, premium amenities, and immaculate hygiene standards.", icon: Sparkles, num: "04" },
              ].map((val, i) => (
                <div key={i} className="bg-white p-10 rounded-[2rem] shadow-soft hover:shadow-float transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 text-[120px] font-serif text-cream leading-none group-hover:text-beige transition-colors select-none z-0">
                    {val.num}
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full border border-gold/30 bg-ivory flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-ivory transition-colors">
                      <val.icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <h3 className="font-serif text-2xl mb-4 text-charcoal">{val.title}</h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed font-light">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-ivory">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
            <h2 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8 text-balance">
              Experience the difference for yourself.
            </h2>
            <Link 
              href="/bungalows" 
              className="inline-flex items-center gap-3 bg-botanical text-ivory px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-forest hover:shadow-glow transition-all duration-500"
            >
              Explore Our Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
