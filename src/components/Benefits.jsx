import React, { useState } from "react";
import CountUp from "react-countup";

const benefitsData = [
  {
    percentage: 90,
    description: "Up to 90% Virtual Profit Share",
    suffix: "%"
  },
  {
    number: 1,
    description: (
      <div className="relative group">
        <span>Step to become a{" "}
        <span className="underline decoration-dotted cursor-help">
          CPS
        </span></span>
        <div className="invisible group-hover:visible absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap">
          CoinProp Simulated
        </div>
      </div>
    ),
    isStep: true
  },
  {
    number: 50,
    description: "Popular Coins Available for Trading",
    suffix: "+"
  },
  {
    percentage: 100,
    description: "Near Instant Payouts",
    suffix: "%"
  }
];

const Benefits = () => {
  return (
    <div className="flex flex-col md:flex-row mt-9 justify-between items-center gap-6">
      {benefitsData.map((benefit, index) => (
        <div key={index} className="flex flex-col gap-3 text-center max-w-xs">
          <div className="font-poppins text-[#01ff9d] font-semibold text-[32px] sm:text-[40px] lg:text-[64px]">
            {benefit.prefix && (
              <span className="text-[24px] sm:text-[32px] lg:text-[48px]">
                {benefit.prefix}
              </span>
            )}
            <CountUp
              start={0}
              end={benefit.isStep ? benefit.number : (benefit.percentage || benefit.number)}
              duration={5}
              suffix={benefit.suffix || ""}
            />
          </div>
          <div className="font-poppins text-white font-normal text-lg">
            {benefit.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benefits;