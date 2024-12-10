'use client'

import { Card, CardContent } from "@/app/dashboard/page"
import { Button } from "@/app/dashboard/button"
import { BarChart, Bar, ResponsiveContainer } from 'recharts'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/analytics/components/select";

const activityData = ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => ({
  day,
  value: index === 3 ? 100 : Math.floor(Math.random() * 60) + 20,
}))

export function UserActivityCard() {
  return (
    <div>
              <div className="mb-4 flex items-center justify-between p-8">
                <h2 className="text-xl font-semibold">User Activity Insight</h2>
                <Select defaultValue="6months">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6months">Past 6 months</SelectItem>
                    <SelectItem value="3months">Past 3 months</SelectItem>
                    <SelectItem value="1month">Past month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-7 gap-2">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                      <div key={i} className="text-center">
                        <div
                          className={`h-24 w-5 rounded-lg bg-gray-100 ml-3 ${
                            i === 3 ? "bg-yellow-400 h-30" : ""
                          }`}
                        />
                        <div className="mt-2 text-sm">{day}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
  )
}

