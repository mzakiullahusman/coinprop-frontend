import React, { useEffect } from "react";

import HowItWorksCommon from "@components/HowItWorksCommon";
import Rule from "@components/Rule";
import FAQComp1 from "@components/FAQComp1";
import Laptop from "@assets/images/Laptop.png";
import Future from "@assets/images/Future.png";
import CoinPropFutures from "@components/CoinPropFutures";
import AceFundedTrader from "@components/AceFundedTrader";
import AOS from "aos";
import "aos/dist/aos.css";

const ForexVsFuture = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      // once: true,
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-up">
        <HowItWorksCommon text="Forex To Futures" index={true} />
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-col xl:mt-10 xl:flex-row justify-center items-center gap-y-12  px-4 lg:px-16 py-5 md:py-10"
      >
        <div className="w-full ">
          <Rule index={false} text="Try These future Products" />
        </div>
        <div className="w-full flex justify-center">
          <img src={Laptop} alt="Laptop" />
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col xl:flex-row justify-center items-center gap-y-12 xl:gap-x-32 2xl:gap-gap-[0px] px-4 lg:px-16 py-5 md:py-10"
      >
        <div className="w-full flex justify-center">
          <img src={Future} alt="Future" />
        </div>
        <div className="w-full">
          <Rule index={false} text="Future Terminology" />
        </div>
      </div>
      <div data-aos="fade-up" className="xl:mt-8">
        <FAQComp1 />
      </div>
      <div className="bg-white bg-opacity-[2%] p-2 xl:p-5" data-aos="fade-up">
        <CoinPropFutures />
      </div>
      <div>
        <AceFundedTrader />
      </div>
    </div>
  );
};

export default ForexVsFuture;
