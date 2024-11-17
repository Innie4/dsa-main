import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side Image Placeholder */}
      <div
        className="hidden lg:block relative w-[36%] h-[90vh] mx-auto my-auto bg-cover bg-center rounded-l -lg ml-12"
        style={{ backgroundImage: "url('/alex-_AOL4_fDQ3M-unsplash.jpg')" }}
      >
        {/* Return to Website Link */}
        <Link href="/" className="absolute top-4 left-4 text-sm text-white bg-black bg-opacity-50 rounded-md p-2 backdrop-blur-md hover:text-blue-300">
          Return to website
        </Link>

        {/* Overlay for the image */}
        <div className="h-full bg-black opacity-50 rounded-l-lg"></div>
        
        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-lg p-4">
            <h2 className="text-white text-lg font-bold">Let’s scout!</h2>
            <p className="text-white">Welcome back to the field! Discover talents, connect, and stay updated on rising stars.</p>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex items-center justify-center w-full lg:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="flex justify-between items-center mb-6">
            <img src="/DSA-logo.png" alt="Logo" className="h-10" /> {/* Logo */}
          </div>
          <h2 className="text-2xl font-bold mb-4">Welcome back 👋</h2>
          <p className="text-sm text-gray-600 mb-4">New to the team? <Link href="/signup" className="text-blue-500 hover:text-blue-700">Sign up</Link></p>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" placeholder="Enter your email address" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" placeholder="Enter your password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-600">Remember me</label>
            </div>
            <button type="submit" className="w-full bg-gray-600 text-white font-bold py-2 rounded-md hover:bg-gray-700">Sign in</button>
            <div className="flex items-center justify-center mt-4">
              <span className="text-gray-500">Or</span>
            </div>
            <button className="w-full bg-gray-300 text-gray-700 font-bold py-2 rounded-md mt-2 hover:bg-gray-400">Continue with Google</button>
            <div className="mt-4 text-center">
              <Link href="/forgot-password" className="text-blue-500 hover:text-blue-700">Forgot password?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
