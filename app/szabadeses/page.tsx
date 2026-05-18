"use client"
import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function PlanetGravityPage() {
  const planets = [
    { name: "Föld", gravity: 9.81, emoji: "🌍" },
    { name: "Mars", gravity: 3.71, emoji: "🔴" },
    { name: "Jupiter", gravity: 24.79, emoji: "🌕" },
    { name: "Szaturnusz", gravity: 10.44, emoji: "🪐" },
    { name: "Vénusz", gravity: 8.87, emoji: "🟠" },
    { name: "Merkúr", gravity: 3.7, emoji: "🌑" },
    { name: "Uránusz", gravity: 8.69, emoji: "🔵" },
    { name: "Neptunusz", gravity: 11.15, emoji: "🔵" },
  ];

  const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);
  const [út, setút] = useState<number | "">(100);
  const inputRef = useRef<HTMLInputElement>(null);

  // Görgetés kezelése: változtatja az értéket, de nem mozdítja el a weboldalt
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (document.activeElement === inputRef.current) {
        e.preventDefault(); // Megakadályozza az oldal görgetését
        
        const irany = e.deltaY < 0 ? 1 : -1;
        setút((prev) => {
          if (prev === "") return irany > 0 ? 1 : 0;
          const ujErtek = prev + irany;
          return ujErtek < 0 ? 0 : ujErtek; // Ne engedjük 0 alá menni
        });
      }
    };

    const inputEl = inputRef.current;
    if (inputEl) {
      inputEl.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (inputEl) {
        inputEl.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  const számolások = useMemo(() => {
    const g = selectedPlanet.gravity;
    const aktualisUt = út === "" ? 0 : út;

    const idő = Math.sqrt((2 * aktualisUt) / g);
    const sebesség = g * idő;

    return {
      idő: idő.toFixed(2),
      sebesség: sebesség.toFixed(2),
      út: aktualisUt.toFixed(2),
    };
  }, [út, selectedPlanet]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-900 text-white pt-28">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4">
            Szabadesés Kalkulátor
          </h1>

          <p className="text-center text-gray-300 mb-10 text-lg">
            Számold ki a szabadesés idejét, sebességét és útját különböző bolygókon.
          </p>

          {/* Bolygó választás */}
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
            <div className="text-center mt-4 text-gray-400">
              Gravitáció: <span className="text-blue-400 font-bold">{selectedPlanet.gravity.toFixed(2)} m/s²</span>
            </div>
          </div>

          {/* Magasság Input */}
          <div className="bg-slate-800 rounded-2xl p-6 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Magasság</h2>
            <input
              ref={inputRef}
              type="number"
              value={út}
              onChange={(e) => {
                const val = e.target.value;
                setút(val === "" ? "" : Number(val));
              }}
              className="w-full p-4 rounded-xl bg-slate-700 text-white text-xl outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="Írd be a magasságot"
            />
          </div>

          {/* Eredmények */}
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

          {/* Képletek */}
          <div className="bg-slate-800 rounded-2xl p-6 mt-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Képletek</h2>
            <div className="space-y-3 text-lg text-gray-300 font-mono">
              <p>s = ½ × g × t²</p>
              <p>v = g × t</p>
              <p>t = √((2 × s) / g)</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}