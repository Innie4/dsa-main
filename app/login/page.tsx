/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ReturnButton from "@/components/return-button";

const LoginPage = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("https://dsa2-1.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful");
        // You might want to store the token and user data here
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error occurred");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side Image Placeholder */}
      <div
        className="hidden lg:block relative w-1/2 h-[90vh] ml-32 my-auto bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: "url('/alex-_AOL4_fDQ3M-unsplash.jpg')" }}
      >
        {/* Return to Website Link */}
        <ReturnButton />

        {/* Overlay for the image */}
        <div className="h-full bg-black opacity-50 rounded-3xl"></div>

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-lg p-4">
            <h2 className="text-white text-lg font-bold">Let’s scout!</h2>
            <p className="text-white">
              Welcome back to the field! Discover talents, connect, and stay
              updated on rising stars.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex items-center justify-center w-full md:1/2 lg:w-1/2 p-4">
        <div className=" max-w-md w-full">
          <div className="flex justify-between items-center mb-6">
            <Link href="/">
              <img
                src="/DSA-logo.png"
                alt="Logo"
                className="h-10 cursor-pointer"
              />{" "}
              {/* Logo */}
            </Link>
          </div>
          <h2 className="text-2xl font-bold mb-4">Welcome back 👋</h2>
          <p className="text-sm text-gray-600 mb-4">
            New to the team?{" "}
            <Link href="/signup" className="text-blue-500 hover:text-blue-700">
              Sign up
            </Link>
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
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex items mb-6">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-600">Remember me</label>

              <div className="mt-0 text-right ml-28 lg:ml-32">
              <Link
                href="/forgot-password"
                className="text-blue-500 hover:text-blue-700"
              >
                Forgot password?
              </Link>
            </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-300 text-gray-700 font-bold py-2 rounded-md hover:bg-gray-400"
            >
              Sign in
            </button>
            <div className="flex items-center justify-center mt-4">
              <span className="text-gray-500">Or</span>
            </div>
            <button className="w-full bg-gray-300 text-gray-700 font-bold py-2 rounded-md mt-2 hover:bg-gray-400">
              Continue with Google
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
