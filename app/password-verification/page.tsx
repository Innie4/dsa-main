// app/verification/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const VerificationPage = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']); // State to hold the 6-digit code

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to the next input if the current one is filled
    if (value && index < 5) {
      const nextInput = document.querySelector(`input[data-index="${index + 1}"]`);
      if (nextInput) {
        nextInput.focus();
      }
    } else if (!value && index > 0) {
      // Move to the previous input if the current one is empty
      const prevInput = document.querySelector(`input[data-index="${index - 1}"]`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between py-4 px-4">
        <img src="/DSA-logo.png" alt="Logo" className="h-12" /> {/* Replace with your logo path */}
        <div className="text-sm text-gray-600">© Copyright 2024. All Rights Reserved</div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-left mb-2">Verification</h2>
          <p className="text-sm text-gray-600 text-left mb-4">
            Enter the 6-digit code sent to your email address
          </p>
          <div className="flex justify-center mb-4">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-12 border border-blue-600 rounded-md text-center text-xl mx-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength={1}
                data-index={index}
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Continue
          </button>
          <div className="text-center mt-4">
            <Link href="#" className="text-blue-500 hover:text-blue-700">Resend code</Link>
          </div>
        </div>
      </main>

      {/* Page Selector */}
      <footer className="flex justify-center items-center py-4">
        <div className="flex items-center">
          <div className="flex ml-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full mx-1"></div>
            <div className="w-8 h-3 bg-blue-600 rounded-full mx-1"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full mx-1"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VerificationPage;