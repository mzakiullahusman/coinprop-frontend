import React from "react";
import TextMain from "./TextMain";
import TickIcon from "@assets/icons/TickIcon.svg";

const RMTRight = ({ tickList }) => {
  return (
    <>
      <div className="w-full items-start flex flex-col gap-y-2 lg:w-[65%]">
      <div className="text-[28px] capitalize text-white lg:text-[50px] xl:text-[44px] font-poppins font-semibold">
          Why Choose {" "}
          <span className="bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] text-transparent bg-clip-text">
          CoinProp?
          </span>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 gap-y-6 text-white mt-6">
        {tickList.map((item, index) => (
          <div key={index} className="flex items-start gap-5">
            <img src={TickIcon} alt="tickIcon" className="mt-2" />
            <span>
              <span className="font-poppins font-normal text-md md:text-[24px]">
                {item.text}
              </span>
              <br />
              <span className="font-poppins font-normal text-base md:text-[18px]">
                {item.description}
              </span>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default RMTRight;
