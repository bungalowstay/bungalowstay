import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFFFF] text-charcoal">
      <Header />

      <main className="flex-1 pt-32 pb-24 bg-radial-[circle_at_top,_var(--tw-gradient-stops)] from-[#F7FAF7] to-[#FFFFFF]">
        <section className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold mb-3">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1C2921] mb-4">Terms of Service</h1>
            <p className="text-xs text-charcoal/50">Last updated: October 2026</p>
          </div>

          <div className="prose prose-lg text-charcoal/80 font-light leading-relaxed space-y-8 bg-white border border-[#EAEFEA] rounded-3xl p-8 lg:p-12 shadow-2xl">
            <section>
              <h2 className="font-serif text-2xl text-[#1C2921] mb-3">1. Scope of Service</h2>
              <p className="text-sm leading-relaxed">
                Bungalow Stay operates an exclusive curated marketplace connecting discerning travelers with verified private villas and heritage estates. By making a reservation or using this website, you agree to comply with and be bound by these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#1C2921] mb-3">2. Booking & Confirmation</h2>
              <p className="text-sm leading-relaxed">
                All bookings are subject to availability and explicit confirmation by our concierge team. A reservation is only confirmed once required payment terms or authorized holds are completed. Guests must provide valid government photo identification prior to check-in.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#1C2921] mb-3">3. House Rules & Quiet Hours</h2>
              <p className="text-sm leading-relaxed">
                To preserve neighborhood peace and the structural integrity of historical estates, outdoor music and loud festivities are prohibited between 10:00 PM and 8:00 AM. Maximum occupancy limits noted in the booking confirmation must be strictly respected.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#1C2921] mb-3">4. Security Deposits & Damages</h2>
              <p className="text-sm leading-relaxed">
                A refundable security deposit may be required upon check-in. This deposit will be credited back in full within 48 hours following checkout, subject to inspection confirming no property damage or violation of house policies.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#1C2921] mb-3">5. Contact Information</h2>
              <p className="text-sm leading-relaxed">
                If you have questions regarding these terms, please contact our legal counsel at legal@bungalowstay.com.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
