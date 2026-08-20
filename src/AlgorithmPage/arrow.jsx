import React from 'react'

const arrow = (props) => {
  const colorMap = {
    red: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    yellow: 'text-amber-300 bg-amber-500/10 border-amber-500/30',
    green: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  };

  const labelMap = {
    red: 'MID',
    yellow: 'LOW / PTR',
    green: 'HIGH',
  };

  const arrowColor = {
    red: 'text-rose-400',
    yellow: 'text-amber-300',
    green: 'text-emerald-400',
  };

  return (
    <div className="flex flex-col items-center animate-pulse">
      <div className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase border ${colorMap[props.color] || 'text-stone-300'} mb-1 shadow-sm`}>
        {labelMap[props.color] || 'PTR'}
      </div>
      <span className={`text-xl font-black ${arrowColor[props.color] || 'text-amber-400'}`}>
        ↑
      </span>
    </div>
  )
}

export default arrow

