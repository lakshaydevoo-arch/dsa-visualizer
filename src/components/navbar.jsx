import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full bg-slate-900 border-b border-slate-800 px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-cyan-400">
        DSA Visualizer
      </h1>

      <div className="flex items-center gap-8 text-slate-300 font-medium">
        <button className="hover:text-cyan-400 transition-colors duration-200">
          Home
        </button>

        <div className="relative">
  <details>
    <summary className="list-none cursor-pointer hover:text-cyan-400 transition-colors duration-200">
      Algorithms
    </summary>

    <div className="absolute top-8 left-0 w-52 bg-slate-800 border border-slate-700 rounded-lg shadow-lg p-3">
      <ul className="space-y-2 text-amber-100">
        <li className="px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">
          All
        </li>

        <li className="px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">
          Searching
        </li>

        <li className="px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">
          Sorting
        </li>

        <li className="px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">
          Trees
        </li>

        <li className="px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">
          Graphs
        </li>

        <li className="px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">
          Dynamic Programming
        </li>
      </ul>
    </div>
  </details>
</div>
        <button className="hover:text-cyan-400 transition-colors duration-200">
          About
        </button>
      </div>
    </div>
  )
}

export default Navbar