"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { Star, MapPin, Users, Calendar, ArrowRight, Compass, ShieldCheck, Sparkles, ChevronRight } from "lucide-react"

interface ExperienceData {
  title: string
  tagline: string
  description: string
  heroImage: string
  highlights: string[]
  properties: Array<{
    name: string
    slug: string
    loc: string
    price: string
    guests: number
    beds: number
    rating: number
    reviews: number
    tags: string[]
    img: string
  }>
}

const EXPERIENCES_DATA: Record<string, ExperienceData> = {
  "heritage-estates": {
    title: "Heritage Estates",
    tagline: "Step back in time in meticulously restored colonial bungalows & ancestral estates",
    description: "Immerse yourself in timeless architecture, soaring ceilings, antique teak woodwork, and tranquil courtyard verandas. Every heritage property in our portfolio has been conserved with contemporary luxury comforts while preserving its rich historic legacy.",
    heroImage: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Century-old colonial architecture", "Curated heritage walking trails", "Antique furnishings & private libraries", "Private vintage dining & heirloom recipes"],
    properties: [
      { name: "Estate 1920", slug: "the-glasshouse", loc: "Coorg, Karnataka", price: "32,000", guests: 12, beds: 6, rating: 5.0, reviews: 45, tags: ["Plantation", "Heritage"], img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" },
      { name: "Monsoon Retreat", slug: "the-glasshouse", loc: "Mahabaleshwar, Maharashtra", price: "21,000", guests: 8, beds: 4, rating: 4.9, reviews: 112, tags: ["Heritage", "Valley View"], img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop" },
      { name: "Villa Serene Heritage", slug: "the-glasshouse", loc: "Assagao, Goa", price: "35,000", guests: 6, beds: 3, rating: 4.8, reviews: 92, tags: ["Portuguese Colonial", "Courtyard"], img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  "private-pool-retreats": {
    title: "Private Pool Retreats",
    tagline: "Uninterrupted aquatic luxury, exclusively and privately yours",
    description: "Designed for those who crave privacy and immersion. Bask under open skies in temperature-controlled infinity pools overlooking misty mountain valleys, azure coastal coves, and lush tropical gardens.",
    heroImage: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Heated private infinity pools", "Poolside cabanas & sunken lounge bars", "Floating breakfast experiences", "Starlit night swimming with underwater lighting"],
    properties: [
      { name: "The Palm Villa", slug: "the-glasshouse", loc: "Lonavala, Maharashtra", price: "18,000", guests: 6, beds: 3, rating: 4.8, reviews: 120, tags: ["Private Pool", "Heated"], img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop" },
      { name: "The Glasshouse", slug: "the-glasshouse", loc: "Lonavala, Maharashtra", price: "24,000", guests: 8, beds: 4, rating: 4.9, reviews: 140, tags: ["Infinity Pool", "Forest View"], img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
      { name: "Sandy Shores Pool Villa", slug: "the-glasshouse", loc: "Goa", price: "28,000", guests: 10, beds: 5, rating: 4.8, reviews: 63, tags: ["Private Pool", "Beachfront"], img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  "wilderness-lodges": {
    title: "Wilderness Lodges",
    tagline: "Immersive nature experiences tucked into pristine sanctuaries far from the city",
    description: "Where untouched wild landscapes meet modern architectural elegance. Wake to the calls of native birds, take tea on expansive wooden decks hovering over streams, and breathe clean mountain air.",
    heroImage: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Secluded forest & riverfront settings", "Private guided treks & bird watching", "Outdoor fire pits & stargazing telescopes", "Organic farm-to-table culinary experiences"],
    properties: [
      { name: "The Cliff Villa", slug: "the-glasshouse", loc: "Karjat, Maharashtra", price: "16,000", guests: 6, beds: 3, rating: 4.9, reviews: 76, tags: ["Nature", "Riverfront"], img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop" },
      { name: "Estate 1920", slug: "the-glasshouse", loc: "Coorg, Karnataka", price: "32,000", guests: 12, beds: 6, rating: 5.0, reviews: 45, tags: ["Plantation", "Wildlife"], img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" },
      { name: "Monsoon Retreat", slug: "the-glasshouse", loc: "Mahabaleshwar, Maharashtra", price: "21,000", guests: 8, beds: 4, rating: 4.9, reviews: 112, tags: ["Wilderness", "Mist Valley"], img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  "celebration-homes": {
    title: "Celebration Homes",
    tagline: "Grand spaces designed for unforgettable milestones and gatherings",
    description: "Generously appointed sprawling estates created specifically for multi-generational family reunions, intimate weddings, corporate retreats, and special celebrations.",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Expansive event lawns & banquet terraces", "Full commercial kitchens & private culinary teams", "High-capacity en-suite accommodations", "Bespoke event decor & concierge planning"],
    properties: [
      { name: "The Grand Estate", slug: "the-glasshouse", loc: "Alibaug, Maharashtra", price: "45,000", guests: 18, beds: 8, rating: 4.9, reviews: 58, tags: ["Event Lawn", "Private Chef"], img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" },
      { name: "The Glasshouse", slug: "the-glasshouse", loc: "Lonavala, Maharashtra", price: "24,000", guests: 12, beds: 5, rating: 4.9, reviews: 140, tags: ["Celebration", "Infinity Pool"], img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
      { name: "Sandy Shores", slug: "the-glasshouse", loc: "Goa", price: "28,000", guests: 14, beds: 6, rating: 4.8, reviews: 63, tags: ["Beachfront", "Lawn"], img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  "pet-friendly-escapes": {
    title: "Pet-Friendly Escapes",
    tagline: "Because luxury is truly complete when shared with your four-legged family",
    description: "Private bungalows featuring secure fenced gardens, lush open lawns, and pet-welcoming amenities, so your pets can roam freely and happily alongside you.",
    heroImage: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Secure, fenced private yards & gardens", "Dedicated pet bedding, bowls & welcome treats", "Nearby pet-friendly trails & beaches", "Personal chef meals customized for pets"],
    properties: [
      { name: "Serene Escape", slug: "the-glasshouse", loc: "Alibaug, Maharashtra", price: "24,000", guests: 8, beds: 4, rating: 4.7, reviews: 98, tags: ["Pet Friendly", "Large Lawn"], img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
      { name: "The Cliff Villa", slug: "the-glasshouse", loc: "Karjat, Maharashtra", price: "16,000", guests: 6, beds: 3, rating: 4.9, reviews: 76, tags: ["Pet Friendly", "Open Meadow"], img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop" },
      { name: "Monsoon Retreat", slug: "the-glasshouse", loc: "Mahabaleshwar, Maharashtra", price: "21,000", guests: 8, beds: 4, rating: 4.9, reviews: 112, tags: ["Pet Friendly", "Gardens"], img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop" },
    ]
  }
}

// Aliases mapping for short links like /experiences/heritage, /experiences/pools, etc.
const SLUG_ALIASES: Record<string, string> = {
  "heritage": "heritage-estates",
  "pools": "private-pool-retreats",
  "private-pools": "private-pool-retreats",
  "nature": "wilderness-lodges",
  "pet-friendly": "pet-friendly-escapes",
  "celebration": "celebration-homes"
}

export default function ExperienceDetailPage() {
  const params = useParams()
  const rawSlug = (params?.slug as string) || "heritage-estates"
  const normalizedSlug = SLUG_ALIASES[rawSlug] || rawSlug
  const experience = EXPERIENCES_DATA[normalizedSlug] || EXPERIENCES_DATA["heritage-estates"]

  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <Header theme="light" />

      <main className="flex-1 pt-28 pb-24">
        {/* Breadcrumb */}
        <section className="container mx-auto px-6 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-xs text-charcoal/60 uppercase tracking-widest">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/experiences" className="hover:text-gold transition-colors">Experiences</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-charcoal font-bold">{experience.title}</span>
          </nav>
        </section>

        {/* Hero Section */}
        <section className="container mx-auto px-6 lg:px-12 mb-16">
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[460px] lg:min-h-[540px] flex items-end p-8 lg:p-16 shadow-float">
            <Image
              src={experience.heroImage}
              alt={experience.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-3xl text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/90 text-charcoal text-[10px] font-bold uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" /> Curated Collection
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 leading-tight">
                {experience.title}
              </h1>
              <p className="text-[#1C2921]/80 text-base md:text-xl font-light leading-relaxed">
                {experience.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story & Highlights */}
        <section className="container mx-auto px-6 lg:px-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-gold" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">The Ethos</p>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
                Curated for Uncompromising Comfort
              </h2>
              <p className="text-charcoal/70 text-base md:text-lg font-light leading-relaxed mb-6">
                {experience.description}
              </p>
              <p className="text-charcoal/70 text-base md:text-lg font-light leading-relaxed">
                Every reservation includes an assigned Experience Ambassador, private check-in, premium linens, housekeeping, and available private culinary chef services.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white border border-[#EAEFEA] p-8 rounded-3xl shadow-soft">
              <h3 className="font-serif text-xl text-[#1C2921] mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold" /> Collection Inclusions
              </h3>
              <ul className="space-y-4">
                {experience.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-charcoal/80">
                    <span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Bungalows for this Experience */}
        <section className="container mx-auto px-6 lg:px-12 mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold mb-2">Available Homes</p>
              <h2 className="font-serif text-3xl md:text-5xl text-[#1C2921]">
                Handpicked Stays
              </h2>
            </div>
            <Link
              href="/bungalows"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:underline transition-colors"
            >
              Explore All Homes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experience.properties.map((prop, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                key={i}
                className="group flex flex-col bg-white border border-[#EAEFEA] hover:border-gold/30 rounded-3xl overflow-hidden shadow-soft hover:shadow-2xl transition-all duration-500"
              >
                <Link href={`/bungalows/${prop.slug}`} className="relative aspect-[4/3] overflow-hidden block">
                  <Image
                    src={prop.img}
                    alt={prop.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {prop.tags.map(tag => (
                      <span key={tag} className="bg-white/80 backdrop-blur-md text-gold text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full font-bold border border-gold/20 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <Link href={`/bungalows/${prop.slug}`}>
                      <h3 className="font-serif text-2xl text-[#1C2921] group-hover:text-gold transition-colors">{prop.name}</h3>
                    </Link>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-gold fill-gold" />
                      <span className="text-sm font-bold text-[#1C2921]">{prop.rating}</span>
                    </div>
                  </div>

                  <p className="text-xs text-charcoal/60 mb-5 flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> {prop.loc}
                  </p>

                  <div className="flex gap-4 text-xs text-charcoal/70 mb-6 font-medium">
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-gold" /> {prop.guests} Guests</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-gold" /> {prop.beds} Bedrooms</span>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-5 border-t border-[#EAEFEA]">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">From</p>
                      <p className="font-serif text-xl text-[#1C2921] tracking-tight">₹{prop.price} <span className="text-xs font-sans font-normal text-[#1C2921]/50 tracking-widest uppercase">/ Night</span></p>
                    </div>
                    <Link
                      href={`/bungalows/${prop.slug}`}
                      className="w-12 h-12 rounded-full border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-forest transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Concierge Booking Banner */}
        <section className="container mx-auto px-6 lg:px-12">
          <div className="bg-white border border-[#EAEFEA] rounded-3xl p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-xl">
              <p className="text-gold text-[10px] font-bold uppercase tracking-[0.25em] mb-3">Private Concierge</p>
              <h3 className="font-serif text-3xl md:text-4xl text-[#1C2921] mb-4">Need help choosing your stay?</h3>
              <p className="text-charcoal/70 text-sm md:text-base font-light leading-relaxed">
                Our bespoke travel curators can handpick estates matching your exact group size, dietary preferences, and travel dates.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-gold to-gold-light text-forest font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:shadow-[0_0_25px_rgba(201,169,110,0.5)] transition-all"
              >
                Inquire With Concierge
              </Link>
              <Link
                href="/experiences"
                className="border border-white/20 hover:border-gold text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:text-gold transition-colors"
              >
                All Collections
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
