"use client"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10 hover:bg-pink-300/10 transition">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
        
        <div className="flex gap-50 text-lg">
          
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