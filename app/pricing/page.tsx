"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Users, ArrowRight, Check, Settings, ExternalLink, Menu, X, Book, UserCheck, AlertTriangle } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string | string[];
}

function App() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['welcome']));
  const [accepted, setAccepted] = useState(false);

  const sections: Section[] = [
    {
      id: 'welcome',
      title: 'Welcome to Digital Scouting Africa',
      content: 'By accessing or using our platform, you agree to comply with these Terms of Use. Please read them very carefully and judiciously.',
      icon: <Book className="w-6 h-6" />,
    },
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      content: 'By creating an account or using Digital Scouting Africa, you agree to these terms and our Privacy Policy. If you do not agree, you must not use the platform.',
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      id: 'responsibilities',
      title: 'User Responsibilities',
      content: [
        'Accuracy of Information: Users must provide accurate and up-to-date information during registration and profile creation.',
        'Appropriate Use: The platform must only be used for scouting, recruitment, and related purposes. Any misuse, including harassment, unauthorized access, or fraudulent activities, is strictly prohibited.',
        'Compliance: Users must comply with all applicable laws and regulations while using Digital Scouting Africa.',
      ],
      icon: <Shield className="w-6 h-6" />,
    },
    {
      id: 'content',
      title: 'Platform Content',
      content: [
        'Ownership: All content on Digital Scouting Africa, including designs, text, and media, is owned by or licensed to us and protected by copyright laws.',
        'User Content: By uploading content (e.g., videos or profiles), you grant us a license to use, display, and distribute it for scouting-related purposes.',
        'Prohibited Content: Users must not post content that is offensive, illegal, or violates intellectual property rights.',
      ],
      icon: <Settings className="w-6 h-6" />,
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      content: 'Digital Scouting Africa is not liable for any direct, indirect, or consequential damages arising from the use of the platform, including missed opportunities or disputes between users.',
      icon: <AlertTriangle className="w-6 h-6" />,
    },
  ];

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm flex justify-between items-center h-16 px-4">
        <div className="flex items-center">
          <img src="/DSA-logo.png" alt="Digital Scouting Academy" className="h-9" />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <button className="text-sm text-gray-700 hover:text-[#122483] transition-colors">Essentials</button>
          <button className="text-sm text-gray-700 hover:text-[#122483] transition-colors">Dashboards</button>
          <a href="#" className="text-sm text-gray-700 hover:text-[#122483] transition-colors">Why choose DSA</a>
          <a href="#" className="text-sm text-gray-700 hover:text-[#122483] transition-colors">Marketplace</a>
          <a href="#" className="text-sm text-gray-700 hover:text-[#122483] transition-colors">Reports</a>
          <button className="text-sm text-[#122483] hover:text-[#122483] px-4 py-2 rounded-lg border border-[#122483]">Login</button>
          <button className="text-sm bg-[#122483] text-white px-4 py-2 rounded-lg hover:bg-[#0a1650]">Sign up</button>
        </div>
      </nav>

      {/* Hamburger Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)} />
      )}
      <div className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} w-2/5 md:w-1/3`}>
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <button className="text-sm text-gray-700 hover:text-[#122483] transition-colors">Essentials</button>
          <button className="text-sm text-gray-700 hover:text-[#122483] transition-colors">Dashboards</button>
          <a href="#" className="text-sm text-gray-700 hover:text-[#122483] transition-colors">Why choose DSA</a>
          <a href="#" className="text-sm text-gray-700 hover:text-[#122483] transition-colors">Marketplace</a>
          <a href="#" className="text-sm text-gray-700 hover:text-[#122483] transition-colors">Reports</a>
          <button className="text-sm text-[#122483] hover:text-[#122483] px-4 py-2 rounded-lg border border-[#122483]">Login</button>
          <button className="text-sm bg-[#122483] text-white px-4 py-2 rounded-lg hover:bg-[#0a1650]">Sign up</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-lightblue-200 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="md:flex lg:flex justify-between items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              We've got that perfect plan for<br />all our ballers!
            </h1>
            <img
              src="Blurred-Ball.png"
              alt="Soccer Ball"
              className="md:w-[330px] lg:w-[380px] md:h-[245px] lg:h-[245px] w-full object-cover rounded-full"
            />
          </div>

          {/* Pricing Cards */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition border-2 border-blue-600">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Free plan</h3>
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
                <p className="text-sm text-gray-600 mb-4">Everything in our Free plan</p>
                <ul className="space-y-4">
                  {[
                    'Start showcasing your talent with essential tools',
                    'Create a basic player, scout, or agency profile',
                    'Limited visibility in search results',
                    'Access basic scouting insights',
                    'Standard email support (48-72 hour response)',
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
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Pro plan</h3>
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
                <p className="text-sm text-gray-600 mb-4">Everything in our Pro plan</p>
                <ul className="space-y-4">
                  {[
                    'Unlock advanced features to stand out',
                    'Add detailed stats and multimedia for better visibility',
                    'Appear first in scout and agency searches',
                    'Dive deep into performance stats and comparisons',
                    'Get responses within 24 hours',
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
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-16 rounded-t-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/dsalogo5.png" alt="Digital Scouting Academy" className="h-9" />
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Essentials</a>
              <a href="#" className="hover:text-white">Dashboards</a>
              <a href="#" className="hover:text-white">Contact us</a>
              <a href="#" className="hover:text-white">FAQs</a>
              <a href="#" className="hover:text-white">Pricing</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 justify-end">
              <a href="#" className="text-sm hover:text-yellow-300 text-yellow-500">Privacy Policy</a>
              <span className="text-yellow-500">and</span>
              <a href="#" className="text-sm hover:text-yellow-300 text-yellow-500">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;