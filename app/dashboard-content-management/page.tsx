'use client'

import * as React from 'react'
import Image from 'next/image'
import { Bell, ChevronLeft, ChevronRight, LogOut, Search, Trash2 } from 'lucide-react'
import { Card, CardContent } from "@/app/dashboard/page"
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

// Types
interface ContentItem {
  id: number
  name: string
  type: 'Video' | 'Player Profile' | 'Match Highlights'
  date: string
  status: 'Active' | 'Pending' | 'Flagged'
}

const contentItems: ContentItem[] = [
  { id: 1, name: 'Training Ground Drills', type: 'Video', date: '11. 10. 2024', status: 'Active' },
  { id: 2, name: 'Oluwa Peters', type: 'Player Profile', date: '11. 10. 2024', status: 'Pending' },
  { id: 3, name: 'Union vs. Jos City', type: 'Match Highlights', date: '11. 10. 2024', status: 'Flagged' },
  { id: 4, name: 'Training Ground Drills', type: 'Video', date: '11. 10. 2024', status: 'Active' },
  { id: 5, name: 'Hassan Azzeez', type: 'Player Profile', date: '11. 10. 2024', status: 'Pending' },
  { id: 6, name: 'Union vs. Jos City', type: 'Match Highlights', date: '11. 10. 2024', status: 'Flagged' },
  { id: 7, name: 'Training Ground Drills', type: 'Video', date: '11. 10. 2024', status: 'Active' },
  { id: 8, name: 'Oluwa Peters', type: 'Player Profile', date: '11. 10. 2024', status: 'Pending' },
  { id: 9, name: 'Union vs. Jos City', type: 'Match Highlights', date: '11. 10. 2024', status: 'Flagged' },
  { id: 10, name: 'Training Ground Drills', type: 'Video', date: '11. 10. 2024', status: 'Active' },
  { id: 11, name: 'Oluwa Peters', type: 'Player Profile', date: '11. 10. 2024', status: 'Pending' },
  { id: 12, name: 'Union vs. Jos City', type: 'Match Highlights', date: '11. 10. 2024', status: 'Flagged' },
]

export default function ContentManagement() {
  const [searchQuery, setSearchQuery] = React.useState('')

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
            {[
              'Overview',
              'Players',
              'Users',
              'Agencies',
              'Content management'
            ].map((item, index) => (
              <a
                key={item}
                href="#"
                className={`flex items-center px-4 py-3 rounded-lg ${
                  index === 4
                    ? 'bg-white text-[#0A0E29]'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {item}
              </a>
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
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                  4
                </span>
              </button>
              <div className="flex items-center space-x-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Admin Jega"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <div className="font-medium">Admin Jega</div>
                  <div className="text-sm text-gray-600">Profile</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mb-8">
            <Card className="bg-[#1a237e] text-white">
              <CardContent className="p-6">
                <div className="text-2xl font-bold">1k+</div>
                <div className="text-sm mt-1">Total Posts</div>
                <div className="text-xs mt-1">On the rise!</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm mt-1">Pending Videos</div>
                <div className="text-xs mt-1">Clear your pending list!</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm mt-1">Flagged Content</div>
                <div className="text-xs mt-1 text-red-600">↓ 8.5%</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm mt-1">Total Streams</div>
                <div className="text-xs mt-1 text-green-600">↑ 4% Up from last month</div>
              </CardContent>
            </Card>
          </div>

          {/* Content Table */}
          <div className="bg-white rounded-lg shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">NO.</TableHead>
                  <TableHead>NAME</TableHead>
                  <TableHead>CONTENT TYPE</TableHead>
                  <TableHead>SUBMISSION DATE</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead className="text-right">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contentItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}.</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          item.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : item.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {item.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button
                          variant="ghost"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Approve
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Pagination */}
            <div className="flex items-center justify-end px-6 py-4 border-t">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

