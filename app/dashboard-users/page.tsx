'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Input } from "@/app/dashboard/input"
import { Bell, Search, History, MessageSquare, Trash2, ChevronLeft, ChevronRight, LogOut } from 'lucide-react'


// Types
interface User {
  id: string
  name: string
  avatar: string
  nationality: string
  email: string
  signUpDate: string
  isActive?: boolean
}

interface MetricCard {
  title: string
  value: string
  trend: string
  percentage: string
}

// Sample Data
const users: User[] = [
  {
    id: '1',
    name: 'Omo Destiny',
    avatar: '/GideonAkpan.png?height=40&width=40',
    nationality: 'Nigeria',
    email: 'Omodestiny@yahoo.com',
    signUpDate: '19. 10. 2024'
  },
  {
    id: '2',
    name: 'Oluwa Powers',
    avatar: '/DestinyChambers.png?height=40&width=40',
    nationality: 'Nigeria',
    email: 'Omodestiny@yahoo.com',
    signUpDate: '19. 10. 2024'
  },
  {
    id: '3',
    name: 'Oluwa Powers',
    avatar: '/DestinyChambers.png?height=40&width=40',
    nationality: 'Nigeria',
    email: 'Omodestiny@yahoo.com',
    signUpDate: '19. 10. 2024'
  },
  {
    id: '4',
    name: 'Oluwa Powers',
    avatar: '/DestinyChambers.png?height=40&width=40',
    nationality: 'Nigeria',
    email: 'Omodestiny@yahoo.com',
    signUpDate: '19. 10. 2024'
  },
  {
    id: '5',
    name: 'Oluwa Powers',
    avatar: '/DestinyChambers.png?height=40&width=40',
    nationality: 'Nigeria',
    email: 'Omodestiny@yahoo.com',
    signUpDate: '19. 10. 2024'
  },

  // Repeat the same structure for remaining users...
]

const metrics: MetricCard[] = [
  {
    title: 'Total Users',
    value: '40,800',
    trend: 'Up from yesterday',
    percentage: '10%'
  },
  {
    title: 'New Signups',
    value: '300',
    trend: 'On the rise for this month',
    percentage: '10%'
  },
  {
    title: 'Active Users',
    value: '3,500',
    trend: '',
    percentage: '10%'
  }
]

export default function UserDashboard() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-[#0A0E29] text-white">
        <div className="flex h-full flex-col">
          <div className="p-6">
            <Image
              src="/dsalogo5.png?height=40&width=120"
              alt="Digital Scouting Africa"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <nav className="flex-1 space-y-1 p-4">
            <a href="dashboard-overview" className="flex items-center px-4 py-3 text-gray-300 hover:bg-blue-900/20 rounded-lg">
              Overview
            </a>
            <a href="player-page" className="flex items-center px-4 py-3 text-gray-300 hover:bg-blue-900/20 rounded-lg">
              Players
            </a>
            <a href="dashboard-users" className="flex items-center px-4 py-3 text-blue-900 bg-white rounded-lg">
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
            <button className="flex items-center px-4 py-3 text-gray-300 hover:bg-blue-900/20 rounded-lg w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
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
                  <div className="font-medium"><a href="my-profile">Admin Jega</a></div>
                  <div className="text-sm text-gray-600"> <a href="my-profile">Profile</a> </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 ">
          {/* Metric Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
                    <p className="text-2xl font-bold mt-1">{metric.value}</p>
                  </div>
                  <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                    </svg>
                  </div>
                </div>
                {metric.trend && (
                  <div className="mt-4 flex items-center text-sm">
                    <svg className="h-4 w-4 text-green-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12 7a1 1 0 10-2 0v4a1 1 0 102 0V7z" clipRule="evenodd"/>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-green-500">{metric.percentage}</span>
                    <span className="ml-1 text-gray-500">{metric.trend}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-100 border-b">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">NAME</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">NATIONALITY</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      E-MAIL ADDRESS
                      <button className="ml-1 text-gray-400 hover:text-gray-600">
                        ?
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      SIGN-UP DATE
                      <button className="ml-1 text-gray-400 hover:text-gray-600">
                        ?
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id} className="border-b last:border-b-0">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Image
                            src={user.avatar}
                            alt={user.name}
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full mr-3"
                          />
                          <span className="font-medium">{user.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                        <Image
                            src='/carbon_location.png'
                            alt={user.name}
                            width={40}
                            height={40}
                            className="h-3 w-3 mr-1"
                          />
                          {user.nationality}
                        </div>
                      </td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">{user.signUpDate}</td>
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

      {/* Digital Scouting Africa Watermark */}
      <div className="fixed bottom-6 right-6 bg-[#0A0E29] text-white py-3 px-4 rounded-lg">
        <div className="text-sm">Digital</div>
        <div className="text-sm">Scouting</div>
        <div className="text-sm">Africa</div>
      </div>
    </div>
  )
}

