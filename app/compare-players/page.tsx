'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Plus, LogOut } from 'lucide-react'

// Types
interface NavItem {
  label: string
  href: string
  hasDropdown?: boolean
  isActive?: boolean
}

interface PlayerStat {
  label: string
  value: number | string
  unit?: string
}

interface PlayerBadge {
  label: string
  color: string
}

export default function PlayerComparison() {
  // State
  const [essentialsOpen, setEssentialsOpen] = useState(false)
  const [dashboardsOpen, setDashboardsOpen] = useState(false)

  // Navigation items
  const navItems: NavItem[] = [
    { label: 'Essentials', href: '#', hasDropdown: true },
    { label: 'Dashboards', href: '#', hasDropdown: true },
    { label: 'Teams', href: '#' },
    { label: 'Players', href: '#' },
    { label: 'Scouts', href: '#', isActive: true },
    { label: 'Competitions', href: '#' },
  ]

  // Player badges
  const badges: PlayerBadge[] = [
    { label: 'DM', color: 'bg-yellow-500' },
    { label: 'AM', color: 'bg-blue-500' },
    { label: 'CM', color: 'bg-green-500' },
  ]

  // Player stats
  const playerStats: PlayerStat[] = [
    { label: 'Matches played', value: 8 },
    { label: 'Goals scored', value: 4 },
    { label: 'Assists', value: 2 },
    { label: 'Pass completion rate', value: 87, unit: '%' },
    { label: 'Tackles Per Game', value: 2.5 },
    { label: 'Interceptions Per Game', value: 1.8 },
    { label: 'Distance Covered (Km)', value: 10.2 },
    { label: 'Yellow Cards', value: 2 },
    { label: 'Red Cards', value: 0 },
    { label: 'Market Value ($)', value: '2.5 Million' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white py-4 px-6 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Image
              src="/placeholder.svg"
              alt="Digital Scouting Africa Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.label === 'Essentials') setEssentialsOpen(true)
                    if (item.label === 'Dashboards') setDashboardsOpen(true)
                  }}
                  onMouseLeave={() => {
                    if (item.label === 'Essentials') setEssentialsOpen(false)
                    if (item.label === 'Dashboards') setDashboardsOpen(false)
                  }}
                >
                  <a
                    href={item.href}
                    className={`flex items-center ${
                      item.isActive ? 'text-blue-700 font-medium' : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </a>
                  {item.hasDropdown && (item.label === 'Essentials' ? essentialsOpen : dashboardsOpen) && (
                    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Option 1
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Option 2
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg"
                alt="User Avatar"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div className="hidden md:block">
                <div className="font-medium">Samson Adenuga</div>
                <div className="flex items-center text-sm text-gray-500">
                  <a href="#" className="hover:text-gray-700">Profile</a>
                  <span className="mx-2">•</span>
                  <a href="#" className="flex items-center text-red-600 hover:text-red-700">
                    <LogOut className="h-4 w-4 mr-1" />
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex space-x-2 text-sm">
          <a href="#" className="text-gray-500 hover:text-gray-700">Players</a>
          <span className="text-gray-500">•</span>
          <a href="#" className="text-gray-500 hover:text-gray-700">Destiny Chambers</a>
          <span className="text-gray-500">•</span>
          <span className="text-blue-700 font-medium">Compare Players</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Player 1 */}
          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Destiny Chambers"
                width={600}
                height={400}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-yellow-400 p-2 rounded-md" />
            </div>

            <div>
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <span>Destiny Chambers</span>
                <Image
                  src="/placeholder.svg"
                  alt="Nigeria flag"
                  width={24}
                  height={16}
                  className="inline-block"
                />
                <span className="text-sm font-normal text-gray-600">Nigeria</span>
              </h2>

              <div className="flex space-x-2 mt-2">
                {badges.map((badge, index) => (
                  <span
                    key={index}
                    className={`${badge.color} text-white px-2 py-1 rounded text-sm`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <div className="text-sm text-gray-600">Age:</div>
                  <div>23 yrs</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Height:</div>
                  <div>176 cm</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Weight:</div>
                  <div>64 kg</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Club:</div>
                  <div>Rangers FC</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm text-gray-600">Avg. rating:</div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">8.0</span>
                  <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                Player stats
                <svg className="w-5 h-5 text-green-500 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </h3>

              <div className="space-y-3">
                {playerStats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{stat.label}</span>
                    <span className="font-medium">
                      {stat.value}
                      {stat.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Overview</h3>
              {/* Radar Chart would go here */}
              <div className="aspect-square bg-white rounded-lg p-4">
                {/* Placeholder for radar chart */}
              </div>
            </div>
          </div>

          {/* Player 2 (Empty State) */}
          <div className="flex items-center justify-center min-h-[300px] bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 p-8">
            <div className="text-center">
              <button className="mx-auto mb-4 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800">
                <Plus className="w-6 h-6" />
              </button>
              <p className="text-gray-500">Select a player to compare</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Image
              src="/placeholder.svg"
              alt="Digital Scouting Africa Logo"
              width={40}
              height={40}
              className="w-10 h-10 mb-4 md:mb-0"
            />
            <nav className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                Essentials <ChevronDown className="ml-1 h-4 w-4" />
              </div>
              <div className="flex items-center">
                Dashboards <ChevronDown className="ml-1 h-4 w-4" />
              </div>
              <a href="#" className="hover:text-gray-300">Contact us</a>
              <a href="#" className="hover:text-gray-300">FAQs</a>
              <a href="#" className="hover:text-gray-300">Pricing</a>
            </nav>
          </div>
          <div className="text-right text-sm text-gray-400 mt-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            {' '}and{' '}
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

