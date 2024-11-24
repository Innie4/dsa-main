"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Menu, X } from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm flex justify-between items-center h-16 px-4">
        <div className="flex items-center">
          <img
            src="/DSA-logo.png"
            alt="Digital Scouting Academy"
            className="h-9"
          />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <button className="text-sm text-gray-700 hover:text-[#122483] transition-colors">
            Essentials
          </button>
          <button className="text-sm text-gray-700 hover:text-[#122483] transition-colors">
            Dashboards
          </button>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Why choose DSA
          </a>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Reports
          </a>
          <button className="text-sm text-[#122483] hover:text-[#122483] px-4 py-2 rounded-lg border border-[#122483]">
            Login
          </button>
          <button className="text-sm bg-[#122483] text-white px-4 py-2 rounded-lg hover:bg-[#0a1650]">
            Sign up
          </button>
        </div>
      </nav>

      {/* Hamburger Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-2/5 md:w-1/3`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <button className="text-sm text-gray-700 hover:text-[#122483] transition-colors">
            Essentials
          </button>
          <button className="text-sm text-gray-700 hover:text-[#122483] transition-colors">
            Dashboards
          </button>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Why choose DSA
          </a>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Reports
          </a>
          <button className="text-sm text-[#122483] hover:text-[#122483] px-4 py-2 rounded-lg border border-[#122483]">
            Login
          </button>
          <button className="text-sm bg-[#122483] text-white px-4 py-2 rounded-lg hover:bg-[#0a1650]">
            Sign up
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-lightblue-200 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              We&apos;ve got that perfect plan for
              <br />
              all our ballers!
            </h1>
            <img
              src="Blurred-Ball.png"
              alt="Soccer Ball"
              className="w-[330px] h-[245px] object-cover rounded-full"
            />
          </div>

          {/* Pricing Cards */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition border-2 border-blue-600">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Free plan
              </h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">₦</span>
                <span className="text-4xl font-bold">0.00</span>
                <span className="text-gray-500 ml-2">/per month</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="mt-8">
                <h4 className="font-semibold mb-4">FEATURES</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Everything in our Free plan
                </p>
                <ul className="space-y-4">
                  {[
                    "Start showcasing your talent with essential tools",
                    "Create a basic player, scout, or agency profile",
                    "Limited visibility in search results",
                    "Access basic scouting insights",
                    "Standard email support (48-72 hour response)",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition border-2 border-blue-600">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Pro plan
              </h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">₦</span>
                <span className="text-4xl font-bold">5,000.00</span>
                <span className="text-gray-500 ml-2">/per month</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="mt-8">
                <h4 className="font-semibold mb-4">FEATURES</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Everything in our Pro plan
                </p>
                <ul className="space-y-4">
                  {[
                    "Unlock advanced features to stand out",
                    "Add detailed stats and multimedia for better visibility",
                    "Appear first in scout and agency searches",
                    "Dive deep into performance stats and comparisons",
                    "Get responses within 24 hours",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Background Soccer Ball */}
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1614632537197-38a17061c2bd?auto=format&fit=crop&w=500"
            alt="Soccer Ball"
            className="w-96 h-96 object-cover rounded"
          />
        </div>
      </div>

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
              <a href="#" className="hover:text-white">
                Essentials
              </a>
              <a href="#" className="hover:text-white">
                Dashboards
              </a>
              <a href="#" className="hover:text-white">
                Contact us
              </a>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 justify-end">
              <a
                href="#"
                className="text-sm hover:text-yellow-300 text-yellow-500"
              >
                Privacy Policy
              </a>
              <span className="text-yellow-500">and</span>
              <a
                href="#"
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
