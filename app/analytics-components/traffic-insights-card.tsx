'use client'

import { Card, CardContent } from "@/app/dashboard/page"
import { Progress } from "@/app/analytics/components/progress"
import { LineChart, Line, ResponsiveContainer } from 'recharts'

const waveData = Array.from({ length: 20 }, (_, i) => ({
  value: Math.sin(i / 2) * 20 + 50
}))

export function TrafficInsightsCard() {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <h3 className="text-lg font-semibold">Traffic insights</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Google Search</span>
            <span>80%</span>
          </div>
          <Progress value={80} />
          <div className="text-sm text-gray-500">Max. 500</div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Social Media referrals</span>
            <span>50%</span>
          </div>
          <Progress value={50} />
          <div className="text-sm text-gray-500">Max. 200</div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Online traffic</span>
            <span>30%</span>
          </div>
          <Progress value={30} />
          <div className="text-sm text-gray-500">Max. 350</div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Direct link</span>
            <span>85</span>
          </div>
          <Progress value={85} />
          <div className="text-sm text-gray-500">Max. 10+</div>
        </div>

        <div className="pt-4">
          <div className="flex justify-between items-center">
            <span>Revenue</span>
            <div className="flex items-center space-x-2">
              <span className="text-green-600">+20%</span>
              <span className="text-xl font-bold">1.1k+</span>
            </div>
          </div>
          <div className="h-[50px] mt-2">
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
        </div>
      </CardContent>
    </Card>
  )
}

