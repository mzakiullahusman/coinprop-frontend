import React from "react";
import ArrowUpIcon from "@assets/icons/ArrowUpIcon.svg";
const AboutUsComponent = () => {
  const tickList = [
    { text: "Volatility" },
    { text: "Volume and Accessibility" },
    { text: "Security" },
  ];
  return (
    <>
      <div className="flex flex-col items-start mt-8 w-full gap-8">
        {tickList.map((item, index) => (
          <div key={index} className="flex w-full items-center justify-between">
            <div className="font-poppins font-semibold text-2xl">
              {item.text}
            </div>
            <div>
              {" "}
              <img src={ArrowUpIcon} alt="ArrowUpIcon" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutUsComponent;
