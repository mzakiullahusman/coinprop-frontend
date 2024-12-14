import React from "react";
import ArrowUpIcon from "@assets/icons/ArrowUpIcon.svg";
const AboutUsComponent = () => {
  const tickList = [
    { text: "Volatility" },
    { text: "Volume and Accessibility" },
    { text: "Security" },
  ];
  return (
    <div className="flex flex-col items-start mt-8 w-full gap-8">
      {tickList.map((item, index) => (
        <div key={index} className="flex flex-col w-full gap-y-6">
          <div className="flex items-center justify-between">
            <div className="font-poppins font-semibold text-2xl">
              {item.text}
            </div>

            <div>
              {" "}
              <img src={ArrowUpIcon} alt="ArrowUpIcon" />
            </div>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#2f466a00] via-[#2f466a] to-[#2f466a00]"></div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsComponent;
