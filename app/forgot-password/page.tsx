// app/reset-password.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AltHeader from "@/components/alt-header";
import { postRequest } from "@/helpers/api"; // Import the postRequest function
import { toast } from "react-hot-toast"; // Import the toast function

const ResetPasswordPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const email = (event.target as HTMLFormElement).email.value; // Get the email from the form

    setLoading(true);

    try {
      const data = await postRequest("/auth/send-otp", { email }); // Use the postRequest helper

      toast.success(data.message); // Show success message using toast
      router.push(`/password-verification?email=${email}`); // Navigate to the next screen
    } catch (error) {
      toast.error("Failed to send OTP"); // Show error message using toast
      console.error(error); // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <AltHeader />

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
                name="email"
                placeholder="Enter your email address"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Get 6-digit code"}
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
