import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-slate-800 px-8 py-5">
      
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="text-xl rounded-lg border border-slate-700 px-3 py-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400">
          ← Back
        </button>

        
      </div>

      {/* Center */}
      <h2 className="text-3xl font-semibold text-cyan-500">
        Linear Search
      </h2>

      {/* Right */}
      <div className="flex items-center gap-6">
        <button className="text-xl text-slate-300 transition hover:text-cyan-400">
         Theme
           
        </button>

       
      </div>

    </nav>
  )
}

export default Navbar