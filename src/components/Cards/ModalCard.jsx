import React from "react";

import goldBg from "../../assets/images/goldBg.png";
import silverBg from "../../assets/images/silverBg.png";
import bronzeBg from "../../assets/images/bronzeBg.png";

const ModalCard = ({ title, body, variant }) => {
  const backgroundImages = {
    gold: goldBg,
    silver: silverBg,
    bronze: bronzeBg,
  };

  const textColors = {
    gold: "#5E2100",
    silver: "#393939",
    bronze: "#642400",
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImages[variant]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: textColors[variant],
  };

  return (
    <div
      className={`w-[286px] h-[106px] flex flex-col items-start gap-3 p-6 flex-1 rounded-xl`}
      style={backgroundImageStyle}
    >
      <h2 className="font-inter text-sm text-nowrap">{title}</h2>
      <div className="flex justify-between items-center">
        <p className="text-lg md:text-xl xl:text-2xl font-medium text-nowrap">
          {body}
        </p>
      </div>
    </div>
  );
};

export default ModalCard;
