"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Sparkles, MapPin, Briefcase } from "lucide-react"

export default function CareersPage() {
  const openings = [
    {
      title: "Luxury Hospitality Ambassador",
      department: "Guest Experience",
      location: "Goa & Mumbai",
      type: "Full-Time",
      description: "Direct on-ground concierge host managing seamless villa check-ins, guest excursions, and bespoke culinary requests."
    },
    {
      title: "Portfolio Property Curator",
      department: "Acquisitions",
      location: "Mumbai / Hybrid",
      type: "Full-Time",
      description: "Discover, vet, and onboard architecturally distinctive villas across Maharashtra, Karnataka, and Goa."
    },
    {
      title: "Senior Full Stack Engineer (Next.js)",
      department: "Engineering",
      location: "Remote / Bangalore",
      type: "Full-Time",
      description: "Architect and build high-performance, cinematic digital booking experiences and internal property management systems."
    },
    {
      title: "Villa Operations Manager",
      department: "Operations",
      location: "Lonavala & Alibaug",
      type: "Full-Time",
      description: "Oversee immaculate housekeeping standards, estate maintenance teams, and private culinary staff across regional properties."
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#FFFFFF] text-charcoal">
      <Header />

      <main className="flex-1 pt-32 pb-24 bg-radial-[circle_at_top,_var(--tw-gradient-stops)] from-[#F7FAF7] to-[#FFFFFF]">
        {/* Hero */}
        <section className="container mx-auto px-6 lg:px-12 mb-20 text-center max-w-4xl">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gold" />
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">Join Our Team</p>
            <div className="h-[1px] w-12 bg-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1C2921] mb-8 tracking-tight">
            Craft the Future of Luxury Stays
          </h1>
          <p className="text-charcoal/70 text-lg md:text-xl font-light leading-relaxed">
            We are redefining experiential private travel across India. We look for passionate individuals who obsess over detail, design, and authentic hospitality.
          </p>
        </section>

        {/* Culture Values */}
        <section className="container mx-auto px-6 lg:px-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#EAEFEA] p-8 rounded-3xl shadow-soft">
              <Sparkles className="w-8 h-8 text-gold mb-6" />
              <h3 className="font-serif text-2xl text-[#1C2921] mb-3">Architectural Obsession</h3>
              <p className="text-charcoal/70 text-sm font-light leading-relaxed">
                We believe physical spaces deeply influence well-being. We celebrate authentic character over generic luxury.
              </p>
            </div>
            <div className="bg-white border border-[#EAEFEA] p-8 rounded-3xl shadow-soft">
              <CheckCircle2 className="w-8 h-8 text-gold mb-6" />
              <h3 className="font-serif text-2xl text-[#1C2921] mb-3">Frictionless Hospitality</h3>
              <p className="text-charcoal/70 text-sm font-light leading-relaxed">
                We eliminate the hassle of traditional hotels, providing total privacy backed by intuitive, anticipatory care.
              </p>
            </div>
            <div className="bg-white border border-[#EAEFEA] p-8 rounded-3xl shadow-soft">
              <Briefcase className="w-8 h-8 text-gold mb-6" />
              <h3 className="font-serif text-2xl text-[#1C2921] mb-3">Autonomy & Craft</h3>
              <p className="text-charcoal/70 text-sm font-light leading-relaxed">
                Small, empowered teams moving fast. We reward exceptional craftsmanship, proactive thinking, and empathy.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="container mx-auto px-6 lg:px-12 max-w-5xl mb-24">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold mb-2">Available Roles</p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1C2921]">Current Openings</h2>
          </div>

          <div className="space-y-6">
            {openings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EAEFEA] rounded-3xl p-8 shadow-soft hover:shadow-2xl hover:border-gold/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-gold/10 text-gold border border-gold/20 rounded-full">
                      {job.department}
                    </span>
                    <span className="text-xs text-charcoal/50 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold" /> {job.location}
                    </span>
                    <span className="text-xs text-charcoal/50">· {job.type}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#1C2921] mb-2">{job.title}</h3>
                  <p className="text-charcoal/70 text-sm font-light leading-relaxed">{job.description}</p>
                </div>
                <a
                  href={`mailto:careers@bungalowstay.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-light text-forest px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(201,169,110,0.5)] transition-all self-start md:self-center shrink-0"
                >
                  Apply Now <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
