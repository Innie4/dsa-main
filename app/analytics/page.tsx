import Image from "next/image";
import {
  Apple,
  Chrome,
  LineChart,
  LogOut,
  ComputerIcon as Windows,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Card, CardContent } from "./components/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/select";
import { Progress } from "./components/progress";

export default function AnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Image
              src="/placeholder.svg"
              alt="Digital Scouting Africa Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <NavigationMenu>
              <NavigationMenuList className="hidden gap-6 md:flex">
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    Essentials
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    Dashboards
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    Teams
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    Players
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    Scouts
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    Competitions
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg"
                alt="Profile"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <div className="hidden sm:block">
                <div className="text-sm font-medium">Samson Adenuga</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Profile</span>
                  <span className="text-sm text-red-500">Logout</span>
                  <LogOut className="h-4 w-4 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Total Users Card */}
            <Card className="bg-[#1e3a8a] text-white">
              <CardContent className="p-6">
                <div className="mb-2 text-sm font-medium">Total users</div>
                <div className="text-4xl font-bold">400+</div>
                <div className="mt-4 h-16">
                  <LineChart className="h-full w-full text-white/50" />
                </div>
              </CardContent>
            </Card>

            {/* Site Analytics Breakdown */}
            <div>
              <h2 className="mb-4 text-xl font-semibold">
                Site Analytics Breakdown
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-gray-500">New signups</div>
                    <div className="text-2xl font-bold">50+</div>
                    <div className="mt-2 text-sm text-green-500">+20%</div>
                    <LineChart className="mt-2 h-8 w-full text-green-500" />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-gray-500">User Sessions</div>
                    <div className="text-2xl font-bold">30+</div>
                    <div className="mt-2 text-sm text-red-500">↓10%</div>
                    <LineChart className="mt-2 h-8 w-full text-red-500" />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* User Activity Insight */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">User Activity Insight</h2>
                <Select defaultValue="6months">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6months">Past 6 months</SelectItem>
                    <SelectItem value="3months">Past 3 months</SelectItem>
                    <SelectItem value="1month">Past month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Card>
                <CardContent className="p-4">
                  <div className="grid grid-cols-7 gap-2">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                      <div key={i} className="text-center">
                        <div
                          className={`h-24 rounded-md bg-gray-100 ${
                            i === 3 ? "bg-yellow-400" : ""
                          }`}
                        />
                        <div className="mt-2 text-sm">{day}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Browsing Sessions */}
            <div>
              <h2 className="mb-4 text-xl font-semibold">
                Top Browsing Sessions
              </h2>
              <Card>
                <CardContent className="grid gap-4 p-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-[#1e3a8a] p-4 text-white">
                    <Chrome className="mb-2 h-6 w-6" />
                    <div className="text-sm">Chrome</div>
                    <div className="text-xs text-gray-300">Top Browser</div>
                    <div className="mt-2 text-lg font-bold">3k+</div>
                    <div className="text-xs text-gray-300">/sessions</div>
                  </div>
                  <div className="rounded-lg bg-[#1e3a8a] p-4 text-white">
                    <Apple className="mb-2 h-6 w-6" />
                    <div className="text-sm">Apple</div>
                    <div className="text-xs text-gray-300">Top OS mobile</div>
                    <div className="mt-2 text-lg font-bold">500+</div>
                    <div className="text-xs text-gray-300">/sessions</div>
                  </div>
                  <div className="rounded-lg bg-[#1e3a8a] p-4 text-white">
                    <Windows className="mb-2 h-6 w-6" />
                    <div className="text-sm">Windows</div>
                    <div className="text-xs text-gray-300">Top OS Platform</div>
                    <div className="mt-2 text-lg font-bold">1k+</div>
                    <div className="text-xs text-gray-300">/sessions</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Browser Radar */}
            <Card>
              <CardContent className="p-4">
                <h2 className="mb-4 text-xl font-semibold">Browser Radar</h2>
                <div className="aspect-square">
                  {/* Placeholder for Radar Chart */}
                  <div className="h-full w-full rounded-full bg-gray-100" />
                </div>
              </CardContent>
            </Card>

            {/* Traffic Insights */}
            <div>
              <h2 className="mb-4 text-xl font-semibold">Traffic insights</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-sm">Google Search</div>
                      <div className="text-sm font-medium">80%</div>
                    </div>
                    <Progress value={80} className="h-2" />
                    <div className="mt-1 text-xs text-gray-500">Max. 500</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-sm">Social Media referrals</div>
                      <div className="text-sm font-medium">50%</div>
                    </div>
                    <Progress value={50} className="h-2" />
                    <div className="mt-1 text-xs text-gray-500">Max. 200</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-sm">Online traffic</div>
                      <div className="text-sm font-medium">30%</div>
                    </div>
                    <Progress value={30} className="h-2" />
                    <div className="mt-1 text-xs text-gray-500">Max. 350</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-sm">Direct link</div>
                      <div className="text-sm font-medium">85</div>
                    </div>
                    <Progress value={85} className="h-2" />
                    <div className="mt-1 text-xs text-gray-500">Max. 10+</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-sm">Revenue</div>
                      <div className="text-sm font-medium">1.1k+</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-green-500">+20%</span>
                      <LineChart className="h-8 w-full text-green-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Subscribe Card */}
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e3a8a]">
                      Subscribe to our plans
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Get exclusive access to our contents!
                    </p>
                  </div>
                  <Image
                    src="/placeholder.svg"
                    alt="Rocket illustration"
                    width={150}
                    height={150}
                    className="h-32 w-32"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Image
              src="/placeholder.svg"
              alt="Digital Scouting Africa Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <div className="flex items-center gap-6">
              <NavigationMenu>
                <NavigationMenuList className="hidden gap-6 md:flex">
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-sm text-gray-300 hover:text-white">
                      Essentials
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-sm text-gray-300 hover:text-white">
                      Dashboards
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-sm text-gray-300 hover:text-white">
                      Contact us
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-sm text-gray-300 hover:text-white">
                      FAQs
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-sm text-gray-300 hover:text-white">
                      Pricing
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <span>and</span>
                <a href="#" className="hover:text-white">
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
