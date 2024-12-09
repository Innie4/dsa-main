/* eslint-disable @next/next/no-html-link-for-pages */
// app/new-password/page.tsx
"use client"; // Indicate that this is a client component

import React, { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Import useRouter and useSearchParams
import AltHeader from "@/components/alt-header";
import { toast } from "react-hot-toast"; // Import toast
import { postRequest } from "@/helpers/api"; // Import postRequest helper

const NewPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to manage loading
  const router = useRouter(); // Initialize useRouter
  const searchParams = useSearchParams(); // Use useSearchParams to get query params
  const email = searchParams.get("email"); // Get email from search params
  const otp = searchParams.get("code"); // Get OTP from search params

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true

    // Prepare the request body
    const requestBody = {
      email,
      code: otp,
      newPassword,
    };

    try {
      const response = await postRequest("/auth/reset-password", requestBody); // Call the reset-password endpoint
      toast.success(response.message); // Show success message
      router.push("/login"); // Redirect to the login page after successful reset
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message || "Failed to reset password"); // Show error message
      } else {
        toast.error("Failed to reset password"); // Fallback error message
      }
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Check if passwords match
  const passwordsMatch = newPassword === confirmPassword;

  return (
    <Suspense>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Header */}
        <AltHeader />

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
                disabled={!passwordsMatch || isLoading} // Disable button if passwords do not match or loading
                className={`w-full text-white font-bold py-2 rounded-md transition duration-200 ${
                  passwordsMatch && !isLoading
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`} // Change class based on password match and loading state
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Loading...
                  </span>
                ) : (
                  "Reset password"
                )}
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
    </Suspense>
  );
};

const WrappedNewPasswordPage = () => {
  return (
    <Suspense>
      <NewPasswordPage />
    </Suspense>
  );
};
export default WrappedNewPasswordPage;
