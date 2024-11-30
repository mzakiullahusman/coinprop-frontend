import React from "react";
import TickIcon from "@assets/icons/TickIcon.svg";

import TraderGraph from "@assets/icons/TradingGraph.svg";
import TextMain from "./TextMain";
const RMT = () => {
  const tickList = [
    { text: "Innovation" },
    { text: "Transparency" },
    { text: "Collaboration" },
    { text: "Entrepreneurial Spirit" },
    { text: "Diversity and Inclusion" },
    { text: "Adaptability" },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row px-4 md:px-12 py-5  md:py-10">
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
          <TextMain
            text="About Us"
            description="Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia viverra orci diam."
            index={false}
            textStyling="gradient"
          />

          <div className="grid xl:grid-cols-2 gap-x-20 gap-y-6 text-white mt-6">
            {tickList.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <img src={TickIcon} alt="tickIcon" />
                <span className="font-poppins font-normal text-lg md:text-[22px]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RMT;
