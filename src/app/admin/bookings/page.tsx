import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, CheckCircle2, Clock, MapPin } from "lucide-react"

export default function AdminBookingsPage() {
  const bookings = [
    { id: "BNG-9021", guest: "Rahul Sharma", email: "rahul@sharma.in", villa: "The Glasshouse", loc: "Lonavala", dates: "Oct 12 – Oct 14, 2026", amount: "₹50,000", status: "Confirmed" },
    { id: "BNG-9022", guest: "Ananya Deshmukh", email: "ananya@gmail.com", villa: "Villa Serene", loc: "Goa", dates: "Oct 18 – Oct 22, 2026", amount: "₹1,40,000", status: "Confirmed" },
    { id: "BNG-9023", guest: "Vikram Mehta", email: "vikram@mehta.com", villa: "The Cliff Estate", loc: "Karjat", dates: "Oct 24 – Oct 26, 2026", amount: "₹36,000", status: "Pending Check-in" },
    { id: "BNG-9024", guest: "Pooja Hegde", email: "pooja@hegde.co", villa: "Monsoon Retreat", loc: "Mahabaleshwar", dates: "Nov 02 – Nov 05, 2026", amount: "₹63,000", status: "Confirmed" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-3xl text-charcoal">Manage Bookings</h2>
        <span className="text-xs bg-forest/10 text-forest px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
          {bookings.length} Active Bookings
        </span>
      </div>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="font-serif text-xl">All Reservations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-sand/50 text-[10px] uppercase font-bold tracking-widest text-charcoal/50">
                <tr>
                  <th className="pb-3">Booking ID</th>
                  <th className="pb-3">Guest</th>
                  <th className="pb-3">Villa</th>
                  <th className="pb-3">Dates</th>
                  <th className="pb-3">Total Amount</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/30">
                {bookings.map((b) => (
                  <tr key={b.id} className="hover:bg-sand/10">
                    <td className="py-4 font-mono text-xs text-charcoal/70">{b.id}</td>
                    <td className="py-4">
                      <p className="font-medium text-charcoal">{b.guest}</p>
                      <p className="text-xs text-charcoal/50">{b.email}</p>
                    </td>
                    <td className="py-4">
                      <p className="font-medium text-charcoal">{b.villa}</p>
                      <p className="text-xs text-charcoal/50 flex items-center gap-1"><MapPin className="w-3 h-3" /> {b.loc}</p>
                    </td>
                    <td className="py-4 text-xs text-charcoal/70">{b.dates}</td>
                    <td className="py-4 font-serif font-bold text-charcoal">{b.amount}</td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-forest/10 text-forest">
                        <CheckCircle2 className="w-3 h-3" /> {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
