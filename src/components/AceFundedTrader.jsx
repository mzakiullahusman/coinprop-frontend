import React from "react";
import LastBgImage from "@assets/images/LastBgImage.png";
import BlackArrowRight from "@assets/icons/RightBlackArrow.svg";

const AceFundedTrader = () => {
  return (
    <section
      className="my-40 lg:my-0"
      style={{
        backgroundImage: `url(${LastBgImage})`,
      }}
    >
      <div className="relative w-full flex items-center justify-center overflow-hidden ">
        <div className="absolute w-full min-h-screen overflow-hidden blur-[40px]">
          <div className="absolute left-[20%] top-[40%] bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] h-[270px] w-[290px] rounded-[40%_50%_30%_40%] opacity-70 animate-transform_one"></div>

          <div className="absolute left-[50%] top-[30%] bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] h-[350px] w-[350px] rounded-[40%_50%_30%_40%] opacity-70 animate-transform_two"></div>

          <div className="absolute left-[50%] top-[40%] bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] h-[350px] w-[350px] rounded-[40%_50%_30%_40%] opacity-70 animate-transform_three"></div>
        </div>

        {/* Main Content */}
        <div className="px-4 md:px-12 py-5 md:py-10 ">
          <div className="text-center capitalize  text-white font-bold font-poppins text-[32px] tracking-[-1px] xl:tracking-[-4px] xl:leading-[126px] lg:text-[60px] xl:text-[84px]">
            Are you ready to Funded
            <br /> Trader?
          </div>

          <button className="uppercase bg-gradient-to-r from-[#00fc9e]  to-[#1c7ef0] text-black flex gap-x-3 items-center font-outfit mx-auto text-lg px-8 py-3 mt-6 lg:mt-[0px] rounded-full font-normal hover:opacity-90 transition border-0">
            Get Started Today
            <img src={BlackArrowRight} alt="Arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AceFundedTrader;
