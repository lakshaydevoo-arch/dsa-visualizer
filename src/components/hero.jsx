import React, { useState } from 'react'
import AlgorithmCard from './algoexplorer'

const Hero = ({ onSelectAlgo }) => {
  const [showSearchCard, setShowSearchCard] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center text-center py-6 sm:py-8 px-2 relative">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        Interactive DSA Explorer
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-100 tracking-tight leading-tight mb-3">
        Visualize <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200">Data Structures</span> & Algorithms
      </h1>

      <h3 className="text-amber-200/90 text-lg sm:text-xl font-medium mb-4 italic font-serif">
        ...one step at a time
      </h3>

      <p className="text-base sm:text-lg text-stone-300 max-w-xl mb-6 leading-relaxed">
        Learn algorithms by watching every comparison, pointer movement, and state change in real-time.
      </p>

      <button
        onClick={() => setShowSearchCard(!showSearchCard)}
        className="group relative inline-flex items-center justify-center rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-600 to-amber-700 px-7 py-3.5 text-base font-bold text-stone-950 shadow-xl shadow-amber-950/40 transition-all duration-300 hover:from-amber-500 hover:to-amber-600 hover:border-amber-400 hover:scale-[1.02] active:scale-95 cursor-pointer mb-6"
      >
        <span>Explore Algorithms</span>
        <span className="ml-2 text-stone-950 transition-transform group-hover:translate-x-1">→</span>
      </button>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-2">
        <div className="px-3.5 py-1.5 rounded-full bg-stone-800/80 border border-stone-700/60 text-stone-300 text-xs sm:text-sm font-medium shadow-sm flex items-center gap-1.5">
          <span>🪜</span> Step-by-Step
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-stone-800/80 border border-stone-700/60 text-stone-300 text-xs sm:text-sm font-medium shadow-sm flex items-center gap-1.5">
          <span>💡</span> Interactive
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-stone-800/80 border border-stone-700/60 text-stone-300 text-xs sm:text-sm font-medium shadow-sm flex items-center gap-1.5">
          <span>🧠</span> Complexity
        </div>
      </div>

      <AlgorithmCard show={showSearchCard} onselect={onSelectAlgo} />
    </div>
  )
}

export default Hero

