import React from 'react'

const ALGO_DETAILS = {
  "Linear Search": {
    category: "Searching",
    difficulty: "Easy",
    description: "Finds a target element in an unsorted array by sequentially searching until the target is found or the search space becomes empty."
  },
  "Binary Search": {
    category: "Searching",
    difficulty: "Easy",
    description: "Finds a target element in a sorted array by repeatedly dividing the search interval in half until the target is found or the search space becomes empty."
  }
};

const AlgorithmHeader = ({ algoselection }) => {
  const details = ALGO_DETAILS[algoselection] || ALGO_DETAILS["Linear Search"];

  return (
    <section className="border-b border-stone-800/80 pb-6 mb-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight">
            {algoselection || "Linear Search"}
          </h1>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-stone-300 max-w-2xl">
            {details.description}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="rounded-full bg-amber-500/15 border border-amber-500/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
            {details.category}
          </span>

          <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            {details.difficulty}
          </span>
        </div>
      </div>
    </section>
  )
}

export default AlgorithmHeader


