import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, CalendarDays, TrendingUp, IndianRupee } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium font-sans">Total Revenue (Month)</CardTitle>
            <IndianRupee className="h-4 w-4 text-charcoal/50" />
          </CardHeader>
          <CardContent>
            <div className="font-serif text-2xl font-bold">₹12,45,000</div>
            <p className="text-xs text-forest">+14% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium font-sans">Active Bookings</CardTitle>
            <CalendarDays className="h-4 w-4 text-charcoal/50" />
          </CardHeader>
          <CardContent>
            <div className="font-serif text-2xl font-bold">142</div>
            <p className="text-xs text-charcoal/50">8 arriving today</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium font-sans">Occupancy Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-charcoal/50" />
          </CardHeader>
          <CardContent>
            <div className="font-serif text-2xl font-bold">78%</div>
            <p className="text-xs text-forest">+5% from last week</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium font-sans">New Users</CardTitle>
            <Users className="h-4 w-4 text-charcoal/50" />
          </CardHeader>
          <CardContent>
            <div className="font-serif text-2xl font-bold">89</div>
            <p className="text-xs text-charcoal/50">Since last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Bookings */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="font-serif text-xl">Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between border-b border-sand/50 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">The Glasshouse Villa</p>
                    <p className="text-sm text-charcoal/70">Rahul Sharma · Oct 12 - Oct 14</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹50,000</p>
                    <p className="text-xs text-forest">Confirmed</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Items */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="font-serif text-xl">Requires Attention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-amber-200 bg-amber-50 p-4">
                <div>
                  <p className="font-medium text-amber-800">Pending Review Moderation</p>
                  <p className="text-sm text-amber-700">3 new reviews require approval</p>
                </div>
                <button className="text-sm font-medium text-amber-800 underline">Review Now</button>
              </div>
              
              <div className="flex items-center justify-between rounded-lg border border-red-200 bg-red-50 p-4">
                <div>
                  <p className="font-medium text-red-800">Payment Failed</p>
                  <p className="text-sm text-red-700">Booking BNG-9021 failed capture</p>
                </div>
                <button className="text-sm font-medium text-red-800 underline">View Details</button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
