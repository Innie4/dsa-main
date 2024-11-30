"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Menu, X } from "lucide-react";
import Header from "@/app/default/page";
import { Footer } from "@/app/default/footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="md:px-20 lg:px-20 p-4 bg-white">
      <div className="min-h-screen bg-white">
      {/* Navbar */}
     <Header/>
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
              <a
            href="free-plan"
            className="text-sm text-white hover:text-[#122483] transition-colors"
          >
            Get Started
          </a>
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
              <a
            href="pro-plan"
            className="text-sm text-white hover:text-[#122483] transition-colors"
          >
            Get Started
          </a>
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
        <div className="display-none absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-10">

        </div>
      </div>

      {/* Footer */}
  
          </div>
          </div>
          <Footer/>
          </div>
  );
}

export default App;
