import React from "react";
import styles from "./cards.module.css";
import ArrowDown from "../assets/Arrow";

const BasicInfoCardPlus = ({
  title,
  body,
  number,
  isGradientBorder,
  isBrandBorder,
  isPlainBorder,
  isGradientBg,
  differenceAmount,
  isPositive,
}) => {
  let borderClass = "";
  if (isGradientBorder) {
    borderClass = styles.borderGradient;
  } else if (isPlainBorder) {
    borderClass = styles.borderPlain;
  } else if (isBrandBorder) {
    borderClass = styles.borderBrandColor;
  }

  const gradientBgClass = isGradientBg ? styles.gradientBg : "";

  //TODO: handle the isPositive case for the icon and text color

  return (
    <div
      className={`w-full flex flex-col items-start gap-3 p-6 flex-1 bg-sidebar backdrop-blur-lg rounded-xl ${borderClass} ${gradientBgClass} `}
    >
      <div className="flex justify-between items-center w-full">
        <h2 className="text-white font-inter text-xl font-normal leading-normal">
          {title}
        </h2>
        <h2 className="text-custom-color font-inter text-[24px] sm:text-[28px] font-medium">
          {number}
        </h2>
      </div>
      <div className="flex justify-between items-center w-full">
        {/* <p className="text-[#D974F3] font-inter text-2xl">{body}</p> */}
        <p
          className={`${
            number
              ? "text-custom-color text-sm"
              : "text-custom-color text-[20px] sm:text-2xl"
          }`}
        >
          {body}
        </p>
        {differenceAmount && (
          <div className="flex gap-[2px] items-center">
            <ArrowDown isPositive={isPositive} />
            <p className="text-[16px] font-semibold text-red-700">
              {differenceAmount}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicInfoCardPlus;
