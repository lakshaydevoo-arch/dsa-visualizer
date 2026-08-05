import React from 'react'

const arraycard = (props) => {
  return (
   <div className="h-10 w-10 rounded-xl border-2 border-slate-600 bg-slate-800 flex items-center justify-center text-2xl font-bold text-white shadow-lg transition-all duration-300 hover:border-cyan-400">
  {props.value}
</div>
  )
}

export default arraycard
