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
              <Link href="/account/profile" className="flex items-center gap-3 rounded-lg bg-charcoal px-4 py-3 text-sm font-medium text-ivory">
                <User className="h-4 w-4" /> Profile Details
              </Link>
              <Link href="/account/settings" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
                <Settings className="h-4 w-4" /> Settings
              </Link>
            </nav>

            {/* Content Area */}
            <div className="bg-white rounded-3xl border border-beige p-8 shadow-soft max-w-2xl">
              <h2 className="mb-6 font-serif text-2xl">Personal Profile</h2>

              {saved && (
                <div className="mb-6 p-4 bg-emerald-50 text-emerald-800 rounded-xl flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Changes saved successfully.
                </div>
              )}

              <form onSubmit={(e) => { e.preventDefault(); setSaved(true) }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">First Name</label>
                    <input defaultValue="Shamal" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Last Name</label>
                    <input defaultValue="Mohamed" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Email Address</label>
                  <input defaultValue="shamal@example.com" type="email" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Phone Number</label>
                  <input defaultValue="+91 98765 43210" type="tel" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Dietary & Stay Preferences</label>
                  <textarea defaultValue="Vegetarian meals preferred, non-alcoholic welcome amenities." rows={3} className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-charcoal text-ivory rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-colors"
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
