import React from "react";

// used in pricing plans tabs (tabs in Trading Account page)
const PageCardAlt = ({ children }) => {
  return (
    <div
      className={`w-full flex flex-col items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl`}
      style={{
        background: "#11152e",
        backdropFilter: "blur(25px)",
      }}
    >
      {children}
    </div>
  );
};

export default PageCardAlt;
