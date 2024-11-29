import React from "react";
import LastBgImage from "@assets/images/LastBgImage.png";
import BlackArrowRight from "@assets/icons/BlackArrowRight.svg";

const AceFundedTrader = () => {
  return (
    <div
      className="bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${LastBgImage})`,
      }}
    >
      <div className="px-4 md:px-12 py-5 md:py-10 ">
        <div className="text-center capitalize  text-white font-bold font-poppins text-[32px] tracking-[-1px] xl:tracking-[-4px] xl:leading-[126px] lg:text-[60px] xl:text-[84px]">
          Are you ready to Funded
          <br /> Trader?
        </div>

        <button className="uppercase bg-gradient-to-r from-[#00fc9e]  to-[#1c7ef0] text-black flex gap-x-3 items-center font-outfit mx-auto text-lg px-8 py-3 rounded-full font-normal hover:opacity-90 transition border-0">
          Get Started Today
          <img src={BlackArrowRight} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default AceFundedTrader;
