import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Settings, Heart, CalendarDays, MapPin } from "lucide-react"
import Link from "next/link"

export default function AccountPage() {
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
            {/* Sidebar Navigation */}
            <nav className="space-y-2">
              <Link href="/account" className="flex items-center gap-3 rounded-lg bg-charcoal px-4 py-3 text-sm font-medium text-ivory">
                <CalendarDays className="h-4 w-4" /> My Bookings
              </Link>
              <Link href="/account/wishlist" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
                <Heart className="h-4 w-4" /> Wishlist
              </Link>
              <Link href="/account/profile" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
                <User className="h-4 w-4" /> Profile Details
              </Link>
              <Link href="/account/settings" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
                <Settings className="h-4 w-4" /> Settings
              </Link>
            </nav>

            {/* Content Area */}
            <div className="space-y-8">
              <section>
                <h2 className="mb-6 font-serif text-2xl">Upcoming Trips</h2>
                
                <Card className="bg-white">
                  <CardContent className="flex flex-col gap-6 p-6 sm:flex-row">
                    <div className="h-40 w-full shrink-0 overflow-hidden rounded-xl bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center sm:w-48 sm:h-auto" />
                    
                    <div className="flex flex-1 flex-col justify-center">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">Confirmed</span>
                        <span className="text-xs text-charcoal/50">#BNG-9021</span>
                      </div>
                      
                      <h3 className="mb-1 font-serif text-2xl text-charcoal">The Glasshouse</h3>
                      <p className="mb-4 flex items-center gap-1 text-sm text-charcoal/70"><MapPin className="h-3 w-3" /> Lonavala, Maharashtra</p>
                      
                      <div className="grid grid-cols-2 gap-4 border-t border-sand/50 pt-4 text-sm">
                        <div>
                          <p className="font-medium">Oct 12 – Oct 14, 2026</p>
                          <p className="text-charcoal/60">2 nights</p>
                        </div>
                        <div>
                          <p className="font-medium">2 Guests</p>
                          <p className="font-medium">₹61,950</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex gap-3">
                        <Button variant="outline" className="w-full sm:w-auto">Get Directions</Button>
                        <Button variant="outline" className="w-full sm:w-auto">Contact Host</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="mb-6 font-serif text-2xl">Past Trips</h2>
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
