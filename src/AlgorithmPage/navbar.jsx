import React from 'react'

const Navbar = ({ selectedAlgo, onBack }) => {
  return (
    <nav className="flex items-center justify-between border-b border-stone-800/80 pb-4 mb-4 gap-4 w-full">
      {/* Left Action */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="text-sm font-semibold rounded-xl border border-stone-700/80 bg-stone-800/60 px-4 py-2 text-stone-300 transition-all duration-200 hover:border-amber-500 hover:text-amber-400 hover:bg-stone-800 flex items-center gap-1.5 shadow-sm cursor-pointer"
        >
          <span>←</span> Back to Landing
        </button>
      </div>

      {/* Center Title */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
          {selectedAlgo || "Linear Search"}
        </h2>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        <div className="text-xs font-mono px-3 py-1.5 rounded-lg border border-amber-900/40 bg-amber-950/30 text-amber-300 flex items-center gap-1.5">
          <span>🎨</span> Studio Dark
        </div>
      </div>
    </nav>
  )
}

export default Navbar
