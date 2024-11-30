/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React, { useState } from "react";
import { ChevronDown, LogOut, User, Sticker, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("subscription");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleBillingHistoryClick = () => {
    router.push("/billing-history");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Navigation */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center mr-8">
              <a href="/" className="text-gray-700 font-semibold">
                <img
                  src="/DSA-logo.png"
                  alt="Digital Scouting Academy"
                  className="h-9"
                />
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-6">
                <button className="text-gray-700 hover:text-blue-800 flex items-center">
                  Essentials <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <button className="text-gray-700 hover:text-blue-800 flex items-center">
                  Dashboards <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <a href="teams" className="text-gray-700 hover:text-blue-800">
                  Teams
                </a>
                <a
                  href="player-page"
                  className="text-gray-700 hover:text-blue-800"
                >
                  Players
                </a>
                <a href="scouts" className="text-gray-700 font-semibold">
                  Scouts
                </a>
              </div>

              <a href="pricing" className="text-gray-700 hover:text-blue-800">
                My Subscription
              </a>

              <div className="relative">
                <button
                  className="flex items-center space-x-3"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <img
                    src="samson.png"
                    alt="Samson Adenuga"
                    className="h-10 w-10 rounded-full border-2 border-yellow-400"
                  />
                  <div className="text-left">
                    <div className="text-gray-700">Samson Adenuga</div>
                    <div className="text-sm text-gray-400">Profile</div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                    <a
                      href="profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </a>
                    <a
                      href="login"
                      className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Hamburger Menu for Small Screens */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hamburger Menu Items */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
            <div className="flex flex-col space-y-2 p-4">
              <button className=" hover:text-blue-800 flex items-center">
                <a
                  href="player-page"
                  className="text-gray-700 hover:text-blue-800"
                >
                  Essentials
                </a>{" "}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <button className="text-gray-600 hover:text-blue-800 flex items-center">
                <a href="teams" className="text-gray-700 hover:text-blue-800">
                  Dropdown
                </a>{" "}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <a href="teams" className="text-gray-700 hover:text-blue-800">
                Teams
              </a>
              <a
                href="player-page"
                className="text-gray-700 hover:text-blue-800"
              >
                Players
              </a>
              <a href="scouts" className="text-gray-700 font-semibold">
                Scouts
              </a>
              <a
                href="pricing"
                className="text-blue-600 hover:text-blue-800"
                onClick={handleBillingHistoryClick}
              >
                My Subscription
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="w-full px-4 py-8 bg-white">
        {/* Tabs */}
        <div className="mb-6">
          <div className="flex space-x-8">
            <button
              className={`pb-4 ${
                activeTab === "subscription"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("subscription")}
            >
              Subscription plan
            </button>
            <button
              className={`pb-4 ${
                activeTab === "billing"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={handleBillingHistoryClick}
            >
              Billing History
            </button>
          </div>
        </div>

        <p className="text-gray-500 text-lg mb-8">
          View your subscription plans here.
        </p>

        {/* Subscription Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div className="space-y-6">
            <div className="flex justify-between">
              <div>
                <div className="text-black-500 mb-1">Start date: Jan. 2025</div>
              </div>
              <div>
                <div className="text-black-500 mb-1">End date: Jan. 2026</div>
              </div>
            </div>

            {/* Progress Bar Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                {/* Optional: Add any additional text here */}
              </div>
              <div className="relative w-7/8 h-4 bg-gray-200 rounded">
                <div
                  className="absolute top-0 left-0 h-4 bg-blue-600 rounded"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            {/* Current Plan */}
            <div className="bg-blue-900 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 w-full">
                  <Sticker className="h-5 w-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">PRO</span>
                  <div className="flex-grow h-1 bg-yellow-400 ml-2" />{" "}
                  {/* Horizontal line beside FREE */}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-white">
                  ₦ 5,000.00{" "}
                  <span className="text-sm text-gray-300 mb-4"> per month</span>
                </div>
                <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition-colors">
                  <a
                    href="credit-card"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Upgrade Plan
                  </a>
                </button>
              </div>
            </div>

            <p className="text-black-500 leading-relaxed mb-4">
              Take the first step toward your football dreams—at no cost.
              Showcase your talent, and start connecting with scouts and
              agencies. It&apos;s your gateway to opportunities.
            </p>
          </div>

          {/* Image with reduced height */}
          <div className="rounded-2xl overflow-hidden h-96">
            {" "}
            {/* Set a specific height */}
            <img
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Football equipment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-16 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="/dsalogo5.png"
                alt="Digital Scouting Academy"
                className="h-9"
              />
            </div>
            <div className="flex space-x-6">
              <a href="player-page" className="hover:text-white">
                Essentials
              </a>
              <a href="analytics" className="hover:text-white">
                Dashboards
              </a>
              <a href="contact-us" className="hover:text-white">
                Contact us
              </a>
              <a href="FAQs" className="hover:text-white">
                FAQs
              </a>
              <a href="pricing" className="hover:text-white">
                Pricing
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 justify-end">
              <a
                href="privacy-policy"
                className="text-sm hover:text-yellow-300 text-yellow-500"
              >
                Privacy Policy
              </a>
              <span className="text-yellow-500">and</span>
              <a
                href="terms-of-use"
                className="text-sm hover:text-yellow-300 text-yellow-500"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
