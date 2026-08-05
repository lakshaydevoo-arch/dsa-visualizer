import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Playground from './playground'
const Card = () => {
  return (
    <div className="  min-h-screen flex items-left justify-start bg-slate-900">
      
      <div className=' ml-32 mt-12   w-170 rounded-2xl border h-220 border-slate-700 bg-slate-900 p-6 shadow-2xl hover:border-cyan-500 transition-all duration-300'>
        <Navbar/>
        <Hero/>
        
      </div>
 <Playground/>
    </div>
  )
}

export default Card
