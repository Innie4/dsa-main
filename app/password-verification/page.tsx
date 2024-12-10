// app/verification/page.tsx
"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import AltHeader from "@/components/alt-header";
import { toast } from "react-hot-toast"; // Import toast
import { postRequest } from "@/helpers/api"; // Import postRequest helper

const VerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]); // State to hold the 6-digit code
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email"); // Get email from search params
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];

    // Handle pasting of multiple characters
    if (value.length > 1) {
      const digits = value.split("").slice(0, 6); // Limit to 6 digits
      for (let i = 0; i < digits.length; i++) {
        if (i < 6) {
          newCode[i] = digits[i]; // Fill in the new code
        }
      }
    } else {
      newCode[index] = value; // Handle single character input
    }

    setCode(newCode);

    // Move to the next input if the current one is filled
    if (value && index < 5) {
      const nextInput = document.querySelector(
        `input[data-index="${index + 1}"]`
      );
      if (nextInput instanceof HTMLInputElement) {
        nextInput.focus();
      }
    } else if (!value && index > 0) {
      // Move to the previous input if the current one is empty
      const prevInput = document.querySelector(
        `input[data-index="${index - 1}"]`
      );
      if (prevInput instanceof HTMLInputElement) {
        prevInput.focus();
      }
    }
  };

  const handleContinue = async () => {
    const otpCode = code.join(""); // Join the code array to form the OTP
    setIsLoading(true); // Set loading to true

    try {
      const data = await postRequest("/auth/verify-otp", {
        email,
        code: otpCode,
      }); // Call the verify-otp endpoint
      toast.success(data.message); // Show success message
      router.push(`/new-password?email=${email}&code=${otpCode}`); // Navigate to the new password page
    } catch (error) {
      const errorMessage =
        (error as { response?: { data?: { message?: string } } })?.response
          ?.data?.message || "Invalid or expired OTP"; // Extract error message
      toast.error(errorMessage); // Show error message
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Check if the code is fully entered
  const isCodeComplete = code.every((digit) => digit !== "");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Header */}
        <AltHeader />

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
              type="button"
              onClick={handleContinue}
              disabled={!isCodeComplete || isLoading} // Disable button if code is not complete or loading
              className={`w-full text-white font-bold py-2 rounded-md transition duration-200 ${
                isCodeComplete && !isLoading
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`} // Change class based on code completion and loading state
            >
              {isLoading ? "Loading..." : "Continue"}
            </button>
            <div className="text-center mt-4">
              <Link
                href="/forgot-password"
                onClick={() => router.back()}
                className="text-blue-500 hover:text-blue-700"
              >
                Resend code
              </Link>
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
    </Suspense>
  );
};

function WrappedVerificationPage() {
  return (
    <Suspense>
      <VerificationPage />
    </Suspense>
  );
}

export default WrappedVerificationPage;
