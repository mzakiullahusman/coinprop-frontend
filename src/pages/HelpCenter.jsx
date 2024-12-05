import AceFundedTrader from "@components/AceFundedTrader";
import FAQComponent from "@components/FAQComponent";
import BgStar from "@assets/images/BgStar.png";
import React from "react";
import HelpCenterSidebar from "@components/HelpCenterSidebar";
import Help from "@components/Help";

const HelpCenter = () => {
  return (
    <div className="bg-[#020621] px-4 lg:px-20 py-5  md:py-10">
      <div
        className="bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row gap-6 "
        style={{
          backgroundImage: `url(${BgStar})`,
        }}
      >
        <div className="w-full md:w-[37%] 2xl:w-[25%]">
          <HelpCenterSidebar />
        </div>
        <div className="w-full md:w-[63%] 2xl:w-[75%]">
          <Help />
        </div>
      </div>
      <div className=" xl:px-28">
        <FAQComponent />
      </div>
      <AceFundedTrader />
    </div>
  );
};

export default HelpCenter;
