import React from 'react'

const arraycard = (props) => {
  return (
    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl border-2 border-stone-700/80 bg-gradient-to-b from-stone-800 to-stone-900/90 shadow-xl flex items-center justify-center text-lg sm:text-2xl font-mono font-extrabold text-amber-100 transition-all duration-300 hover:border-amber-500 hover:shadow-amber-500/20 hover:-translate-y-1 select-none">
      {props.value}
    </div>
  )
}

export default arraycard

