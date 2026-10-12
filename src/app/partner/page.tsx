"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { ShieldCheck, TrendingUp, KeyRound, Sparkles, CheckCircle2 } from "lucide-react"

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <Header theme="light" />

      <main className="flex-1 pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 lg:px-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-gold" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Homeowner Partnership</p>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl text-charcoal mb-6 leading-tight">
                Turn Your Private Estate Into an Effortless Asset
              </h1>
              <p className="text-charcoal/70 text-lg md:text-xl font-light leading-relaxed mb-8">
                Partner with India's most exclusive boutique villa collective. We handle rigorous guest vetting, 5-star operations, dynamic yield pricing, and dedicated estate maintenance.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-beige">
                <div>
                  <p className="font-serif text-3xl text-charcoal mb-1">94%</p>
                  <p className="text-xs text-charcoal/60 uppercase tracking-wider">Average Peak Occupancy</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-charcoal mb-1">100%</p>
                  <p className="text-xs text-charcoal/60 uppercase tracking-wider">Turnkey Management</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-float">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury Estate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="container mx-auto px-6 lg:px-12 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Why Homeowners Choose Us</h2>
            <p className="text-charcoal/70 text-base font-light">We protect the value and sanctity of your home like it is our own.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-beige p-8 rounded-3xl shadow-soft">
              <KeyRound className="w-8 h-8 text-gold mb-6" />
              <h3 className="font-serif text-2xl text-charcoal mb-3">Vetted High-Net-Worth Guests</h3>
              <p className="text-charcoal/70 text-sm font-light leading-relaxed">
                Every reservation undergoes ID verification, strict security deposits, and customized house rule agreements.
              </p>
            </div>
            <div className="bg-white border border-beige p-8 rounded-3xl shadow-soft">
              <ShieldCheck className="w-8 h-8 text-gold mb-6" />
              <h3 className="font-serif text-2xl text-charcoal mb-3">Full Maintenance & Custody</h3>
              <p className="text-charcoal/70 text-sm font-light leading-relaxed">
                Bi-weekly deep cleaning, pool sanitization, landscaping oversight, and preventative property inspections.
              </p>
            </div>
            <div className="bg-white border border-beige p-8 rounded-3xl shadow-soft">
              <TrendingUp className="w-8 h-8 text-gold mb-6" />
              <h3 className="font-serif text-2xl text-charcoal mb-3">Algorithmic Maximum Yield</h3>
              <p className="text-charcoal/70 text-sm font-light leading-relaxed">
                Dynamic market pricing maximizes returns across long weekends, holiday seasons, and weekday executive workations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <div className="bg-white border border-beige rounded-3xl p-8 lg:p-12 shadow-soft">
            <h2 className="font-serif text-3xl text-charcoal mb-2">Submit Your Property For Review</h2>
            <p className="text-charcoal/70 text-sm mb-8 font-light">
              Fill out the details below. Our acquisitions director will contact you within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 bg-sand/30 rounded-2xl text-center">
                <CheckCircle2 className="w-12 h-12 text-forest mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-charcoal mb-2">Thank you for your submission</h3>
                <p className="text-charcoal/70 text-sm">Our curation team has received your estate details and will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Your Name</label>
                    <input required type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Phone Number</label>
                    <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Email Address</label>
                    <input required type="email" placeholder="you@domain.com" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Property Location</label>
                    <input required type="text" placeholder="e.g. Alibaug, Goa, Lonavala" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Number of Bedrooms</label>
                  <select className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm">
                    <option>2 - 3 Bedrooms</option>
                    <option>4 - 5 Bedrooms</option>
                    <option>6+ Bedrooms (Estate)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-charcoal text-ivory rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-colors"
                >
                  Request Consultation
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
