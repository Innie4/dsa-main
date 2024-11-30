import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ScoutsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Image
                src="/placeholder.svg"
                alt="Digital Scouting Africa"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <nav className="hidden md:flex items-center space-x-6">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                    Essentials <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Option 1</DropdownMenuItem>
                    <DropdownMenuItem>Option 2</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                    Dashboards <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Dashboard 1</DropdownMenuItem>
                    <DropdownMenuItem>Dashboard 2</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Teams
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Players
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Scouts
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Competitions
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">Samson Adenuga</p>
                  <div className="flex items-center space-x-2">
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Profile
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link
                      href="#"
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Players Scouted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Preferred Positions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age Group
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ratings
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {scoutData.map((scout) => (
                <tr key={scout.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={scout.avatar} alt={scout.name} />
                        <AvatarFallback>{scout.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {scout.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Image
                        src="/placeholder.svg"
                        alt="Nigeria"
                        width={20}
                        height={15}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-900">Nigeria</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {scout.playersScouted} players
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {scout.preferredPositions}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {scout.ageGroup}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-sm text-gray-900">
                        {scout.rating}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            View all scouts
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/placeholder.svg"
                alt="Digital Scouting Africa"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-sm text-gray-300 hover:text-white">
                  Essentials{" "}
                  <ChevronDown className="inline-block ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Option 1</DropdownMenuItem>
                  <DropdownMenuItem>Option 2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-sm text-gray-300 hover:text-white">
                  Dashboards{" "}
                  <ChevronDown className="inline-block ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Dashboard 1</DropdownMenuItem>
                  <DropdownMenuItem>Dashboard 2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="#" className="text-sm text-gray-300 hover:text-white">
                Contact us
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white">
                FAQs
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white">
                Pricing
              </Link>
            </nav>
            <div className="mt-4 md:mt-0 text-sm text-gray-300">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="#" className="hover:text-white">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const scoutData = [
  {
    id: 1,
    name: "Charles Ekpoma",
    avatar: "/placeholder.svg",
    playersScouted: 25,
    preferredPositions: "Midfielders, Strikers",
    ageGroup: "19-23",
    rating: 7.5,
  },
  {
    id: 2,
    name: "Chukwudi Ezra",
    avatar: "/placeholder.svg",
    playersScouted: 22,
    preferredPositions: "Defenders",
    ageGroup: "19-25",
    rating: 7.0,
  },
  {
    id: 3,
    name: "Basey Izzy Banj",
    avatar: "/placeholder.svg",
    playersScouted: 15,
    preferredPositions: "Strikes",
    ageGroup: "19-21",
    rating: 5.5,
  },
  {
    id: 4,
    name: "Ogun Davis",
    avatar: "/placeholder.svg",
    playersScouted: 20,
    preferredPositions: "Defenders, Strikers",
    ageGroup: "19-25",
    rating: 7.0,
  },
  {
    id: 5,
    name: "Unique Holivar",
    avatar: "/placeholder.svg",
    playersScouted: 5,
    preferredPositions: "Midfielders, Defenders",
    ageGroup: "19-23",
    rating: 4.0,
  },
];
