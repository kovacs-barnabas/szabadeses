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

       <p className="mt-6 max-w-2xl text-gray-300 text-lg leading-relaxed">
          A szabadesés olyan mozgás, amikor egy test csak a gravitáció hatásának van kitéve,
          és más erők (például légellenállás) nem befolyásolják a mozgását.
          Ilyenkor a test állandó gyorsulással esik lefelé, amely a gravitációs gyorsulás.
        </p>

        <p className="mt-4 text-gray-400 max-w-xl">
          A Földön ez az érték átlagosan <span className="text-amber-300 font-semibold">9.81 m/s²</span>.
        </p>


      </main>
    </>
  );
}