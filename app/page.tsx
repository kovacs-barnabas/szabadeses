import Link from "next/link"


export default function Főoldal() {

return (

    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">

    <h1 className="text-5xl text-amber-300">
      Szabadesés
    </h1>

    <Link href="/szabadeses"
      className="px-6 py-3  text-white text-xl hover:bg-blue-700 transition-colors rounded-xl"
      >
        Kiszámitása
      </Link>

      <Link href="/bolygok"
      className="px-6 py-3  text-white text-xl hover:bg-blue-700 transition-colors rounded-xl"
      >
        Bolygók
      </Link>

      <Link href="/kepletek"
      className="px-6 py-3  text-white text-xl hover:bg-blue-700 transition-colors rounded-xl"
      >
        Képletek
      </Link>


    
    </main>
  )
}
