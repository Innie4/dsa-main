// app/new-password/page.tsx
"use client"; // Indicate that this is a client component

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const NewPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your password reset logic here
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);

    // Redirect to the login page after resetting the password
    router.push("/login"); // Change this to your actual login page path
  };

  // Check if passwords match
  const passwordsMatch = newPassword === confirmPassword;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between py-4 px-4">
        <img src="/DSA-logo.png" alt="Logo" className="h-12" />{" "}
        {/* Replace with your logo path */}
        <div className="text-sm text-gray-600">
          © Copyright 2024. All Rights Reserved
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-left mb-2">New Password</h2>
          <p className="text-sm text-gray-600 text-left mb-4">
            Create new password
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                New password *
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Confirm password *
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={!passwordsMatch} // Disable button if passwords do not match
              className={`w-full text-white font-bold py-2 rounded-md transition duration-200 ${
                passwordsMatch
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`} // Change class based on password match
            >
              Reset password
            </button>
          </form>
        </div>
      </main>

      {/* Page Selector */}
      <footer className="flex justify-center items-center py-4">
        <div className="flex items-center">
          <div className="flex ml-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full mx-1"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full mx-1"></div>
            <div className="w-8 h-3 bg-blue-600 rounded-full mx-1"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewPasswordPage;
