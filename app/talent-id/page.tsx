'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Play } from 'lucide-react'
import Header from '@/app/default/signed-inheader'
import {Footer} from '@/app/default/footer'
import { Button } from '@/components/button'
import { Card, CardContent } from '@/components/card'

// Types
interface Player {
  id: number
  name: string
  age: string
  image: string
  club: string
  position: string
  height: string
  citizenship: string
}

interface MatchHighlight {
  id: number
  duration: string
  opponent: string
  thumbnail: string
}

// Sample data
const players: Player[] = [
  {
    id: 1,
    name: 'Eze Flavio Jnr',
    age: '22 yrs',
    image: '/placeholder.svg?height=80&width=80',
    club: 'Rangers FC',
    position: 'CF',
    height: '1.79m',
    citizenship: 'Nigerian'
  },
  {
    id: 2,
    name: 'James Asuquo',
    age: '22 yrs',
    image: '/placeholder.svg?height=80&width=80',
    club: 'Lagos City',
    position: 'CF',
    height: '1.78m',
    citizenship: 'Nigerian'
  },
  {
    id: 3,
    name: 'Gideon Akpan',
    age: '22 yrs',
    image: '/placeholder.svg?height=80&width=80',
    club: 'Eagles Academy',
    position: 'CF',
    height: '1.78m',
    citizenship: 'Nigerian'
  },
  {
    id: 4,
    name: 'Udo Ugo',
    age: '22 yrs',
    image: '/placeholder.svg?height=80&width=80',
    club: 'Highflyers United',
    position: 'MF',
    height: '1.78m',
    citizenship: 'Nigerian'
  },
  {
    id: 5,
    name: 'Essien John',
    age: '22 yrs',
    image: '/placeholder.svg?height=80&width=80',
    club: 'Union Stars',
    position: 'CB',
    height: '1.78m',
    citizenship: 'Nigerian'
  },
  {
    id: 6,
    name: 'Oluwa Joe',
    age: '22 yrs',
    image: '/placeholder.svg?height=80&width=80',
    club: 'Rangers',
    position: 'DM',
    height: '1.78m',
    citizenship: 'Nigerian'
  }
]

const highlights: MatchHighlight[] = [
  { id: 1, duration: '03:30', opponent: 'Union Stars', thumbnail: '/placeholder.svg?height=200&width=300' },
  { id: 2, duration: '02:15', opponent: 'Jos City Stars', thumbnail: '/placeholder.svg?height=200&width=300' },
  { id: 3, duration: '04:55', opponent: 'Asokiri Stars', thumbnail: '/placeholder.svg?height=200&width=300' },
  { id: 4, duration: '00:00', opponent: 'Highflyers United', thumbnail: '/placeholder.svg?height=200&width=300' },
  { id: 5, duration: '00:00', opponent: 'Blue Rivers United', thumbnail: '/placeholder.svg?height=200&width=300' },
  { id: 6, duration: '00:00', opponent: 'Highflyers United', thumbnail: '/placeholder.svg?height=200&width=300' },
  { id: 7, duration: '02:15', opponent: 'Jos City Stars', thumbnail: '/placeholder.svg?height=200&width=300' },
  { id: 8, duration: '03:30', opponent: 'Union Stars', thumbnail: '/placeholder.svg?height=200&width=300' },
  { id: 9, duration: '04:55', opponent: 'Asokiri Stars', thumbnail: '/placeholder.svg?height=200&width=300' }
]

const TalentID: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
            <div className="md:px-20 lg:px-20 p-4 bg-white">
            <div className="min-h-screen bg-white">
      {/* Header */}
      <Header/>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-2xl font-bold mb-6">
                <span className="inline-block w-1 h-6 bg-yellow-400 mr-3"></span>
                Talent Identification
              </h1>
              <p className="text-gray-600 mb-6">
                Scouting is taken closer to the players. Five states have been shortlisted for this year's (2024) edition of the Talent Identification phase, reaching 6 cities consisting of Asaba (Delta State), Jos (Plateau State), Kaduna (Kaduna State), Gboko and Makurdi centres (Benue State), Uyo (Akwa Ibom State). Two to three teams of exceptional young talents are selected from the Talent Identificaion phase and are invited to a training camp.
              </p>
              <p className="text-gray-600 mb-6">
                Uncover hidden talent, analyze player potential, and connect with future champions through Digital Scouting Africa's online scouting data identification platform. From grassroots players to rising stars, our platform empowers scouts, coaches, and teams to find exceptional talent across Africa. Start your journey to shaping the future of football today.
              </p>
              <p className="text-blue-600 font-medium">Bringing scouting closer to you!</p>
            </div>
            <div>
              <Image
                src="/talent.png?height=400&width=600"
                alt="Football player"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Top Talents Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Our Top Talents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((player) => (
              <Card key={player.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={player.image}
                      alt={player.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-blue-600">{player.name}</h3>
                      <p className="text-gray-500">{player.age}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2">
                      <span className="text-gray-500">Club:</span>
                      <span>{player.club}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-gray-500">Position:</span>
                      <span>{player.position}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-gray-500">Height:</span>
                      <span>{player.height}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-gray-500">Citizenship:</span>
                      <span>{player.citizenship}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    View all profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Match Highlights Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Match Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight) => (
              <div key={highlight.id} className="relative group">
                <Image
                  src={highlight.thumbnail}
                  alt={`Match vs ${highlight.opponent}`}
                  width={300}
                  height={200}
                  className="w-full rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-white hover:bg-blue-600"
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>{highlight.duration}</span>
                    <span className="text-gray-300">vs. {highlight.opponent}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="bg-blue-900 rounded-lg text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            Have questions about a player or need assistance using the Talent Identification platform? We're here to help you connect with the next generation of football stars.
          </p>
          <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
            Contact us
          </Button>
        </div>
      </main>

      </div>
      </div>
      {/* Footer */}
      <Footer/>
          </div>
  )
}


export default TalentID;