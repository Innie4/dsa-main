"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "../default/signed-inheader";
import { Footer } from "../default/footer";

// Types
type Player = {
  id: number;
  name: string;
  image: string;
  nationality: string;
  age: number;
  position: string;
  club: string;
  roles: string[];
};

// Sample data
const players: Player[] = [
  {
    id: 1,
    name: "Destiny Chambers",
    image: "/DestinyChambers.png",
    nationality: "Nigeria",
    age: 23,
    position: "Midfielder",
    club: "Rangers FC",
    roles: ["DM", "AM", "CM"],
  },
  {
    id: 2,
    name: "Champion Ogunekpon",
    image: "/ChampionOgunekpon.png",
    nationality: "Nigeria",
    age: 20,
    position: "Striker",
    club: "Union Stars",
    roles: ["CF", "SS"],
  },
  {
    id: 3,
    name: "Oluwa Joe",
    image: "/OluwaJoe.png",
    nationality: "Nigeria",
    age: 24,
    position: "Midfielder",
    club: "Yellow Rangers",
    roles: ["AM", "CM"],
  },
  {
    id: 4,
    name: "Gideon Akpan",
    image: "/GideonAkpan.png",
    nationality: "Nigeria",
    age: 17,
    position: "Midfielder",
    club: "Rangers FC",
    roles: ["DM", "AM", "CM"],
  },
  {
    id: 5,
    name: "Udo Ugo",
    image: "/UdoUgo.png",
    nationality: "Nigeria",
    age: 25,
    position: "Midfielder",
    club: "Jos City Stars",
    roles: ["DM", "CM"],
  },
  {
    id: 6,
    name: "Hassan Zai",
    image: "/HassanZai.png",
    nationality: "Nigeria",
    age: 25,
    position: "Goalkeeper",
    club: "Highflyers United",
    roles: ["GK"],
  },
  {
    id: 7,
    name: "Azeez Abubakar",
    image: "/AzeezAbubakar.png",
    nationality: "Nigeria",
    age: 23,
    position: "Defender",
    club: "Asokiti  Stars",
    roles: ["CB", "DM"],
  },
  {
    id: 8,
    name: "Ezinne Mazinwe",
    image: "/EzinneMazinwe.png",
    nationality: "Nigeria",
    age: 22,
    position: "Fullback",
    club: "Rangers FC",
    roles: ["RB"],
  },
  {
    id: 9,
    name: "Olu Abu",
    image: "/OluAbu.png",
    nationality: "Nigeria",
    age: 20,
    position: "Striker",
    club: "Union Stars",
    roles: ["CF"],
  },
  {
    id: 10,
    name: "James Asuquo",
    image: "/placeholder.svg",
    nationality: "Nigeria",
    age: 19,
    position: "Midfielder",
    club: "Blue Rivers United",
    roles: ["DM", "AM", "CM"],
  },
  // Add more players as needed...
];

// app/player-page/page.tsx
export default function PlayersDashboard() {
  const [showAllPlayers, setShowAllPlayers] = useState(false);

  const displayedPlayers = showAllPlayers ? players : players.slice(0, 10);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-black overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
        {/* Add an outer div with overflow handling */}
        <div className="overflow-x-hidden">
          <div className="bg-white rounded-lg shadow overflow-hidden min-w-[900px]">
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
                  href={`/player-profile`} // Assuming dynamic routing
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
                      <span className="font-medium text-gray-900">
                        {player.name}
                      </span>
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
        </div>

        {/* View All Button */}
        <div className="mt-4 flex justify-left">
          <button
            onClick={() => setShowAllPlayers(!showAllPlayers)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {showAllPlayers ? "Show Less" : "View all players"}
            {showAllPlayers ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
