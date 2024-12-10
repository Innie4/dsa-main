'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Bell, Search, LogOut, History, MessageSquare, Trash2, ChevronLeft, ChevronRight } from 'lucide-react'
import { Input } from "@/app/dashboard/input"
import { Card, CardContent } from "@/app/dashboard/page"

// Types
interface Player {
  id: string
  name: string
  avatar: string
  nationality: string
  age: string
  position: string
  videosUploaded: number
  isActive?: boolean
}

interface NavItem {
  label: string
  href: string
  active?: boolean
}

// Sample data
const players: Player[] = Array(9).fill(null).map((_, i) => ({
  id: `${i + 1}`,
  name: 'Oluwa Powers',
  avatar: '/DestinyChambers.png?height=40&width=40',
  nationality: 'Nigeria',
  age: '23 yrs',
  position: 'Midfielder',
  videosUploaded: 3,
  isActive: i === 8 ? false : true
}))

export default function PlayerDashboard() {
  const [searchQuery, setSearchQuery] = useState('')

  const navItems: NavItem[] = [
    { label: 'Overview', href: 'dashboard-overview' },
    { label: 'Players', href: 'dashboard-players', active: true },
    { label: 'Users', href: 'dashboard-users' },
    { label: 'Agencies', href: 'dashboard-agencies' },
    { label: 'Content management', href: 'dashboard-content-management' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-[#0A0E29] text-white">
        <div className="flex h-full flex-col">
          <div className="p-6">
            <a href="/">
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
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-lg ${
                  item.active 
                    ? 'bg-white text-[#0A0E29]' 
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
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
      <main className="ml-64 flex-1">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {/* Stats Card */}
          <Card className="mb-8 max-w-md bg-blue-50">
            <CardContent className="grid grid-cols-[1fr,auto] gap-6 p-8 mt-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total Players</h3>
                <p className="text-2xl font-bold mt-1">500</p>
                <div className="mt-4 flex items-center text-sm">
                  <svg className="h-4 w-4 text-green-500 mr-1 mt-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-500">4%</span>
                  <span className="ml-1 text-gray-500">Up from last month</span>
                </div>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mt-2">
                <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
            </CardContent>
          </Card>

          {/* Players Section */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">Players Management Section</h2>
              <p className="mt-2 text-gray-600">
                Welcome to the Players Management section, where you can oversee all player profiles, monitor activity,
                and ensure accurate and up-to-date information. Easily review and approve new profiles, flag accounts,
                or delete accounts that are no longer active.
              </p>
            </div>

            {/* Players Table */}
            <div className="overflow-x-auto ">
              <table className="w-full ">
                <thead>
                  <tr className="bg-blue-50 border-y">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">NAME</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">NATIONALITY</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      AGE
                      <button className="ml-1 text-gray-400 hover:text-gray-600">
                        ?
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      POSITION
                      <button className="ml-1 text-gray-400 hover:text-gray-600">
                        ?
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      VIDEOS UPLOADED
                      <button className="ml-1 text-gray-400 hover:text-gray-600">
                        ?
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player, index) => (
                    <tr key={player.id} className="border-b last:border-b-0">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Image
                            src={player.avatar}
                            alt={player.name}
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full mr-3"
                          />
                          <div>
                 
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img src="carbon_location.png" alt="" />
                          {player.nationality}
                        </div>
                      </td>
                      <td className="px-6 py-4">{player.age}</td>
                      <td className="px-6 py-4">{player.position}</td>
                      <td className="px-6 py-4">{player.videosUploaded}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <button className="text-gray-400 hover:text-gray-600">
                            <History className="h-5 w-5" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <MessageSquare className="h-5 w-5" />
                          </button>
                          <button className="text-red-400 hover:text-red-600">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t">
            <div className="text-sm text-gray-500">
                • Inactive user
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-5 lg:justify-center mt-4 mb-12">
                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
      </main>
    </div>
  )
}

