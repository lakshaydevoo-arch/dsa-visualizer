import React from 'react'

const AlgorithmHeader = () => {
  return (
    <section className="border-b border-slate-800 px-8 py-8">

      <h1 className="text-4xl font-bold text-white">
        Linear Search
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-3">

        <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
          Searching
        </span>

        <span className="rounded-full bg-green-500/10 px-4 py-1 text-sm font-medium text-green-400">
          Easy
        </span>

      </div>

      <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
        Finds a target element in a unsorted array by sequentially
         searching until the
        target is found or the search space becomes empty.
      </p>

      <div className="mt-0.5 flex flex-wrap gap-4">

        

       

      </div>

    </section>
  )
}

export default AlgorithmHeader
