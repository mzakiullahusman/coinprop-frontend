import React from "react";
import ButtonIcon from "@assets/icons/ButtonIcon.svg";
import LeftBlock from "@assets/images/LeftBlock.png";
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
    <div>
      <div className="text-center py-5 mt-12  md:py-10 flex flex-col items-center justify-center">
        <button className="flex items-center gap-1 gradient-div">
          <img src={ButtonIcon} alt="Icon" />
          Intelligent Solutions, Infinite Possibilities
        </button>

        <div className="text-[36px] xl:w-3/4 2xl:w-[80%] text-white lg:text-[64px] leading-[48px] lg:leading-[96px]  font-poppins font-extralight">
          Simplifying{" "}
          <span className="font-bold bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] bg-clip-text  text-transparent">
            Cryptocurrency
          </span>{" "}
          for Everyone with{" "}
          <span className="font-bold bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] bg-clip-text  text-transparent">
            Innovative.
          </span>
        </div>
        <div className="flex flex-col xl:flex-row justify-between items-center lg:items-start gap-8 xl:gap-12">
          <img src={LeftBlock} className="w-60 h-60" alt="Left Block" />
          <div className="flex flex-col items-center">
            <div className=" text-white text-[20px] font-poppins font-normal">
              Our platform makes crypto investments simple and accessible for
              all users.
            </div>
            <div className="flex flex-col md:flex-row mt-8 items-center text-white gap-5 md:gap-16 font-poppins text-sm md:text-lg font-normal ">
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
      </div>
      <div className="relative mt-36">
        <img
          src={BgImage}
          className="w-full absolute bottom-[-70px] bg-contain bg-no-repeat"
        />
        <div className="flex flex-col md:flex-row items-center justify-center md:bottom-[-50px] xl:bottom-0 mb-20 xl:mb-12  2xl:bottom-[70px] relative gap-12 xl:gap-20 ">
          {homeIcons.map((icon, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFirst;
