// import React from "react";
// import Ac from "./arraycard";
// import { array } from "../js_algorithms/linearsearch";

// const visualisation = () => {
//   const [idx, setIdx] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIdx((prev) => prev + 1);
//     }, 500);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div>
//       <div className="flex overflow-x-auto gap-4 p-4">
//         {array.map((value, index) =>
//       index <= idx ? <Ac key={index}  /> : null
//     )}

//       </div>
//     </div>
//   );
// };

// export default visualisation;
import React, { useEffect, useState } from "react";
import Ac from "./arraycard";
import { array, frames } from "../js_algorithms/linearsearch";
import Arrow from "./arrow";
import Statuspage from "./statuspage_ls";

const Visualisation_ls = () => {
  const [currframe, setcurrframe] = useState(0);
  const frame = frames[currframe];
  const idx = frame.currIdx;
  const foundidx = frame.foundIdx;
  console.log(frame);
  console.log(frame.status);

  function hero() {
    if (currframe < frames.length - 1) {
      setcurrframe((prev) => prev + 1);
    }
  }

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Visualization Canvas Stage */}
      <div className="w-full bg-stone-950/80 border border-stone-800/90 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between gap-6 shadow-inner relative overflow-hidden">
        {/* Array Visualization Area */}
        <div className="flex flex-wrap justify-center items-end gap-3 sm:gap-5 min-h-[150px] py-4 w-full">
          {array.map((value, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <Ac value={value} />

              <div className="h-12 flex items-start justify-center">
                {index === idx && <Arrow color="yellow" />}
              </div>
            </div>
          ))}
        </div>

        {/* Step Controls Bar */}
        <div className="w-full pt-4 border-t border-stone-800/80 flex items-center justify-center">
          <button
            onClick={hero}
            className="cursor-pointer rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-extrabold px-8 py-3 text-sm tracking-wider uppercase shadow-xl shadow-amber-950/50 hover:shadow-amber-500/20 active:scale-95 transition-all duration-200 flex items-center gap-2 border border-amber-400/30"
          >
            <span>NEXT STEP</span>
            <span className="text-base">➔</span>
          </button>
        </div>
      </div>

      {/* Execution Monitor Panel */}
      <Statuspage
        idx_={idx}
        currele={array[idx]}
        status={frame.status}
        found={frame.foundIdx}
      />
    </div>
  );
};

export default Visualisation_ls;

