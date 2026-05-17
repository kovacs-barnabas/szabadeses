import Link from "next/link";
import Navbar from "../../components/Navbar";


export default function Kiszámítás() {
  return (
    <>
          <Navbar />

    <main className="p-10 min-h-screen bg-black text-white flex flex-col items-center justify-start gap-3 pt-28">
      <h1 className="text-4xl font-bold mb-6">
        Fizikai Képletek
      </h1>
      <p className="text-xl rounded-xl px-4 py-2 transition-colors">A nehézségi gyorsulás jele g, iránya függőleges, azaz megközelítőleg a Föld középpontja felé mutat. (Az egyenes vonalú mozgásoknál megszokott módon a g helyett az a jelölést is használhatjuk.)  </p>

      <div className="flex gap-3 flex-wrap justify-center">


      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80">
  
      <h2 className="text-2xl font-bold mb-3">
         Út képlete
      </h2>

       <p className="text-xl text-blue-400 text-center">
          s = 1/2 * g * t²
       </p>

      </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80">
  
          <h2 className="text-2xl font-bold mb-3">
               Sebesség képlete
          </h2>

          <p className="text-xl text-blue-400 text-center">
                 v = g * t
         </p>
            
      </div>
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80">
  
          <h2 className="text-2xl font-bold mb-3">
               Idő képlete
          </h2>

          <p className="text-xl text-blue-400 text-center">
                 t = Gyökalatt(2s / g)
         </p>
            
      </div>
    </div>
    </main>

    </>
    )
}
