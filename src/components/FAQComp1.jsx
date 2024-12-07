import React from "react";
import PlusIcon from "@assets/icons/PlusIcon.svg";
import TextMain from "./TextMain";
const FAQComp1 = () => {
  return (
    <div className="px-4 md:px-12 py-5 md:py-10">
      <TextMain
        text="FAQs"
        title="Forex to Futures FAQs"
        description="Our platform makes crypto investments simple and accessible for all users."
      />

      <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-y-[0px] mt-5  justify-center items-center">
        <div className="flex flex-col gap-y-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="border flex justify-between md:gap-28 xl:gap-60 text-white bg-white bg-opacity-[2%] border-white border-opacity-10 rounded-[8px] font-poppins text-base lg:text-[20px] font-normal p-6"
            >
              <div>
                It is a long established fact that a reader will be distracted.
              </div>
              <img src={PlusIcon} alt="Plus" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComp1;
