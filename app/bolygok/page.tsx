import Navbar from "../../components/Navbar";
import { planets } from "../../data/planets";
import Link from "next/link";

export default function BolygokPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white pt-32 px-6">
        <h1 className="text-5xl font-bold text-center mb-12 text-amber-300">
          Bolygók
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {planets.map((planet) => (
            <div
              key={planet.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:scale-105 transition duration-300"
            >
              <div
                className={`h-40 rounded-2xl bg-gradient-to-br ${planet.color} mb-6`}
              />

              <h2 className="text-3xl font-bold mb-2">
                {planet.name}
              </h2>

              <p className="text-gray-300 mb-6">
                Gravitáció: {planet.gravity} m/s²
              </p>

              <Link
                href={`/szabadeses?planet=${planet.id}`}
                className="inline-block bg-blue-600 hover:bg-blue-500 transition px-5 py-3 rounded-xl"
              >
                Számítás ezen a bolygón
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}