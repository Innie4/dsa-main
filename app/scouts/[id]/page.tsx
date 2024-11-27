import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import {
  ChevronDown,
  Download,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ScoutProfilePage() {
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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex space-x-2 text-sm text-gray-500">
          <Link href="/scouts" className="hover:text-gray-900">
            Scouts
          </Link>
          <span>•</span>
          <span className="text-gray-900">Charles Ekpoma</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="relative w-full md:w-96 h-96">
                <Image
                  src="/placeholder.svg"
                  alt="Charles Ekpoma"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold">Charles Ekpoma</h1>
                  <Image
                    src="/placeholder.svg"
                    alt="Nigeria"
                    width={24}
                    height={18}
                    className="inline-block"
                  />
                  <span className="text-gray-600">Nigeria</span>
                </div>
                <div className="flex items-center mb-6">
                  <span className="text-yellow-400 text-2xl">★</span>
                  <span className="ml-1 text-xl">7.5</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">
                      Players Scouted:
                    </h3>
                    <p className="text-lg font-medium">25 players</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">
                      Preferred Positions:
                    </h3>
                    <p className="text-lg font-medium">Midfielders, Strikers</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Agency:</h3>
                    <p className="text-lg font-medium">Eagles Academy</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Age Group:</h3>
                    <p className="text-lg font-medium">19-23</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2" variant="outline">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Book a call
                  </Button>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Bio</h2>
              <p className="text-gray-600 leading-relaxed">
                Charles Ekpoma is a highly experienced football scout with over
                8 years of expertise in talent identification and development.
                Based in Lagos, Nigeria, Charles works with the Eagles Academy,
                where he specializes in evaluating midfielders and forwards. He
                is passionate about helping young players achieve their dreams
                and is dedicated to bridging the gap between grassroots football
                and professional opportunities.
              </p>
            </div>

            {/* Quote Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">...in his own words</h2>
              <blockquote className="text-gray-600 italic leading-relaxed">
                "This agency is an invaluable platform for both scouts and
                players. Its comprehensive profiles and video uploads make
                talent discovery seamless, allowing scouts like me to evaluate
                players as if we're on the sidelines. It's more than just a
                tool; it's a community that connects talent with opportunity and
                drives football forward. For players aiming to get noticed,
                Digital Scouting Africa is the ultimate stage to showcase their
                skills."
              </blockquote>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Performance Index */}
            <div className="bg-[#0A0F2C] text-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Performance Index</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Players scouted</span>
                    <span className="text-sm">25</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Regions scouted</span>
                    <span className="text-sm">8</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Players signed</span>
                    <span className="text-sm">12</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#FFD88D] rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Reach out to Charles</h2>
              <a
                href="mailto:CharlesEkporoma@scout.com"
                className="text-blue-600 hover:underline block mb-6"
              >
                CharlesEkporoma@scout.com
              </a>
              <h3 className="text-sm font-medium mb-2">Follow along</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-700 hover:text-gray-900">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-700 hover:text-gray-900">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-700 hover:text-gray-900">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
          </div>
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
