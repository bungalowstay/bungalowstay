"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { User, Settings, Heart, CalendarDays, MapPin, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WishlistPage() {
  const wishlist = [
    { name: "The Glasshouse", slug: "the-glasshouse", loc: "Lonavala, Maharashtra", price: "24,000", rating: 4.9, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
    { name: "Villa Serene", slug: "the-glasshouse", loc: "Assagao, Goa", price: "35,000", rating: 4.8, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
    { name: "The Cliff Estate", slug: "the-glasshouse", loc: "Karjat, Maharashtra", price: "18,000", rating: 5.0, img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop" },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAF7] text-charcoal">
      <Header />

      <main className="flex-1 bg-radial-[circle_at_top,_var(--tw-gradient-stops)] from-[#F0F5F1] to-[#F8FAF7] py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold block mb-1">Curated Collection</span>
              <h1 className="font-serif text-3xl md:text-4xl text-[#1C2921]">Wishlist</h1>
            </div>
            <Button variant="outline" className="border-[#E2EAE3] text-[#1C2921] hover:bg-[#F0F5F1] rounded-full">Sign Out</Button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[250px_1fr]">
            {/* Sidebar */}
            <nav className="space-y-2">
              <Link href="/account" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#F0F5F1] hover:text-white">
                <CalendarDays className="h-4 w-4" /> My Bookings
              </Link>
              <Link href="/account/wishlist" className="flex items-center gap-3 rounded-2xl bg-gold text-forest font-bold px-4 py-3 text-sm">
                <Heart className="h-4 w-4" /> Wishlist ({wishlist.length})
              </Link>
              <Link href="/account/profile" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#F0F5F1] hover:text-white">
                <User className="h-4 w-4" /> Profile Details
              </Link>
              <Link href="/account/settings" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#F0F5F1] hover:text-white">
                <Settings className="h-4 w-4" /> Settings
              </Link>
            </nav>

            {/* Content Area */}
            <div>
              <h2 className="mb-6 font-serif text-2xl text-[#1C2921]">Saved Residences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-[#E2EAE3] hover:border-gold/30 shadow-soft flex flex-col group transition-all duration-300">
                    <div className="relative aspect-[4/3]">
                      <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-red-400 border border-[#E2EAE3]">
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-serif text-xl text-[#1C2921] group-hover:text-gold transition-colors">{item.name}</h3>
                          <div className="flex items-center gap-1 text-xs font-bold text-gold">
                            <Star className="w-3.5 h-3.5 fill-current" /> {item.rating}
                          </div>
                        </div>
                        <p className="text-xs text-charcoal/60 mb-3 flex items-center gap-1"><MapPin className="w-3 h-3 text-gold" /> {item.loc}</p>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-[#E2EAE3]">
                        <p className="font-serif text-lg text-[#1C2921]">₹{item.price} <span className="text-[10px] font-sans text-[#1C2921]/50">/ night</span></p>
                        <Link href={`/bungalows/${item.slug}`} className="p-2 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-forest transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
