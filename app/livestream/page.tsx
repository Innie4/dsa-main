import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/button";
import { Avatar } from "@/components/avatar";
import Header from "@/app/default/signed-inheader";
import {Footer} from '@/app/default/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
           <div className="md:px-20 lg:px-20 p-4 bg-white">
           <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header/>
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
      </div>
      </div>
     <Footer/>
    </div>
  );
}
