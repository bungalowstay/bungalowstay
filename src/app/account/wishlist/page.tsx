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
    <div className="flex min-h-screen flex-col bg-background">
      <Header theme="light" />

      <main className="flex-1 bg-sand/10 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="font-serif text-3xl">My Account</h1>
            <Button variant="outline">Sign Out</Button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[250px_1fr]">
            {/* Sidebar */}
            <nav className="space-y-2">
              <Link href="/account" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
                <CalendarDays className="h-4 w-4" /> My Bookings
              </Link>
              <Link href="/account/wishlist" className="flex items-center gap-3 rounded-lg bg-charcoal px-4 py-3 text-sm font-medium text-ivory">
                <Heart className="h-4 w-4" /> Wishlist ({wishlist.length})
              </Link>
              <Link href="/account/profile" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
                <User className="h-4 w-4" /> Profile Details
              </Link>
              <Link href="/account/settings" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
                <Settings className="h-4 w-4" /> Settings
              </Link>
            </nav>

            {/* Content Area */}
            <div>
              <h2 className="mb-6 font-serif text-2xl">Saved Residences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-beige shadow-soft flex flex-col">
                    <div className="relative aspect-[4/3]">
                      <Image src={item.img} alt={item.name} fill className="object-cover" />
                      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-red-500">
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-serif text-xl text-charcoal">{item.name}</h3>
                          <div className="flex items-center gap-1 text-xs font-bold text-gold">
                            <Star className="w-3.5 h-3.5 fill-current" /> {item.rating}
                          </div>
                        </div>
                        <p className="text-xs text-charcoal/60 mb-3 flex items-center gap-1"><MapPin className="w-3 h-3" /> {item.loc}</p>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-beige">
                        <p className="font-serif text-lg text-charcoal">₹{item.price} <span className="text-[10px] font-sans text-charcoal/50">/ night</span></p>
                        <Link href={`/bungalows/${item.slug}`} className="p-2 rounded-full hover:bg-gold hover:text-white transition-colors">
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
