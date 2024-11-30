"use client";

import React, { useState } from 'react';
import { ChevronDown, Menu, X, Sticker, CreditCard, Building } from 'lucide-react';
import Header from "@/app/default/page";
import { Footer } from "@/app/default/footer";

interface FormData {
  name: string;
  email: string;
  paymentMethod: "credit" | "bank" | null;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  pin: string[];
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    paymentMethod: null,
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    pin: ["", "", "", ""],
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePinChange = (index: number, value: string) => {
    const newPin = [...formData.pin];
    newPin[index] = value;
    setFormData((prev) => ({ ...prev, pin: newPin }));

    // Auto-focus next input if value is entered
    if (value && index < 3) {
      const nextInput = document.getElementById(`pin-${index + 1}`);
      nextInput?.focus();
    } else if (!value && index > 0) {
      // If the value is deleted and it's not the first input
      const prevInput = document.getElementById(`pin-${index - 1}`);
      prevInput?.focus();
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.paymentMethod) newErrors.paymentMethod = null;

    if (formData.paymentMethod === "credit") {
      if (!formData.cardNumber)
        newErrors.cardNumber = "Card number is required";
      if (!formData.expiryDate)
        newErrors.expiryDate = "Expiry date is required";
      if (!formData.cvv) newErrors.cvv = "CVV is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="md:px-20 lg:px-20 p-4 bg-white">
      <div className="min-h-screen bg-white">
      {/* Header */}
      < Header/>
      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:space-x-16">
            {/* Left Column - Form */}
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-yellow-400 rounded-sm"></div>
                <h1 className="text-4xl font-bold text-blue-900">
                  Upgrade to Pro!
                </h1>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Whether you&apos;re a rising star, a seasoned scout, or a
                forward-thinking agency, Digital Scouting Africa has the tools
                you need to shine. Choose the plan that matches your ambitions
                and unlock opportunities that take you closer to greatness.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-blue-900 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-blue-900 font-medium mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-blue-900 font-medium mb-2">
                    Payment method
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethod: "credit",
                        }));
                        setErrors((prev) => ({ ...prev, paymentMethod: null }));
                      }}
                      className={`p-4 border rounded-md flex items-center justify-center space-x-2 transition-colors ${
                        formData.paymentMethod === "credit"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300"
                      }`}
                    >
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">Credit Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethod: "bank",
                        }));
                        setErrors((prev) => ({ ...prev, paymentMethod: null }));
                      }}
                      className={`p-4 border rounded-md flex items-center justify-center space-x-2 transition-colors ${
                        formData.paymentMethod === "bank"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300"
                      }`}
                    >
                      <Building className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">Bank transfer</span>
                    </button>
                  </div>
                  {errors.paymentMethod && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.paymentMethod}
                    </p>
                  )}
                </div>

                {formData.paymentMethod === "credit" && (
                  <>
                    <div>
                      <label className="block text-blue-900 font-medium mb-2">
                        Card number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => {
                          // Allow only numbers and limit to 16 characters
                          const value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 16);
                          handleInputChange({
                            target: {
                              name: "cardNumber",
                              value,
                            } as HTMLInputElement,
                          } as React.ChangeEvent<HTMLInputElement>);
                        }}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        placeholder="0000 0000 0000 0000"
                        maxLength={16} // Limit to 16 characters
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-blue-900 font-medium mb-2">
                          Expiry date
                        </label>
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
                        <label className="block text-blue-900 font-medium mb-2">
                          CVV
                        </label>
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
                      <label className="block text-blue-900 font-medium mb-2">
                        PIN
                      </label>
                      <div className="flex space-x-4">
                        {formData.pin.map((digit, index) => (
                          <input
                            key={index}
                            id={`pin-${index}`}
                            type="password"
                            value={digit}
                            onChange={(e) =>
                              handlePinChange(index, e.target.value)
                            }
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
                By providing us with your card information, you allow us to
                charge you for future payments in accordance to our terms and
                conditions.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2 mt-8 lg:mt-48 h-44">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="soccer-player-action-stadium.jpg"
                  alt="Stadium seats"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
