import React from "react";
import CountUp from "react-countup";

const benefitsData = [
  {
    percentage: 90, // Use numbers instead of strings
    description: "Virtual Profit Split",
  },
  {
    percentage: 50,
    description: "Countries Registered",
  },
  {
    percentage: 100,
    description: "Daily Payouts",
  },
  {
    percentage: 12,
    description: "Years In Industry",
  },
];

const Benefits = () => {
  return (
    <div className="flex flex-col md:flex-row mt-9 justify-between items-center gap-6">
      {benefitsData.map((benefit, index) => (
        <div key={index} className="flex flex-col gap-3 text-center">
          <div className="font-poppins text-[#01ff9d] font-semibold text-[32px] sm:text-[40px] lg:text-[64px]">
            {/* Apply CountUp for percentage with animation */}
            <CountUp
              start={0}
              end={benefit.percentage}
              duration={5}
              suffix={benefit.percentage === 50 ? "+" : "%"}
            />
          </div>
          <div className="font-poppins text-white font-normal text-2xl md:text-[28px]">
            {benefit.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
