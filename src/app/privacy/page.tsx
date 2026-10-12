import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <Header theme="light" />

      <main className="flex-1 pt-32 pb-24">
        <section className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">Privacy</p>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Privacy Policy</h1>
            <p className="text-xs text-charcoal/50">Last updated: October 2026</p>
          </div>

          <div className="prose prose-lg text-charcoal/80 font-light leading-relaxed space-y-8 bg-white border border-beige rounded-3xl p-8 lg:p-12 shadow-soft">
            <section>
              <h2 className="font-serif text-2xl text-charcoal mb-3">1. Information We Collect</h2>
              <p className="text-sm leading-relaxed">
                We collect personal information necessary to deliver exceptional private hospitality, including your name, email, contact telephone number, reservation dates, and dietary preferences for private culinary services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-charcoal mb-3">2. How We Use Your Data</h2>
              <p className="text-sm leading-relaxed">
                Your data is used solely to facilitate reservations, provide 24/7 guest concierge support, verify identity, and enhance your personalized recommendations. We never sell or lease your personal information to third-party marketers.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-charcoal mb-3">3. Data Protection & Security</h2>
              <p className="text-sm leading-relaxed">
                All financial transactions and identity verifications are encrypted end-to-end using industry-standard TLS protocols. Payment card details are tokenized through certified PCI-DSS compliant payment gateways.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-charcoal mb-3">4. Guest Rights</h2>
              <p className="text-sm leading-relaxed">
                You retain full right to access, rectify, or request deletion of your account and personal history at any time by contacting privacy@bungalowstay.com.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
