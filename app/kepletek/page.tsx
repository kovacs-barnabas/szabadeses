import Navbar from "../../components/Navbar";

export default function Kiszámítás() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-black to-blue-900 px-4 pt-28 pb-10 text-white">
        <h1 className="mb-6 text-center text-3xl font-bold tracking-wide text-amber-300 drop-shadow-lg md:text-4xl">
          Fizikai Képletek
        </h1>

        <p className="mb-10 w-full max-w-4xl px-2 text-center text-base leading-relaxed md:text-xl">
          A nehézségi gyorsulás jele g, iránya függőleges, azaz
          megközelítőleg a Föld középpontja felé mutat. (Az egyenes vonalú
          mozgásoknál megszokott módon a g helyett az a jelölést is
          használhatjuk.)
        </p>

        <div className="flex w-full max-w-6xl flex-wrap justify-center gap-6">
          <div className="w-full max-w-sm rounded-2xl bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-3 text-center text-xl font-bold md:text-2xl">
              Út képlete
            </h2>

            <p className="text-center text-lg text-blue-400 md:text-xl">
              s = 1/2 * g * t²
            </p>
          </div>

          <div className="w-full max-w-sm rounded-2xl bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-3 text-center text-xl font-bold md:text-2xl">
              Sebesség képlete
            </h2>

            <p className="text-center text-lg text-blue-400 md:text-xl">
              v = g * t
            </p>
          </div>

          <div className="w-full max-w-sm rounded-2xl bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-3 text-center text-xl font-bold md:text-2xl">
              Idő képlete
            </h2>

            <p className="text-center text-lg text-blue-400 md:text-xl">
              t = √(2s / g)
            </p>
          </div>
        </div>
      </main>
    </>
  );
}