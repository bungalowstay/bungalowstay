import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ShieldCheck } from "lucide-react"

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header theme="light" />
      
      <main className="flex-1 bg-sand/10 pb-24 pt-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-8 font-serif text-3xl">Review and book</h1>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px]">
            {/* Left Column: Form Steps */}
            <div className="space-y-12">
              
              {/* Trip Details */}
              <section className="rounded-2xl border border-sand/50 bg-ivory p-6 md:p-8">
                <h2 className="mb-6 font-serif text-2xl">Your trip</h2>
                
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-charcoal">Dates</h3>
                    <p className="text-sm text-charcoal/70">Oct 12 – Oct 14, 2026</p>
                  </div>
                  <button className="text-sm font-medium underline">Edit</button>
                </div>
                
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-charcoal">Guests</h3>
                    <p className="text-sm text-charcoal/70">2 guests</p>
                  </div>
                  <button className="text-sm font-medium underline">Edit</button>
                </div>
              </section>
              
              {/* Guest Details */}
              <section className="rounded-2xl border border-sand/50 bg-ivory p-6 md:p-8">
                <h2 className="mb-6 font-serif text-2xl">Guest Details</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">First Name</label>
                    <Input placeholder="John" className="bg-white" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" className="bg-white" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-white" />
                    <p className="mt-1 text-xs text-charcoal/50">We'll send your confirmation receipt here.</p>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium">Phone Number</label>
                    <Input type="tel" placeholder="+91 9876543210" className="bg-white" />
                    <p className="mt-1 text-xs text-charcoal/50">So the property manager can reach you if needed.</p>
                  </div>
                </div>
              </section>

              {/* Payment Architecture */}
              <section className="rounded-2xl border border-sand/50 bg-ivory p-6 md:p-8">
                <h2 className="mb-6 font-serif text-2xl">Payment</h2>
                <p className="mb-6 text-sm text-charcoal/70">
                  All transactions are secure and encrypted.
                </p>
                
                <div className="rounded-xl border border-sand/50 p-6 text-center text-charcoal/60 bg-sand/10">
                  <ShieldCheck className="mx-auto mb-2 h-8 w-8 opacity-50" />
                  <p className="text-sm">Secure Payment Gateway Integration Architecture</p>
                  <p className="text-xs mt-1">(Stripe / Razorpay element will render here)</p>
                </div>
              </section>

              <p className="text-xs text-charcoal/60">
                By selecting the button below, I agree to the House Rules, Cancellation Policy, and the Guest Refund Policy.
              </p>
              
              <Button variant="primary" size="lg" className="w-full text-base sm:w-auto px-12">
                Confirm and pay
              </Button>
            </div>

            {/* Right Column: Order Summary */}
            <div className="relative">
              <div className="sticky top-28 rounded-2xl border border-sand/50 bg-ivory p-6 shadow-xl">
                
                {/* Property Mini Card */}
                <div className="mb-6 flex gap-4 border-b border-sand/50 pb-6">
                  <div className="h-24 w-28 shrink-0 overflow-hidden rounded-lg bg-sand/30 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center" />
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-charcoal/60">Luxury Villa</p>
                    <h3 className="font-serif text-lg leading-tight text-charcoal">The Glasshouse</h3>
                    <div className="mt-1 flex items-center gap-1 text-xs font-medium text-charcoal/70">
                      ★ 4.98 (42 reviews)
                    </div>
                  </div>
                </div>
                
                <h2 className="mb-4 font-serif text-xl">Price details</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>₹25,000 x 2 nights</span>
                    <span>₹50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>₹2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes (18%)</span>
                    <span>₹9,450</span>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between border-t border-sand/50 pt-6 font-serif text-lg font-bold">
                  <span>Total (INR)</span>
                  <span>₹61,950</span>
                </div>
                
                <div className="mt-6 rounded-lg bg-forest/10 p-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-forest shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-forest">Free cancellation</h4>
                      <p className="text-xs text-forest/80 mt-1">Cancel before Oct 10 for a full refund.</p>
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
