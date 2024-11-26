import React from "react";
import ArrowRightIcon from "../assets/Icons/ArrowRightIcon.svg";

const HowItWorks = ({ mainData, index }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {mainData.map((feature, i) => (
        <div
          key={i}
          className="bg-[#08122a] border  border-white border-opacity-20 rounded-[14px] p-5 xl:p-8 hover:shadow-lg transition"
        >
          <img src={feature.icon} alt={`${feature.title} Icon`} />

          <div className="font-poppins text-2xl lg:text-[28px] font-semibold text-white mt-4">
            {feature.title}
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className=" font-normal text-lg font-poppins text-[#8a8a8a]">
              {feature.description}
            </div>
            {index ? (
              <img
                src={ArrowRightIcon}
                alt="Arrow Right Icon"
                className="w-6 h-6 ml-auto"
              />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;
