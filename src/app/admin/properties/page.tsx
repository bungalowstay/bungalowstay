import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Plus, Star, MapPin } from "lucide-react"
import Link from "next/link"

export default function AdminPropertiesPage() {
  const properties = [
    { name: "The Glasshouse", loc: "Lonavala, Maharashtra", price: "₹24,000", rating: 4.9, status: "Active", bedrooms: 4, guests: 8 },
    { name: "Villa Serene", loc: "Assagao, Goa", price: "₹35,000", rating: 4.8, status: "Active", bedrooms: 3, guests: 6 },
    { name: "The Cliff Estate", loc: "Karjat, Maharashtra", price: "₹18,000", rating: 5.0, status: "Active", bedrooms: 4, guests: 10 },
    { name: "Sandy Shores", loc: "Goa", price: "₹28,000", rating: 4.8, status: "Active", bedrooms: 5, guests: 10 },
    { name: "Monsoon Retreat", loc: "Mahabaleshwar", price: "₹21,000", rating: 4.9, status: "Active", bedrooms: 4, guests: 8 },
    { name: "Estate 1920", loc: "Coorg, Karnataka", price: "₹32,000", rating: 5.0, status: "Active", bedrooms: 6, guests: 12 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-3xl text-charcoal">Property Portfolio</h2>
        <button className="flex items-center gap-2 bg-charcoal text-ivory px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold hover:text-charcoal transition-colors">
          <Plus className="w-4 h-4" /> Add New Estate
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((prop, idx) => (
          <Card key={idx} className="bg-white">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="font-serif text-xl">{prop.name}</CardTitle>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-widest">
                  {prop.status}
                </span>
              </div>
              <p className="text-xs text-charcoal/60 flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" /> {prop.loc}
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-xs text-charcoal/70 mb-4 pt-3 border-t border-sand/30">
                <span>{prop.bedrooms} Bedrooms · {prop.guests} Guests</span>
                <span className="flex items-center gap-1 font-bold text-gold">
                  <Star className="w-3.5 h-3.5 fill-current" /> {prop.rating}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <p className="font-serif text-lg font-bold text-charcoal">{prop.price} <span className="text-xs font-sans font-normal text-charcoal/50">/ night</span></p>
                <Link href="/bungalows/the-glasshouse" className="text-xs text-charcoal font-bold hover:underline">
                  Preview Live
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
