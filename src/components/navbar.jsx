import React from 'react'

const Navbar = ({ activeTab = 'home', onTabChange, onSelectAlgo }) => {
  return (
    <div className="w-full bg-stone-900/80 border border-stone-800/90 rounded-2xl px-6 py-4 shadow-2xl backdrop-blur-xl flex flex-wrap items-center justify-between gap-4">
      {/* Brand Header */}
      <div 
        onClick={() => onTabChange && onTabChange('home')}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 border border-amber-400/40 flex items-center justify-center text-stone-950 font-mono font-black text-xl shadow-lg shadow-amber-950/40 group-hover:scale-105 transition-transform">
          DSA
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-black tracking-tight text-stone-100 flex items-center gap-1.5">
            Visualizer <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono">Studio</span>
          </h1>
          <p className="text-[11px] text-stone-400 hidden sm:block">Algorithm Execution Engine</p>
        </div>
      </div>

      {/* Nav Actions / Pages */}
      <div className="flex items-center gap-3 sm:gap-6 text-stone-300 font-medium text-sm">
        <button
          onClick={() => onTabChange && onTabChange('home')}
          className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
            activeTab === 'home'
              ? 'bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold'
              : 'hover:text-amber-400 hover:bg-stone-800/50'
          }`}
        >
          Home
        </button>

        <button
          onClick={() => onTabChange && onTabChange('playground')}
          className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
            activeTab === 'playground'
              ? 'bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold'
              : 'hover:text-amber-400 hover:bg-stone-800/50'
          }`}
        >
          Workbench
        </button>

        <div className="relative z-50">
          <details className="group">
            <summary className="list-none cursor-pointer hover:text-amber-400 transition-colors py-1.5 px-3 rounded-xl hover:bg-stone-800/50 flex items-center gap-1">
              Algorithms
              <span className="text-xs transition-transform group-open:rotate-180">▾</span>
            </summary>

            <div className="absolute top-10 left-0 w-60 bg-stone-900/95 border border-stone-700/80 rounded-2xl shadow-2xl p-2.5 z-50 backdrop-blur-xl space-y-1">
              <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-amber-500/80 font-bold border-b border-stone-800 mb-1">
                Select Algorithm
              </div>
              <ul className="text-stone-200 text-sm">
                <li
                  onClick={() => {
                    onSelectAlgo && onSelectAlgo("Binary Search");
                    onTabChange && onTabChange("playground");
                  }}
                  className="px-3 py-2 rounded-xl hover:bg-amber-950/40 hover:text-amber-300 cursor-pointer transition-colors flex items-center justify-between"
                >
                  Binary Search
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono">O(log n)</span>
                </li>
                <li
                  onClick={() => {
                    onSelectAlgo && onSelectAlgo("Linear Search");
                    onTabChange && onTabChange("playground");
                  }}
                  className="px-3 py-2 rounded-xl hover:bg-amber-950/40 hover:text-amber-300 cursor-pointer transition-colors flex items-center justify-between"
                >
                  Linear Search
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono">O(n)</span>
                </li>
                <li className="px-3 py-2 rounded-xl text-stone-500 cursor-not-allowed flex items-center justify-between text-xs">
                  Sorting Algorithms
                  <span className="text-[10px] bg-stone-800 text-stone-400 px-1.5 py-0.5 rounded">Soon</span>
                </li>
                <li className="px-3 py-2 rounded-xl text-stone-500 cursor-not-allowed flex items-center justify-between text-xs">
                  Trees & Graphs
                  <span className="text-[10px] bg-stone-800 text-stone-400 px-1.5 py-0.5 rounded">Soon</span>
                </li>
              </ul>
            </div>
          </details>
        </div>

        <button className="hover:text-amber-400 transition-colors">
          <a
            onClick={(e) => {}}
            href="https://github.com/lakshaydevoo-arch/dsa-visualizer.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-stone-800/50"
          >
            About
          </a>
        </button>
      </div>
    </div>
  )
}

export default Navbar
