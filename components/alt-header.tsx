/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const AltHeader = () => {
  return (
    <header className="flex items-center justify-between py-4 md:px-32 px-4">
      <Link href="/">
        <img src="/DSA-logo.png" alt="Logo" className="h-10 cursor-pointer" />{" "}
        {/* Logo */}
      </Link>
      {/* Replace with your logo path */}
      <div className="text-sm text-gray-600">
        © Copyright 2024. All Rights Reserved
      </div>
    </header>
  );
};

export default AltHeader;
