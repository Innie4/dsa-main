// app/reset-password.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

const ResetPasswordPage = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/password-verification");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between py-4 px-4">
      <Link href="/">
              <img src="/DSA-logo.png" alt="Logo" className="h-10 cursor-pointer" /> {/* Logo */}
            </Link>
        {/* Replace with your logo path */}
        <div className="text-sm text-gray-600">
          © Copyright 2024. All Rights Reserved
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-4">
            Reset your password
          </h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            We just need your registered email to send you your password reset
            code to it.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Get 6-digit code
            </button>
          </form>
        </div>
      </main>

      {/* Page Selector */}
      <footer className="flex justify-center items-center py-4">
        <div className="flex items-center">
          <div className="flex ml-2">
            <div className="w-8 h-3 bg-blue-600 rounded-full mx-1"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full mx-1"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full mx-1"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResetPasswordPage;
