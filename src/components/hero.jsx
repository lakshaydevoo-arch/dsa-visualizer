import React from 'react'
import { useState } from 'react';
import AlgorithmCard from './algoexplorer'
const Hero = () => {
   const [showSearchCard, setShowSearchCard] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-150 text-center px-6">
      <h1 className="text-4xl font-bold text-white mb-4">
        Visualize <span className="text-cyan-400">Data Structures</span> & Algorithms
      </h1>
      <h3 className="text-amber-200 text-xl mb-6">..one step at a time</h3>
      <p className="text-2xl text-amber-100 max-w-2xl mb-8">
        Learn algorithms by watching every comparison, pointer movement, and state change.
      </p>
      <button onClick={()=> setShowSearchCard(!showSearchCard)} className="rounded-xl border mb-3.5 border-cyan-500 bg-slate-900 px-6 py-3 text-lg font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-500 hover:text-white btn">
        Explore Algorithms
      </button>
        
      <div className="flex items-center gap-4">
  <div className="px-3 py-1 rounded-full bg-gray-800 text-white">
     🪜Step-by-Step
  </div>

  <div className="px-3 py-1 rounded-full bg-gray-800 text-white">
    💡Interactive
  </div>

  <div className="px-3 py-1 rounded-full bg-gray-800 text-white">
    🧠 Complexity
  </div>
</div>
<AlgorithmCard show = {showSearchCard}/>
    </div>
  )

}

export default Hero
