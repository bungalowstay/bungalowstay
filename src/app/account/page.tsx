import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Settings, Heart, CalendarDays, MapPin } from "lucide-react"
import Link from "next/link"

export default function AccountPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#EDF4ED] text-charcoal">
      <Header />
      
      <main className="flex-1 bg-radial-[circle_at_top,_var(--tw-gradient-stops)] from-[#DFEDE1] to-[#EDF4ED] py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold block mb-1">Member Portal</span>
              <h1 className="font-serif text-3xl md:text-4xl text-[#1C2921]">My Account</h1>
            </div>
            <Button variant="outline" className="border-[#D5E5D7] text-[#1C2921] hover:bg-[#DFEDE1] rounded-full">Sign Out</Button>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[250px_1fr]">
            {/* Sidebar Navigation */}
            <nav className="space-y-2">
              <Link href="/account" className="flex items-center gap-3 rounded-2xl bg-gold text-forest font-bold px-4 py-3 text-sm">
                <CalendarDays className="h-4 w-4" /> My Bookings
              </Link>
              <Link href="/account/wishlist" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#DFEDE1] hover:text-white">
                <Heart className="h-4 w-4" /> Wishlist
              </Link>
              <Link href="/account/profile" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#DFEDE1] hover:text-white">
                <User className="h-4 w-4" /> Profile Details
              </Link>
              <Link href="/account/settings" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#DFEDE1] hover:text-white">
                <Settings className="h-4 w-4" /> Settings
              </Link>
            </nav>

            {/* Content Area */}
            <div className="space-y-8">
              <section>
                <h2 className="mb-6 font-serif text-2xl text-[#1C2921]">Upcoming Trips</h2>
                
                <Card className="bg-white border border-[#D5E5D7] rounded-3xl overflow-hidden shadow-2xl">
                  <CardContent className="flex flex-col gap-6 p-6 sm:flex-row">
                    <div className="h-44 w-full shrink-0 overflow-hidden rounded-2xl bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center sm:w-56 sm:h-auto border border-[#D5E5D7]" />
                    
                    <div className="flex flex-1 flex-col justify-center">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="rounded-full bg-gold/10 border border-gold/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">Confirmed</span>
                        <span className="text-xs text-charcoal/50">#BNG-9021</span>
                      </div>
                      
                      <h3 className="mb-1 font-serif text-2xl text-[#1C2921]">The Glasshouse</h3>
                      <p className="mb-4 flex items-center gap-1 text-sm text-charcoal/70"><MapPin className="h-3.5 w-3.5 text-gold" /> Lonavala, Maharashtra</p>
                      
                      <div className="grid grid-cols-2 gap-4 border-t border-[#D5E5D7] pt-4 text-sm">
                        <div>
                          <p className="font-medium text-[#1C2921]">Oct 12 – Oct 14, 2026</p>
                          <p className="text-charcoal/60 text-xs">2 nights</p>
                        </div>
                        <div>
                          <p className="font-medium text-[#1C2921]">2 Guests</p>
                          <p className="font-medium text-gold">₹61,950</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Button variant="outline" className="rounded-full text-xs border-[#D5E5D7] text-[#1C2921] hover:bg-[#DFEDE1]">Get Directions</Button>
                        <Button variant="outline" className="rounded-full text-xs border-gold/30 text-gold hover:bg-gold/10">Contact Host</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-[#1C2921]">Past Trips</h2>
                <p className="text-sm text-charcoal/60">You have no past trips.</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
