import React from "react";
import ButtonIcon from "@assets/icons/ButtonIcon.svg";
import LeftBlock from "@assets/icons/LeftBlock.svg";
import RightBlock from "@assets/icons/RightBlock.svg";
import TrustPilot from "@assets/icons/TrustPilot.svg";
import Match from "@assets/icons/Match.svg";
import Icon1 from "@assets/icons/Icon1.svg";
import Icon2 from "@assets/icons/Icon2.svg";
import Icon3 from "@assets/icons/Icon3.svg";
import Icon4 from "@assets/icons/Icon4.svg";
import Icon5 from "@assets/icons/Icon5.svg";
import BlackArrowRight from "@assets/icons/BlackArrowRight.svg";
import BgImage from "@assets/images/BgImage.png";

// import Icon1 from "../assets/Icons/Icon1.svg";

const HomeFirst = () => {
  const homeIcons = [
    { src: Icon1, alt: "Icon 1" },
    { src: Icon2, alt: "Icon 2" },
    { src: Icon3, alt: "Icon 3" },
    { src: Icon4, alt: "Icon 4" },
    { src: Icon5, alt: "Icon 5" },
  ];

  return (
    <div
      className="px-4 lg:px-20 text-center py-5  md:py-10 flex flex-col items-center justify-center"
      // style={{
      //   backgroundImage: `url(${BgImage})`,
      // }}
    >
      <button className="flex items-center gap-1 gradient-div">
        <img src={ButtonIcon} alt="Icon" />
        Intelligent Solutions, Infinite Possibilities
      </button>

      <div className="text-[36px] text-white lg:text-[64px] leading-[48px] lg:leading-[96px]  font-poppins font-extralight">
        Simplifying <span className="font-bold">Cryptocurrency</span> for
        Everyone with <span className="font-bold">Innovative.</span>
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-12">
        <img src={LeftBlock} alt="Left Block" />
        <div className="flex flex-col items-center">
          <div className=" text-white text-[20px] font-poppins font-normal">
            Our platform makes crypto investments simple and accessible for all
            users.
          </div>
          <div className="flex flex-col md:flex-row mt-9 items-center text-white gap-5 md:gap-16 font-poppins text-sm md:text-lg font-normal ">
            <img src={TrustPilot} alt="TrustPilot" />
            <div className="flex items-start md:items-center gap-x-2">
              <div>Listed on</div>
              <img src={Match} alt="Match" />
              <div>Propfirmmatch.com</div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] flex flex-row mt-8 gap-x-3 items-center text-[#141414]  font-outfit text-[20px] px-8 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition">
            Start Challenge
            <img src={BlackArrowRight} alt="Arrow" />
          </button>
        </div>
        <img src={RightBlock} alt="Right Block" />
      </div>

      <div className="flex flex-col md:flex-row items-center pt-32 xl:pb-12 justify-center gap-12 xl:gap-20 ">
        {homeIcons.map((icon, index) => (
          <div key={index} className="flex items-center justify-center">
            <img src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFirst;
