import React from "react";

import TraderGraph from "@assets/icons/TradingGraph.svg";
import RMTRight from "./RMTRight";
const RMT = () => {
  const tickList = [
    { text: "Innovation" },
    { text: "Entrepreneurial Spirit" },
    { text: "Transparency" },
    { text: "Diversity and Inclusion" },
    { text: "Collaboration" },
    { text: "Adaptability" },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row px-4 md:px-12 xl:px-20 2xl:px-32 py-5  md:py-10">
        <div className="w-full items-center justify-center flex flex-col gap-y-2 lg:w-1/2">
          <img src={TraderGraph} alt="TraderGraph" />
          <div className="flex flex-col flex-wrap md:flex-row items-center gap-5">
            <button className="bg-white rounded-full bg-opacity-10 text-white text-base font-medium py-3 px-5">
              Send
            </button>
            <button className="bg-white rounded-full bg-opacity-10 text-white text-base font-medium py-3 px-5">
              Receive
            </button>
            <button className="bg-white rounded-full bg-opacity-10 text-white text-base font-medium py-3 px-5">
              Exchange
            </button>
            <button className="bg-white rounded-full bg-opacity-10 text-white text-base font-medium py-3 px-5">
              Trade
            </button>
          </div>
        </div>
        <div className="w-full items-start flex flex-col gap-y-2 lg:w-1/2">
          <RMTRight tickList={tickList} />
        </div>
      </div>
    </>
  );
};

export default RMT;
