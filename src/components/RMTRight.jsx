import React from "react";
import TextMain from "./TextMain";
import TickIcon from "@assets/icons/TickIcon.svg";

const RMTRight = ({ tickList }) => {
  return (
    <>
      <div className="w-full items-start flex flex-col gap-y-2 lg:w-[65%]">
        <TextMain
          text="About Us"
          description="Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia viverra orci diam."
          index={false}
          textStyling="gradient"
        />
      </div>

      <div className="grid xl:grid-cols-2 gap-y-6 text-white mt-6">
        {tickList.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={TickIcon} alt="tickIcon" />
            <span className="font-poppins font-normal text-lg md:text-[22px]">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default RMTRight;
