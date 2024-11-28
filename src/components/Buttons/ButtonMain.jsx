import React from "react";

import infoIcon from "../../assets/icons/infoIcon.svg";

import styles from "./buttons.module.css";
import { Chip } from "@mui/material";

const ButtonMain = ({
  body,
  isGradientBorder,
  isBrandBorder,
  isPlainBorder,
  isGradientBg,
  isInfo,
  isMostPopular,
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

  let bodyStyles = "";
  let bodyStylesNumber = "text-white font-inter text-[24px]";

  const formatBodyText = (text) => {
    const lowerText = toString(text);
    if (lowerText.includes("mt4") || lowerText.includes("mt5")) {
      const parts = lowerText.split(/(mt[45])/i);
      return parts.map((part, index) => {
        if (part.match(/mt[45]/i)) {
          return (
            <React.Fragment key={index}>
              mt<span className={bodyStylesNumber}>{part.slice(-1)}</span>
            </React.Fragment>
          );
        }
        return part;
      });
    }
    return text;
  };

  if (body === "MT4" || body === "MT5" || body === "mt4" || body === "mt5") {
    bodyStyles = "text-white font-inter text-2xl uppercase";
    formatBodyText({ body });
  } else {
    bodyStyles =
      "text-white font-inter text-[16px] capitalize text-wrap text-center lg:text-nowrap";
  }

  const gradientBgClass = isGradientBg ? styles.gradientBg : "";

  return (
    <div
      className={`w-full flex justify-center items-center py-[7px] flex-1 bg-transparent rounded-xl ${borderClass} ${gradientBgClass} cursor-pointer relative`}
    >
      {isMostPopular && (
        <div
          id="chip-container"
          className="mb-[-10px] z-[999] absolute top-[-25px] left-[5%]"
        >
          <Chip
            label="Most Popular"
            sx={{
              height: "14px",
              fontFamily: "Turret Road",
              fontSize: "8px",
              fontWeight: 600,
              color: "white",
              background:
                "linear-gradient(133deg, #6746E1 11.53%, #D974F3 95.94%)",
            }}
          />
        </div>
      )}
      {isInfo && (
        <div
          id="info-container"
          className="mb-[-10px] z-[999] absolute top-[-25%] right-0"
        >
          <img src={infoIcon} alt="info" />
        </div>
      )}
      <h2 className={`${bodyStyles}`}>{body}</h2>
    </div>
  );
};

export default ButtonMain;
