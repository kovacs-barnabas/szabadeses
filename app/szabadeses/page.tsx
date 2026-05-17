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

      return (
        
        
      )
    }