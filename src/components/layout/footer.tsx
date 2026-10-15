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
    <footer className="bg-forest text-white/90 overflow-hidden relative">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-gold-light/20 via-gold/50 to-gold-light/20" />
      
      <div className="container mx-auto px-6 lg:px-12 pt-24 pb-12">
        {/* Top Section - Newsletter & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-10 group relative z-10" aria-label="Bungalow Stay Home">
              <div className="inline-flex items-center justify-center bg-white px-7 py-5 rounded-2xl shadow-xl border border-white/40 transition-all duration-300 group-hover:scale-105">
                <div className="relative h-20 w-44 sm:h-24 sm:w-52 flex-shrink-0">
                  <Image 
                    src="/logo.png" 
                    alt="Bungalow Stay Logo" 
                    fill
                    className="object-contain drop-shadow-sm" 
                  />
                </div>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-md mb-10 text-pretty">
              Discover India's most exceptional private homes and architectural masterworks. Hand-picked, rigorously inspected, and perfectly serviced for your next unforgettable luxury getaway.
            </p>
            
            <div className="flex gap-4">
              {SocialIcons.map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-ivory transition-all duration-300">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <h3 className="font-serif text-3xl lg:text-4xl text-white mb-4">The Art of the Escape</h3>
            <p className="text-white/60 text-sm mb-8">Subscribe to our journal for exclusive access to new properties, curated itineraries, and insider travel stories.</p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white/5 border border-[#EAEFEA] rounded-full px-6 py-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all flex-1"
              />
              <button 
                type="submit" 
                className="bg-gold text-ivory px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-forest transition-colors flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 pt-16 border-t border-[#EAEFEA] mb-16">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-8">Destinations</h4>
            <ul className="space-y-4">
              <li><Link href="/destinations/goa" className="text-sm text-white/70 hover:text-gold transition-colors block">Goa</Link></li>
              <li><Link href="/destinations/lonavala" className="text-sm text-white/70 hover:text-gold transition-colors block">Lonavala</Link></li>
              <li><Link href="/destinations/alibaug" className="text-sm text-white/70 hover:text-gold transition-colors block">Alibaug</Link></li>
              <li><Link href="/destinations/mahabaleshwar" className="text-sm text-white/70 hover:text-gold transition-colors block">Mahabaleshwar</Link></li>
              <li><Link href="/destinations" className="text-xs font-medium text-white/90 hover:text-gold transition-colors block mt-6 flex items-center gap-1">View All <ArrowRight className="w-3 h-3" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-8">Curated Stays</h4>
            <ul className="space-y-4">
              <li><Link href="/experiences/private-pools" className="text-sm text-white/70 hover:text-gold transition-colors block">Private Pool Villas</Link></li>
              <li><Link href="/experiences/heritage" className="text-sm text-white/70 hover:text-gold transition-colors block">Heritage Estates</Link></li>
              <li><Link href="/experiences/nature" className="text-sm text-white/70 hover:text-gold transition-colors block">Nature Retreats</Link></li>
              <li><Link href="/experiences/pet-friendly" className="text-sm text-white/70 hover:text-gold transition-colors block">Pet-Friendly Homes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-white/70 hover:text-gold transition-colors block">Our Story</Link></li>
              <li><Link href="/journal" className="text-sm text-white/70 hover:text-gold transition-colors block">The Journal</Link></li>
              <li><Link href="/careers" className="text-sm text-white/70 hover:text-gold transition-colors block">Careers</Link></li>
              <li><Link href="/partner" className="text-sm text-white/70 hover:text-gold transition-colors block">Partner With Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-8">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">12th Floor, The Estate<br/>Bandra West, Mumbai 400050</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>reservations@bungalowstay.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#EAEFEA] text-[11px] text-white/40 tracking-wider uppercase">
          <p>© {new Date().getFullYear()} Bungalow Stay. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cancellation" className="hover:text-white transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
