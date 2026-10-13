"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { User, Settings, Heart, CalendarDays, CheckCircle2, Bell, Shield, CreditCard } from "lucide-react"
import Link from "next/link"

export default function AccountSettingsPage() {
  const [saved, setSaved] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[#EDF4ED] text-charcoal">
      <Header />

      <main className="flex-1 bg-radial-[circle_at_top,_var(--tw-gradient-stops)] from-[#DFEDE1] to-[#EDF4ED] py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold block mb-1">Preferences</span>
              <h1 className="font-serif text-3xl md:text-4xl text-[#1C2921]">Settings</h1>
            </div>
            <Button variant="outline" className="border-[#D5E5D7] text-[#1C2921] hover:bg-[#DFEDE1] rounded-full">Sign Out</Button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[250px_1fr]">
            {/* Sidebar */}
            <nav className="space-y-2">
              <Link href="/account" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#DFEDE1] hover:text-white">
                <CalendarDays className="h-4 w-4" /> My Bookings
              </Link>
              <Link href="/account/wishlist" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#DFEDE1] hover:text-white">
                <Heart className="h-4 w-4" /> Wishlist
              </Link>
              <Link href="/account/profile" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#DFEDE1] hover:text-white">
                <User className="h-4 w-4" /> Profile Details
              </Link>
              <Link href="/account/settings" className="flex items-center gap-3 rounded-2xl bg-gold text-forest font-bold px-4 py-3 text-sm">
                <Settings className="h-4 w-4" /> Settings
              </Link>
            </nav>

            {/* Content Area */}
            <div className="space-y-8 max-w-2xl">
              <div className="bg-white rounded-3xl border border-[#D5E5D7] p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Bell className="w-5 h-5 text-gold" />
                  <h2 className="font-serif text-2xl text-[#1C2921]">Notification Preferences</h2>
                </div>
                <div className="space-y-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div>
                      <p className="text-sm font-medium text-[#1C2921]">Booking & Reservation Alerts</p>
                      <p className="text-xs text-charcoal/50">Stay confirmations, check-in instructions, and host messages</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-gold" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer pt-3 border-t border-[#D5E5D7]">
                    <div>
                      <p className="text-sm font-medium text-[#1C2921]">Curated Collections & Seasonal Escapes</p>
                      <p className="text-xs text-charcoal/50">Early access previews to newly added villas and private estates</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-gold" />
                  </label>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#D5E5D7] p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-5 h-5 text-gold" />
                  <h2 className="font-serif text-2xl text-[#1C2921]">Security & Password</h2>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); setSaved(true) }} className="space-y-4">
                  {saved && (
                    <div className="p-3 bg-gold/10 border border-gold/30 text-gold rounded-xl text-xs font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold" /> Password updated.
                    </div>
                  )}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-1.5">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-beige rounded-xl bg-white text-[#1C2921] focus:outline-none focus:border-gold text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-1.5">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-beige rounded-xl bg-white text-[#1C2921] focus:outline-none focus:border-gold text-sm" />
                  </div>
                  <button type="submit" className="px-6 py-3 bg-gradient-to-r from-gold to-gold-light text-forest rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(201,169,110,0.5)] transition-all">
                    Update Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
