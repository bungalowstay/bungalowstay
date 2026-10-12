import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, Mail } from "lucide-react"

export default function AdminUsersPage() {
  const users = [
    { name: "Rahul Sharma", email: "rahul@sharma.in", role: "Guest", bookings: 4, joined: "Aug 2026", status: "Verified" },
    { name: "Ananya Deshmukh", email: "ananya@gmail.com", role: "VIP Guest", bookings: 7, joined: "Jun 2026", status: "Verified" },
    { name: "Elena Rostova", email: "elena@villas.com", role: "Estate Host", bookings: 24, joined: "Jan 2026", status: "Host Superuser" },
    { name: "Vikram Mehta", email: "vikram@mehta.com", role: "Guest", bookings: 2, joined: "Sep 2026", status: "Verified" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-3xl text-charcoal">Registered Users</h2>
        <span className="text-xs font-bold text-charcoal/60 uppercase tracking-widest">{users.length} Total Users</span>
      </div>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="font-serif text-xl">User Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-sand/50 text-[10px] uppercase font-bold tracking-widest text-charcoal/50">
                <tr>
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Role</th>
                  <th className="pb-3">Bookings</th>
                  <th className="pb-3">Member Since</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/30">
                {users.map((u, i) => (
                  <tr key={i} className="hover:bg-sand/10">
                    <td className="py-4">
                      <p className="font-medium text-charcoal">{u.name}</p>
                      <p className="text-xs text-charcoal/50">{u.email}</p>
                    </td>
                    <td className="py-4">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sand/40 text-charcoal">
                        {u.role}
                      </span>
                    </td>
                    <td className="py-4 text-xs font-bold text-charcoal">{u.bookings} stays</td>
                    <td className="py-4 text-xs text-charcoal/60">{u.joined}</td>
                    <td className="py-4">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                        {u.status}
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
