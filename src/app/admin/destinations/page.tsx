import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plus } from "lucide-react"
import Link from "next/link"

export default function AdminDestinationsPage() {
  const destinations = [
    { name: "Lonavala", state: "Maharashtra", propertiesCount: 42, activeBookings: 38 },
    { name: "Alibaug", state: "Maharashtra", propertiesCount: 28, activeBookings: 24 },
    { name: "Goa", state: "Goa", propertiesCount: 35, activeBookings: 31 },
    { name: "Karjat", state: "Maharashtra", propertiesCount: 26, activeBookings: 19 },
    { name: "Mahabaleshwar", state: "Maharashtra", propertiesCount: 18, activeBookings: 15 },
    { name: "Coorg", state: "Karnataka", propertiesCount: 14, activeBookings: 12 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-3xl text-charcoal">Managed Destinations</h2>
        <button className="flex items-center gap-2 bg-charcoal text-ivory px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold hover:text-charcoal transition-colors">
          <Plus className="w-4 h-4" /> Add Destination
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((d, idx) => (
          <Card key={idx} className="bg-white">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="font-serif text-2xl">{d.name}</CardTitle>
                <span className="text-xs px-2.5 py-1 bg-sand/40 rounded-full font-medium text-charcoal/70">
                  {d.state}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-xs text-charcoal/70 my-3">
                <div className="flex justify-between">
                  <span>Listed Estates</span>
                  <span className="font-bold text-charcoal">{d.propertiesCount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Current Stays</span>
                  <span className="font-bold text-forest">{d.activeBookings} active</span>
                </div>
              </div>
              <div className="pt-3 border-t border-sand/30 flex justify-between items-center">
                <Link href={`/destinations/${d.name.toLowerCase()}`} className="text-xs font-bold text-gold hover:underline">
                  View Destination Page
                </Link>
                <button className="text-xs text-charcoal/60 hover:text-charcoal">Edit</button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
