import React from "react";
import BgImage2 from "../assets/Images/BgImage2.png";
import ArrowRightIcon from "../assets/Icons/ArrowRightIcon.svg";
const AceFundedTrader = () => {
  return (
    <div
      className="bg-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgImage2})`,
      }}
    >
      <div className="px-4 md:px-12 py-5 md:py-10 ">
        <div className="text-center capitalize  text-white font-bold  font-redhat text-[32px] tracking-[-1px] xl:tracking-[-4px] xl:leading-[111px] lg:text-[60px] xl:text-[84px]">
          Are you ready to become Ace funded Trader?
        </div>

        <button className="bg-[#020621] flex gap-x-3 border-[#2A80B3] border-2 items-center font-redhat mx-auto text-lg text-white px-6 py-2 rounded-full font-normal hover:text-white transition">
          Start Challenge
          <img src={ArrowRightIcon} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default AceFundedTrader;
