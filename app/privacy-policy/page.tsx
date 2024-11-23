"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Users, Bell, Settings, ExternalLink, Menu, X } from 'lucide-react';

interface PolicySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

function App() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const policySections: PolicySection[] = [
    {
      id: 'collection',
      title: 'Information We Collect',
      icon: <Shield className="w-6 h-6" />,
      content: [
        'Personal Information: Name, email address, phone number, and location provided during registration.',
        'Profile Details: Player statistics, videos, and scouting preferences.',
        'Usage Data: Interaction with our platform, including pages visited and features used.',
        'Device Information: IP address, browser type, and operating system for security and optimization.'
      ]
    },
    {
      id: 'usage',
      title: 'How We Use Your Information',
      icon: <Users className="w-6 h-6" />,
      content: [
        'Provide personalized scouting and recruitment experiences.',
        'Connect players, scouts, and agencies.',
        'Ensure the security and functionality of our platform.',
        'Analyze platform performance to improve services.',
        'Send notifications, updates, and promotional content relevant to your role.'
      ]
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      icon: <Bell className="w-6 h-6" />,
      content: [
        'We do not sell your personal data. However, we may share your information with:',
        'Scouts and Agencies: To enable professional opportunities for players.',
        'Service Providers: For hosting, analytics, and platform optimization.',
        'Legal Authorities: When required by law to comply with legal obligations or protect our rights.'
      ]
    },
    {
      id: 'rights',
      title: 'Your Rights',
      icon: <Settings className="w-6 h-6" />,
      content: [
        'You have the right to:',
        'Access, update, or delete your personal information through your account settings.',
        'Opt-out of promotional communications.',
        'Request clarification on how your data is used.'
      ]
    }
  ];

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
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

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <h2 className="text-3xl p-1 font-bold text-gray-900">Privacy Policy</h2>
            </div>
            <p className="mb-8 text-lg">
              At Digital Scouting Africa, your privacy is our priority. This Privacy Policy outlines how we collect, use,
              protect, and share your personal information. By using our platform, you agree to the terms outlined below.
            </p>

            {/* Policy Sections */}
            <div className="space-y-4">
              {policySections.map((section) => (
                <div
                  key={section.id}
                  className={`border rounded-lg ${
                    isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
                  } transition-all duration-200`}
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-opacity-50"
                  >
                    <div className="flex items-center space-x-3">
                      {section.icon}
                      <h3 className="text-xl font-semibold">{section.title}</h3>
                    </div>
                    {expandedSection === section.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {expandedSection === section.id && (
                    <div className="px-6 py-4 border-t border-gray-200">
                      <ul className="space-y-3">
                        {section.content.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-gray-900 text-gray-400 py-12 mt-16 w-full rounded-t-xl">
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
      </main>
    </div>
  );
}

export default App;