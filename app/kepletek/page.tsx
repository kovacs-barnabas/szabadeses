import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function Kiszámítás() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-black to-blue-900 p-3 p-10 pt-28 text-white">
        <h1 className="mb-6 text-4xl font-bold tracking-wide text-amber-300 drop-shadow-lg">
          Fizikai Képletek
        </h1>
        <p className="rounded-xl px-4 py-2 text-xl transition-colors ml-100 mr-100 mb-10">
          A nehézségi gyorsulás jele g, iránya függőleges, azaz megközelítőleg a Föld középpontja
          felé mutat. (Az egyenes vonalú mozgásoknál megszokott módon a g helyett az a jelölést is
          használhatjuk.){" "}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <div className="w-80 rounded-2xl bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-3 text-2xl font-bold">Út képlete</h2>

            <p className="text-center text-xl text-blue-400">s = 1/2 * g * t²</p>
          </div>
          <div className="w-80 rounded-2xl bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-3 text-2xl font-bold">Sebesség képlete</h2>

            <p className="text-center text-xl text-blue-400">v = g * t</p>
          </div>
          <div className="w-80 rounded-2xl bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-3 text-2xl font-bold">Idő képlete</h2>

            <p className="text-center text-xl text-blue-400">t = √(2s / g)</p>
          </div>
        </div>
      </main>
    </>
  );
}
