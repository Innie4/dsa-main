"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import Header from "../default/page";
import { Footer } from "../default/footer";

interface PlayerStat {
  label: string;
  value: number | string;
  unit?: string;
}

interface PlayerBadge {
  label: string;
  color: string;
}

export default function PlayerComparison() {
  // Player badges
  const badges: PlayerBadge[] = [
    { label: "DM", color: "bg-yellow-500" },
    { label: "AM", color: "bg-blue-500" },
    { label: "CM", color: "bg-green-500" },
  ];

  // Player stats
  const playerStats: PlayerStat[] = [
    { label: "Matches played", value: 8 },
    { label: "Goals scored", value: 4 },
    { label: "Assists", value: 2 },
    { label: "Pass completion rate", value: 87, unit: "%" },
    { label: "Tackles Per Game", value: 2.5 },
    { label: "Interceptions Per Game", value: 1.8 },
    { label: "Distance Covered (Km)", value: 10.2 },
    { label: "Yellow Cards", value: 2 },
    { label: "Red Cards", value: 0 },
    { label: "Market Value ($)", value: "2.5 Million" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Player 1 */}
          <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="flex space-x-2 text-sm">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Players
                </a>
                <span className="text-gray-500">•</span>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Destiny Chambers
                </a>
                <span className="text-gray-500">•</span>
                <span className="text-blue-700 font-medium">
                  Compare Players
                </span>
              </nav>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/destiny.png"
                alt="Destiny Chambers"
                width={600}
                height={400}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-yellow-400 p-2 rounded-md" />
            </div>

            <div>
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <span>Destiny Chambers</span>
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_317_2415)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 1H16V12H0V1Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.6656 1H16V12H10.6656V1ZM0 1H5.33437V12H0V1Z"
                      fill="#008753"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_317_2415">
                      <rect
                        width="16"
                        height="11"
                        fill="white"
                        transform="translate(0 1)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <span className="text-sm font-normal text-gray-600">
                  Nigeria
                </span>
              </h2>

              <div className="flex space-x-2 mt-2">
                {badges.map((badge, index) => (
                  <span
                    key={index}
                    className={`${badge.color} text-white px-2 py-1 rounded text-sm`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <div className="text-sm text-gray-600">Age:</div>
                  <div>23 yrs</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Height:</div>
                  <div>176 cm</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Weight:</div>
                  <div>64 kg</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Club:</div>
                  <div>Rangers FC</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm text-gray-600">Avg. rating:</div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">8.0</span>
                  <svg
                    className="w-5 h-5 text-yellow-400 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                Player stats
                <svg
                  className="w-5 h-5 text-green-500 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </h3>

              <div className="space-y-3">
                {playerStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-600">{stat.label}</span>
                    <span className="font-medium">
                      {stat.value}
                      {stat.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Overview</h3>
              {/* Radar Chart would go here */}
              <div className="aspect-square bg-white rounded-lg p-4">
                {/* Placeholder for radar chart */}
              </div>
            </div>
          </div>

          {/* Player 2 (Empty State) */}
          <div className="flex items-center justify-center min-h-[300px] bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 p-8">
            <div className="text-center">
              <button className="mx-auto mb-4 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800">
                <Plus className="w-6 h-6" />
              </button>
              <p className="text-gray-500">Select a player to compare</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
