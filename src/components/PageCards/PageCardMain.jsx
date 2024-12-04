import React from "react";

const PageCardMain = ({
  children,
  isBlur = false,
  gap = "gap-4 md:gap-6",
  isAboveMargin,
}) => {
  return (
    <div
      className={`w-full flex flex-col items-start ${gap} p-4 md:p-6 bg-sidebar rounded-xl ${
        isBlur ? "backdrop-blur-[20px]" : ""
      } ${isAboveMargin ? "lg:mt-[76px]" : ""}`}
    >
      {children}
    </div>
  );
};

export default PageCardMain;
