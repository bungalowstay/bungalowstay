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
              <Link href="/account/wishlist" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
                <Heart className="h-4 w-4" /> Wishlist
              </Link>
              <Link href="/account/profile" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
                <User className="h-4 w-4" /> Profile Details
              </Link>
              <Link href="/account/settings" className="flex items-center gap-3 rounded-lg bg-charcoal px-4 py-3 text-sm font-medium text-ivory">
                <Settings className="h-4 w-4" /> Settings
              </Link>
            </nav>

            {/* Content Area */}
            <div className="space-y-8 max-w-2xl">
              <div className="bg-white rounded-3xl border border-beige p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <Bell className="w-5 h-5 text-gold" />
                  <h2 className="font-serif text-2xl text-charcoal">Notification Preferences</h2>
                </div>
                <div className="space-y-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div>
                      <p className="text-sm font-medium text-charcoal">Booking & Reservation Alerts</p>
                      <p className="text-xs text-charcoal/50">Stay confirmations, check-in instructions, and host messages</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-gold" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer pt-3 border-t border-beige">
                    <div>
                      <p className="text-sm font-medium text-charcoal">Curated Collections & Seasonal Escapes</p>
                      <p className="text-xs text-charcoal/50">Early access previews to newly added villas and private estates</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-gold" />
                  </label>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-beige p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-5 h-5 text-gold" />
                  <h2 className="font-serif text-2xl text-charcoal">Security & Password</h2>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); setSaved(true) }} className="space-y-4">
                  {saved && (
                    <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Password updated.
                    </div>
                  )}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-1.5">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-1.5">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
                  </div>
                  <button type="submit" className="px-6 py-3 bg-charcoal text-ivory rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-colors">
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
