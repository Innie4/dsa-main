"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column - Image */}
          <div className="col-span-12 md:col-span-5 relative h-[300px] md:h-[600px] rounded-3xl overflow-hidden md:ml-12">
            <img 
              src="/soccer-ball-white-line-stadium.jpg" 
              alt="Soccer ball on grass"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Contact us</h2>
              <p className="text-white text-lg">
                Ask about our platform, pricing plans or anything else. Our highly trained reps are standing by, ready to help with swift responses to your queries!
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="col-span-12 md:col-span-5 p-3 flex justify-center">
            <div className="w-full md:w-4/5 lg:w-3/4">
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-8 text-center">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#0A1F44] mb-1">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#0A1F44] mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0A1F44] mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0A1F44] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message goes here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-3 px-4 rounded-lg hover:bg-blue-800 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16v12H5.17L4 17.17V4zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4z" fill="currentColor"/>
                  </svg>
                  <span>Send message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;