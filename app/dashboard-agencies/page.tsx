'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bell, ChevronLeft, ChevronRight, History, LogOut, MessageSquare, Search, Trash2 } from 'lucide-react'
import { Input } from "@/app/dashboard/input"
import { Button } from "@/app/dashboard/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/dashboard/table"
import { Card, CardContent } from "@/app/dashboard/page"

// Types
interface Agency {
  id: number
  name: string
  logo: string
  location: string
  email: string
  signUpDate: string
  isInactive?: boolean
}

interface NavItem {
  name: string
  href: string
  isActive?: boolean
}

// Sample data
const agencies: Agency[] = [
  { id: 1, name: 'Eagles Academy', logo: '/placeholder.svg?height=40&width=40', location: 'Nigeria', email: 'eaglesacademy@yahoo.com', signUpDate: '19. 10. 2024' },
  { id: 2, name: 'Rising Stars', logo: '/placeholder.svg?height=40&width=40', location: 'Nigeria', email: 'risingstars@gmail.com', signUpDate: '19. 10. 2024' },
  { id: 3, name: 'Blue Blooms', logo: '/placeholder.svg?height=40&width=40', location: 'Nigeria', email: 'Omodestiny@yahoo.com', signUpDate: '19. 10. 2024' },
  { id: 4, name: 'Power Boys', logo: '/placeholder.svg?height=40&width=40', location: 'Nigeria', email: 'Omodestiny@yahoo.com', signUpDate: '19. 10. 2024' },
  { id: 5, name: 'Fly Higher Academy', logo: '/placeholder.svg?height=40&width=40', location: 'Nigeria', email: 'Omodestiny@yahoo.com', signUpDate: '19. 10. 2024' },
  { id: 6, name: 'Jubilee Roadstars', logo: '/placeholder.svg?height=40&width=40', location: 'Nigeria', email: 'Omodestiny@yahoo.com', signUpDate: '19. 10. 2024' },
  { id: 7, name: 'Showout Trials', logo: '/placeholder.svg?height=40&width=40', location: 'Nigeria', email: 'Omodestiny@yahoo.com', signUpDate: '19. 10. 2024' },
  { id: 8, name: 'BamBam Stars', logo: '/placeholder.svg?height=40&width=40', location: 'Nigeria', email: 'Omodestiny@yahoo.com', signUpDate: '19. 10. 2024', isInactive: true },
  { id: 9, name: 'Best Academy', logo: '/placeholder.svg?height=40&width=40', location: 'Nigeria', email: 'Omodestiny@yahoo.com', signUpDate: '19. 10. 2024' },
]

const navItems: NavItem[] = [
  { name: 'Overview', href: 'dashboard-overview' },
  { name: 'Players', href: 'dashboard-players' },
  { name: 'Users', href: 'dashboard-users' },
  { name: 'Agencies', href: 'dashboard-agencies', isActive: true },
  { name: 'Content management', href: 'dashboard-content-management' },
]

export default function AgenciesDashboard() {
  const [searchQuery, setSearchQuery] = React.useState('')

  return (
    <div className="flex min-h-screen">
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
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-lg ${
                  item.isActive 
                    ? 'bg-white text-[#0A0E29]' 
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="p-4">
            <button className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/5 rounded-lg w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 bg-gray-50">
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
          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-sm font-medium text-blue-600">Total Agencies</h3>
                <div className="text-2xl font-bold mt-2">800+</div>
                <div className="flex items-center mt-2 text-sm text-green-600">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 7L12 3M12 3L16 7M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  10% Up from yesterday
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-sm font-medium text-blue-600">New Agencies</h3>
                <div className="text-2xl font-bold mt-2">50+</div>
                <div className="flex items-center mt-2 text-sm text-green-600">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 7L12 3M12 3L16 7M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  10% Up from yesterday
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-sm font-medium text-blue-600">Success ratio</h3>
                <div className="text-2xl font-bold mt-2">90%</div>
                <div className="flex items-center mt-2 text-sm text-green-600">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 7L12 3M12 3L16 7M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  10%
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Agencies Table */}
          <div className="bg-white rounded-lg shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>AGENCY NAME</TableHead>
                  <TableHead>LOCATION</TableHead>
                  <TableHead>
                    E-MAIL ADDRESS
                    <Button variant="ghost" size="sm" className="ml-1">
                      ?
                    </Button>
                  </TableHead>
                  <TableHead>
                    SIGN-UP DATE
                    <Button variant="ghost" size="sm" className="ml-1">
                      ?
                    </Button>
                  </TableHead>
                  <TableHead>ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agencies.map((agency) => (
                  <TableRow key={agency.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Image
                          src={agency.logo}
                          alt={agency.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                         
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <span className="mr-2"><img src="carbon_location.png" alt="" /></span>
                        {agency.location}
                      </div>
                    </TableCell>
                    <TableCell>{agency.email}</TableCell>
                    <TableCell>{agency.signUpDate}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
                          <History className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between px-4 py-4 border-t">
            <div className="text-sm text-gray-500">
                • Inactive user
              </div>
              <div className="flex items-center space-x-6 text-sm">

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

4