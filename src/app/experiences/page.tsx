"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function ExperiencesPage() {
  const experiences = [
    { title: "Heritage Estates", sub: "Step back in time in meticulously restored colonial bungalows.", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop" },
    { title: "Private Pool Retreats", sub: "Uninterrupted aquatic luxury, exclusively yours.", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop" },
    { title: "Wilderness Lodges", sub: "Immersive nature experiences far from the city.", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop" },
    { title: "Celebration Homes", sub: "Grand spaces designed for unforgettable gatherings.", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop" },
    { title: "Pet-Friendly Escapes", sub: "Because luxury is better when shared with your furry friends.", img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1200&auto=format&fit=crop" }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#0A0D0B] text-[#EDE8DE]">
      <Header theme="light" />
      
      <main className="flex-1 pt-32 pb-24">
        
        {/* HEADER SECTION */}
        <section className="container mx-auto px-6 lg:px-12 mb-20 pt-8 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">The Collections</p>
              <div className="h-[1px] w-12 bg-gold" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 tracking-tight">
              Journeys by Design
            </h1>
            <p className="text-[#EDE8DE]/70 text-lg md:text-xl font-light leading-relaxed text-balance">
              Whether seeking absolute solitude, architectural brilliance, or spaces for grand celebrations, find the perfect canvas for your next escape.
            </p>
          </motion.div>
        </section>

        {/* EXPERIENCES LISTING */}
        <section className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="flex flex-col gap-12 lg:gap-20">
            {experiences.map((exp, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                key={i} 
                className={`flex flex-col lg:flex-row gap-10 items-center p-8 lg:p-10 rounded-[2.5rem] bg-[#141A16]/80 border border-white/5 hover:border-gold/30 transition-all duration-500 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <Link href={`/experiences/${exp.title.toLowerCase().replace(/ /g, '-')}`} className="w-full lg:w-3/5 group relative">
                  <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                    <Image 
                      src={exp.img} 
                      alt={exp.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                </Link>

                {/* Content */}
                <div className={`w-full lg:w-2/5 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:pl-0 lg:pr-6' : 'lg:pl-6 lg:pr-0'}`}>
                  <div className="w-12 h-12 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center text-gold mb-8">
                    <Star className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">{exp.title}</h2>
                  <p className="text-[#EDE8DE]/70 text-lg font-light leading-relaxed mb-10 text-pretty">
                    {exp.sub}
                  </p>
                  <Link 
                    href={`/experiences/${exp.title.toLowerCase().replace(/ /g, '-')}`} 
                    className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.15em] text-gold hover:text-white transition-colors group"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 group-hover:border-gold group-hover:bg-gold group-hover:text-[#080B09] transition-all">
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                    View Collection
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
