"use client";

import React, { useState } from "react";
import Header from "@/app/default/page";
import { Footer } from "@/app/default/footer";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Users,
  Bell,
  Settings,
} from "lucide-react";

interface PolicySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

function App() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isDarkMode] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const policySections: PolicySection[] = [
    {
      id: "collection",
      title: "Information We Collect",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "Personal Information: Name, email address, phone number, and location provided during registration.",
        "Profile Details: Player statistics, videos, and scouting preferences.",
        "Usage Data: Interaction with our platform, including pages visited and features used.",
        "Device Information: IP address, browser type, and operating system for security and optimization.",
      ],
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      icon: <Users className="w-6 h-6" />,
      content: [
        "Provide personalized scouting and recruitment experiences.",
        "Connect players, scouts, and agencies.",
        "Ensure the security and functionality of our platform.",
        "Analyze platform performance to improve services.",
        "Send notifications, updates, and promotional content relevant to your role.",
      ],
    },
    {
      id: "sharing",
      title: "Information Sharing",
      icon: <Bell className="w-6 h-6" />,
      content: [
        "We do not sell your personal data. However, we may share your information with:",
        "Scouts and Agencies: To enable professional opportunities for players.",
        "Service Providers: For hosting, analytics, and platform optimization.",
        "Legal Authorities: When required by law to comply with legal obligations or protect our rights.",
      ],
    },
    {
      id: "rights",
      title: "Your Rights",
      icon: <Settings className="w-6 h-6" />,
      content: [
        "You have the right to:",
        "Access, update, or delete your personal information through your account settings.",
        "Opt-out of promotional communications.",
        "Request clarification on how your data is used.",
      ],
    },
  ];

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className=" bg-white ">
      <div className="md:px-20 lg:px-20 p-4 bg-white">
        <div className="min-h-screen bg-white">
          <Header />
          {/* Main Content */}
          <main className="container mx-auto px-4 pt-24 pb-12">
            <div className="max-w-7xl mx-auto">
              <div className="mb-4">
                <div className="border-l-8 my-4 rounded-lg border-yellow-500 pl-4">
                  <h2 className="text-3xl p-1 font-bold text-gray-900">
                    Privacy Policy
                  </h2>
                </div>
                <p className="mb-8 text-lg">
                  At Digital Scouting Africa, your privacy is our priority. This
                  Privacy Policy outlines how we collect, use, protect, and
                  share your personal information. By using our platform, you
                  agree to the terms outlined below.
                </p>

                {/* Policy Sections */}
                <div className="space-y-4">
                  {policySections.map((section) => (
                    <div
                      key={section.id}
                      className={`border rounded-lg ${
                        isDarkMode
                          ? "border-gray-700 bg-gray-800"
                          : "border-gray-200 bg-white"
                      } transition-all duration-200`}
                    >
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-opacity-50"
                      >
                        <div className="flex items-center space-x-3">
                          {section.icon}
                          <h3 className="text-xl font-semibold">
                            {section.title}
                          </h3>
                        </div>
                        {expandedSection === section.id ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                      {expandedSection === section.id && (
                        <div className="px-6 py-4 border-t border-gray-200">
                          <ul className="space-y-3">
                            {section.content.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-2"
                              >
                                <span className="mt-1.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
