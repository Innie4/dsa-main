'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, LogOut } from 'lucide-react'

// Types
interface NavItem {
  label: string
  href: string
  hasDropdown?: boolean
}

interface PlayerBadge {
  label: string
  color: string
}

interface PlayerStat {
  label: string
  value: number | string
  unit?: string
}

interface Player {
  id: string
  name: string
  image: string
  country: string
  flag: string
  badges: PlayerBadge[]
  age: number
  height: number
  weight: number
  club: string
  favFoot: 'left' | 'right'
  avgRating: number
  stats: PlayerStat[]
  overviewData: number[]
}

const players: Player[] = [
  {
    id: '1',
    name: 'Destiny Chambers',
    image: '/placeholder.svg',
    country: 'Nigeria',
    flag: '/placeholder.svg',
    badges: [
      { label: 'DM', color: 'bg-yellow-500' },
      { label: 'AM', color: 'bg-blue-500' },
      { label: 'CM', color: 'bg-green-500' },
    ],
    age: 23,
    height: 176,
    weight: 64,
    club: 'Rangers FC',
    favFoot: 'left',
    avgRating: 8.0,
    stats: [
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
    ],
    overviewData: [80, 70, 90, 85, 75, 60],
  },
  {
    id: '2',
    name: 'Eze Flavio Jnr',
    image: '/placeholder.svg',
    country: 'Nigeria',
    flag: '/placeholder.svg',
    badges: [
      { label: 'AM', color: 'bg-blue-500' },
      { label: 'CM', color: 'bg-green-500' },
    ],
    age: 24,
    height: 180,
    weight: 60,
    club: 'Jos City FC',
    favFoot: 'right',
    avgRating: 8.0,
    stats: [
      { label: 'Matches played', value: 7 },
      { label: 'Goals scored', value: 2 },
      { label: 'Assists', value: 1 },
      { label: 'Pass completion rate', value: 70, unit: '%' },
      { label: 'Tackles Per Game', value: 23.5 },
      { label: 'Interceptions Per Game', value: 2.0 },
      { label: 'Distance Covered (Km)', value: 11.5 },
      { label: 'Yellow Cards', value: 0 },
      { label: 'Red Cards', value: 0 },
      { label: 'Market Value ($)', value: '1.7 Million' },
    ],
    overviewData: [75, 85, 65, 70, 80, 90],
  },
]

export default function PlayerComparison() {
  const [essentialsOpen, setEssentialsOpen] = useState(false)
  const [dashboardsOpen, setDashboardsOpen] = useState(false)

  const navItems: NavItem[] = [
    { label: 'Essentials', href: '#', hasDropdown: true },
    { label: 'Dashboards', href: '#', hasDropdown: true },
    { label: 'Teams', href: '#' },
    { label: 'Players', href: '#' },
    { label: 'Scouts', href: '#' },
    { label: 'Competitions', href: '#' },
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
                    className={`flex items-center text-gray-700 hover:text-gray-900`}
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

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex space-x-2 text-sm mb-6">
          <a href="#" className="text-gray-500 hover:text-gray-700">Players</a>
          <span className="text-gray-500">•</span>
          <a href="#" className="text-gray-500 hover:text-gray-700">Destiny Chambers</a>
          <span className="text-gray-500">•</span>
          <span className="text-blue-700 font-medium">Compare Players</span>
        </nav>

        {/* Player Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          {players.map((player, index) => (
            <PlayerCard key={player.id} player={player} isLeft={index === 0} />
          ))}
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

function PlayerCard({ player, isLeft }: { player: Player; isLeft: boolean }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative h-64">
        <Image
          src={player.image}
          alt={player.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <div className={`absolute ${isLeft ? 'bottom-4 right-4' : 'bottom-4 left-4'} bg-yellow-400 w-8 h-8 rounded-md`} />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center space-x-2">
            <span>{player.name}</span>
            <Image
              src={player.flag}
              alt={player.country}
              width={24}
              height={16}
              className="inline-block"
            />
            <span className="text-sm font-normal text-gray-600">{player.country}</span>
          </h2>
          <div className="flex space-x-2">
            {player.badges.map((badge, index) => (
              <span
                key={index}
                className={`${badge.color} text-white px-2 py-1 rounded text-sm`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <div className="text-sm text-gray-600">Age:</div>
            <div>{player.age} yrs</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Height:</div>
            <div>{player.height} cm</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Weight:</div>
            <div>{player.weight} kg</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Club:</div>
            <div>{player.club}</div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="text-sm text-gray-600">Fav. foot:</div>
            <div className="flex items-center">
              {player.favFoot === 'left' ? (
                <span className="transform -scale-x-100">👟</span>
              ) : (
                <span>👟</span>
              )}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Avg. rating:</div>
            <div className="flex items-center">
              <span className="text-2xl font-bold">{player.avgRating.toFixed(1)}</span>
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
            {player.stats.map((stat, index) => (
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

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Overview</h3>
          <div className="aspect-square bg-gray-100 rounded-lg p-4">
            <RadarChart data={player.overviewData} />
          </div>
        </div>
      </div>
    </div>
  )
}

function RadarChart({ data }: { data: number[] }) {
  const labels = ['TO', 'ATKL', 'PAS', 'DEF', 'STR', 'STA']
  const maxValue = Math.max(...data)
  const scale = (value: number) => (value / maxValue) * 100

  const points = data.map((value, index) => {
    const angle = (Math.PI * 2 * index) / data.length
    const x = 50 + scale(value) * Math.sin(angle)
    const y = 50 - scale(value) * Math.cos(angle)
    return `${x},${y}`
  }).join(' ')

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Background hexagon */}
      <polygon
        points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="0.5"
      />
      {/* Inner hexagons */}
      {[0.2, 0.4, 0.6, 0.8].map((ratio, index) => (
        <polygon
          key={index}
          points={`50,${50 - 50 * ratio} ${50 + 43.3 * ratio},${50 - 25 * ratio} ${50 + 43.3 * ratio},${50 + 25 * ratio} 50,${50 + 50 * ratio} ${50 - 43.3 * ratio},${50 + 25 * ratio} ${50 - 43.3 * ratio},${50 - 25 * ratio}`}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="0.5"
        />
      ))}
      {/* Axes */}
      {labels.map((_, index) => {
        const angle = (Math.PI * 2 * index) / labels.length
        const x = 50 + 50 * Math.sin(angle)
        const y = 50 - 50 * Math.cos(angle)
        return (
          <line
            key={index}
            x1="50"
            y1="50"
            x2={x}
            y2={y}
            stroke="#e2e8f0"
            strokeWidth="0.5"
          />
        )
      })}
      {/* Data polygon */}
      <polygon
        points={points}
        fill={data === players[0].overviewData ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}
        stroke={data === players[0].overviewData ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'}
        strokeWidth="2"
      />
      {/* Labels */}
      {labels.map((label, index) => {
        const angle = (Math.PI * 2 * index) / labels.length
        const x = 50 + 58 * Math.sin(angle)
        const y = 50 - 58 * Math.cos(angle)
        return (
          <text
            key={index}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="8"
            fill="#4b5563"
          >
            {label}
          </text>
        )
      })}
    </svg>
  )
}

