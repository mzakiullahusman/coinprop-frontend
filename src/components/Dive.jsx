import React from "react";
import TickIcon from "../assets/Icons/TickIcon.svg";
import BgImage from "../assets/Images/BgImage.png";
import ButtonIcon from "../assets/Icons/ButtonIcon.svg";
import LeftBlock from "../assets/Icons/LeftBlock.svg";
import RightBlock from "../assets/Icons/RightBlock.svg";
import TrustPilot from "../assets/Icons/TrustPilot.svg";
import Match from "../assets/Icons/Match.svg";
import Icon1 from "../assets/Icons/Icon1.svg";
import Icon2 from "../assets/Icons/Icon2.svg";
import Icon3 from "../assets/Icons/Icon3.svg";
import Icon4 from "../assets/Icons/Icon4.svg";
import Icon5 from "../assets/Icons/Icon5.svg";
import BlackArrowRight from "../assets/Icons/BlackArrowRight.svg";

// import Icon1 from "../assets/Icons/Icon1.svg";

const Dive = () => {
  const tickList = [
    { text: "Up To $400,000 Starting Capital" },
    { text: "First Withdrawal On Demand" },
    { text: "Unlimited Days Available" },
    { text: "Up To 90% Performance Split" },
  ];

  const diveIcons = [
    { src: Icon1, alt: "Icon 1" },
    { src: Icon2, alt: "Icon 2" },
    { src: Icon3, alt: "Icon 3" },
    { src: Icon4, alt: "Icon 4" },
    { src: Icon5, alt: "Icon 5" },
  ];

  return (
    <div
      className="bg-[#020621] bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <div className=" flex flex-col items-center justify-center px-4 md:px-40 text-center py-5  md:py-10">
        <div className="relative flex items-center justify-center px-4 py-2 rounded-full text-white font-poppins text-xs bg-[#1FD9AD] backdrop-blur-md shadow-[100px_4px_100px_rgba(31,217,173,0.5)] border border-white/10">
          <img src={ButtonIcon} alt="ButtonIcon" />
          Intelligent Solutions, Infinite Possibilities
        </div>

        <div className="text-[36px] text-white lg:text-[64px] leading-[48px] lg:leading-[96px]  font-poppins font-extralight">
          Simplifying <span className="font-bold">Cryptocurrency</span> for
          Everyone with <span className="font-bold">Innovative.</span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <img src={LeftBlock} alt="Left Block" />
          <div className="flex flex-col items-center">
            <div className=" text-white text-[20px] font-poppins font-normal">
              Our platform makes crypto investments simple and accessible for
              all users.
            </div>
            <div className="flex flex-col md:flex-row mt-9 items-center text-white gap-5 lg:gap-20 font-poppins text-sm md:text-lg font-normal ">
              <img src={TrustPilot} alt="TrustPilot" />
              <div className="flex items-start md:items-center gap-x-2">
                <div>Listed on</div>
                <img src={Match} alt="Match" />
                <div>Propfirmmatch.com</div>
              </div>
            </div>

            <button className="bg-gradient-to-b flex flex-row mt-8 gap-x-3 items-center from-[#00FC9E] to-[#1C7e70] text-[#141414]  font-outfit text-[20px] px-8 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition">
              Start Challenge
              <img src={BlackArrowRight} alt="Arrow" />
            </button>
          </div>
          <img src={RightBlock} alt="Right Block" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center xl:py-12 justify-center gap-12 xl:gap-20 ">
        {diveIcons.map((icon, index) => (
          <div key={index} className="flex items-center justify-center">
            <img src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dive;
