import React from 'react'

const statuspage_bs = (props) => {
  function showSearch() {
    if (props.found === -1)
      return "Searching"
    else
      return "Searched"
  }

  const isFound = props.found !== -1;

  return (
    <div className="w-full rounded-3xl border border-stone-800/90 bg-stone-900/70 backdrop-blur-md p-5 sm:p-6 shadow-2xl space-y-4">
      {/* Console Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-800/80">
        <div className="flex items-center gap-2">
          <span className="text-amber-500 font-mono font-bold text-sm">{">_"}</span>
          <h2 className="text-stone-100 font-bold text-sm sm:text-base tracking-wide">
            Execution Monitor (Index {props.idx_})
          </h2>
        </div>

        <span className={`text-xs px-3 py-1 rounded-full font-mono font-bold uppercase tracking-wider border shadow-sm ${
          isFound
            ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 animate-pulse"
            : "bg-amber-500/15 text-amber-400 border-amber-500/30"
        }`}>
          {showSearch()}
        </span>
      </div>

      {/* State Metrics Grid */}
      <div className="grid grid-cols-3 gap-3 text-xs sm:text-sm">
        <div className="bg-stone-950/70 border border-stone-800/80 rounded-2xl p-3 flex flex-col gap-1">
          <span className="text-stone-400 font-medium text-[11px] uppercase tracking-wider">Current Element</span>
          <span className="text-stone-100 font-mono font-extrabold text-base sm:text-lg">{props.currele}</span>
        </div>

        <div className="bg-stone-950/70 border border-stone-800/80 rounded-2xl p-3 flex flex-col gap-1">
          <span className="text-stone-400 font-medium text-[11px] uppercase tracking-wider">Target</span>
          <span className="text-amber-400 font-mono font-extrabold text-base sm:text-lg">{props.target || 23}</span>
        </div>

        <div className="bg-stone-950/70 border border-stone-800/80 rounded-2xl p-3 flex flex-col gap-1">
          <span className="text-stone-400 font-medium text-[11px] uppercase tracking-wider">Current Index</span>
          <span className="text-stone-100 font-mono font-extrabold text-base sm:text-lg">{props.idx_}</span>
        </div>
      </div>

      {/* Status Output Console Message */}
      <div className="bg-stone-950/90 border border-amber-900/30 rounded-2xl p-4 text-amber-200/90 font-mono text-xs sm:text-sm leading-relaxed shadow-inner flex items-start gap-3">
        <span className="text-amber-500 text-base">⚡</span>
        <p className="flex-1">
          {props.status}
        </p>
      </div>
    </div>
  )
}

export default statuspage_bs