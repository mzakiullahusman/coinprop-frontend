import AceFundedTrader from "@components/AceFundedTrader";
import FAQComponent from "@components/FAQComponent";
import React from "react";

const HelpCenter = () => {
  return (
    <div className="bg-[#020621] px-4 md:px-12 py-5 md:py-10">
      <div className=" xl:px-28">
        <FAQComponent />
      </div>
      <AceFundedTrader />
    </div>
  );
};

export default HelpCenter;
