// app/page.tsx
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side Image Placeholder */}
      <div
        className="hidden lg:block relative w-[40%] h-[90vh] mx-auto my-auto bg-cover bg-center rounded-lg ml-12"
        style={{ backgroundImage: "url('/soccer-player-action-stadium.jpg')" }}
      >
        {/* Return to Website Link with Blur and Padding */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 rounded-md p-2 backdrop-blur-md">
          <Link href="/" className="text-white text-xs hover:text-blue-300">Return to website</Link>
        </div>

        {/* Overlay for the image */}
        <div className="h-full bg-black opacity-50 rounded-lg"></div>
        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-lg p-4">
            <p className="text-white mb-2">Let's get started</p>
            <p className="text-white">Sign up to join the network that discovers top talent across all positions of the beautiful game!</p>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex items-center justify-center w-full lg:w-2/3 p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="flex justify-between items-center mb-6">
            <img src="/DSA-logo.png" alt="Logo" className="h-10" /> {/* Logo */}
          </div>
          <h2 className="text-2xl font-bold mb-4">Create an account</h2>
                    {/* Added Login Link */}
                    <p className="mt-4 mb-4 text-left text-sm text-gray-600">
            Already have an account? <Link href="/login" className="text-blue-500 hover:text-blue-700">Login</Link>.
          </p>
          <form>
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" placeholder="Enter your first name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" placeholder="Enter your last name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" placeholder="Enter your email address" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" placeholder="Enter your password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-sm font-medium text-gray-700">Confirm password</label>
                <input type="password" placeholder="Confirm your password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Nationality</label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                <option>Select nationality</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-600">I agree with <a href="#" className="text-blue-500">Terms of Service</a>.</label>
            </div>
            <button type="submit" className="w-full bg-gray-600 text-white font-bold py-2 rounded-md hover:bg-gray-700">Create account</button>
            <div className="flex items-center justify-center mt-4">
              <span className="text-gray-500">Or</span>
            </div>
            <button className="w-full bg-gray-300 text-gray-700 font-bold py-2 rounded-md mt-2 hover:bg-gray-400">Sign up with Google</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default HomePage;