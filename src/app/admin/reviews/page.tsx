import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, CheckCircle, XCircle } from "lucide-react"

export default function AdminReviewsPage() {
  const reviews = [
    { guest: "Sarah & James", villa: "The Glasshouse", rating: 5, date: "Sep 28, 2026", status: "Published", text: "The attention to detail was magnificent. From the architecture to the private chef, every moment felt curated specifically for us." },
    { guest: "Priya Nair", villa: "Villa Serene", rating: 5, date: "Sep 22, 2026", status: "Published", text: "Exceptional heritage restoration. The antique wood finishes and peaceful courtyard made this the best stay in Goa." },
    { guest: "Aditya Roy", villa: "The Cliff Estate", rating: 5, date: "Oct 01, 2026", status: "Pending Review", text: "Spectacular valley sunrise and prompt housekeeping staff. Will definitely visit again with family." },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-3xl text-charcoal">Guest Reviews & Moderation</h2>
        <span className="text-xs font-bold text-forest bg-forest/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
          4.92 Average Rating
        </span>
      </div>

      <div className="space-y-4">
        {reviews.map((rev, idx) => (
          <Card key={idx} className="bg-white">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal">{rev.guest}</h3>
                  <p className="text-xs text-charcoal/60">{rev.villa} · {rev.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${rev.status === "Published" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                    {rev.status}
                  </span>
                </div>
              </div>
              <p className="text-charcoal/80 text-sm leading-relaxed mb-4">"{rev.text}"</p>
              <div className="flex justify-end gap-3 pt-3 border-t border-sand/30">
                <button className="text-xs text-charcoal/60 hover:text-charcoal">Archive</button>
                <button className="text-xs font-bold text-forest hover:underline">Approve & Feature</button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
