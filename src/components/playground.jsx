import React from "react";
import Navbar from "../AlgorithmPage/navbar";
import AlgoHead from "../AlgorithmPage/algorithm_header";
import Visualisation_ls from "../AlgorithmPage/visualisation_ls";
import Visualisation_bs from '../AlgorithmPage/visualisation_bs';

const playground = ({ selectedAlgo, onSelectAlgo, onBack }) => {
  console.log(selectedAlgo);
  
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Left Sidebar: Quick Algorithm Switcher & Tools */}
      <div className="lg:col-span-3 flex flex-col gap-5 bg-stone-900/70 border border-stone-800/80 rounded-3xl p-5 shadow-2xl backdrop-blur-xl amber-glow-card">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-amber-500 font-bold mb-3 flex items-center justify-between">
            <span>Algorithm Workspace</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          
          <div className="space-y-2">
            <button
              onClick={() => onSelectAlgo && onSelectAlgo("Binary Search")}
              className={`w-full px-4 py-3 rounded-2xl border text-left text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                selectedAlgo === "Binary Search"
                  ? "bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-md"
                  : "bg-stone-950/60 border-stone-800 text-stone-300 hover:border-amber-700/50 hover:text-amber-400"
              }`}
            >
              <span>Binary Search</span>
              <span className="text-[10px] font-mono bg-stone-800 px-2 py-0.5 rounded text-amber-400">O(log n)</span>
            </button>

            <button
              onClick={() => onSelectAlgo && onSelectAlgo("Linear Search")}
              className={`w-full px-4 py-3 rounded-2xl border text-left text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                selectedAlgo === "Linear Search"
                  ? "bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-md"
                  : "bg-stone-950/60 border-stone-800 text-stone-300 hover:border-amber-700/50 hover:text-amber-400"
              }`}
            >
              <span>Linear Search</span>
              <span className="text-[10px] font-mono bg-stone-800 px-2 py-0.5 rounded text-amber-400">O(n)</span>
            </button>
          </div>
        </div>

        {/* Future Capabilities Architecture Placeholder */}
        <div className="pt-4 border-t border-stone-800/80 space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-bold">
            Studio Modules
          </div>

          <div className="space-y-1.5 text-xs text-stone-400">
            <div className="p-2.5 rounded-xl bg-stone-950/40 border border-stone-800/60 flex items-center justify-between">
              <span className="flex items-center gap-1.5">⚡ Execution Visualizer</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">Active</span>
            </div>
            
            <div className="p-2.5 rounded-xl bg-stone-950/30 border border-stone-800/40 flex items-center justify-between text-stone-500">
              <span className="flex items-center gap-1.5">⚔️ Algorithm Race</span>
              <span className="text-[10px] bg-stone-800 text-stone-400 px-1.5 py-0.5 rounded">Soon</span>
            </div>

            <div className="p-2.5 rounded-xl bg-stone-950/30 border border-stone-800/40 flex items-center justify-between text-stone-500">
              <span className="flex items-center gap-1.5">💻 Pseudocode Sync</span>
              <span className="text-[10px] bg-stone-800 text-stone-400 px-1.5 py-0.5 rounded">Soon</span>
            </div>
          </div>
        </div>

        {/* Big-O Complexity Quick Reference Card */}
        <div className="pt-4 border-t border-stone-800/80 bg-stone-950/80 border border-amber-900/30 rounded-2xl p-4 space-y-2">
          <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
            <span>📈</span> Complexity Reference
          </div>
          <p className="text-xs text-stone-300 leading-relaxed">
            {selectedAlgo === "Binary Search"
              ? "Binary Search divides the search interval in half at each step, operating in O(log n) time."
              : "Linear Search checks every element sequentially until target is found, operating in O(n) time."}
          </p>
        </div>
      </div>

      {/* Main Studio Visualizer Canvas */}
      <div className="lg:col-span-9 flex flex-col bg-stone-900/70 border border-stone-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl amber-glow-card transition-all duration-300 hover:border-amber-700/50">
        <Navbar selectedAlgo={selectedAlgo} onBack={onBack} />
        <AlgoHead algoselection={selectedAlgo} />

        <div className="w-full mt-4">
          {selectedAlgo === "Linear Search" ? (
            <Visualisation_ls />
          ) : (
            <Visualisation_bs />
          )}
        </div>
      </div>
    </div>
  );
};

export default playground;


