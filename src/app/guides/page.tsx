import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFFFF] text-[#1C2921]">
      <Header theme="light" />
      
      <main className="flex-1 pt-32 pb-24">
        
        {/* HEADER SECTION */}
        <section className="container mx-auto px-6 lg:px-12 mb-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-4">THE JOURNAL</p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#1C2921] mb-6">
              Travel & Lifestyle
            </h1>
            <p className="text-[#1C2921]/70 text-lg font-light leading-relaxed">
              Stories, guides, and inspiration for your next getaway.
            </p>
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "The Architectural Heritage of Goa's Oldest Villas", cat: "Culture", date: "Sep 15, 2026", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop" },
              { title: "A Weekend Guide to Alibaug's Hidden Beaches", cat: "Guides", date: "Sep 10, 2026", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
              { title: "Designing the Perfect Private Pool Retreat", cat: "Design", date: "Sep 05, 2026", img: "https://images.unsplash.com/photo-1572364769167-198dcb7b520c?q=80&w=800&auto=format&fit=crop" },
            ].map((post, i) => (
              <Link href={`/guides/${post.title.toLowerCase().replace(/ /g, '-')}`} key={i} className="group block p-5 rounded-2xl bg-white border border-[#EAEFEA] hover:border-gold/40 transition-all duration-300">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex gap-4 items-center text-[10px] font-bold uppercase tracking-widest text-gold mb-3">
                  <span>{post.cat}</span>
                  <span>·</span>
                  <span className="text-[#1C2921]/50">{post.date}</span>
                </div>
                <h3 className="font-serif text-2xl text-[#1C2921] group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
