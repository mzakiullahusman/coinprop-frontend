import React from "react";
import BgImage from "../assets/Images/BgImage.png";

import Icon1 from "../assets/Icons/Icon1.svg";
import Icon2 from "../assets/Icons/Icon2.svg";
import Icon3 from "../assets/Icons/Icon3.svg";
import Icon4 from "../assets/Icons/Icon4.svg";
import Icon5 from "../assets/Icons/Icon5.svg";
const FAQFunded = () => {
  const diveIcons = [
    { src: Icon1, alt: "Icon 1" },
    { src: Icon2, alt: "Icon 2" },
    { src: Icon3, alt: "Icon 3" },
    { src: Icon4, alt: "Icon 4" },
    { src: Icon5, alt: "Icon 5" },
  ];
  return (
    <div
      className="bg-[#020621] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <div className="flex flex-col lg:flex-row gap-20 px-4 md:px-12 py-5  md:py-10">
        <div className="w-full items-center mx-auto flex flex-col gap-y-2 lg:w-1/2">
          <div className="border-[#2A80B3] border text-white rounded-full px-3 py-1 font-normal font-redhat text-base">
            FAQ
          </div>

          <div className="text-[32px] capitalize text-center tracking-[-1px] xl:tracking-[-4px] xl:leading-[100px] text-white  lg:text-[60px] xl:text-[84px] font-redhat font-medium">
            Frequently asked questions about ace funded?
          </div>
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

export default FAQFunded;
