import React, { useEffect, useState } from "react";
import Ac from "./arraycard";
import { array, frames } from "../js_algorithms/binarysearch";
import Arrow from "./arrow";
import Statuspage_bs from "./statuspage_bs";

const Visualisation_bs = () => {
  const [currframe, setcurrframe] = useState(0);
  const frame = frames[currframe];
  const foundidx = frame.foundIdx;
  console.log(frame);
  const mid = frame.mid;
  const low = frame.low;
  const high = frame.high;

  const hero = () => {
    if (currframe < frames.length - 1) {
      setcurrframe((i) => i + 1);
    }
  };

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
                {index === mid && <Arrow color="red" />}
                {index === low && <Arrow color="yellow" />}
                {index === high && <Arrow color="green" />}
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
      <Statuspage_bs
        idx_={mid}
        currele={array[mid]}
        status={frame.status}
        found={foundidx}
        target={frame.target}
      />
    </div>
  );
};

export default Visualisation_bs;

