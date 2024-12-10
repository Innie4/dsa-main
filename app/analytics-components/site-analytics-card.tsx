'use client'

import { Card, CardContent } from "@/app/dashboard/page"
import { LineChart, Line, ResponsiveContainer } from 'recharts'

const waveData = Array.from({ length: 20 }, (_, i) => ({
  value: Math.sin(i / 2) * 20 + 50
}))

export function SiteAnalyticsCard() {
  return (
    <Card className="bg-white text-black">
      <CardContent className="p-8 mt-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4 rounded-3xl border border-gray-800 p-6">
            <div className="text-gray-400 text-lg">New signups</div>
            <div className="text-4xl font-bold mb-8">50+</div>
            <div className="h-[100px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={waveData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#22C55E"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center text-green-500 text-lg">
              <span className="mr-1">↑</span>20%
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-gray-800 p-6">
            <div className="text-gray-400 text-md">User Sessions</div>
            <div className="text-4xl font-bold mb-8">30+</div>
            <div className="h-[100px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={waveData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#EF4444"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center text-red-500 text-lg">
              <span className="mr-1">↓</span>10%
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

