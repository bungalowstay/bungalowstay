import Link from "next/link"
import { Home, CalendarDays, Users, MapPin, Building, Settings, LayoutDashboard, MessageSquare } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-sand/10">
      {/* Sidebar */}
      <aside className="w-64 border-r border-sand/50 bg-ivory">
        <div className="flex h-16 items-center border-b border-sand/50 px-6">
          <span className="font-serif text-xl text-charcoal">Admin Portal</span>
        </div>
        
        <nav className="space-y-1 p-4">
          <Link href="/admin" className="flex items-center gap-3 rounded-md bg-charcoal px-3 py-2 text-sm font-medium text-ivory">
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </Link>
          <Link href="/admin/bookings" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
            <CalendarDays className="h-4 w-4" /> Bookings
          </Link>
          <Link href="/admin/properties" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
            <Building className="h-4 w-4" /> Properties
          </Link>
          <Link href="/admin/destinations" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
            <MapPin className="h-4 w-4" /> Destinations
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
            <Users className="h-4 w-4" /> Users
          </Link>
          <Link href="/admin/reviews" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
            <MessageSquare className="h-4 w-4" /> Reviews
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-charcoal/70 transition-colors hover:bg-sand/30 hover:text-charcoal">
            <Settings className="h-4 w-4" /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Header */}
        <header className="flex h-16 items-center justify-between border-b border-sand/50 bg-ivory px-8">
          <h1 className="font-medium text-charcoal">Dashboard Overview</h1>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-charcoal hover:underline">
              View Public Site
            </Link>
            <div className="h-8 w-8 rounded-full bg-charcoal text-white flex items-center justify-center font-medium">
              A
            </div>
          </div>
        </header>

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
