"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[#0A0D0B] text-charcoal">
      <Header />

      <main className="flex-1 flex items-center justify-center pt-32 pb-24 px-6 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-[#141A16] to-[#0A0D0B]">
        <div className="w-full max-w-md bg-[#141A16] border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold block mb-2">Account Recovery</span>
            <h1 className="font-serif text-3xl text-white">Reset Password</h1>
            <p className="text-xs text-charcoal/60 mt-2 font-light">
              Enter your email address and we will send you a secure link to reset your password.
            </p>
          </div>

          {sent ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
              <h2 className="font-serif text-2xl text-white mb-2">Check Your Email</h2>
              <p className="text-xs text-charcoal/70 mb-6">We have sent recovery instructions to your email address.</p>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:underline transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
              </Link>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-1.5">Email Address</label>
                <input required type="email" placeholder="you@domain.com" className="w-full px-4 py-3 border border-beige rounded-xl bg-[#0E1210] text-white focus:outline-none focus:border-gold text-sm" />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-gold to-gold-light text-forest rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_25px_rgba(201,169,110,0.5)] transition-all"
              >
                Send Reset Link
              </button>

              <div className="text-center pt-4 border-t border-white/10">
                <Link href="/login" className="inline-flex items-center gap-1.5 text-xs text-charcoal/60 hover:text-gold font-medium">
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
                </Link>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
