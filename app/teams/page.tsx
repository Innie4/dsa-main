/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

// import { useState } from "react";
import Image from "next/image";
import Header from "@/app/default/signed-inheader";
import { Footer } from "@/app/default/footer";

// Types
// interface NavItem {
//   label: string;
//   href: string;
//   hasDropdown?: boolean;
//   isActive?: boolean;
// }

interface TeamCard {
    id: string
    name: string
    logo: string
    location: string
    players: number
    rating: number
  }

export default function WhyChooseUs() {
  // Navigation items
  // const navItems: NavItem[] = [
  //   { label: "Essentials", href: "#", hasDropdown: true },
  //   { label: "Dashboards", href: "#", hasDropdown: true },
  //   { label: "Why choose us", href: "#", isActive: true },
  //   { label: "Competitions", href: "competitions" },
  //   { label: "Marketplace", href: "marketplace" },
  // ];

  const teams: TeamCard[] = [
    {
      id: '1',
      name: 'Rangers FC',
      logo: '/rangers.png?height=80&width=80',
      location: 'Nigeria',
      players: 25,
      rating: 8.0
    },
    {
      id: '2',
      name: 'Union Stars',
      logo: '/union-stars.png?height=80&width=80',
      location: 'Nigeria',
      players: 25,
      rating: 8.0
    },
    {
      id: '3',
      name: 'Yellow Rangers',
      logo: '/yellow-rangers.png?height=80&width=80',
      location: 'Nigeria',
      players: 25,
      rating: 8.0
    },
    {
      id: '4',
      name: 'Jos City Stars',
      logo: '/jos-city.png?height=80&width=80',
      location: 'Nigeria',
      players: 25,
      rating: 8.0
    },
    {
      id: '5',
      name: 'HighFlyers United',
      logo: '/highflyers.png?height=80&width=80',
      location: 'Nigeria',
      players: 25,
      rating: 8.0
    },
    {
      id: '6',
      name: 'Asokiti Stars',
      logo: '/asokiti.png?height=80&width=80',
      location: 'Nigeria',
      players: 25,
      rating: 8.0
    },
    {
      id: '7',
      name: 'Blue Rives United',
      logo: '/blue-rivers.png?height=80&width=80',
      location: 'Nigeria',
      players: 25,
      rating: 8.0
    },
    {
      id: '8',
      name: 'Nile FC',
      logo: '/nile.png?height=80&width=80',
      location: 'Nigeria',
      players: 25,
      rating: 8.0
    },
    {
      id: '9',
      name: 'City Boys',
      logo: '/cityboys.png?height=80&width=80',
      location: 'Nigeria',
      players: 25,
      rating: 8.0
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="md:px-20 lg:px-20 p-4 bg-white">
        <div className="min-h-screen bg-white">
          {/* Header */}
          <Header />

          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-r from-green-500 via-teal-500 to-blue-900 rounded-xl">
        <div className="max-w-7xl mx-auto px-6 py-16 roumded-xl relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4 roumded-3xl">
              <div className="w-1 h-6 bg-yellow-400"></div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Teams affiliated with us
              </h1>
            </div>
            <p className="text-white/90 text-md mb-6">
              Discover a diverse lineup of football teams shaping the future of the
              sport. From grassroots squads to elite contenders, each team brings
              unique talent, ambition, and passion to the field.
            </p>
            <p className="text-white/80">
              Search, filter, and connect with teams from across the region.
              Whether you're scouting for talent, exploring partnerships, or simply
              staying informed, this is your gateway to the vibrant world of football
              teams.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full">
          <Image
            src="/teamy.png?height=400&width=600"
            alt="Football Players"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </section>

           {/* Teams Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">The Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <div
                key={team.id}
                className="border-blue-900 border-2 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={team.logo}
                    alt={`${team.name} logo`}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-blue-900">{team.name}</h3>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span>{team.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Players:</span>
                    <span>{team.players}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Ratings:</span>
                    <span className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      {team.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

          {/* Get in Touch Section */}
          <section className="bg-blue-900 text-white py-16 rounded-xl">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-white/80 mb-8">
              Looking to learn more about the teams shaping grassroots football? Whether you're a scout searching for the next big
              star, a coach exploring collaborations, or a team manager looking to join our platform, we're here to assist.
            </p>
            <p className="text-white/80 mb-8">
              At Digital Scouting Africa, we believe teams are the heart of football. Our platform provides detailed profiles, performance
              stats, and visibility to connect teams with opportunities that help them grow. If you have questions or need assistance,
              let's get the conversation started.
            </p>

              <button className="bg-yellow-400 space-x-2 text-gray-900 px-6 py-3 rounded-md hover:bg-yellow-300 transition-colors flex items-center">
                <a
                  href="contact-us"
                  className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
                >
                  Contact Us
                </a>
                <img src="/arrow-side.png" className="w-5" />
              </button>
            </div>
          </section>

          {/* Footer */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
