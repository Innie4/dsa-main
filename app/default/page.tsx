"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" bg-white">
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
    </div>
  );
}

export default Header;

export function Footer() {
  return (
    <>
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
    </>
  );
}
