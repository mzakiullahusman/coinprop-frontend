import AceFundedTrader from "@components/AceFundedTrader";
import FAQComponent from "@components/FAQComponent";
import BgStar from "@assets/images/BgStar.png";
import React, { useEffect } from "react";
import HelpCenterSidebar from "@components/HelpCenterSidebar";
import Help from "@components/Help";
import AOS from "aos";
import "aos/dist/aos.css";

const HelpCenter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      // once: true,
    });
  }, []);
  return (
    <div className="bg-[#020621] px-4 lg:px-20 py-5  md:py-10">
      <div
        className="bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row gap-6 "
        style={{
          backgroundImage: `url(${BgStar})`,
        }}
        data-aos="fade-up"
      >
        <div className="w-full md:w-[37%] 2xl:w-[25%]">
          <HelpCenterSidebar />
        </div>
        <div className="w-full md:w-[63%] 2xl:w-[75%]">
          <Help />
        </div>
      </div>
      <div className="xl:px-28" data-aos="fade-up">
        <FAQComponent />
      </div>
      <div data-aos="fade-up">
        <AceFundedTrader />
      </div>
    </div>
  );
};

export default HelpCenter;
