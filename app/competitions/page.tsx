import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CompetitionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Image
              src="/placeholder.svg"
              alt="Digital Scouting Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Essentials
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Dashboards
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Teams
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Players
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Scouts
              </Link>
              <Link href="#" className="text-sm text-primary font-medium">
                Competitions
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-900">Samson Ademola</span>
            <Image
              src="/placeholder.svg"
              alt="Profile"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-lg font-medium mb-6">
          Competitions we are involved in
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden mb-12">
          <Image
            src="/placeholder.svg"
            alt="Trophy on field"
            fill
            className="object-cover"
          />
        </div>

        {/* Competition Sections */}
        <section className="space-y-12 mb-16">
          {/* Principal's Cup */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Principal&apos;s Cup</h2>
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-600">Event status:</span>
              <span className="text-sm ml-2">Upcoming</span>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                The Principal&apos;s Cup is a pivotal initiative for Digital
                Scouting Africa (DSA) designed to harness the energy and
                potential of youth through grassroots football development...
              </p>
              <p>
                This initiative underscores DSA&apos;s commitment to expanding
                its reach to all 36 states of the federation and the FCT...
              </p>
            </div>
          </div>

          {/* Elite School Cup */}
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Elite School Cup – Where Champions Begin
            </h2>
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-600">Event status:</span>
              <span className="text-sm ml-2">Upcoming</span>
            </div>
            <p className="text-gray-600">
              The Elite School Cup is more than just a competition—it&apos;s a
              launchpad for exceptional young football talents...
            </p>
          </div>
        </section>

        {/* Our Competitions */}
        <section className="bg-green-600 -mx-4 px-4 py-12 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Our Competitions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* U-17 Card */}
            <div className="bg-green-500/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Football icon"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Digital Scouting Africa Talent Showcase U-17
              </h3>
              <div className="text-white/80 text-sm mb-4">
                <span>Event status: </span>
                <span>Upcoming</span>
              </div>
              <p className="text-white/80 text-sm">
                Unleashing the stars of tomorrow! The U-17 Talent Showcase is a
                platform for young, emerging footballers...
              </p>
            </div>

            {/* U-20 Card */}
            <div className="bg-green-500/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Football icon"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Digital Scouting Africa Talent Showcase U-20
              </h3>
              <div className="text-white/80 text-sm mb-4">
                <span>Event status: </span>
                <span>Upcoming</span>
              </div>
              <p className="text-white/80 text-sm">
                Where rising stars meet opportunity. The U-20 Talent Showcase is
                designed to spotlight exceptional youth players...
              </p>
            </div>

            {/* Championship Card */}
            <div className="bg-blue-600 rounded-lg p-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Football icon"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Digital Scouting Africa Scouting Championship
              </h3>
              <div className="text-white/80 text-sm mb-4">
                <span>Event status: </span>
                <span>Upcoming</span>
              </div>
              <p className="text-white/80 text-sm">
                The ultimate arena for talent discovery! The Scouting
                Championship brings together top players...
              </p>
            </div>
          </div>
        </section>

        {/* Get in Touch */}
        <section className="bg-blue-900 -mx-4 px-6 py-12 mt-12 rounded-lg md:-mx-8 md:px-8 lg:-mx-16 lg:px-16">
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-white/80 mb-6 max-w-3xl">
            Have questions about our competitions? Whether it&apos;s the U-17
            Talent Showcase, the U-20 Talent Showcase, the Scouting
            Championship, or the Elite School Cup, we&apos;re here to assist
            you.
          </p>
          <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-md font-medium flex items-center hover:bg-yellow-400 transition-colors">
            Get Started
            <ChevronRight className="ml-2 w-4 h-4" />
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <Image
            src="/placeholder.svg"
            alt="Digital Scouting Logo"
            width={40}
            height={40}
            className="w-10 h-10 mb-4 md:mb-0"
          />
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <Link href="#" className="hover:text-gray-900">
              Essentials
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Dashboards
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Contact us
            </Link>
            <Link href="#" className="hover:text-gray-900">
              FAQs
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <span>and</span>
            <Link href="#" className="hover:text-gray-900">
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
