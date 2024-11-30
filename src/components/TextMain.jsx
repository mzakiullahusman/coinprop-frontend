import React from "react";

const TextMain = ({ text, title, description, index, textStyling }) => {
  return (
    <div
      className={`flex flex-col gap-y-2 ${
        index === false
          ? "justify-start items-start"
          : " justify-center items-center"
      }  `}
    >
      <div className="border-white border border-opacity-20 text-white rounded-full px-3 py-1 font-normal font-poppins text-base">
        {text}
      </div>
      {textStyling === "gradient" && text !== "FAQs" ? (
        <div className="text-[28px] capitalize text-white lg:text-[50px] xl:text-[44px] font-poppins font-semibold">
          what we bring for{" "}
          <span className="bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] text-transparent bg-clip-text">
            traders Of RMT{" "}
          </span>
        </div>
      ) : textStyling === "gradient" && text === "FAQs" ? (
        <div className="text-[28px] capitalize text-white lg:text-[50px] xl:text-[44px] font-poppins font-semibold">
          Frequently Asked <span className="text-[#01ff9d]">Questions?</span>
        </div>
      ) : (
        <div className="text-[28px] text-white lg:text-[50px] xl:text-[44px] font-poppins font-semibold">
          {title}
        </div>
      )}

      <div
        className={`text-base ${
          textStyling === "gradient" ? "text-[#bababa]" : " text-white"
        } lg:text-lg font-poppins font-light`}
      >
        {description}
      </div>
    </div>
  );
};

export default TextMain;
