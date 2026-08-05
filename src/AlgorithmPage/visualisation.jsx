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
import { array } from "../js_algorithms/linearsearch";

const Visualisation = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => {
        if (prev >= array.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4">
      {array.map((value, index) =>
        index <= idx ? (
          <Ac key={index} value={value} />
        ) : null
      )}
    </div>
  );
};

export default Visualisation;