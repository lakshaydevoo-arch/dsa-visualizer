import React, { useState } from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Playground from './playground'

const Card = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("Binary Search");
  const [activeTab, setActiveTab] = useState("home");

  const handleSelectAlgo = (algo) => {
    setSelectedAlgo(algo);
    setActiveTab("playground");
  };

  return (
    <div className="min-h-screen app-bg-image text-stone-100 relative flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Warm Ambient Decorative Radial Glows */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-amber-950/25 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Main App Container */}
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex-1 flex flex-col gap-6">
        {/* Top App Navigation Header */}
        <Navbar 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          onSelectAlgo={handleSelectAlgo} 
        />

        {/* View Switcher */}
        {activeTab === 'home' ? (
          <div className="w-full flex-1 flex flex-col items-center justify-center py-6 sm:py-10 animate-in fade-in duration-300">
            <div className="w-full max-w-4xl bg-stone-900/70 border border-stone-800/80 rounded-3xl p-6 sm:p-12 shadow-2xl backdrop-blur-xl amber-glow-card transition-all duration-300 hover:border-amber-700/50">
              <Hero onSelectAlgo={handleSelectAlgo} />
            </div>
          </div>
        ) : (
          <div className="w-full flex-1 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <Playground 
              selectedAlgo={selectedAlgo} 
              onSelectAlgo={setSelectedAlgo}
              onBack={() => setActiveTab('home')} 
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Card



