import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";
import Image from "next/image";
import Header from "@/app/default/signed-inheader";
import { Footer } from "@/app/default/footer";

export default function ScoutsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className=" max-w-7xl container mx-auto px-4 py-8">
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
                        src="/carbon_location.png"
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
      <Footer />
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
