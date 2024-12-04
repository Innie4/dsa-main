'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, LogOut } from 'lucide-react'

interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

const navItems: NavItem[] = [
  { label: 'Essentials', href: 'player-page' },
  { label: 'Dashboards', href: '#' },
  { label: 'Why choose us', href: 'why-choose-us', isActive: true },
  { label: 'Competitions', href: 'competitions' },
  { label: 'Marketplace', href: '#' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className="bg-white py-4 px-6 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center space-x-8">
          <div className="flex items-center justify-between w-full">
            <Image
              src="/DSA-logo.png"
              alt="Digital Scouting Africa Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`flex items-center ${
                    item.isActive ? 'text-blue-700 font-medium' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4 w-64">
            <div className="hidden md:flex items-center space-x-2">
              <Image
                src="/Samson.png"
                alt="User Avatar"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-medium">Samson Adenuga</div>
                <div className="flex items-center text-sm text-gray-500">
                  <a href="my-profile" className="hover:text-gray-700">Profile</a>
                  <span className="mx-2">•</span>
                  <a href="login" className="flex items-center text-red-600 hover:text-red-700">
                    <LogOut className="h-4 w-4 mr-1" />
                    Logout
                  </a>
                </div>
              </div>
            </div>
            <button
              className="md:hidden text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-1/2 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <button
            className="self-end text-gray-700 hover:text-gray-900 mb-8"
            onClick={toggleMobileMenu}
          >
            <X className="h-6 w-6" />
          </button>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-lg ${
                  item.isActive ? 'text-blue-700 font-medium' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/Samson.png"
                alt="User Avatar"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-medium">Samson Adenuga</div>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Profile</a>
              </div>
            </div>
            <a href="#" className="flex items-center text-red-600 hover:text-red-700">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

