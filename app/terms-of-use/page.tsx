"use client";

import React, { useState } from "react";
import Header from "@/app/default/page";
import { Footer } from "@/app/default/footer";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Settings,
  Book,
  UserCheck,
  AlertTriangle,
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string | string[];
}

function App() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["welcome"])
  );

  const sections: Section[] = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content:
        "By creating an account or using Digital Scouting Africa, you agree to these terms and our Privacy Policy. If you do not agree, you must not use the platform.",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      id: "responsibilities",
      title: "User Responsibilities",
      content: [
        "Accuracy of Information: Users must provide accurate and up-to-date information during registration and profile creation.",
        "Appropriate Use: The platform must only be used for scouting, recruitment, and related purposes. Any misuse, including harassment, unauthorized access, or fraudulent activities, is strictly prohibited.",
        "Compliance: Users must comply with all applicable laws and regulations while using Digital Scouting Africa.",
      ],
      icon: <Shield className="w-6 h-6" />,
    },
    {
      id: "content",
      title: "Platform Content",
      content: [
        "Ownership: All content on Digital Scouting Africa, including designs, text, and media, is owned by or licensed to us and protected by copyright laws.",
        "User Content: By uploading content (e.g., videos or profiles), you grant us a license to use, display, and distribute it for scouting-related purposes.",
        "Prohibited Content: Users must not post content that is offensive, illegal, or violates intellectual property rights.",
      ],
      icon: <Settings className="w-6 h-6" />,
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content:
        "Digital Scouting Africa is not liable for any direct, indirect, or consequential damages arising from the use of the platform, including missed opportunities or disputes between users.",
      icon: <AlertTriangle className="w-6 h-6" />,
    },
    {
      id: "welcome",
      title: "Modifications to Terms",
      content:
        "We may update these terms at any time. Significant changes will be communicated through platform notifications or email. Continued use of Digital Scouting Africa after updates constitutes acceptance of the revised terms.",
      icon: <Book className="w-6 h-6" />,
    },
  ];

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className=" bg-white ">
      <div className="md:px-20 lg:px-20 bg-white">
        <div className="min-h-screen bg-white">
          {/* Navbar */}
          <Header />

          {/* Main Content */}
          <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
            <div className=" rounded-lg">
              <div className="px-6 py-8">
                <div className="border-l-8 rounded-lg border-yellow-500 pl-4 mb-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Terms of Use
                  </h2>
                </div>
                <p className="mb-4 text-lg">
                  Welcome to Digital Scouting Africa. By accessing or using our
                  platform, you agree to comply with these Terms of Use. Please
                  read them very carefully and judiciously.
                </p>
                <div className="space-y-6">
                  {sections.map((section) => (
                    <div key={section.id} className="border rounded-lg">
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 rounded-lg focus:outline-none"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-indigo-600">{section.icon}</div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {section.title}
                          </h3>
                        </div>
                        {expandedSections.has(section.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>

                      {expandedSections.has(section.id) && (
                        <div className="px-6 pb-4">
                          {Array.isArray(section.content) ? (
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                              {section.content.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600">{section.content}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
