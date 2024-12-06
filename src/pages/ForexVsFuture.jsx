import React from "react";

import HowItWorksCommon from "@components/HowItWorksCommon";
import Rule from "@components/Rule";
import FAQComp1 from "@components/FAQComp1";
import Laptop from "@assets/images/Laptop.png";
import Future from "@assets/images/Future.png";
import CoinPropFutures from "@components/CoinPropFutures";
const ForexVsFuture = () => {
  return (
    <>
      <div className="bg-[#020621]">
        <HowItWorksCommon text="Forex To Futures" index={true} />

        <div className="flex flex-col xl:flex-row justify-center items-center gap-y-12  px-4 lg:px-16 py-5 md:py-10">
          <div className="w-full ">
            <Rule index={false} text="Try These future Products" />
          </div>
          <div className="w-full flex justify-center">
            <img src={Laptop} alt="Laptop" />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-y-12 px-4 lg:px-16 py-5 md:py-10">
          <div className="w-full flex justify-center">
            <img src={Future} alt="Future" />
          </div>
          <div className="w-full">
            <Rule index={false} text="Future Terminology" />
          </div>
        </div>
        <FAQComp1 />
        <CoinPropFutures />
      </div>
    </>
  );
};

export default ForexVsFuture;
