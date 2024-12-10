'use client'

import { Card, CardContent } from "@/app/dashboard/page"
import { LineChart, Line, ResponsiveContainer } from 'recharts'

const waveData = Array.from({ length: 20 }, (_, i) => ({
  value: Math.sin(i / 2) * 20 + 50
}))

export function TotalUsersCard() {
  return (
    <Card className="bg-[#0A0E29] text-white">
      <CardContent className="p-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Total users</h3>
          <div className="text-4xl font-bold">400+</div>
        </div>
        <div className="h-[100px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={waveData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#fff"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

