"use client"
import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function PlanetGravityPage() {
 const planets = [
    {
      name: "Föld",
      gravity: 9.81,
      emoji: "🌍",
    },
    {
      name: "Mars",
      gravity: 3.71,
      emoji: "🔴",
    },
    {
      name: "Jupiter",
      gravity: 24.79,
      emoji: "🌕",
    },
    {
      name: "Szaturnusz",
      gravity: 10.44,
      emoji: "🪐",
    },
    {
      name: "Vénusz",
      gravity: 8.87,
      emoji: "🟠",
    },
    {
      name: "Merkúr",
      gravity: 3.7,
      emoji: "🌑",
    },
    {
      name: "Uránusz",
      gravity: 8.69,
      emoji: "🔵",
    },
    {
      name: "Neptunusz",
      gravity: 11.15,
      emoji: "🔵",
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

      return (
      <>
            <Navbar />
      
      <main className="min-h-screen bg-slate-900 text-white  pt-28">
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
                    className={`px-6 py-4 rounded-xl font-bold transition  ${
                      selectedPlanet.name === planet.name
                        ? "bg-blue-500"
                        : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  >
                    {planet.emoji} {planet.name} 
                  </button>
                ))}
              </div>
              <div className="text-center " > {selectedPlanet.gravity.toFixed(2)} m/s²</div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-5">Magasság</h2>
                <input
                type="number"
                value={út}
                onChange={(e) => setút(Number(e.target.value))}
                className="w-full p-4 rounded-xl bg-slate-700 text-white text-xl outline-none"
                placeholder="Írd be a magasságot"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg">
                <h3 className="text-xl font-bold mb-3">Idő</h3>
                <p className="text-4xl font-bold text-blue-400">
                  {számolások.idő}
                </p>
                <span className="text-gray-400">másodperc</span>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg">
                <h3 className="text-xl font-bold mb-3">Sebesség</h3>
                <p className="text-4xl font-bold text-green-400">
                  {számolások.sebesség}
                </p>
                <span className="text-gray-400">m/s</span>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg">
                <h3 className="text-xl font-bold mb-3">Út</h3>
                <p className="text-4xl font-bold text-yellow-400">
                  {számolások.út}
                </p>
                <span className="text-gray-400">méter</span>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 mt-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Képletek</h2>

              <div className="space-y-3 text-lg text-gray-300">
                <p>s = 1/2 x g x <sup>t</sup></p>
                <p>v = g x t</p>
                <p>t = Gyökalatt(2s / g)</p>
              </div>
            </div>
          </div>
        </main>
        
        </>      
        
      )
    }