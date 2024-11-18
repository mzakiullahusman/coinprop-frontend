import React from "react";
import BgImage1 from "../assets/Images/BgImage1.png";
import ArrowRightIcon from "../assets/Icons/ArrowRightIcon.svg";
import PlusIcon from "../assets/Icons/PlusIcon.svg";
const FAQ = () => {
  return (
    <div
      className="bg-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgImage1})`,
      }}
    >
      <div className="px-4 md:px-12 py-5 md:py-10">
        <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-y-[0px] lg:justify-start">
          <div className="flex w-full lg:w-[50%] flex-col gap-y-2 justify-start items-start">
            <div className="border-white font-poppins border border-opacity-20 text-white rounded-full px-3 py-1 font-normal text-sm">
              FAQs
            </div>
            <div className="text-[28px] tracking-[-1px] xl:tracking-[-4px] xl:leading-[80px] text-white lg:text-[50px] xl:text-[64px] font-redhat font-medium">
              Our Most <span className="text-[#2a80b3]">Asked Questions?</span>
            </div>
            <div className="text-base text-white capitalize lg:text-[20px] font-redhat font-normal">
              Trade the way you want , how you want , for as long as you want...
            </div>

            <button className="bg-gradient-to-b mt-6 flex flex-row gap-x-3 items-center from-[#2A80B3] via-[#236191] to-[#142738] font-redhat text-lg text-white px-6 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition">
              Start Challenge
              <img src={ArrowRightIcon} alt="Arrow" />
            </button>
          </div>
          <div className="w-full flex flex-col gap-y-3 lg:w-[50%]">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="border flex justify-between text-white border-[#2a80b3] rounded-[8px] font-redhat text-base lg:text-[20px] font-normal p-6"
              >
                What happens if you lose money in a prop firm?
                <img src={PlusIcon} alt="Plus" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
