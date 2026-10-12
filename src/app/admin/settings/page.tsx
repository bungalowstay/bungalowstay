"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Sliders, Shield, Bell } from "lucide-react"

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false)

  return (
    <div className="space-y-6 max-w-3xl">
      <h2 className="font-serif text-3xl text-charcoal">Platform Settings</h2>

      {saved && (
        <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl flex items-center gap-2 text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Platform configurations saved successfully.
        </div>
      )}

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="font-serif text-xl">General Marketplace Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => { e.preventDefault(); setSaved(true) }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Platform Name</label>
                <input defaultValue="Bungalow Stay" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Support Helpline</label>
                <input defaultValue="+91 (022) 8000-STAY" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Default Currency</label>
                <select className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm">
                  <option>INR (₹)</option>
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/70 mb-2">Commission Rate (%)</label>
                <input defaultValue="15" type="number" className="w-full px-4 py-3 border border-beige rounded-xl bg-ivory/30 focus:outline-none focus:border-gold text-sm" />
              </div>
            </div>

            <div className="pt-4 border-t border-sand/30 flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-charcoal text-ivory rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-colors"
              >
                Save Settings
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
