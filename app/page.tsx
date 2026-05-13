import Link from "next/link"


export default function Főoldal() {

return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center pt-10 gap-6">

    <h1 className="text-5xl text-white">
      Szabadesés
    </h1>

    <Link href="/szabadeses"
      className="px-6 py-3 bg-blue-600 rounded-lg text-white text-xl hover:bg-blue-700 transition-colors"
      >
        Kiszámitása
      </Link>

      
    
    








    </main>
  )
}
