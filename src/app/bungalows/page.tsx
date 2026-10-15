"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, Calendar, Star, Heart, ArrowRight, SlidersHorizontal, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function BungalowsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFFFF] text-[#1C2921]">
      <Header theme="light" />
      
      <main className="flex-1 pt-32 pb-24">
        
        {/* HEADER */}
        <section className="container mx-auto px-6 lg:px-12 mb-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-gold" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">The Collection</p>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl text-[#1C2921] tracking-tight">
                Our Private Homes
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <button className="flex items-center gap-2 px-6 py-3.5 bg-white border border-[#EAEFEA] rounded-full text-[10px] font-bold uppercase tracking-widest text-[#1C2921] hover:border-gold hover:text-gold transition-colors shadow-lg">
                <SlidersHorizontal className="w-4 h-4 text-gold" /> Filters
              </button>
              <button className="flex items-center gap-2 px-6 py-3.5 bg-white border border-[#EAEFEA] rounded-full text-[10px] font-bold uppercase tracking-widest text-[#1C2921] hover:border-gold hover:text-gold transition-colors shadow-lg">
                Sort By: Curated <ChevronDown className="w-4 h-4 text-gold" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* LISTINGS GRID WITH SIDEBAR */}
        <section className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Minimal Desktop Sidebar */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-32 space-y-12 p-6 rounded-3xl bg-white/60 border border-[#EAEFEA] backdrop-blur-md">
                <div>
                  <h3 className="font-serif text-xl text-[#1C2921] mb-6 border-b border-[#EAEFEA] pb-4">Destinations</h3>
                  <ul className="space-y-4">
                    {['Lonavala', 'Goa', 'Alibaug', 'Karjat', 'Mahabaleshwar'].map(dest => (
                      <li key={dest}>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className="w-4 h-4 rounded border border-white/20 group-hover:border-gold transition-colors flex items-center justify-center bg-white/5" />
                          <span className="text-sm text-[#1C2921]/70 group-hover:text-gold transition-colors">{dest}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl text-[#1C2921] mb-6 border-b border-[#EAEFEA] pb-4">Experiences</h3>
                  <ul className="space-y-4">
                    {['Private Pool', 'Pet Friendly', 'Heritage', 'Nature Retreat'].map(exp => (
                      <li key={exp}>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className="w-4 h-4 rounded border border-white/20 group-hover:border-gold transition-colors flex items-center justify-center bg-white/5" />
                          <span className="text-sm text-[#1C2921]/70 group-hover:text-gold transition-colors">{exp}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                { name: "The Palm Villa", loc: "Lonavala, Maharashtra", price: "18,000", guests: 6, beds: 3, rating: 4.8, reviews: 120, tags: ["Private Pool"], img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop" },
                { name: "Serene Escape", loc: "Alibaug, Maharashtra", price: "24,000", guests: 8, beds: 4, rating: 4.7, reviews: 98, tags: ["Chef Included"], img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
                { name: "The Cliff Villa", loc: "Karjat, Maharashtra", price: "16,000", guests: 6, beds: 3, rating: 4.9, reviews: 76, tags: ["Nature"], img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop" },
                { name: "Sandy Shores", loc: "Goa", price: "28,000", guests: 10, beds: 5, rating: 4.8, reviews: 63, tags: ["Beachfront"], img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop" },
                { name: "Monsoon Retreat", loc: "Mahabaleshwar", price: "21,000", guests: 8, beds: 4, rating: 4.9, reviews: 112, tags: ["Heritage"], img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop" },
                { name: "Estate 1920", loc: "Coorg, Karnataka", price: "32,000", guests: 12, beds: 6, rating: 5.0, reviews: 45, tags: ["Plantation"], img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" },
              ].map((prop, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  key={i} 
                  className="group flex flex-col bg-white border border-[#EAEFEA] rounded-2xl overflow-hidden shadow-2xl hover:border-gold/40 hover:-translate-y-1.5 transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={prop.img} alt={prop.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141A16] via-transparent to-black/30 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                      {prop.tags.map(tag => (
                        <span key={tag} className="bg-black/60 backdrop-blur-md border border-gold/30 text-gold-light text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-[#080B09] transition-all z-10">
                      <Heart className="w-5 h-5 stroke-[1.5]" />
                    </button>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-2xl text-[#1C2921] group-hover:text-gold transition-colors">{prop.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 text-gold fill-gold" />
                        <span className="text-sm font-bold text-[#1C2921]">{prop.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-[#1C2921]/60 mb-5 flex items-center gap-1.5 font-medium"><MapPin className="w-3.5 h-3.5 text-gold" /> {prop.loc}</p>
                    
                    <div className="flex gap-4 text-xs text-[#1C2921]/70 mb-6 font-medium">
                      <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-gold" /> {prop.guests} Guests</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-gold" /> {prop.beds} Beds</span>
                    </div>
                    
                    <div className="mt-auto flex items-center justify-between pt-5 border-t border-[#EAEFEA]">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#1C2921]/50 mb-1">From</p>
                        <p className="font-serif text-xl text-[#1C2921] tracking-tight">₹{prop.price} <span className="text-xs font-sans font-normal text-[#1C2921]/50 tracking-widest uppercase">/ Night</span></p>
                      </div>
                      <Link href={`/bungalows/the-glasshouse`} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-[#080B09] hover:border-gold transition-all duration-300">
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
