"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Mail } from "lucide-react";
import Header from "@/app/default/page";
import { Footer } from "@/app/default/footer";

interface FAQItem {
  question: string;
  answer: string;
}

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [email, setEmail] = useState("");

  const faqs: FAQItem[] = [
    {
      question: "What is Digital Scouting Africa, and how does it work?",
      answer:
        "Digital Scouting Africa is a platform that connects scouts, agents, coaches, and players. We provide a network where talent can showcase skills and scouts can discover emerging players through advanced tools, metrics, and video highlights, all in one place.",
    },
    {
      question: "Who can join Digital Scouting Africa?",
      answer:
        "Our platform is open to professional scouts, licensed agents, qualified coaches, and talented players looking to advance their careers in football.",
    },
    {
      question: "How can Digital Scouting Africa help my scouting career?",
      answer:
        "We provide comprehensive tools and resources to enhance your scouting capabilities, including advanced analytics, video analysis, and networking opportunities.",
    },
    {
      question: "Is my data secure on Digital Scouting Africa?",
      answer:
        "Yes, we implement industry-standard security measures to protect all user data and personal information on our platform.",
    },
    {
      question: "How do I get started on Digital Scouting Africa?",
      answer:
        "Simply sign up for an account, complete your profile, and start exploring our features. Our onboarding process will guide you through each step.",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <div className="md:px-20 lg:px-20 p-4 bg-white">
        <div className=" bg-white">
          {/* Navigation */}
          <Header />
          {/* Header */}
        </div>
      </div>

      <div className="mb-12 bg-[url('/faq.png')] bg-cover bg-center bg-no-repeat py-16 px-4 md:px-20 lg:px-20">
        <div className="flex items-center text-blue-600 mb-2">
          <h2 className="text-sm font-semibold">The FAQs</h2>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Help Centre</h1>
      </div>

      <div className="md:px-20 lg:px-20 p-4 bg-white">
        <div className=" bg-white">
          {/* Main Content */}
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
            {/* FAQ Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="md:col-span-1">
                <div className="sticky top-8">
                  <h3 className="text-xl font-semibold mb-2">Support</h3>
                  <h2 className="text-3xl font-bold mb-4">FAQs</h2>
                  <p className="text-gray-600">
                    Find out everything you need to know about us from the
                    frequently asked questions!
                  </p>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                        onClick={() =>
                          setOpenFAQ(openFAQ === index ? null : index)
                        }
                      >
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        {openFAQ === index ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                      {openFAQ === index && (
                        <div className="px-6 py-4 bg-gray-50">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-blue-900 rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Join our Newsletter
                </h2>
                <p className="text-blue-200 mb-8">
                  Stay in the loop while we send you the best updates from
                  Digital Scouting Africa.
                </p>
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col md:flex-row gap-4 justify-center"
                >
                  <div className="flex-1 max-w-md">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-blue-200 text-sm mt-4">
                  We care about your data in our{" "}
                  <a
                    href="privacy-policy"
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    privacy policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
