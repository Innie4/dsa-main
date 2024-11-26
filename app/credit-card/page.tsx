"use client";

import React, { useState } from 'react';
import { ChevronDown, Menu, X, Sticker, CreditCard, Building } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  paymentMethod: 'credit' | 'bank' | null;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  pin: string[];
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    paymentMethod: null,
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    pin: ['', '', '', '']
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handlePinChange = (index: number, value: string) => {
    const newPin = [...formData.pin];
    newPin[index] = value;
    setFormData(prev => ({ ...prev, pin: newPin }));

    // Auto-focus next input if value is entered
    if (value && index < 3) {
        const nextInput = document.getElementById(`pin-${index + 1}`);
        nextInput?.focus();
    } else if (!value && index > 0) { // If the value is deleted and it's not the first input
        const prevInput = document.getElementById(`pin-${index - 1}`);
        prevInput?.focus();
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required';
    
    if (formData.paymentMethod === 'credit') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sticker className="h-8 w-8 text-blue-600" />
              <span className="text-lg font-bold">Digital Scouting Africa</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-gray-700">Essentials</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-gray-700">Dashboards</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
              <span className="text-gray-700 cursor-pointer">Why choose us</span>
              <span className="text-gray-700 cursor-pointer">Marketplace</span>
              <button className="text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-blue-50 border border-transparent">
                Login
              </button>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                Sign up
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <button className="text-gray-700">Essentials</button>
                <button className="text-gray-700">Dashboards</button>
                <button className="text-gray-700">Why choose us</button>
                <button className="text-gray-700">Marketplace</button>
                <button className="text-blue-700 font-medium">Login</button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-md">Sign up</button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:space-x-16">
            {/* Left Column - Form */}
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-yellow-400 rounded-sm"></div>
                <h1 className="text-4xl font-bold text-blue-900">Upgrade to Pro!</h1>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Whether you're a rising star, a seasoned scout, or a forward-thinking agency, 
                Digital Scouting Africa has the tools you need to shine. Choose the plan that 
                matches your ambitions and unlock opportunities that take you closer to greatness.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-blue-900 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-blue-900 font-medium mb-2">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-blue-900 font-medium mb-2">Payment method</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, paymentMethod: 'credit' }));
                        setErrors(prev => ({ ...prev, paymentMethod: '' }));
                      }}
                      className={`p-4 border rounded-md flex items-center justify-center space-x-2 transition-colors ${
                        formData.paymentMethod === 'credit'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300'
                      }`}
                    >
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">Credit Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, paymentMethod: 'bank' }));
                        setErrors(prev => ({ ...prev, paymentMethod: '' }));
                      }}
                      className={`p-4 border rounded-md flex items-center justify-center space-x-2 transition-colors ${
                        formData.paymentMethod === 'bank'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300'
                      }`}
                    >
                      <Building className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">Bank transfer</span>
                    </button>
                  </div>
                  {errors.paymentMethod && (
                    <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>
                  )}
                </div>

                {formData.paymentMethod === 'credit' && (
                  <>
                    <div>
                      <label className="block text-blue-900 font-medium mb-2">Card number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => {
                          // Allow only numbers and limit to 16 characters
                          const value = e.target.value.replace(/\D/g, '').slice(0, 16);
                          handleInputChange({ target: { name: 'cardNumber', value } });
                        }}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        placeholder="0000 0000 0000 0000"
                        maxLength={16} // Limit to 16 characters
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-blue-900 font-medium mb-2">Expiry date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-blue-900 font-medium mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="000"
                          maxLength={3}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-blue-900 font-medium mb-2">PIN</label>
                      <div className="flex space-x-4">
                        {formData.pin.map((digit, index) => (
                          <input
                            key={index}
                            id={`pin-${index}`}
                            type="password"
                            value={digit}
                            onChange={(e) => handlePinChange(index, e.target.value)}
                            className="w-12 h-12 text-center border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                            maxLength={1}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <button
                    type="button"
                    className="w-full py-3 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              <p className="text-sm text-gray-600">
                By providing us with your card information, you allow us to charge you
                for future payments in accordance to our terms and conditions.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2 mt-8 lg:mt-48 h-44">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?auto=format&fit=crop&q=80"
                  alt="Stadium seats"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-8 border-b border-gray-800">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sticker className="h-8 w-8 text-blue-500" />
              <span className="text-white font-bold">Digital Scouting Africa</span>
            </div>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <span className="cursor-pointer hover:text-gray-300">Essentials</span>
              <span className="cursor-pointer hover:text-gray-300">Dashboards</span>
              <span className="cursor-pointer hover:text-gray-300">Contact us</span>
              <span className="cursor-pointer hover:text-gray-300">FAQs</span>
              <span className="cursor-pointer hover:text-gray-300">Pricing</span>
            </div>
          </div>
          <div className="flex justify-end space-x-2 text-sm text-gray-400 mt-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <span>and</span>
            <a href="#" className="hover:text-gray-300">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;