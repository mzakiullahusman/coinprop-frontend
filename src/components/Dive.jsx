import React from "react";
import TickIcon from "../assets/Icons/TickIcon.svg";
import BgImage from "../assets/Images/BgImage.png";
import Icon1 from "../assets/Icons/Icon1.svg";
import Icon2 from "../assets/Icons/Icon2.svg";
import Icon3 from "../assets/Icons/Icon3.svg";
import Icon4 from "../assets/Icons/Icon4.svg";
import Icon5 from "../assets/Icons/Icon5.svg";

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
      className="bg-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <div className="flex flex-col lg:flex-row gap-20 px-4 md:px-12 py-5  md:py-10">
        <div className="w-full items-start flex flex-col gap-y-2 lg:w-1/2">
          <div className="border-[#2A80B3] border text-white rounded-full px-3 py-1 font-normal font-redhat text-base">
            Welcome to Ace Funded
          </div>

          <div className="text-[32px] tracking-[-1px] xl:tracking-[-4px] xl:leading-[100px] text-white  lg:text-[60px] xl:text-[84px] font-redhat font-medium">
            Dive into Success With Our Capital.
          </div>
          <div className="text-lg text-white lg:text-2xl font-redhat font-medium">
            Trade with our Capital and keep up to 95% of the Profit.
          </div>

          <div className="grid xl:grid-cols-2 gap-x-20 gap-y-6 text-white mt-6">
            {tickList.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={TickIcon} alt="tickIcon" />
                <span className="font-redhat font-normal text-base">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <div class="flex flex-col md:flex-row gap-4 mt-6">
            <button class="bg-gradient-to-b from-[#2A80B3] via-[#236191] to-[#142738] font-redhat text-lg text-white px-6 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition">
              Start Challenge →
            </button>

            <button class="bg-transparent font-redhat border border-white text-lg text-white px-6 py-3 rounded-full font-normal hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-2 lg:w-1/2"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 xl:gap-20 ">
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
