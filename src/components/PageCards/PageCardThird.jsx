import React from "react";

// used in pricing plans tabs (tabs in Trading Account page)
const PageCardThird = ({ children }) => {
  return (
    <div
      className={`blurry-effect w-full flex flex-col items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl`}
    >
      {children}
    </div>
  );
};

export default PageCardThird;
