"use client"; // <-- Ez mondja meg a Next.js-nek, hogy ez mehet a böngészőbe

import Link from "next/link";

export default function DevCards() {
  const developers = [
    {
      id: 1,
      name: "Kovács Barnabás",
      role: "Frontend Developer",
      github: "https://github.com/kovacs-barnabas",
      avatar: "https://avatars.githubusercontent.com/u/253048756?v=4"
    },
    {
      id: 2,
      name: "Kóródi Olivér",
      role: "Frontend Developer",
      github: "https://github.com/korodi-oliver",
      avatar: "https://avatars.githubusercontent.com/u/253048439?v=4"
    }
  ];

  return (
    <div className="mt-12 w-full max-w-3xl">
      <h2 className="text-2xl font-bold text-center text-gray-200 mb-6">Fejlesztők</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {developers.map((dev) => (
          <div 
            key={dev.id} 
            className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)]"
          >
            <img 
              src={dev.avatar} 
              alt={`${dev.name} profilképe`} 
              className="w-20 h-20 rounded-full border-2 border-amber-300 mb-4 object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${dev.name}`;
              }}
            />

            <h3 className="text-xl font-bold text-white">{dev.name}</h3>
            <p className="text-sm text-gray-400 mb-6">{dev.role}</p>

            <Link 
              href={dev.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 bg-zinc-800 hover:bg-amber-400 hover:text-black text-white font-medium py-2 px-4 rounded-xl transition-colors duration-200 w-full justify-center"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub Profil
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}