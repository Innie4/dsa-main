"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" bg-white">
      {/* Navbar */}
      <nav className="bg-white flex justify-between items-center h-16 px-4">
        <div className="flex items-center">
          <a href="/" className="hover:text-white cursor-pointer">
            <img
              src="/DSA-logo.png"
              alt="Digital Scouting Academy"
              className="h-9"
            />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="player-page"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Essentials
          </a>
          <a
            href="analytics"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Dashboard
          </a>
          <a
            href="/why-choose-us"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Why choose DSA
          </a>
          <a
            href="/marketplace"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Marketplace
          </a>
          <a
            href="/competitions"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Competitions
          </a>
          <Link href="/login">
            <button className="text-sm text-[#122483] hover:text-[#122483] hover:bg-[#edeffa] px-4 py-2 rounded-lg border border-[#122483]">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="text-sm bg-[#122483] text-white px-4 py-2 rounded-lg hover:bg-[#0a1650]">
              Sign up
            </button>
          </Link>
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
          <h2 className="text-lg text-black font-bold">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-6">
          <a
            href="/player-page"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Essentials
          </a>
          <a
            href="/analytics"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Dashboard
          </a>
          <a
            href="/why-choose-us"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Why choose DSA
          </a>
          <a
            href="/marketplace"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Marketplace
          </a>
          <a
            href="/competitions"
            className="text-sm text-gray-700 hover:text-[#122483] transition-colors"
          >
            Competitions
          </a>

          <Link href="/login">
            <button className="text-sm text-[#122483] hover:text-[#122483] px-4 py-2 rounded-lg border border-[#122483]">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="text-sm bg-[#122483] text-white px-4 py-2 rounded-lg hover:bg-[#0a1650]">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;