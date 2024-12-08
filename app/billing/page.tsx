/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Footer } from "../default/footer";
import Header from "../default/page";
import { FlutterWaveButton } from "flutterwave-react-v3";
import { toast } from "react-hot-toast";
import { postRequest } from "../../helpers/api";

// interface Section {
//   id: string;
//   title: string;
//   icon: React.ReactNode;
//   content: string | string[];
// }

function App() {
  const [accountName, setAccountName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePaymentSuccess = async () => {
    setLoading(true);
    try {
      const billingData = {
        userId: 1,
        amount: 4900,
        status: "COMPLETED",
      };
      const result = await postRequest("/billing", billingData);
      toast.success("Payment successful!");
      console.log(result);
      window.location.href = "/billing-history";
    } catch (error) {
      toast.error("Payment failed!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const componentProps = {
    tx_ref: Date.now().toString(),
    amount: 4900,
    currency: "NGN",
    payment_type: "card",
    email: email,
    phone_number: "1234567890",
    callback: handlePaymentSuccess,
    onClose: () => {
      console.log("Payment modal closed");
    },
    text: "Subscribe",
    public_key: "FLWPUBK-228d9711c3de4c3b2d6f6febd9a43a08-X",
    customer: {
      email: email,
      phone_number: "1234567890",
      name: accountName,
    },
    customizations: {
      title: "Upgrade to Pro",
      description: "Payment for your subscription",
      logo: "https://your-logo-url.com/logo.png",
    },
    payment_options: "card",
  };

  return (
    <div className="min-h-screen bg-white">
      {loading && <div className="loading-indicator">Loading...</div>}
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
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <button className="w-full py-3 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                    Cancel
                  </button>
                  {/* <button
                    onClick={handleSubscribe}
                     >
                    Subscribe
                  </button> */}
                  <FlutterWaveButton
                    className="w-full py-3 text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
                    {...componentProps}
                  />
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
