"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}

interface Player {
  id: string;
  name: string;
  age: number;
  image: string;
  club: string;
  position: string;
  height: string;
  playerAgent: string;
  citizenship: string;
}

export default function WhyChooseUs() {
  // State
  const [essentialsOpen, setEssentialsOpen] = useState(false);
  const [dashboardsOpen, setDashboardsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items
  const navItems: NavItem[] = [
    { label: "Essentials", href: "#", hasDropdown: true },
    { label: "Dashboards", href: "#", hasDropdown: true },
    { label: "Why choose us", href: "#", isActive: true },
    { label: "Competitions", href: "competitions" },
    { label: "Marketplace", href: "marketplace" },
  ];

  // Example players data
  const players: Player[] = [
    {
      id: "1",
      name: "Orban Gift",
      age: 22,
      image: "/orban.png",
      club: "Olympique Lyon",
      position: "CF",
      height: "178m",
      playerAgent: "Aneke/PNG",
      citizenship: "Nigerian",
    },
    {
      id: "2",
      name: "Mohammed Kudus",
      age: 24,
      image: "/kudus.png",
      club: "West Ham United",
      position: "AM",
      height: "177m",
      playerAgent: "Relatives",
      citizenship: "Ghanaian",
    },
    {
      id: "3",
      name: "Victor Boniface",
      age: 23,
      image: "/boniface.png",
      club: "Bayer 04 Leverkusen",
      position: "CF",
      height: "1.90m",
      playerAgent: "Aneke/PNG",
      citizenship: "Nigerian",
    },
    {
      id: "4",
      name: "Samuel Kalu",
      age: 27,
      image: "/kalu.png",
      club: "-",
      position: "RW",
      height: "1.77m",
      playerAgent: "YSI Footbal Devs.",
      citizenship: "Nigerian",
    },
    {
      id: "5",
      name: "Alhassan Yusuf",
      age: 24,
      image: "/yusuf.png",
      club: "New England Revolution",
      position: "CM",
      height: "1.73m",
      playerAgent: "KAI Footbal",
      citizenship: "Nigerian",
    },
    {
      id: "6",
      name: "Terem Moffi",
      age: 25,
      image: "/moffi.png",
      club: "OGC Nice",
      position: "CF",
      height: "1.88m",
      playerAgent: "Elite Project Football",
      citizenship: "Nigerian",
    },
    {
      id: "7",
      name: "Paul Onuachu",
      age: 30,
      image: "/onuachu.png",
      club: "Southampton FC",
      position: "CF",
      height: "2.01m",
      playerAgent: "CMG Sports",
      citizenship: "Nigerian",
    },
    {
      id: "8",
      name: "Frank Onyeka",
      age: 26,
      image: "/onyeka.png",
      club: "FC Augsburg",
      position: "CM",
      height: "1.83m",
      playerAgent: "Wonder Sports",
      citizenship: "Nigerian",
    },
    {
      id: "9",
      name: "Mohammed Salisu",
      age: 25,
      image: "/salisu.png",
      club: "AS Monaco",
      position: "CB",
      height: "1.88m",
      playerAgent: "CAA Stellar",
      citizenship: "Ghanaian",
    },
    // Add remaining players...
  ];

  return (
    <div className="min-h-screen flex flex-col text-black">
      {/* Header */}
      <header className="bg-white py-4 px-6 border-b ">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Image
              src="/DSA-logo.png"
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
                    if (item.label === "Essentials") setEssentialsOpen(true);
                    if (item.label === "Dashboards") setDashboardsOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.label === "Essentials") setEssentialsOpen(false);
                    if (item.label === "Dashboards") setDashboardsOpen(false);
                  }}
                >
                  <a
                    href={item.href}
                    className={`flex items-center ${
                      item.isActive
                        ? "text-blue-700 font-medium"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </a>
                  {item.hasDropdown &&
                    (item.label === "Essentials"
                      ? essentialsOpen
                      : dashboardsOpen) && (
                      <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                        <a
                          href="player-page"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Player Page
                        </a>
                        <a
                          href="player-profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Player Profile
                        </a>
                      </div>
                    )}
                </div>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-blue-700 border border-blue-700 rounded-md hover:bg-blue-50">
              <a href="login">Login</a>
            </button>
            <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
              <a href="signup">Sign up</a>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Why Choose Us
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <p className="text-white leading-relaxed">
            The tide in sourcing Football Talents is slowly turning to West
            Africa and by extension Africa as the prices for European and South
            American players is simply becoming unaffordable to Non European
            Clubs.
          </p>
          <p className="text-white leading-relaxed">
            In order to place players from Nigeria and other West African
            countries on the global football market, meticulous planning and
            strategy have to be adopted in offering visibility to such players
            as well as giving them the needful exposure that they do need early
            in their development to understand the pace, discipline and science
            of the game in complimenting their talent and ambition. The reality
            is that not everyone will navigate via the National Team selection,
            however those that do have the talent can all be identified early
            and promoted through the data at Digital Scouting which we seek to
            offer.
          </p>
          <p className="text-white leading-relaxed">
            The biggest currency in sourcing emerging African Talents are
            scouting videos. The Digital Scouting Africa have been structured in
            a way where club scouts and/or officials already have sufficient
            scouting information of the players and clubs they are coming to
            physically assess in Africa through production of high quality
            scouting videos and digital profiling of talents sourced through the
            Digital Scouting Africa.
          </p>
        </div>
      </section>

      {/* Players Examples Section */}
      <section className="py-12 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-6 ">
          <h2 className="text-2xl font-bold mb-8 text-black">A few examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {players.map((player) => (
              <div
                key={player.id}
                className="bg-white rounded-lg p-6 shadow-sm border border-blue-500"
              >
                <div className="flex items-start space-x-4  ">
                  <Image
                    src={player.image}
                    alt={player.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-blue-900">{player.name}</h3>
                    <p className="text-gray-600 ">{player.age} yrs</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Club:</span>
                    <span className="text-right ">{player.club}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Position:</span>
                    <span>{player.position}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Height:</span>
                    <span>{player.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Player agent:</span>
                    <span>{player.playerAgent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Citizenship:</span>
                    <span>{player.citizenship}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-6 max-w-3xl">
            Looking to elevate your football journey or partner with the leading
            name in talent discovery? At Digital Scouting Africa, we&apos;re
            transforming grassroots football by connecting players, scouts, and
            agencies across the continent.
          </p>
          <p className="mb-4">
            Have questions about how we can help you? Reach out to:
          </p>
          <ul className="space-y-2 mb-8">
            <li>• Learn more about our innovative scouting platform.</li>
            <li>
              • Explore opportunities to showcase your talent or find the next
              big star.
            </li>
            <li>
              • Partner with us to drive football excellence across Africa.
            </li>
          </ul>
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md hover:bg-yellow-300 transition-colors flex items-center">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Image
              src="/dsalogo5.png"
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
              <a href="contact-us" className="hover:text-gray-300">
                Contact us
              </a>
              <a href="FAQs" className="hover:text-gray-300">
                FAQs
              </a>
              <a href="pricing" className="hover:text-gray-300">
                Pricing
              </a>
            </nav>
          </div>
          <div className="text-right text-sm text-gray-400 mt-4">
            <a href="privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms-of-use" className="hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
