import React from 'react'

const SearchCard = ({show}) => {
    if(!show) return null;
  return (
    <div className='h-4 mt-2.5'>
      <ul className="w-64 bg-slate-800/70 border border-slate-700 rounded-xl p-3 list-none space-y-2 text-amber-100 shadow-lg">
        <li className="px-3 py-2 rounded-lg  cursor-pointer hover:bg-slate-700 transition">
          Binary Search
        </li>

        <li className="px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-700 transition">
          Linear Search
        </li>
      </ul>
    </div>
  )
}

export default SearchCard