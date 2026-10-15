import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"

// Social Icons SVGs
const SocialIcons = [
  {
    name: 'Instagram',
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    ),
    href: "#"
  },
  {
    name: 'Facebook',
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    ),
    href: "#"
  },
  {
    name: 'Twitter',
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
    ),
    href: "#"
  }
]

export function Footer() {
  return (
    <footer className="bg-white text-[#0F1A14] overflow-hidden relative border-t border-[#EAEFEA]">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-500/10 via-[#2E6B47]/40 to-emerald-500/10" />
      
      <div className="container mx-auto px-6 lg:px-12 pt-20 pb-12">
        {/* Top Section - Newsletter & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-8 group relative z-10" aria-label="Bungalow Stay Home">
              <div className="relative h-20 w-48 sm:h-24 sm:w-56 transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/logo.png" 
                  alt="Bungalow Stay Logo" 
                  fill
                  className="object-contain object-left drop-shadow-[0_2px_12px_rgba(46,107,71,0.12)]" 
                />
              </div>
            </Link>
            <p className="text-[#0F1A14]/75 text-sm leading-relaxed max-w-md mb-8 text-pretty">
              Discover India's most exceptional private homes and architectural masterworks. Hand-picked, rigorously inspected, and perfectly serviced for your next unforgettable luxury getaway.
            </p>
            
            <div className="flex gap-4">
              {SocialIcons.map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-full border border-[#EAEFEA] bg-[#F7FAF7] text-[#2E6B47] flex items-center justify-center hover:bg-[#2E6B47] hover:border-[#2E6B47] hover:text-white transition-all duration-300 shadow-sm">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center bg-[#F7FAF7] p-8 lg:p-10 rounded-3xl border border-[#EAEFEA]">
            <h3 className="font-serif text-3xl lg:text-4xl text-[#0F1A14] mb-3">The Art of the Escape</h3>
            <p className="text-[#0F1A14]/70 text-sm mb-6">Subscribe to our journal for exclusive access to new properties, curated itineraries, and insider travel stories.</p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white border border-[#EAEFEA] rounded-full px-6 py-4 text-sm text-[#0F1A14] placeholder:text-[#0F1A14]/40 focus:outline-none focus:border-[#2E6B47] focus:ring-2 focus:ring-[#2E6B47]/10 transition-all flex-1 shadow-sm"
              />
              <button 
                type="submit" 
                className="bg-[#2E6B47] hover:bg-[#245437] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 pt-16 border-t border-[#EAEFEA] mb-16">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2E6B47] mb-8">Destinations</h4>
            <ul className="space-y-4">
              <li><Link href="/destinations/goa" className="text-sm text-[#0F1A14]/70 hover:text-[#2E6B47] transition-colors block font-medium">Goa</Link></li>
              <li><Link href="/destinations/lonavala" className="text-sm text-[#0F1A14]/70 hover:text-[#2E6B47] transition-colors block font-medium">Lonavala</Link></li>
              <li><Link href="/destinations/alibaug" className="text-sm text-[#0F1A14]/70 hover:text-[#2E6B47] transition-colors block font-medium">Alibaug</Link></li>
              <li><Link href="/destinations/mahabaleshwar" className="text-sm text-[#0F1A14]/70 hover:text-[#2E6B47] transition-colors block font-medium">Mahabaleshwar</Link></li>
              <li><Link href="/destinations" className="text-xs font-bold text-[#2E6B47] hover:text-[#245437] transition-colors block mt-6 flex items-center gap-1">View All <ArrowRight className="w-3 h-3" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2E6B47] mb-8">Curated Stays</h4>
            <ul className="space-y-4">
              <li><Link href="/experiences/private-pools" className="text-sm text-[#0F1A14]/70 hover:text-[#2E6B47] transition-colors block font-medium">Private Pool Villas</Link></li>
              <li><Link href="/experiences/heritage" className="text-sm text-[#0F1A14]/70 hover:text-[#2E6B47] transition-colors block font-medium">Heritage Estates</Link></li>
              <li><Link href="/experiences/nature" className="text-sm text-[#0F1A14]/70 hover:text-[#2E6B47] transition-colors block font-medium">Nature Retreats</Link></li>
              <li><Link href="/experiences/pet-friendly" className="text-sm text-[#0F1A14]/70 hover:text-[#2E6B47] transition-colors block font-medium">Pet-Friendly Homes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2E6B47] mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-[#0F1A14]/70 hover:text-[#2E6B47] transition-colors block font-medium">Our Story</Link></li>
              <li><Link href="/journal" className="text-sm text-[#0F1A14]/70 hover:text-[#2E6B47] transition-colors block font-medium">The Journal</Link></li>
              <li><Link href="/careers" className="text-sm text-[#0F1A14]/70 hover:text-[#2E6B47] transition-colors block font-medium">Careers</Link></li>
              <li><Link href="/partner" className="text-sm text-[#0F1A14]/70 hover:text-[#2E6B47] transition-colors block font-medium">Partner With Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2E6B47] mb-8">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-[#0F1A14]/75">
                <MapPin className="w-5 h-5 text-[#2E6B47] shrink-0 mt-0.5" />
                <span className="leading-relaxed">12th Floor, The Estate<br/>Bandra West, Mumbai 400050</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0F1A14]/75">
                <Phone className="w-5 h-5 text-[#2E6B47] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0F1A14]/75">
                <Mail className="w-5 h-5 text-[#2E6B47] shrink-0" />
                <span>reservations@bungalowstay.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#EAEFEA] text-[11px] text-[#0F1A14]/50 tracking-wider uppercase">
          <p>© {new Date().getFullYear()} Bungalow Stay. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-[#2E6B47] transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-[#2E6B47] transition-colors">Privacy Policy</Link>
            <Link href="/cancellation" className="hover:text-[#2E6B47] transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
