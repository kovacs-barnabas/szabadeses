import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Főoldal() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center gap-6 pt-24">

        <h1 className="text-6xl md:text-7xl font-extrabold text-amber-300 tracking-wide drop-shadow-lg">
          Szabadesés
        </h1>
      </main>
    </>
  );
}