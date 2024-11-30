'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, LogOut, Search, X } from 'lucide-react'
import Header from "@/app/default/signed-inheader";
import { Footer } from "@/app/default/footer";

// Types
interface NavItem {
  label: string
  href: string
  hasDropdown?: boolean
  isActive?: boolean
}

interface Player {
  id: string
  name: string
  image: string
  country: string
  flag: string
  age: number
  position: string
  club: string
}

export default function PlayerComparisonList() {
  // State
  const [searchQuery, setSearchQuery] = useState('')
  const [essentialsOpen, setEssentialsOpen] = useState(false)
  const [dashboardsOpen, setDashboardsOpen] = useState(false)

  // Navigation items
  const navItems: NavItem[] = [
    { label: 'Essentials', href: 'player-page', hasDropdown: true },
    { label: 'Dashboards', href: '#', hasDropdown: true },
    { label: 'Teams', href: 'teams' },
    { label: 'Players', href: 'player-page' },
    { label: 'Scouts', href: '#', isActive: true },
    { label: 'Competitions', href: 'competitions' },
  ]

  // Sample player data
  const players: Player[] = [
    {
      id: '1',
      name: 'Oluwa Powers',
      image: '/DestinyChambers.png',
      country: 'Nigeria',
      flag: '/placeholder.svg',
      age: 23,
      position: 'Midfielder',
      club: 'Rangers FC'
    },
    {
      id: '2',
      name: 'Eze Flavio Jnr',
      image: '/placeholder.svg',
      country: 'Nigeria',
      flag: '/placeholder.svg',
      age: 23,
      position: 'Midfielder',
      club: 'Jos City Stars'
    },
    {
      id: '3',
      name: 'James Asuquo',
      image: '/placeholder.svg',
      country: 'Nigeria',
      flag: '/placeholder.svg',
      age: 23,
      position: 'Midfielder',
      club: 'Blue Rivers United'
    },
    // Add more players...
  ]

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header/>
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
          {/* Search Bar */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Player List */}
          <div className="divide-y">
            {/* Reference Player */}
            <div className="p-4">
              <div className="text-sm font-medium text-gray-500 mb-2">Reference</div>
              <PlayerRow player={players[0]} isReference />
            </div>

            {/* Compared Players */}
            <div className="p-4">
              <div className="text-sm font-medium text-gray-500 mb-2">Compared to</div>
              <div className="space-y-4">
                {filteredPlayers.slice(1).map((player) => (
                  <PlayerRow key={player.id} player={player} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
     <Footer/>
    </div>
  )
}

// Player Row Component
function PlayerRow({ player, isReference = false }: { player: Player; isReference?: boolean }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <Image
          src={player.image}
          alt={player.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
      </div>
      <div className="flex-1 grid grid-cols-5 gap-4 items-center">
        <div>
          <div className="font-medium">{player.name}</div>
        </div>
        <div className="flex items-center space-x-1">
          <Image
            src={player.flag}
            alt={player.country}
            width={20}
            height={14}
            className="rounded"
          />
          <span>{player.country}</span>
        </div>
        <div>{player.age} yrs</div>
        <div>{player.position}</div>
        <div>{player.club}</div>
      </div>
    </div>
  )
}

