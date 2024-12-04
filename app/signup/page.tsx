/* eslint-disable @next/next/no-img-element */
// app/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react"; // Import icons from lucide-react
import ReturnButton from "@/components/return-button";

const HomePage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 rounded-3xl">
      {/* Left Side Image Placeholder */}
      <div
        className="hidden lg:block relative w-1/2 h-[90vh] mx-auto my-auto bg-cover bg-center rounded-lg ml-12"
        style={{ backgroundImage: "url('/soccer-player-action-stadium.jpg')" }}
      >
        {/* Return to Website Link with Blur and Padding */}
        <ReturnButton />

        {/* Overlay for the image */}
        <div className="h-full bg-black opacity-10 rounded-lg"></div>
        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-lg p-4">
            <p className="text-white text-3xl font-bold mb-2">
              Let&apos;s get started
            </p>
            <p className="text-white">
              Sign up to join the network that discovers top talent across all
              positions of the beautiful game!
            </p>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex items-center justify-center w-full lg:w-1/2 md:w-1/2 p-4">
        <div className=" w-full max-w-2xl">
          {" "}
          {/* Added max-width for better form control */}
          <div className="flex justify-between items-center mb-6">
            <Link href="/">
              <img
                src="/DSA-logo.png"
                alt="Digital Scouting Africa Logo"
                className="h-16 cursor-pointer"
              />
            </Link>
          </div>
          <h2 className="text-4xl font-bold mb-4">Sign Up to get <span className="text-green-800">one month</span> <br />free all exclusive access!</h2>

          {/* Added Login Link */}
          <p className="mt-4 mb-4 text-left text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:text-blue-700">
              Login
            </Link>
            .
          </p>
          <form>
            <div className=" mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Please select the option that best represents you
              </label>
              <div className="flex items-center space-x-4">
                <span>
                  <input type="radio" name="user_type" value="user" /> User{" "}
                </span>
                <span>
                  <input type="radio" name="user_type" value="scout" /> Scout{" "}
                </span>
                <span>
                  <input type="radio" name="user_type" value="agency" /> Agency{" "}
                </span>
              </div>
            </div>
            <div className="md:flex lg:flex mb-4">
              <div className="md:w-1/2 lg:w-1/2 md:pr-2">
                <label className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="md:w-1/2 lg:w-1/2 md:pl-2 my-4 md:mt-0">
                <label className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="md:flex mb-4">
              <div className="md:w-1/2 md:pr-2 relative">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center mt-2.5 mr-2"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-600" />
                  )}
                </button>
              </div>
              <div className="md:w-1/2 md:pl-2 relative mt-4 md:mt-0">
                <label className="block text-sm font-medium text-gray-700">
                  Confirm password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center mt-2.5 mr-1"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Nationality
              </label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md p-2 overflow-y-auto max-h-40">
                <option>Select nationality</option>
                <option value="benin">Benin</option>
                <option value="burkina_faso">Burkina Faso</option>
                <option value="cape_verde">Cape Verde</option>
                <option value="ivory_coast">Ivory Coast</option>
                <option value="gambia">Gambia</option>
                <option value="ghana">Ghana</option>
                <option value="guinea">Guinea</option>
                <option value="guinea_bissau">Guinea-Bissau</option>
                <option value="liberia">Liberia</option>
                <option value="mali">Mali</option>
                <option value="niger">Niger</option>
                <option value="nigeria">Nigeria</option>
                <option value="senegal">Senegal</option>
                <option value="sierra_leone">Sierra Leone</option>
                <option value="togo">Togo</option>
              </select>
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-600">
                I agree with{" "}
                <a href="#" className="text-blue-500">
                  Terms of Service
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-300 text-gray-700 font-bold py-2 rounded-md hover:bg-gray-400"
            >
              Create account
            </button>
            <div className="flex items-center justify-center mt-4">
              <span className="text-gray-500">Or</span>
            </div>
            <button className="w-full bg-gray-300 text-gray-700 font-bold py-2 rounded-md mt-2 hover:bg-gray-400">
              Sign up with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
