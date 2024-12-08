/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
import Header from "@/app/default/page";
import { Footer } from "../default/footer";
import { toast } from "react-hot-toast";
import { postRequest } from "@/helpers/api";
// import { Footer } from "@/app/default/footer";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await postRequest("/contact", formData);
      toast.success(response.message);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message || "Failed to send message");
      } else {
        toast.error("Failed to send message");
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="md:px-20 lg:px-20 p-4 bg-white">
        <div className="min-h-screen bg-white">
          {/* Navbar */}
          <Header />
          {/* Main Content */}
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
              {/* Left Column - Image */}
              <div className="col-span-12 md:col-span-5 relative h-[300px] md:h-[600px] rounded-3xl overflow-hidden md:ml-12">
                <img
                  src="/soccer-ball-white-line-stadium.jpg"
                  alt="Soccer ball on grass"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Contact us
                  </h2>
                  <p className="text-white text-lg">
                    Ask about our platform, pricing plans or anything else. Our
                    highly trained reps are standing by, ready to help with
                    swift responses to your queries!
                  </p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="col-span-12 md:col-span-5 p-3 flex justify-center">
                <div className="w-full md:w-4/5 lg:w-7/8">
                  <h2 className="text-2xl font-bold text-[#0A1F44] mb-8 text-center">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-[#0A1F44] mb-1"
                        >
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
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-[#0A1F44] mb-1"
                        >
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
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#0A1F44] mb-1"
                      >
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
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#0A1F44] mb-1"
                      >
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
                      <img
                        src="/icons/sent.png"
                        alt="Sent icon"
                        className="w-5"
                      />
                      <span>Send message</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
