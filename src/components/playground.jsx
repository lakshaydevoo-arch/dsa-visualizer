import React from "react";
import Navbar from "../AlgorithmPage/navbar";
import AlgoHead from "../AlgorithmPage/algorithm_header";
import Visualisation from "../AlgorithmPage/visualisation";
const playground = () => {
  return (
    <div className=" ml-30 mt-12   w-220  h-220 border-slate-700 bg-slate-900 p-6 shadow-2xl hover:border-cyan-500 transition-all duration-300">
        <Navbar/>
        <AlgoHead/>
        <Visualisation/>
    </div>
  );
};

export default playground;
