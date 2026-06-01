"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-16 text-sm sm:text-base md:text-lg">
          <Link
            href="/szabadeses"
            className="hover:text-amber-300 transition text-gray-400 font-semibold"
          >
            Kiszámítás
          </Link>

          <Link
            href="/"
            className="hover:text-amber-300 transition text-gray-400 font-semibold"
          >
            Főoldal
          </Link>

          <Link
            href="/kepletek"
            className="hover:text-amber-300 transition text-gray-400 font-semibold"
          >
            Képletek
          </Link>
        </div>
      </div>
    </nav>
  );
}