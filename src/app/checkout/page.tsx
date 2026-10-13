import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ShieldCheck } from "lucide-react"

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#EDF4ED] text-charcoal">
      <Header />
      
      <main className="flex-1 bg-radial-[circle_at_top,_var(--tw-gradient-stops)] from-[#DFEDE1] to-[#EDF4ED] pb-24 pt-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold block mb-2">Reservation Guarantee</span>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1C2921]">Review and Book</h1>
          </div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px]">
            {/* Left Column: Form Steps */}
            <div className="space-y-10">
              
              {/* Trip Details */}
              <section className="rounded-3xl border border-[#D5E5D7] bg-white p-6 md:p-8 shadow-soft">
                <h2 className="mb-6 font-serif text-2xl text-[#1C2921]">Your Trip</h2>
                
                <div className="mb-6 flex items-start justify-between border-b border-[#D5E5D7] pb-6">
                  <div>
                    <h3 className="font-medium text-[#1C2921] mb-1">Dates</h3>
                    <p className="text-sm text-charcoal/70">Oct 12 – Oct 14, 2026</p>
                  </div>
                  <button className="text-sm font-medium text-gold hover:underline">Edit</button>
                </div>
                
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-[#1C2921] mb-1">Guests</h3>
                    <p className="text-sm text-charcoal/70">2 guests</p>
                  </div>
                  <button className="text-sm font-medium text-gold hover:underline">Edit</button>
                </div>
              </section>
              
              {/* Guest Details */}
              <section className="rounded-3xl border border-[#D5E5D7] bg-white p-6 md:p-8 shadow-soft">
                <h2 className="mb-6 font-serif text-2xl text-[#1C2921]">Guest Details</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wider text-charcoal/80 font-bold">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wider text-charcoal/80 font-bold">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-xs uppercase tracking-wider text-charcoal/80 font-bold">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                    <p className="mt-1.5 text-xs text-charcoal/50">We'll send your encrypted confirmation receipt here.</p>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-xs uppercase tracking-wider text-charcoal/80 font-bold">Phone Number</label>
                    <Input type="tel" placeholder="+91 9876543210" />
                    <p className="mt-1.5 text-xs text-charcoal/50">For private concierge arrival coordination.</p>
                  </div>
                </div>
              </section>

              {/* Payment Architecture */}
              <section className="rounded-3xl border border-[#D5E5D7] bg-white p-6 md:p-8 shadow-soft">
                <h2 className="mb-4 font-serif text-2xl text-[#1C2921]">Payment Method</h2>
                <p className="mb-6 text-sm text-charcoal/70">
                  Transactions are secured with end-to-end 256-bit SSL encryption.
                </p>
                
                <div className="rounded-2xl border border-gold/20 p-6 text-center text-charcoal/80 bg-gold/5">
                  <ShieldCheck className="mx-auto mb-2 h-8 w-8 text-gold" />
                  <p className="text-sm font-medium text-[#1C2921]">Ultra-Secure Payment Gateway</p>
                  <p className="text-xs text-charcoal/60 mt-1">Stripe & Razorpay integrated (UPI, Credit Cards, Wire Transfer)</p>
                </div>
              </section>

              <p className="text-xs text-charcoal/60 leading-relaxed">
                By selecting the button below, you agree to Bungalow Stay's House Rules, Cancellation Policy, and Private Guest Charter.
              </p>
              
              <Button variant="default" size="lg" className="w-full text-base sm:w-auto px-12 py-4 rounded-full">
                Confirm and Pay ₹61,950
              </Button>
            </div>

            {/* Right Column: Order Summary */}
            <div className="relative">
              <div className="sticky top-28 rounded-3xl border border-[#D5E5D7] bg-white p-8 shadow-2xl">
                
                {/* Property Mini Card */}
                <div className="mb-6 flex gap-4 border-b border-[#D5E5D7] pb-6">
                  <div className="h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-sand/30 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center border border-[#D5E5D7]" />
                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gold">Luxury Villa</p>
                    <h3 className="font-serif text-xl leading-tight text-[#1C2921] mt-1">The Glasshouse</h3>
                    <div className="mt-1 flex items-center gap-1 text-xs font-medium text-white/80">
                      ★ 4.98 (42 reviews)
                    </div>
                  </div>
                </div>
                
                <h2 className="mb-4 font-serif text-xl text-[#1C2921]">Price Details</h2>
                
                <div className="space-y-3.5 text-sm">
                  <div className="flex justify-between text-charcoal/80">
                    <span>₹25,000 x 2 nights</span>
                    <span className="text-[#1C2921]">₹50,000</span>
                  </div>
                  <div className="flex justify-between text-charcoal/80">
                    <span>Private Chef & Cleaning</span>
                    <span className="text-[#1C2921]">₹2,500</span>
                  </div>
                  <div className="flex justify-between text-charcoal/80">
                    <span>Luxury GST (18%)</span>
                    <span className="text-[#1C2921]">₹9,450</span>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between border-t border-[#D5E5D7] pt-6 font-serif text-xl font-bold text-white">
                  <span>Total (INR)</span>
                  <span className="text-gold">₹61,950</span>
                </div>
                
                <div className="mt-6 rounded-2xl bg-gold/10 border border-gold/20 p-4">
                  <div className="flex gap-3 items-center">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gold">Complimentary Cancellation</h4>
                      <p className="text-xs text-charcoal/80 mt-0.5">Cancel before Oct 10 for a full refund.</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
