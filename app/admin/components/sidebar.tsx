import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { cn } from "@/app/analytics/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Overview", href: "/" },
    { name: "Players", href: "/players" },
    { name: "Users", href: "/users" },
    { name: "Agencies", href: "/agencies" },
    { name: "Content Management", href: "/content" },
  ];

  return (
    <div className="w-[200px] bg-[#0A0E23] text-white flex flex-col">
      <div className="p-4">
        <Image
          src="/placeholder.svg"
          alt="Digital Scouting Africa"
          width={150}
          height={50}
          className="mb-8"
        />
        <nav className="space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-4 py-2 rounded-lg transition-colors",
                pathname === link.href
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <button className="flex items-center gap-2 text-white/60 hover:text-white px-4 py-2 w-full">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
}
