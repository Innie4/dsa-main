'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation';

interface NavItem {
  label: string
  href: string
  hasDropdown?: boolean
}

export default function BillingHistoryPage() {
  const [essentialsOpen, setEssentialsOpen] = useState(false)
  const [dashboardsOpen, setDashboardsOpen] = useState(false)
  const router = useRouter();

  const navItems: NavItem[] = [
    { label: 'Essentials', href: '#', hasDropdown: true },
    { label: 'Dashboards', href: '#', hasDropdown: true },
    { label: 'Teams', href: '#' },
    { label: 'Players', href: '#' },
    { label: 'Scouts', href: '#' },
    { label: 'My Subscription', href: '#' },
  ]

  const footerNavItems = [
    { label: 'Essentials', href: '#', hasDropdown: true },
    { label: 'Dashboards', href: '#', hasDropdown: true },
    { label: 'Contact us', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Pricing', href: '#' },
  ]

  const handleSubscriptionPlanClick = () => {
    router.push('/pricing');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white py-4 px-6 border-b">
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
                    className={`flex items-center text-gray-700 hover:text-gray-900 ${
                      item.label === 'Scouts' ? 'text-blue-700 font-medium' : ''
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
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Option 3
                      </a>
                    </div>
                  )}
                </div>
              ))}

              <button onClick={handleSubscriptionPlanClick} className="text-blue-600 hover:text-blue-800">
                Subscription plan
              </button>
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
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex space-x-2 text-sm mb-6">
            <a href="#" className="text-gray-500 hover:text-gray-700" onClick={handleSubscriptionPlanClick}>Subscription plan</a>
            <span className="text-gray-500">•</span>
            <span className="text-blue-700 font-medium">Billing History</span>
          </nav>

          <h1 className="text-xl font-medium mb-6">You can see your billing history here</h1>

          {/* Billing Table */}
          <div className="bg-blue-50 rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4 font-medium text-sm">
              <div>DATE</div>
              <div>PLAN</div>
              <div>PAYMENT METHOD</div>
              <div>ACTION</div>
            </div>

            {/* Empty State */}
            <div className="bg-white p-12 flex flex-col items-center justify-center text-center border rounded-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-900 font-medium mb-2">No billing data available.</p>
              <p className="text-gray-500">Subscribe to your first ever Pro plan today!</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 rounded-t-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Image
              src="/dsalogo5.png"
              alt="Digital Scouting Africa Logo"
              width={40}
              height={40}
              className="w-10 h-10 mb-4 md:mb-0"
            />
            <nav className="flex flex-wrap justify-center md:justify-end gap-6">
              {footerNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
              ))}
            </nav>
          </div>
          <div className="text-right text-sm text-gray-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            {' '}and{' '}
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

