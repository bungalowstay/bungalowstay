import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CheckCircle2, Clock, AlertCircle } from "lucide-react"

export default function CancellationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <Header theme="light" />

      <main className="flex-1 pt-32 pb-24">
        <section className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">Flexibility</p>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Cancellation & Refund Policy</h1>
            <p className="text-xs text-charcoal/50">Clear, transparent policies for peace of mind.</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white border border-beige rounded-3xl p-8 lg:p-10 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <h2 className="font-serif text-2xl text-charcoal">Flexible Tier (Default)</h2>
              </div>
              <ul className="space-y-3 text-sm text-charcoal/80">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold mt-1.5 shrink-0" />
                  <span><strong>Full 100% Refund:</strong> Cancel up to 14 days prior to check-in for a complete refund (minus standard gateway processing fee).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold mt-1.5 shrink-0" />
                  <span><strong>50% Refund:</strong> Cancel between 14 days and 7 days prior to check-in.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold mt-1.5 shrink-0" />
                  <span><strong>Non-Refundable:</strong> Cancellations made less than 7 days prior to arrival.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-beige rounded-3xl p-8 lg:p-10 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-gold" />
                <h2 className="font-serif text-2xl text-charcoal">Peak Season & Long Holidays</h2>
              </div>
              <p className="text-sm text-charcoal/80 leading-relaxed mb-4">
                During designated peak holiday periods (e.g. Diwali, Christmas & New Year's week), estates require a 30-day advance notice for full refund due to heightened demand and private staffing pre-commitments.
              </p>
            </div>

            <div className="bg-white border border-beige rounded-3xl p-8 lg:p-10 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-charcoal" />
                <h2 className="font-serif text-2xl text-charcoal">Extenuating Circumstances</h2>
              </div>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                In the event of severe weather emergencies or government travel restrictions, our concierge team will assist you in rescheduling your dates with zero change fees or issuing full stay credits.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
