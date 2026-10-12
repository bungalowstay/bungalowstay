"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <Header theme="light" />
      
      <main className="flex-1 pt-32 pb-24">
        {/* CONTACT CONTENT */}
        <section className="container mx-auto px-6 lg:px-12 pt-12">
          
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-gold" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">We're Here For You</p>
              <div className="h-[1px] w-8 bg-gold" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-8 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-charcoal/70 text-lg font-light leading-relaxed text-pretty">
              Whether you need help curating the perfect escape or have a question about an existing reservation, our concierge team is at your disposal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Left Column: Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-white p-10 md:p-14 rounded-[2rem] border border-beige shadow-soft"
            >
              <h2 className="font-serif text-3xl text-charcoal mb-10">Send an Enquiry</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal/50 mb-3">First Name</label>
                    <input type="text" className="w-full bg-cream border border-transparent px-5 py-4 text-sm text-charcoal focus:outline-none focus:border-gold focus:bg-white transition-all rounded-xl" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal/50 mb-3">Last Name</label>
                    <input type="text" className="w-full bg-cream border border-transparent px-5 py-4 text-sm text-charcoal focus:outline-none focus:border-gold focus:bg-white transition-all rounded-xl" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal/50 mb-3">Email Address</label>
                    <input type="email" className="w-full bg-cream border border-transparent px-5 py-4 text-sm text-charcoal focus:outline-none focus:border-gold focus:bg-white transition-all rounded-xl" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal/50 mb-3">Phone Number</label>
                    <input type="tel" className="w-full bg-cream border border-transparent px-5 py-4 text-sm text-charcoal focus:outline-none focus:border-gold focus:bg-white transition-all rounded-xl" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal/50 mb-3">Message</label>
                  <textarea rows={5} className="w-full bg-cream border border-transparent px-5 py-4 text-sm text-charcoal focus:outline-none focus:border-gold focus:bg-white transition-all rounded-xl resize-none" placeholder="Tell us about your requirements..."></textarea>
                </div>

                <button type="button" className="bg-botanical text-ivory px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-forest transition-all duration-300 w-full flex items-center justify-center gap-3">
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Right Column: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-forest text-white p-10 md:p-14 rounded-[2rem] shadow-float h-full relative overflow-hidden flex flex-col justify-between">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-bl-full pointer-events-none" />
                
                <div>
                  <h3 className="font-serif text-3xl mb-12 relative z-10">Direct Contact</h3>
                  
                  <div className="space-y-12 relative z-10">
                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 shrink-0 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="pt-1">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-2">Concierge Desk</h4>
                        <p className="font-serif text-2xl text-white">+91 98765 43210</p>
                        <p className="text-xs text-white/50 mt-2 font-light">Available 9 AM to 8 PM IST</p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 shrink-0 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="pt-1">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-2">Reservations</h4>
                        <p className="font-serif text-xl text-white">hello@bungalowstay.com</p>
                        <p className="text-xs text-white/50 mt-2 font-light">We aim to reply within 2 hours</p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 shrink-0 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest transition-colors">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="pt-1">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-2">Headquarters</h4>
                        <p className="text-sm font-light leading-relaxed text-white/80">
                          12th Floor, The Estate<br />
                          Bandra West, Mumbai 400050<br />
                          Maharashtra, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
