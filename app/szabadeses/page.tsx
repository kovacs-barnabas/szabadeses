"use client"
import { useMemo, useState } from "react";

export default function PlanetGravityPage() {
 const planets = [
    {
      name: "Föld",
      gravity: 9.81,
      emoji: "🌍",
      color: "from-blue-500 to-cyan-700",
    },
    {
      name: "Mars",
      gravity: 3.71,
      emoji: "🔴",
      color: "from-red-500 to-orange-700",
    },
    {
      name: "Jupiter",
      gravity: 24.79,
      emoji: "🪐",
      color: "from-yellow-500 to-amber-800",
    },
  ];
      const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);
      const [út, setút] = useState(100);

      const számolások = useMemo(() => {
        const g = selectedPlanet.gravity;

        const idő = Math.sqrt((2 * út) / g);
        const sebesség = g * idő;

        return {
          idő: idő.toFixed(2),
          sebesség: sebesség.toFixed(2),
          út: út.toFixed(2),
        };
      }, [út, selectedPlanet]);

      return (<main className="min-h-screen bg-slate-900 text-white p-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-4">
              Szabadesés Kalkulátor
            </h1>

            <p className="text-center text-gray-300 mb-10 text-lg">
              Számold ki a szabadesés idejét, sebességét és útját különböző bolygókon.
            </p>

            <div className="bg-slate-800 rounded-2xl p-6 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-5">Bolygó választás</h2>

              <div className="flex gap-4 flex-wrap">
                {planets.map((planet) => (
                  <button
                    key={planet.name}
                    onClick={() => setSelectedPlanet(planet)}
                    className={`px-6 py-4 rounded-xl font-bold transition ${
                      selectedPlanet.name === planet.name
                        ? "bg-blue-500"
                        : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  >
                    {planet.emoji} {planet.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-5">Magasság</h2>

              
        
      )
    }