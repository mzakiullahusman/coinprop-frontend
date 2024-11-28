import React from "react";
import styles from "./cards.module.css";

const BasicInfoCard = ({
  title,
  body,
  isGradientBorder,
  isBrandBorder,
  isPlainBorder,
  isGradientBg,
  differenceAmount,
}) => {
  // Conditional classes and styles
  let borderClass = "";
  if (isGradientBorder) {
    borderClass = styles.borderGradient;
  } else if (isPlainBorder) {
    borderClass = styles.borderPlain;
  } else if (isBrandBorder) {
    borderClass = styles.borderBrandColor;
  }

  const gradientBgClass = isGradientBg ? styles.gradientBg : "";

  return (
    <div
      className={`w-full flex flex-col items-start gap-3 p-3 sm:p-6 flex-1 bg-[#0c1029] backdrop-blur-lg rounded-xl ${borderClass} ${gradientBgClass} `}
    >
      <h2 className="font-inter text-sm font-normal leading-normal">{title}</h2>
      <div className="flex justify-between items-center">
        {/* <p className="text-[#D974F3] font-inter text-2xl font-medium leading-normal"> */}
        <p
          className={`${
            isGradientBg ? "text-white" : "text-white"
          } font-inter text-xl font-medium leading-normal`}
        >
          {body}
        </p>
        {differenceAmount && (
          <p className="text-[18px] font-semibold text-[#2A80B3]">
            {differenceAmount}
          </p>
        )}
      </div>
    </div>
  );
};

export default BasicInfoCard;
