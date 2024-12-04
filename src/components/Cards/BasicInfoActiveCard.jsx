import React from "react";
import { motion } from "framer-motion";

const BasicInfoActiveCard = ({ title, status, isBlinkingDot }) => {
  const isActive =
    status === "Active" || status === "active" || status === "funded";
  const fillColor = isActive ? "#01FF9D" : "orange";
  const textColor = isActive ? "#01FF9D" : "orange";

  const circleAnimation = isBlinkingDot ? { opacity: [1, 0, 1] } : {};

  const circleTransition = isBlinkingDot
    ? { duration: 1, repeat: Infinity, ease: "easeInOut" }
    : {};

  return (
    <div className="w-full flex flex-col items-start gap-3 p-6 flex-1 bg-sidebar border border-custom-border backdrop-blur-lg rounded-xl">
      <h2 className="text-white font-inter text-sm font-normal leading-normal">
        {title}
      </h2>
      <div className="flex justify-start items-center gap-3">
        <motion.div
          style={{
            width: 15,
            height: 15,
            borderRadius: "50%",
            backgroundColor: fillColor,
          }}
          animate={circleAnimation}
          transition={circleTransition}
        />
        <p
          className="font-inter text-2xl font-medium leading-normal capitalize"
          style={{ color: textColor }}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default BasicInfoActiveCard;
