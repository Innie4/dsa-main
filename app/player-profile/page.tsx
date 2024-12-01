"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Users, Phone, Play } from "lucide-react";
import Header from "../default/signed-inheader";
import Graph from "@/components/graph";
import { Footer } from "../default/footer";
// Types

interface StatBox {
  title: string;
  icon?: string;
  stats: Array<{
    label: string;
    value: number;
  }>;
}

interface VideoHighlight {
  id: string;
  duration: string;
  thumbnail: string;
  opponent: string;
}

// Performance data
// const performanceData = {
//   labels: ['APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
//   datasets: [
//     {
//       fill: true,
//       label: 'Performance',
//       data: [75, 82, 78, 85, 80, 87, 83, 78, 80],
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.2)',
//       tension: 0.4,
//     },
//   ],
// }

// Stats boxes data
const statsBoxes: StatBox[] = [
  {
    title: "Defensive stats",
    stats: [
      { label: "Goalkeeping", value: 0 },
      { label: "Tackles won", value: 5 },
      { label: "Tackles lost", value: 2 },
      { label: "Blocks", value: 1 },
      { label: "Ground duels", value: 4 },
      { label: "Fouls Conceded", value: 2 },
      { label: "Clearance", value: 8 },
      { label: "Aerial Duels", value: 10 },
    ],
  },
  {
    title: "Attacking stats",
    stats: [
      { label: "Total shots", value: 10 },
      { label: "Goals", value: 4 },
      { label: "Assists", value: 2 },
      { label: "Fouls won", value: 3 },
      { label: "Penalties won", value: 0 },
      { label: "Ball progression", value: 7 },
      { label: "Dribbles", value: 15 },
      { label: "Freekicks taken", value: 1 },
    ],
  },
  {
    title: "Distribution stats",
    stats: [
      { label: "Progressive Passes", value: 100 },
      { label: "Key Passes", value: 10 },
      { label: "Short Passes", value: 25 },
      { label: "Long Passes", value: 5 },
      { label: "Line breaking Passes", value: 6 },
      { label: "Crosses", value: 10 },
      { label: "Corners", value: 3 },
      { label: "Through balls", value: 15 },
    ],
  },
  {
    title: "Discipline",
    stats: [
      { label: "Fouls conceded", value: 5 },
      { label: "Penalties conceded", value: 0 },
      { label: "Fouls suffered", value: 6 },
      { label: "Yellow cards", value: 2 },
      { label: "Red cards", value: 0 },
      { label: "Offsides", value: 0 },
      { label: "Handballs", value: 0 },
      { label: "Altercations", value: 1 },
    ],
  },
  // Add other stat boxes...
];

// Video highlights
const highlights: VideoHighlight[] = [
  {
    id: "1",
    duration: "03:30",
    thumbnail: "/Highlight1.png",
    opponent: "Union Stars",
  },
  {
    id: "2",
    duration: "02:15",
    thumbnail: "/Highlight.png",
    opponent: "Jos City Stars",
  },
  {
    id: "3",
    duration: "04:55",
    thumbnail: "/Highlight3.png",
    opponent: "Asokiti Stars",
  },
  {
    id: "4",
    duration: "05:00",
    thumbnail: "/Highlight4.png",
    opponent: "Blue Rivers United",
  },
  {
    id: "5",
    duration: "01:00",
    thumbnail: "/Highlight5.png",
    opponent: "Highflyers United",
  },
];

export default function PlayerProfile() {
  const [, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-3/4 mx-auto px-4 py-8">
        {/* Player Info */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="md:flex">
            <div className="relative md:w-1/3">
              {/* Breadcrumb */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav className="flex items-center space-x-2 text-sm text-gray-500">
                  <Link
                    href="/player-page"
                    className="hover:text-gray-700 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-900 rounded-full mr-1"></span>{" "}
                    {/* Dot */}
                    Players
                  </Link>
                  <Link
                    href="player-profile"
                    className="hover:text-gray-700 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-900 rounded-full mr-1"></span>{" "}
                    {/* Dot */}
                    Destiny Chambers
                  </Link>
                </nav>
              </div>
              <Image
                src="/destiny.png"
                alt="Destiny Chambers"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="flex items-center space-x-2"></div>
              </div>
              <div className="absolute bottom-[-5px] right-[-10px] w-5 h-7 bg-yellow-500 rounded z-10" />
            </div>

            <div className="p-6 md:w-2/3">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Destiny Chambers
                  </h1>
                  <Image
                    src="/carbon_location.png"
                    alt="Nigeria"
                    width={20}
                    height={15}
                    className="rounded"
                  />
                  <span className="text-black">Nigeria</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                <div>
                  <div className="text-sm text-gray-500">Age</div>
                  <div className="font-medium">23 yrs</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Height</div>
                  <div className="font-medium">176 cm</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Weight</div>
                  <div className="font-medium">64 kg</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Club</div>
                  <div className="font-medium">Rangers FC</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Fav. foot</div>
                  <Image
                    src="/monotone_footprints.png" // Replace with your actual image path
                    alt="Favorite Foot"
                    width={30} // Set a small width
                    height={30} // Set a small height
                    className="inline" // Ensures the image is inline with text
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Avg. Rating</div>
                  <div className="font-medium">⭐ 8.0</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download report
                </button>
                <a
                  href="/compare-players"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Compare players
                </a>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Book a call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Performance Metrics
          </h2>

          {/* Flex container for image and text */}
          <div className="md:flex items-center p-6 rounded-lg mb-6">
            <div className="w-full md:w-1/2">
              <Graph />
            </div>
            <div className="border-l-2 border-dotted border-gray-300 h-56 mx-4  hidden md:block" />{" "}
            {/* Vertical dotted line */}
            <div className="md:ml-4 text-sm pt-4 md:pt-0">
              {" "}
              {/* Margin left for spacing */}
              <h3 className="text-xs font-bold">Key stats</h3>
              <p className="text-xs">Matches played: 8 games</p>
              <p className="text-xs">Goals Scored: 4 goals</p>
              <p className="text-xs">Assists: 2 assists</p>
              <p className="text-xs">Pass Accuracy: 75% accuracy</p>
              <p className="text-xs">Key Passes: 5 key passes</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsBoxes.map((box, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow border-2 border-blue-500 w-full"
              >
                <h3 className="font-medium text-gray-900 mb-4">{box.title}</h3>
                <div className="space-y-3">
                  {box.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-500">
                        {stat.label}
                      </span>
                      <span className="font-medium">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight) => (
              <div
                key={highlight.id}
                className="relative group cursor-pointer rounded-lg overflow-hidden"
                onClick={() => setSelectedVideo(highlight.id)}
              >
                <Image
                  src={highlight.thumbnail}
                  alt={`Match vs ${highlight.opponent}`}
                  width={400}
                  height={225}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm">{highlight.duration}</span>
                      <span className="text-sm">vs. {highlight.opponent}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
