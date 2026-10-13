"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { User, Settings, Heart, CalendarDays, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [saved, setSaved] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[#0A0D0B] text-charcoal">
      <Header />

      <main className="flex-1 bg-radial-[circle_at_top,_var(--tw-gradient-stops)] from-[#141A16] to-[#0A0D0B] py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold block mb-1">Guest Account</span>
              <h1 className="font-serif text-3xl md:text-4xl text-white">Profile Details</h1>
            </div>
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-full">Sign Out</Button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[250px_1fr]">
            {/* Sidebar */}
            <nav className="space-y-2">
              <Link href="/account" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-white/5 hover:text-white">
                <CalendarDays className="h-4 w-4" /> My Bookings
              </Link>
              <Link href="/account/wishlist" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-white/5 hover:text-white">
                <Heart className="h-4 w-4" /> Wishlist
              </Link>
              <Link href="/account/profile" className="flex items-center gap-3 rounded-2xl bg-gold text-forest font-bold px-4 py-3 text-sm">
                <User className="h-4 w-4" /> Profile Details
              </Link>
              <Link href="/account/settings" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-white/5 hover:text-white">
                <Settings className="h-4 w-4" /> Settings
              </Link>
            </nav>

            {/* Content Area */}
            <div className="bg-[#141A16] rounded-3xl border border-white/10 p-8 shadow-2xl max-w-2xl">
              <h2 className="mb-6 font-serif text-2xl text-white">Personal Profile</h2>

              {saved && (
                <div className="mb-6 p-4 bg-gold/10 border border-gold/30 text-gold rounded-2xl flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold" /> Changes saved successfully.
                </div>
              )}

              <form onSubmit={(e) => { e.preventDefault(); setSaved(true) }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">First Name</label>
                    <input defaultValue="Shamal" className="w-full px-4 py-3 border border-beige rounded-xl bg-[#0E1210] text-white focus:outline-none focus:border-gold text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Last Name</label>
                    <input defaultValue="Mohamed" className="w-full px-4 py-3 border border-beige rounded-xl bg-[#0E1210] text-white focus:outline-none focus:border-gold text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Email Address</label>
                  <input defaultValue="shamal@example.com" type="email" className="w-full px-4 py-3 border border-beige rounded-xl bg-[#0E1210] text-white focus:outline-none focus:border-gold text-sm" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Phone Number</label>
                  <input defaultValue="+91 98765 43210" type="tel" className="w-full px-4 py-3 border border-beige rounded-xl bg-[#0E1210] text-white focus:outline-none focus:border-gold text-sm" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Dietary & Stay Preferences</label>
                  <textarea defaultValue="Vegetarian meals preferred, non-alcoholic welcome amenities." rows={3} className="w-full px-4 py-3 border border-beige rounded-xl bg-[#0E1210] text-white focus:outline-none focus:border-gold text-sm" />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-gradient-to-r from-gold to-gold-light text-forest rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_25px_rgba(201,169,110,0.5)] transition-all"
                >
                  Save Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
