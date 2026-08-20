import React from 'react'

const SearchCard = ({ onselect, show }) => {
  if (!show) return null
  return (
    <div className="mt-4 w-full max-w-sm">
      <ul className="w-full bg-stone-900/95 border border-amber-900/40 rounded-2xl p-3 list-none space-y-2 text-stone-200 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
        <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-amber-500/80 font-bold border-b border-stone-800 pb-2 mb-1 flex items-center justify-between">
          <span>Select Algorithm</span>
          <span className="text-[10px] bg-stone-800 text-stone-400 px-1.5 py-0.5 rounded">2 Available</span>
        </div>
        <li
          onClick={() => onselect("Binary Search")}
          className="px-4 py-3 rounded-xl cursor-pointer hover:bg-amber-950/40 border border-transparent hover:border-amber-700/50 transition-all flex items-center justify-between group"
        >
          <span className="font-semibold text-stone-200 group-hover:text-amber-300">
            Binary Search
          </span>
          <span className="text-xs font-mono text-amber-500/60 bg-amber-500/10 px-2 py-0.5 rounded-md group-hover:bg-amber-500/20 group-hover:text-amber-400">
            O(log n)
          </span>
        </li>

        <li
          onClick={() => onselect("Linear Search")}
          className="px-4 py-3 rounded-xl cursor-pointer hover:bg-amber-950/40 border border-transparent hover:border-amber-700/50 transition-all flex items-center justify-between group"
        >
          <span className="font-semibold text-stone-200 group-hover:text-amber-300">
            Linear Search
          </span>
          <span className="text-xs font-mono text-amber-500/60 bg-amber-500/10 px-2 py-0.5 rounded-md group-hover:bg-amber-500/20 group-hover:text-amber-400">
            O(n)
          </span>
        </li>
      </ul>
    </div>
  )
}

export default SearchCard