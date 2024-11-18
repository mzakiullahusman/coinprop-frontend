import React from "react";
import BgImage3 from "../assets/Images/BgImage3.png";
import DiscordIcon from "../assets/Icons/DiscordIcon.svg";
import ArrowRightIcon from "../assets/Icons/ArrowRightIcon.svg";

const DiscordCommunity = () => {
  return (
    <div
      className=" bg-[#020621] py-5 xl:py-[0px] bg-center bg-no-repeat xl:min-h-screen w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${BgImage3})`,
      }}
    >
      <img className="mb-6" src={DiscordIcon} alt="Discord Icon" />
      <div className="text-[32px] tracking-[-1px] xl:tracking-[-4px] text-center xl:leading-[111px] text-white lg:text-[60px] xl:text-[84px] font-redhat font-medium">
        Discord Our Community
      </div>
      <div className="text-base text-center font-poppins text-white lg:text-[21px] font-light mt-4">
        Talk with thousands of other like-minded individuals all looking to
        succeed.
      </div>
      <button className="bg-gradient-to-b mt-6 flex flex-row gap-x-3 items-center from-[#2A80B3] via-[#236191] to-[#142738] font-redhat text-lg text-white px-6 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition">
        Start Challenge
        <img src={ArrowRightIcon} alt="Arrow" />
      </button>
    </div>
  );
};

export default DiscordCommunity;
