'use client'

import { Card, CardContent } from "@/app/dashboard/page"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'

const browserData = [
  { subject: 'Jan', Safari: 80, Firefox: 60, Chrome: 70, Edge: 50 },
  { subject: 'Feb', Safari: 70, Firefox: 65, Chrome: 80, Edge: 55 },
  { subject: 'Mar', Safari: 75, Firefox: 70, Chrome: 85, Edge: 60 },
  { subject: 'Apr', Safari: 85, Firefox: 75, Chrome: 90, Edge: 65 },
  { subject: 'May', Safari: 90, Firefox: 80, Chrome: 95, Edge: 70 },
  { subject: 'Jun', Safari: 95, Firefox: 85, Chrome: 100, Edge: 75 },
]

export function BrowserRadarCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Browser Radar</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={browserData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Safari"
                dataKey="Safari"
                stroke="#6366F1"
                fill="#6366F1"
                fillOpacity={0.5}
              />
              <Radar
                name="Firefox"
                dataKey="Firefox"
                stroke="#EC4899"
                fill="#EC4899"
                fillOpacity={0.5}
              />
              <Radar
                name="Chrome"
                dataKey="Chrome"
                stroke="#F43F5E"
                fill="#F43F5E"
                fillOpacity={0.5}
              />
              <Radar
                name="Edge"
                dataKey="Edge"
                stroke="#14B8A6"
                fill="#14B8A6"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

