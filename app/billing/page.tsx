/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { CreditCard, Building } from "lucide-react";
import { Footer } from "../default/footer";
import Header from "../default/page";

// interface Section {
//   id: string;
//   title: string;
//   icon: React.ReactNode;
//   content: string | string[];
// }

function App() {
  // const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>(""); // Define paymentMethod state

  // const sections: Section[] = [
  //   {
  //     id: 'welcome',
  //     title: 'Welcome to Digital Scouting Africa',
  //     content: 'By accessing or using our platform, you agree to comply with these Terms of Use. Please read them very carefully and judiciously.',
  //     icon: <Book className="w-6 h-6" />,
  //   },
  //   {
  //     id: 'acceptance',
  //     title: 'Acceptance of Terms',
  //     content: 'By creating an account or using Digital Scouting Africa, you agree to these terms and our Privacy Policy. If you do not agree, you must not use the platform.',
  //     icon: <UserCheck className="w-6 h-6" />,
  //   },
  //   {
  //     id: 'responsibilities',
  //     title: 'User Responsibilities',
  //     content: [
  //       'Accuracy of Information: Users must provide accurate and up-to-date information during registration and profile creation.',
  //       'Appropriate Use: The platform must only be used for scouting, recruitment, and related purposes. Any misuse, including harassment, unauthorized access, or fraudulent activities, is strictly prohibited.',
  //       'Compliance: Users must comply with all applicable laws and regulations while using Digital Scouting Africa.',
  //     ],
  //     icon: <Shield className="w-6 h-6" />,
  //   },
  //   {
  //     id: 'content',
  //     title: 'Platform Content',
  //     content: [
  //       'Ownership: All content on Digital Scouting Africa, including designs, text, and media, is owned by or licensed to us and protected by copyright laws.',
  //       'User Content: By uploading content (e.g., videos or profiles), you grant us a license to use, display, and distribute it for scouting-related purposes.',
  //       'Prohibited Content: Users must not post content that is offensive, illegal, or violates intellectual property rights.',
  //     ],
  //     icon: <Settings className="w-6 h-6" />,
  //   },
  //   {
  //     id: 'liability',
  //     title: 'Limitation of Liability',
  //     content: 'Digital Scouting Africa is not liable for any direct, indirect, or consequential damages arising from the use of the platform, including missed opportunities or disputes between users.',
  //     icon: <AlertTriangle className="w-6 h-6" />,
  //   },
  // ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:space-x-16">
            {/* Left Column */}
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-yellow-400 rounded-sm"></div>
                <h1 className="text-4xl font-bold text-blue-900">
                  Upgrade to Pro!
                </h1>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Whether you&apos;re a rising star, a seasoned scout, or a
                forward-thinking agency, Digital Scouting Africa has the tools
                you need to shine. Choose the plan that matches your ambitions
                and unlock opportunities that take you closer to greatness.
              </p>

              <div className="space-y-6 pt-4">
                <div>
                  <label className="block text-blue-900 font-medium mb-2">
                    Billed to
                  </label>
                  <input
                    type="text"
                    placeholder="Account name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-blue-900 font-medium mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-blue-900 font-medium mb-2">
                    Payment details
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("credit")}
                      className={`p-4 border rounded-md flex items-center justify-center space-x-2 transition-colors ${
                        paymentMethod === "credit"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300"
                      }`}
                    >
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">Credit Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("bank")}
                      className={`p-4 border rounded-md flex items-center justify-center space-x-2 transition-colors ${
                        paymentMethod === "bank"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300"
                      }`}
                    >
                      <Building className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">Bank transfer</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <button className="w-full py-3 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                    Cancel
                  </button>
                  <button className="w-full py-3 text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors">
                    Subscribe
                  </button>
                </div>

                <p className="text-sm text-gray-600 pt-2">
                  By providing us with your card information, you allow us to
                  charge you for future payments in accordance to our terms and
                  conditions.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2 mt-12 lg:mt-38">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="Image-Frame.png"
                  alt="Stadium seats"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
