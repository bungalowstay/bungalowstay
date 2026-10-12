"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function RegisterPage() {
  const [success, setSuccess] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <Header theme="light" />

      <main className="flex-1 flex items-center justify-center pt-32 pb-24 px-6">
        <div className="w-full max-w-md bg-white border border-beige rounded-3xl p-8 lg:p-10 shadow-soft">
          <div className="text-center mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-2">Member Privileges</p>
            <h1 className="font-serif text-3xl text-charcoal">Create Your Account</h1>
            <p className="text-xs text-charcoal/60 mt-2 font-light">Join the circle for curated escapes, private previews & concierge booking.</p>
          </div>

          {success ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-12 h-12 text-forest mx-auto mb-4" />
              <h2 className="font-serif text-2xl text-charcoal mb-2">Welcome to Bungalow Stay</h2>
              <p className="text-xs text-charcoal/70 mb-6">Your account has been created. Start exploring your next sanctuary.</p>
              <Link
                href="/bungalows"
                className="inline-block w-full py-4 bg-charcoal text-ivory rounded-xl text-xs font-bold uppercase tracking-widest text-center hover:bg-gold hover:text-charcoal transition-colors"
              >
                Browse Residences
              </Link>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSuccess(true) }} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-1.5">Full Name</label>
                <input required type="text" placeholder="Sarah Jenkins" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-1.5">Email Address</label>
                <input required type="email" placeholder="sarah@example.com" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-1.5">Phone Number</label>
                <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-1.5">Password</label>
                <input required type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-4 bg-charcoal text-ivory rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-colors flex items-center justify-center gap-2"
              >
                Create Account <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-4 border-t border-beige">
                <p className="text-xs text-charcoal/60">
                  Already have an account?{" "}
                  <Link href="/login" className="font-bold text-charcoal hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
