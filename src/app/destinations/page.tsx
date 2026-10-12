"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function DestinationsPage() {
  const destinations = [
    { name: "Lonavala", count: "42+ Homes", desc: "Misty valleys and spectacular viewpoints in the Sahyadris.", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop" },
    { name: "Alibaug", count: "28+ Homes", desc: "Coastal luxury just a short ferry ride from Mumbai.", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop" },
    { name: "Goa", count: "35+ Homes", desc: "Sun, sand, and exceptional private villas.", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1200&auto=format&fit=crop" },
    { name: "Karjat", count: "26+ Homes", desc: "Verdant landscapes and peaceful river retreats.", img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop" },
    { name: "Mahabaleshwar", count: "18+ Homes", desc: "Strawberry fields and heritage hill-station charm.", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop" },
    { name: "Coorg", count: "14+ Homes", desc: "Coffee plantations and misty estate stays.", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop" },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
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
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">The Locations</p>
              <div className="h-[1px] w-12 bg-gold" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-8 tracking-tight">
              Our Destinations
            </h1>
            <p className="text-charcoal/70 text-lg md:text-xl font-light leading-relaxed text-balance">
              Discover India's most breathtaking locations. From misty mountains to sun-drenched coastlines, your perfect getaway awaits in our handpicked enclaves.
            </p>
          </motion.div>
        </section>

        {/* DESTINATIONS MASONRY/ASYMMETRIC GRID */}
        <section className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {destinations.map((dest, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                key={i}
                className={`group relative overflow-hidden rounded-[2rem] block shadow-soft hover:shadow-float transition-all duration-500 ${
                  i === 0 || i === 3 ? "md:col-span-2 lg:col-span-2 aspect-[16/9] lg:aspect-[21/9]" : "aspect-[4/5]"
                }`}
              >
                <Link href={`/bungalows/${dest.name.toLowerCase()}`} className="absolute inset-0 w-full h-full z-20" />
                <Image 
                  src={dest.img} 
                  alt={dest.name} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                
                {/* Gradients */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />
                
                {/* Content */}
                <div className="absolute bottom-10 left-10 right-10 flex flex-col justify-end pointer-events-none">
                  <div className="flex items-center gap-4 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-gold text-[10px] font-bold uppercase tracking-[0.2em]">{dest.count}</p>
                    <div className="h-[1px] flex-1 bg-white/20" />
                  </div>
                  
                  <h3 className="font-serif text-4xl lg:text-5xl text-white mb-4">{dest.name}</h3>
                  
                  <div className="flex items-end justify-between overflow-hidden">
                    <p className="text-white/80 text-sm max-w-sm font-light transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {dest.desc}
                    </p>
                    <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-md transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-200 pointer-events-auto hover:bg-white hover:text-charcoal hover:border-transparent">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
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
