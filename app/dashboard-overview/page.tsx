'use client'

import * as React from 'react'
import Image from 'next/image'
import { Bell, LogOut, Search } from 'lucide-react'
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Area, AreaChart } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/dashboard/page"
import { Input } from "@/app/dashboard/input"

// Activity data for the graph
const activityData = Array.from({ length: 60 }, (_, i) => ({
  value: Math.floor(Math.random() * 40) + 30,
  label: `${i * 5}k`
})).map((item, index) => ({
  ...item,
  value: index === 24 ? 90 : item.value // Add peak at 25k
}))

// Projected content data
const projectedData = Array.from({ length: 5 }, (_, i) => ({
  year: 2024 + i,
  projected: Math.floor(Math.random() * 50) + 25,
  actual: Math.floor(Math.random() * 50) + 25
}))

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-[#0A0E29] text-white">
        <div className="flex h-full flex-col">
          <div className="p-6">
            <a href='landing-page'>
            <Image
              src="/dsalogo5.png?height=40&width=120"
              alt="Digital Scouting Africa"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            </a>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            <a href="dashboard-overview" className="flex items-center px-4 py-3 text-blue-900 bg-white rounded-lg">
              Overview
            </a>
            <a href="dashboard-players" className="flex items-center px-4 py-3 text-gray-300 hover:bg-blue-900/20 rounded-lg">
              Players
            </a>
            <a href="dashboard-users" className="flex items-center px-4 py-3 text-gray-300 hover:bg-blue-900/20 rounded-lg">
              Users
            </a>
            <a href="dashboard-agencies" className="flex items-center px-4 py-3 text-gray-300 hover:bg-blue-900/20 rounded-lg">
              Agencies
            </a>
            <a href="dashboard-content-management" className="flex items-center px-4 py-3 text-gray-300 hover:bg-blue-900/20 rounded-lg">
              Content management
            </a>
          </nav>
          <div className="p-4">
            <button className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/5 rounded-lg w-full">
              <LogOut className="mr-2 h-4 w-4" />
              <a
            href="login"
            
          >
            Logout
          </a>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex items-center space-x-3">
              <Image
                src="/Admin-jega.png?height=40&width=40"
                alt="Admin Jega"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <div className="font-medium">Admin Jega</div>
                <div className="text-sm text-gray-600"><a href="my-profile">Profile</a></div>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mb-8">
          <Card className="bg-[#FFD700]">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">350</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">New Signups</p>
              <p className="text-xs mt-1">Up today!</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">40,800</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Total</p>
              <p className="text-xs mt-1 text-green-600 flex items-center">
                <span className="mr-1">↑</span> 10% Up from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">100+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Total Scouts</p>
              <p className="text-xs mt-1 text-red-600 flex items-center">
                <span className="mr-1">↓</span> 8.5% Down from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">500</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Total Players</p>
              <p className="text-xs mt-1 text-green-600 flex items-center">
                <span className="mr-1">↑</span> 4% Up from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Site Activity Graph */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Site Activity Graph</CardTitle>
              <select className="text-sm border rounded-md px-2 py-1">
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option> May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0066FF" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#0066FF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0066FF" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Userbase */}
          <Card className="bg-white p-6 rounded-3xl">
      <CardHeader>
        <CardTitle className="text-3xl font-normal">Userbase</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[300px] w-[300px] mx-auto">
          {/* Progress Ring */}
          <svg className="h-full w-full" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="8"
              className="text-gray-200"
            />
            
            {/* Dots */}
            <circle cx="50" cy="10" r="3" fill="#0A0E29" />
            <circle cx="90" cy="50" r="3" fill="#0A0E29" />
            <circle cx="50" cy="90" r="3" fill="#0A0E29" />
            <circle cx="10" cy="50" r="3" fill="#0A0E29" />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#0A0E29]" />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold">1,200</span>
              <span className="text-gray-500">New Users</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#E2E8F0]" />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold">38,600</span>
              <span className="text-gray-500">Previous Users</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
          {/* Projected Content Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>Projected Content Analytics chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={projectedData}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="projected" 
                      stroke="#0066FF" 
                      strokeWidth={2} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      stroke="#FFB800" 
                      strokeWidth={2} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

