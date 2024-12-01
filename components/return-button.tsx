/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ReturnButton() {
  return (
    <div className="absolute top-4 left-4 bg-black bg-opacity-50 rounded-md backdrop-blur-md">
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 text-lg font-medium text-white transition-all duration-200 ease-in-out bg-gradient-to-r from-white/10 to-white/5 rounded-2xl backdrop-blur-sm hover:from-white/20 hover:to-white/10 shadow-lg"
      >
        <img src="/icons/back_arrow.png" alt="back arrow" className="mr-2" />
        Return to website
      </Link>
    </div>
  );
}
