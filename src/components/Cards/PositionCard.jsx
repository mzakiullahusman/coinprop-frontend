import React from "react";
import styles from "./cards.module.css";

const PositionCard = ({ position, prize }) => {
  const borderClass = styles.borderGradientAlt;

  return (
    <div
      className={`w-full flex items-center justify-between p-3 bg-[rgba(21,27,25,0.70)] backdrop-blur-lg rounded-xl cursor-pointer text-[16px] ${borderClass}`}
    >
      <p className="">{position}</p>
      <p className="text-semibold">{prize}</p>
    </div>
  );
};

export default PositionCard;
