import { Input } from "@/components/input";
import { Bell } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b px-6 py-3 flex items-center justify-between bg-white">
      <Input type="search" placeholder="Search" className="w-[400px]" />
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center gap-3">
          <Image
            src="/placeholder.svg"
            alt="Admin"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div>
            <div className="font-medium">Admin Jega</div>
            <div className="text-sm text-muted-foreground">Profile</div>
          </div>
        </div>
      </div>
    </header>
  );
}
