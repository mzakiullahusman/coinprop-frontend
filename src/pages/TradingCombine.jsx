import React, { useEffect } from "react";

import FAQComponent from "../components/FAQComponent";
import HowItWorks from "@components/HowItWorks";
import HowItWorksCommon from "@components/HowItWorksCommon";
import WithDrawalSection from "@components/WithDrawalSection";
import TextMain from "@components/TextMain";
import RuleImg from "@assets/images/Rule.png";
import AceFundedTrader from "@components/AceFundedTrader";
import BlackArrowRight from "@assets/icons/RightBlackArrow.svg";
import Acc from "@assets/icons/Acc.svg";
import ProveTrade from "@assets/icons/ProveTrade.svg";
import EarnMoney from "@assets/icons/EarnMoney.svg";
import Profit from "@assets/icons/WithDraw.svg";
import HowItWorksBg from "@assets/images/HowItWorksBg.png";
import Pro from "@assets/icons/Pro.svg";
import Rule from "@components/Rule";
import AOS from "aos";
import "aos/dist/aos.css";
const HomeItWorkss = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      // once: true,
    });
  }, []);
  const features = [
    {
      icon: Acc,
      title: "Select Your Acc Size",
      description:
        "Select Your Futures Account. Register And Define The Maximum Contract Size You'll Manage.",
    },
    {
      icon: ProveTrade,
      title: "Prove You Can Trade",
      description:
        "Reach A Profit Target While Proving You Can Follow A Set Of Risk Rules. You Become A PRO Trader.",
    },
    {
      icon: EarnMoney,
      title: "Start Earning Money",
      description:
        "No Downtime. Once Approved, Get Your PRO Account And Start Trading For Day One Withdrawable Profits.",
    },
    {
      icon: Profit,
      title: "Withdraw Profit",
      description:
        "Money Is Nothing Until It Is In Your Pocket. We Know How Important It Is. Withdraw.",
    },
    {
      icon: Pro,
      title: "Upgrade To PRO+",
      description:
        "Elevate Your Experience By Upgrading To PRO+. As A PRO+ Member, You'll Enjoy Unparalleled Benefits.",
    },
  ];

  return (
    <>
      <div
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${HowItWorksBg})`,
        }}
      >
        <div className="px-4 lg:px-20 py-5 md:py-10">
          {" "}
          <HowItWorksCommon />
        </div>
      </div>
      <div className="mt-6 bg-white bg-opacity-[2%] rounded-[24px] py-12 px-5 md:px-12  xl:px-32">
        <div className="text-[28px] text-white capitalize text-center lg:text-[44px]  font-poppins font-bold">
          What is the trading combine?
        </div>
        <div className="text-[14px] text-white  lg:text-[16px] mt-4 text-justify  font-poppins font-light">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </div>
        <button className="bg-gradient-to-r from-[#00fc9e] mx-auto to-[#1c7ef0] flex flex-row mt-4 gap-x-3 items-center text-[#141414]  font-outfit text-[16px] px-8 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition">
          GET STARTED TODAY
          <img className="" src={BlackArrowRight} alt="Arrow" />
        </button>
      </div>

      <div
        className="flex flex-col xl:my-9 lg:flex-row justify-center items-center gap-8 xl:gap-20 px-4 lg:px-20 py-5 md:py-10"
        data-aos="fade-up"
      >
        <div className="w-full lg:w-[60%]">
          <Rule index={true} text="Follow the trading plan" />
        </div>
        <div className="w-full lg:w-[40%]">
          <img className="" src={RuleImg} alt="RuleImg" />
        </div>
      </div>
      <div
        className="flex flex-col lg:flex-row justify-center items-center mt-8 gap-8 xl:gap-20 px-4 lg:px-20 py-5 md:py-10"
        data-aos="fade-up"
      >
        <div className="w-full lg:w-[45%]">
          <div className="bg-white h-[300px] border rounded-[24px] lg:h-[450px]"></div>
        </div>
        <div className="w-full lg:w-[55%]">
          <Rule index={false} text="Trade with the best products" />
        </div>
      </div>
      <div data-aos="fade-up">
        {" "}
        <WithDrawalSection />
      </div>
      <div
        className="bg-[#0f1827] bg-cover bg-center bg-no-repeat px-4 md:px-12 py-5 md:py-10"
        data-aos="fade-up"
      >
        <TextMain
          text="Steps"
          title="Steps to become funded trader"
          description="Our platform makes crypto investments simple and accessible for all users."
        />
        <HowItWorks mainData={features} />
      </div>
      <div className="px-3 lg:px-20 xl:px-28" data-aos="fade-up">
        <FAQComponent />
      </div>
      <div data-aos="fade-up">
        {" "}
        <AceFundedTrader />
      </div>
    </>
  );
};

export default HomeItWorkss;
