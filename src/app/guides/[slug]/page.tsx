"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ArrowLeft, Clock, Calendar, User, Share2, Bookmark, ArrowRight, ChevronRight } from "lucide-react"

interface GuideArticle {
  title: string
  category: string
  readTime: string
  date: string
  author: string
  heroImage: string
  intro: string
  content: string[]
  quote: string
  recommendedStay: {
    name: string
    slug: string
    loc: string
    img: string
    price: string
  }
}

const DEFAULT_GUIDE: GuideArticle = {
  title: "The Architectural Heritage of Goa's Oldest Villas",
  category: "Culture & Design",
  readTime: "6 min read",
  date: "September 15, 2026",
  author: "Aria D'Souza",
  heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",
  intro: "Beyond the palm-lined beaches and bustling markets of Goa lies a rich repository of architectural history — 18th-century Portuguese colonial manses that stand as testimonies to cross-cultural craftsmanship.",
  content: [
    "To step into a heritage Goan bungalow is to enter a world where time gently decelerates. Characterized by high balcões (stone-seated entrance verandas), red oxide floors, and mother-of-pearl window panes, these ancestral residences were intentionally positioned to catch cool coastal evening breezes while shielding residents from the tropical midday sun.",
    "The central courtyards, known locally as 'raj-aangan', serve as both climate control and sanctuary. Rainwater harvesting channels from centuries ago still water fragrant frangipani and jasmine plants, while high wooden ceilings framed with Burma teak provide natural thermal buffer.",
    "Restoring these homes without sacrificing their authentic soul requires extraordinary care. Artisanal plasterers use traditional oyster shells, lime, and jaggery mixtures rather than cement, ensuring the porous laterite walls can breathe during torrential monsoon cycles.",
    "Today, staying in a preserved Goan heritage villa offers a level of serene luxury that modern concrete luxury hotels simply cannot replicate. You are not merely checking into an accommodation; you are inhabiting an enduring family chronicle."
  ],
  quote: "Architecture in old Goa was never about imposing on the landscape; it was an intimate dialogue between the sea, the laterite earth, and the monsoon rain.",
  recommendedStay: {
    name: "Villa Serene",
    slug: "the-glasshouse",
    loc: "Assagao, Goa",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    price: "35,000"
  }
}

export default function GuideDetailPage() {
  const params = useParams()
  const slug = (params?.slug as string) || ""

  // Pretty title from slug if generic
  const displayTitle = slug
    ? slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : DEFAULT_GUIDE.title

  const article = {
    ...DEFAULT_GUIDE,
    title: slug.length > 5 ? displayTitle : DEFAULT_GUIDE.title
  }

  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <Header theme="light" />

      <main className="flex-1 pt-28 pb-24">
        {/* Breadcrumb */}
        <section className="container mx-auto px-6 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-xs text-charcoal/60 uppercase tracking-widest">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/guides" className="hover:text-gold transition-colors">Journal</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-charcoal font-bold truncate max-w-xs">{article.category}</span>
          </nav>
        </section>

        {/* Article Header */}
        <article className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-4 inline-block">
              {article.category}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-charcoal leading-tight mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-beige text-xs text-charcoal/60">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-medium text-charcoal">
                  <User className="w-3.5 h-3.5 text-gold" /> {article.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {article.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {article.readTime}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href)
                      alert("Article link copied to clipboard!")
                    }
                  }}
                  className="flex items-center gap-1.5 hover:text-gold transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" /> Share
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-float">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Intro Paragraph */}
          <p className="font-serif text-xl md:text-2xl text-charcoal/90 leading-relaxed mb-8 italic">
            "{article.intro}"
          </p>

          {/* Body Content */}
          <div className="space-y-6 text-charcoal/80 text-base md:text-lg font-light leading-relaxed mb-16">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Blockquote */}
          <blockquote className="my-12 p-8 border-l-2 border-gold bg-white border border-[#D5E5D7] rounded-r-2xl">
            <p className="font-serif text-xl md:text-2xl text-[#1C2921] italic leading-relaxed mb-3">
              "{article.quote}"
            </p>
            <cite className="text-xs uppercase font-bold tracking-widest text-gold not-italic">
              — Bungalow Stay Curators
            </cite>
          </blockquote>

          {/* Where to stay callout */}
          <div className="bg-white border border-[#D5E5D7] rounded-3xl p-8 my-16 shadow-2xl flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-full md:w-48 aspect-[4/3] rounded-2xl overflow-hidden shrink-0 border border-[#D5E5D7]">
              <Image
                src={article.recommendedStay.img}
                alt={article.recommendedStay.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">Featured Sanctuary</p>
              <h3 className="font-serif text-2xl text-[#1C2921] mb-2">{article.recommendedStay.name}</h3>
              <p className="text-xs text-charcoal/60 mb-4">{article.recommendedStay.loc} · From ₹{article.recommendedStay.price} / night</p>
              <Link
                href={`/bungalows/${article.recommendedStay.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:underline transition-colors"
              >
                View Residence <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Back to Guides */}
          <div className="pt-8 border-t border-beige flex justify-between items-center">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Journal
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
