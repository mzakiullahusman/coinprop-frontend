import React from "react";
const benefitsData = [
  {
    percentage: "90%",
    description: "Virtual Profit Split",
  },
  {
    percentage: "50+",
    description: "Countries Registered",
  },
  {
    percentage: "100+",
    description: "Daily Payouts",
  },
  {
    percentage: "12+",
    description: "Years In Industry",
  },
];

const Benefits = () => {
  return (
    <div className="flex flex-col md:flex-row mt-12 justify-between items-center gap-6">
      {benefitsData.map((benefit, index) => (
        <div key={index} className="flex flex-col gap-3 text-center">
          <div className="font-poppins text-[#01ff9d] font-semibold text-[32px] sm:text-[40px] lg:text-[64px]">
            {benefit.percentage}
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
