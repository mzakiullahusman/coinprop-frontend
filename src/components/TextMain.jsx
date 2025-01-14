import React from "react";
import ButtonIcon from "@assets/icons/ButtonIcon.svg";
const TextMain = ({
  text,
  title,
  description,
  index,
  textStyling,
  titleSize = "[44px]",
  descriptionSize = "lg",
}) => {
  return (
    <div
      className={`flex flex-col gap-y-1 ${
        index === false
          ? "justify-start items-start"
          : " justify-center items-center"
      }  `}
    >
      <button className="flex items-center gap-1 gradient-div">
        <img src={ButtonIcon} alt="Icon" />
        {text}
      </button>
      {textStyling === "gradient" && text !== "FAQs" && text !== "Process" ? (
        <div className="text-[28px] capitalize text-white lg:text-[50px] xl:text-[44px] font-poppins font-semibold">
          what we bring for{" "}
          <span className="bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] text-transparent bg-clip-text">
            traders Of RMT{" "}
          </span>
        </div>
      ) : textStyling === "gradient" && text === "FAQs" ? (
        <div className="text-[28px] capitalize text-white text-center lg:text-[50px] xl:text-[44px] font-poppins font-semibold">
          Frequently Asked <span className="text-[#01ff9d]">Questions?</span>
        </div>
      ) : textStyling === "gradient" && text === "Process" ? (
        <div className="text-[28px] capitalize text-white text-center lg:text-[50px] xl:text-[44px] font-poppins font-semibold">
          <span className="bg-gradient-to-r from-[#00fc9e] to-[#00fc9e] text-transparent bg-clip-text">
            Recruitment{" "}
          </span>{" "}
          Process Overview
        </div>
      ) : (
        <div
          className={`text-[28px] text-white lg:text-${titleSize} ${
            index === false ? "text-left" : "text-center"
          }  font-poppins font-semibold`}
        >
          {title}
        </div>
      )}

      {text === "Values" ? (
        <div className={`text-base px-3 md:px-20 xl:px-32 lg:text-${descriptionSize} font-poppins font-light text-center`}>
          {description}
        </div>
      ) : (
        <div
          className={`text-base ${
            text === "Process" && index === true
              ? "text-[#bababa]"
              : textStyling === "gradient"
              ? "text-[#bababa]"
              : "text-white"
          } lg:text-${descriptionSize} font-poppins font-light ${
            index === false ? "text-left" : "px-3 md:px-20 text-center"
          }`}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default TextMain;
