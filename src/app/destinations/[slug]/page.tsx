"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { Star, MapPin, Users, Calendar, ArrowRight, Sun, Thermometer, Mountain, ChevronRight, Compass } from "lucide-react"

interface DestinationInfo {
  name: string
  state: string
  tagline: string
  overview: string
  bestSeason: string
  climate: string
  travelTip: string
  heroImage: string
  properties: Array<{
    name: string
    slug: string
    price: string
    guests: number
    beds: number
    rating: number
    reviews: number
    tags: string[]
    img: string
  }>
}

const DESTINATIONS_DATA: Record<string, DestinationInfo> = {
  "lonavala": {
    name: "Lonavala",
    state: "Maharashtra",
    tagline: "Misty Sahyadri ridges, secluded valley estates & cool monsoon air",
    overview: "Perched high in the Western Ghats between Mumbai and Pune, Lonavala is celebrated for its verdant monsoon waterfalls, crisp mountain breezes, and architectural cliffside hideaways. Our private bungalows here feature heated pools, expansive lawn terraces, and panoramic cliffside sunrise views.",
    bestSeason: "July to February",
    climate: "18°C – 26°C · Hill Station",
    travelTip: "Just 2 hours driving from Mumbai via the Mumbai-Pune Expressway.",
    heroImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
    properties: [
      { name: "The Glasshouse", slug: "the-glasshouse", price: "24,000", guests: 8, beds: 4, rating: 4.9, reviews: 140, tags: ["Private Pool", "Forest View"], img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
      { name: "The Palm Villa", slug: "the-glasshouse", price: "18,000", guests: 6, beds: 3, rating: 4.8, reviews: 120, tags: ["Private Pool", "Valley View"], img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  "goa": {
    name: "Goa",
    state: "Goa",
    tagline: "Sun-drenched coastal luxury, historic Portuguese estates & tranquil backwaters",
    overview: "Beyond the coastline lies a world of tranquil palm-shaded avenues, centuries-old Portuguese villas, and private beachfront compounds. Experience fine dining, private speedboats, and sunset drinks on pristine secluded beaches.",
    bestSeason: "October to April",
    climate: "24°C – 32°C · Tropical Coast",
    travelTip: "Direct flights to MOPA and Dabolim airports; private airport transfers arranged.",
    heroImage: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1600&auto=format&fit=crop",
    properties: [
      { name: "Villa Serene", slug: "the-glasshouse", price: "35,000", guests: 6, beds: 3, rating: 4.8, reviews: 92, tags: ["Portuguese Colonial", "Assagao"], img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
      { name: "Sandy Shores", slug: "the-glasshouse", price: "28,000", guests: 10, beds: 5, rating: 4.8, reviews: 63, tags: ["Beachfront", "Private Pool"], img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  "alibaug": {
    name: "Alibaug",
    state: "Maharashtra",
    tagline: "Coastal enclave of grand architectural villas just a speedboat ride away",
    overview: "Known as the Hamptons of Mumbai, Alibaug blends pristine coastal quietude with lavish holiday homes. Coconut groves, historic fortresses, and wide quiet sands surround private estates equipped with private chefs and sprawling manicured lawns.",
    bestSeason: "October to May",
    climate: "22°C – 30°C · Coastal",
    travelTip: "Fast 20-minute Ro-Pax or speedboat transfer directly from Gateway of India to Mandwa.",
    heroImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",
    properties: [
      { name: "Serene Escape", slug: "the-glasshouse", price: "24,000", guests: 8, beds: 4, rating: 4.7, reviews: 98, tags: ["Chef Included", "Manicured Lawn"], img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
      { name: "The Grand Estate", slug: "the-glasshouse", price: "45,000", guests: 18, beds: 8, rating: 4.9, reviews: 58, tags: ["Celebration", "Private Chef"], img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  "mahabaleshwar": {
    name: "Mahabaleshwar",
    state: "Maharashtra",
    tagline: "Strawberry plateaus, crisp air and heritage colonial charm",
    overview: "Situated at 4,500 feet above sea level, Mahabaleshwar provides rejuvenating temperate weather year-round. Surrounded by dense evergreen forests and strawberry plantations, our private bungalows offer colonial fireplaces, glass verandas, and peaceful silence.",
    bestSeason: "September to June",
    climate: "15°C – 24°C · High Altitude",
    travelTip: "Convenient 4.5 hour scenic mountain drive from Mumbai or 2.5 hours from Pune.",
    heroImage: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1600&auto=format&fit=crop",
    properties: [
      { name: "Monsoon Retreat", slug: "the-glasshouse", price: "21,000", guests: 8, beds: 4, rating: 4.9, reviews: 112, tags: ["Heritage", "Fireplace"], img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  "karjat": {
    name: "Karjat",
    state: "Maharashtra",
    tagline: "Verdant riverside valleys and dramatic mountain backdrops",
    overview: "Tucked along the Ulhas River, Karjat is a paradise of flowing streams, hiking trails, and private countryside mansions. It is the premier quick retreat destination for quiet solitude, family weekend breaks, and poolside relaxation.",
    bestSeason: "July to March",
    climate: "20°C – 28°C · Riverside Valley",
    travelTip: "90 minutes from Mumbai via expressway.",
    heroImage: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1600&auto=format&fit=crop",
    properties: [
      { name: "The Cliff Estate", slug: "the-glasshouse", price: "18,000", guests: 10, beds: 4, rating: 5.0, reviews: 88, tags: ["Valley View", "Cinema Room"], img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  "coorg": {
    name: "Coorg",
    state: "Karnataka",
    tagline: "Endless coffee plantations, spice gardens & mist-laden hilltops",
    overview: "Known as the Scotland of India, Kodagu (Coorg) offers private luxury tucked inside thousand-acre heritage coffee estates. Wake up to fresh estate roasts, waterfall visits, and unmatched culinary traditions.",
    bestSeason: "October to May",
    climate: "16°C – 25°C · Highland",
    travelTip: "Easily reached via Kannur Airport (2 hrs) or Bangalore (5 hrs).",
    heroImage: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1600&auto=format&fit=crop",
    properties: [
      { name: "Estate 1920", slug: "the-glasshouse", price: "32,000", guests: 12, beds: 6, rating: 5.0, reviews: 45, tags: ["Plantation", "Private Chef"], img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" },
    ]
  }
}

export default function DestinationDetailPage() {
  const params = useParams()
  const slug = ((params?.slug as string) || "lonavala").toLowerCase()
  const dest = DESTINATIONS_DATA[slug] || DESTINATIONS_DATA["lonavala"]

  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <Header theme="light" />

      <main className="flex-1 pt-28 pb-24">
        {/* Breadcrumb */}
        <section className="container mx-auto px-6 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-xs text-charcoal/60 uppercase tracking-widest">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/destinations" className="hover:text-gold transition-colors">Destinations</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-charcoal font-bold">{dest.name}</span>
          </nav>
        </section>

        {/* Hero Section */}
        <section className="container mx-auto px-6 lg:px-12 mb-16">
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[460px] lg:min-h-[520px] flex items-end p-8 lg:p-16 shadow-float">
            <Image
              src={dest.heroImage}
              alt={dest.name}
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
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#1C2921] text-[10px] font-bold uppercase tracking-widest">
                  {dest.state}
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-4 leading-tight">
                {dest.name}
              </h1>
              <p className="text-[#1C2921]/80 text-lg md:text-xl font-light leading-relaxed">
                {dest.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Destination Facts Strip */}
        <section className="container mx-auto px-6 lg:px-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border border-[#D5E5D7] p-8 rounded-3xl shadow-soft">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#D5E5D7] flex items-center justify-center text-gold">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1">Best Time to Visit</p>
                <p className="font-serif text-lg text-[#1C2921] font-bold">{dest.bestSeason}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#D5E5D7] flex items-center justify-center text-gold">
                <Thermometer className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1">Climate</p>
                <p className="font-serif text-lg text-[#1C2921] font-bold">{dest.climate}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#D5E5D7] flex items-center justify-center text-gold">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1">Getting There</p>
                <p className="text-xs text-charcoal/80 leading-snug">{dest.travelTip}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Narrative */}
        <section className="container mx-auto px-6 lg:px-12 mb-20 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gold" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">About The Enclave</p>
            <div className="h-[1px] w-8 bg-gold" />
          </div>
          <p className="text-charcoal/80 text-lg md:text-xl font-light leading-relaxed">
            {dest.overview}
          </p>
        </section>

        {/* Available Bungalows in this Destination */}
        <section className="container mx-auto px-6 lg:px-12 mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-2">Our Portfolio</p>
              <h2 className="font-serif text-3xl md:text-5xl text-charcoal">
                Luxury Villas in {dest.name}
              </h2>
            </div>
            <Link
              href="/bungalows"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-gold transition-colors"
            >
              Browse All Bungalows <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dest.properties.map((prop, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                key={i}
                className="group flex flex-col bg-white border border-[#D5E5D7] hover:border-gold/40 rounded-2xl overflow-hidden shadow-soft hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-all duration-500"
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
                    <MapPin className="w-3.5 h-3.5 text-gold" /> {dest.name}, {dest.state}
                  </p>

                  <div className="flex gap-4 text-xs text-charcoal/70 mb-6 font-medium">
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-gold" /> {prop.guests} Guests</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-gold" /> {prop.beds} Bedrooms</span>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-5 border-t border-[#D5E5D7]">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">From</p>
                      <p className="font-serif text-xl text-[#1C2921] tracking-tight">₹{prop.price} <span className="text-xs font-sans font-normal text-[#1C2921]/50 tracking-widest uppercase">/ Night</span></p>
                    </div>
                    <Link
                      href={`/bungalows/${prop.slug}`}
                      className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-forest transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Other Destinations */}
        <section className="container mx-auto px-6 lg:px-12">
          <div className="bg-white border border-[#D5E5D7] rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-[#1C2921] mb-4">Explore More Destinations</h3>
            <p className="text-charcoal/70 text-sm max-w-xl mx-auto mb-8 font-light">
              From misty hills to private coastal waters, discover our handpicked homes across India.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {Object.keys(DESTINATIONS_DATA).map(key => (
                <Link
                  key={key}
                  href={`/destinations/${key}`}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    key === slug ? "bg-gold text-forest font-bold" : "bg-white text-charcoal hover:border-gold border border-[#D5E5D7] hover:text-white"
                  }`}
                >
                  {DESTINATIONS_DATA[key].name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
