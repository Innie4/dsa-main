import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/button";
import { Avatar } from "@/components/avatar";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Image
                src="/placeholder.svg"
                alt="Digital Scouting Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <div className="hidden md:flex items-center space-x-6">
                <Button variant="ghost">Essentials</Button>
                <Button variant="ghost">Dashboards</Button>
                <Button variant="ghost">Teams</Button>
                <Button variant="ghost">Players</Button>
                <Button variant="ghost">Scouts</Button>
                <Button variant="ghost">Competitions</Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Avatar className="h-10 w-10">
                  <Image
                    src="/placeholder.svg"
                    alt="User"
                    width={40}
                    height={40}
                  />
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">Samson Adenuga</p>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-sm text-red-500"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Live Now Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <h2 className="text-lg font-semibold">Live now</h2>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Live Match"
              width={1280}
              height={720}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <PlayCircle className="h-16 w-16 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80">
              <h3 className="text-xl font-semibold mb-2">
                Highflyers Academy <span className="text-gray-300">vs.</span>{" "}
                Union Stars
              </h3>
              <p className="text-sm">Match starts in 0:57</p>
            </div>
          </div>
        </div>

        {/* Upcoming Streams */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Upcoming streams</h2>
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 p-4 rounded-lg border"
              >
                <Avatar>
                  <Image
                    src="/placeholder.svg"
                    alt="Player"
                    width={40}
                    height={40}
                  />
                </Avatar>
                <span className="font-medium">Oluwa Powers</span>
                <span className="text-gray-500">vs.</span>
                <Avatar>
                  <Image
                    src="/placeholder.svg"
                    alt="Player"
                    width={40}
                    height={40}
                  />
                </Avatar>
                <span className="font-medium">Oluwa Powers</span>
                <div className="ml-auto flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-sm">03:30</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Archives */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Archives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="relative aspect-video rounded-lg overflow-hidden group"
              >
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Archive Match"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="h-12 w-12 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80">
                  <p className="text-sm font-medium">
                    Asokiti Stars <span className="text-gray-300">vs.</span>{" "}
                    Blue Rivers United
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Image
              src="/placeholder.svg"
              alt="Digital Scouting Logo"
              width={120}
              height={40}
              className="h-10 w-auto mb-4 md:mb-0"
            />
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
              <Button variant="link" className="text-white">
                Essentials
              </Button>
              <Button variant="link" className="text-white">
                Dashboards
              </Button>
              <Button variant="link" className="text-white">
                Contact us
              </Button>
              <Button variant="link" className="text-white">
                FAQs
              </Button>
              <Button variant="link" className="text-white">
                Pricing
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-4 text-sm text-gray-400">
            <Button variant="link" className="text-gray-400">
              Privacy Policy
            </Button>
            <span className="mx-2">and</span>
            <Button variant="link" className="text-gray-400">
              Terms of Use
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
