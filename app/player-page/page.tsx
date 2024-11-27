'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronUp, LogOut } from 'lucide-react'

// Types
type Player = {
  id: number
  name: string
  image: string
  nationality: string
  age: number
  position: string
  club: string
  roles: string[]
}

type NavItem = {
  label: string
  href: string
  hasDropdown?: boolean
}

// Sample data
const players: Player[] = [
  {
    id: 1,
    name: "Destiny Chambers",
    image: "/placeholder.svg",
    nationality: "Nigeria",
    age: 23,
    position: "Midfielder",
    club: "Rangers FC",
    roles: ["DM", "AM", "CM"]
  },
  {
    id: 2,
    name: "Champion Ogunekpon",
    image: "/placeholder.svg",
    nationality: "Nigeria",
    age: 20,
    position: "Striker",
    club: "Union Stars",
    roles: ["CF", "SS"]
  },
  {
    id: 3,
    name: "Oluwa Joe",
    image: "/placeholder.svg",
    nationality: "Nigeria",
    age: 24,
    position: "Midfielder",
    club: "Yellow Rangers",
    roles: ["AM", "CM"]
  },
  {
    id: 4,
    name: "Gideon Akpan",
    image: "/placeholder.svg",
    nationality: "Nigeria",
    age: 17,
    position: "Midfielder",
    club: "Rangers FC",
    roles: ["DM", "AM", "CM"]
  },
  {
    id: 5,
    name: "Udo Ugo",
    image: "/placeholder.svg",
    nationality: "Nigeria",
    age: 25,
    position: "Midfielder",
    club: "Jos City Stars",
    roles: ["DM", "CM"]
  },
  {
    id: 6,
    name: "Hassan Zai",
    image: "/placeholder.svg",
    nationality: "Nigeria",
    age: 25,
    position: "Goalkeeper",
    club: "Highflyers United",
    roles: ["GK"]
  },
  {
    id: 7,
    name: "Azeez Abubakar",
    image: "/placeholder.svg",
    nationality: "Nigeria",
    age: 23,
    position: "Defender",
    club: "Asokiti  Stars",
    roles: ["CB", "DM"]
  },
  {
    id: 8,
    name: "Ezinne Mazinwe",
    image: "/placeholder.svg",
    nationality: "Nigeria",
    age: 22,
    position: "Fullback",
    club: "Rangers FC",
    roles: ["RB"]
  },
  {
    id: 9,
    name: "Olu Abu",
    image: "/placeholder.svg",
    nationality: "Nigeria",
    age: 20,
    position: "Striker",
    club: "Union Stars",
    roles: ["CF"]
  },
  {
    id: 10,
    name: "James Asuquo",
    image: "/placeholder.svg",
    nationality: "Nigeria",
    age: 19,
    position: "Midfielder",
    club: "Blue Rivers United",
    roles: ["DM", "AM", "CM"]
  },
  // Add more players as needed...
]

const navItems: NavItem[] = [
  { label: "Essentials", href: "#", hasDropdown: true },
  { label: "Dashboards", href: "#", hasDropdown: true },
  { label: "Teams", href: "#" },
  { label: "Players", href: "#" },
  { label: "Scouts", href: "#" },
  { label: "Competitions", href: "#" },
]

const footerLinks = [
  { label: "Essentials", href: "#" },
  { label: "Dashboards", href: "#" },
  { label: "Contact us", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Pricing", href: "#" },
]

// app/player-page/page.tsx
export default function PlayersDashboard() {
  const [showAllPlayers, setShowAllPlayers] = useState(false)

  const displayedPlayers = showAllPlayers ? players : players.slice(0, 10)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/DSA-logo.png"
                alt="Digital Scouting Africa"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8 ml-auto">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Profile */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/Samson.png"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Samson Adenuga</p>
                  <Link href="#" className="text-red-600 hover:text-red-700 text-xs flex items-center">
                    <LogOut className="h-3 w-3 mr-1" />
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 px-6 py-4 bg-gray-50 text-sm font-medium text-gray-500 uppercase tracking-wider">
            <div>Name</div>
            <div>Nationality</div>
            <div>Age</div>
            <div>Position</div>
            <div>Club</div>
            <div>Roles</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {displayedPlayers.map((player) => (
              <Link
                key={player.id}
                href={`/player-profile/${player.id}`} // Assuming dynamic routing
                className="block hover:bg-gray-50 transition-colors"
              >
                <div className="grid grid-cols-6 gap-4 px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={player.image}
                      alt={player.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="font-medium text-gray-900">{player.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="flex items-center">
                      <Image
                        src="/carbon_location.png"
                        alt={player.nationality}
                        width={20}
                        height={15}
                        className="mr-2"
                      />
                      {player.nationality}
                    </span>
                  </div>
                  <div className="flex items-center">{player.age} yrs</div>
                  <div className="flex items-center">{player.position}</div>
                  <div className="flex items-center">{player.club}</div>
                  <div className="flex items-center space-x-1">
                    {player.roles.map((role) => (
                      <span
                        key={role}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setShowAllPlayers(!showAllPlayers)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {showAllPlayers ? 'Show Less' : 'View all players'}
            {showAllPlayers ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-end items-center space-y-4 md:space-y-0">
            <nav className="flex space-x-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          {/* Privacy Policy and Terms of Use */}
          <div className="text-sm text-gray-400 mt-4 text-right">
            <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
            <span className="mx-2">and</span>
            <Link href="#" className="hover:text-gray-300">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
