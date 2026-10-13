import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, CalendarDays, TrendingUp, IndianRupee } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white border border-[#E2EAE3] rounded-3xl shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs uppercase tracking-wider font-semibold text-charcoal/70">Total Revenue (Month)</CardTitle>
            <IndianRupee className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="font-serif text-3xl font-bold text-white">₹12,45,000</div>
            <p className="text-xs text-gold mt-1">+14% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white border border-[#E2EAE3] rounded-3xl shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs uppercase tracking-wider font-semibold text-charcoal/70">Active Bookings</CardTitle>
            <CalendarDays className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="font-serif text-3xl font-bold text-white">142</div>
            <p className="text-xs text-charcoal/60 mt-1">8 arriving today</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white border border-[#E2EAE3] rounded-3xl shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs uppercase tracking-wider font-semibold text-charcoal/70">Occupancy Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="font-serif text-3xl font-bold text-white">78%</div>
            <p className="text-xs text-gold mt-1">+5% from last week</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white border border-[#E2EAE3] rounded-3xl shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs uppercase tracking-wider font-semibold text-charcoal/70">New Users</CardTitle>
            <Users className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="font-serif text-3xl font-bold text-white">89</div>
            <p className="text-xs text-charcoal/60 mt-1">Since last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Bookings */}
        <Card className="bg-white border border-[#E2EAE3] rounded-3xl shadow-xl">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-white">Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between border-b border-[#E2EAE3] pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-[#1C2921]">The Glasshouse Villa</p>
                    <p className="text-xs text-charcoal/60">Rahul Sharma · Oct 12 - Oct 14</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#1C2921]">₹50,000</p>
                    <p className="text-xs text-gold font-bold">Confirmed</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Items */}
        <Card className="bg-white border border-[#E2EAE3] rounded-3xl shadow-xl">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-white">Requires Attention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-gold/30 bg-gold/10 p-4">
                <div>
                  <p className="font-medium text-gold">Pending Review Moderation</p>
                  <p className="text-xs text-charcoal/80">3 new reviews require approval</p>
                </div>
                <button className="text-xs font-bold uppercase tracking-wider text-gold hover:underline">Review Now</button>
              </div>
              
              <div className="flex items-center justify-between rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
                <div>
                  <p className="font-medium text-red-400">Payment Failed</p>
                  <p className="text-xs text-charcoal/80">Booking BNG-9021 failed capture</p>
                </div>
                <button className="text-xs font-bold uppercase tracking-wider text-red-400 hover:underline">View Details</button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
