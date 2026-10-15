import Link from "next/link"
import { Home, CalendarDays, Users, MapPin, Building, Settings, LayoutDashboard, MessageSquare } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-[#FFFFFF] text-charcoal">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#EAEFEA] bg-white">
        <div className="flex h-16 items-center border-b border-[#EAEFEA] px-6">
          <span className="font-serif text-xl text-[#1C2921]">Admin Portal</span>
        </div>
        
        <nav className="space-y-1.5 p-4">
          <Link href="/admin" className="flex items-center gap-3 rounded-xl bg-gold text-forest font-semibold px-3.5 py-2.5 text-sm">
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </Link>
          <Link href="/admin/bookings" className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#F7FAF7] hover:text-white">
            <CalendarDays className="h-4 w-4" /> Bookings
          </Link>
          <Link href="/admin/properties" className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#F7FAF7] hover:text-white">
            <Building className="h-4 w-4" /> Properties
          </Link>
          <Link href="/admin/destinations" className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#F7FAF7] hover:text-white">
            <MapPin className="h-4 w-4" /> Destinations
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#F7FAF7] hover:text-white">
            <Users className="h-4 w-4" /> Users
          </Link>
          <Link href="/admin/reviews" className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#F7FAF7] hover:text-white">
            <MessageSquare className="h-4 w-4" /> Reviews
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-charcoal/70 transition-colors hover:bg-[#F7FAF7] hover:text-white">
            <Settings className="h-4 w-4" /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Header */}
        <header className="flex h-16 items-center justify-between border-b border-[#EAEFEA] bg-white px-8">
          <h1 className="font-serif text-lg text-[#1C2921]">Console Overview</h1>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs uppercase tracking-wider text-gold hover:underline">
              View Public Site
            </Link>
            <div className="h-8 w-8 rounded-full bg-gold text-forest flex items-center justify-center font-bold text-xs">
              A
            </div>
          </div>
        </header>

        <main className="flex-1 p-8 bg-radial-[circle_at_top,_var(--tw-gradient-stops)] from-[#F7FAF7] to-[#FFFFFF]">
          {children}
        </main>
      </div>
    </div>
  )
}
