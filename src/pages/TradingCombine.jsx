import React from "react";

import FAQComponent from "../components/FAQComponent";
import HowItWorks from "@components/HowItWorks";
import HowItWorksCommon from "@components/HowItWorksCommon";
import WithDrawalSection from "@components/WithDrawalSection";
import TextMain from "@components/TextMain";
import RuleImg from "@assets/images/Rule.png";
import AceFundedTrader from "@components/AceFundedTrader";
import BlackArrowRight from "@assets/icons/BlackArrowRight.svg";
import Acc from "@assets/icons/Acc.svg";
import ProveTrade from "@assets/icons/ProveTrade.svg";
import EarnMoney from "@assets/icons/EarnMoney.svg";
import Profit from "@assets/icons/WithDraw.svg";
import HowItWorksBg from "@assets/images/HowItWorksBg.png";
import Pro from "@assets/icons/Pro.svg";
import Rule from "@components/Rule";
const HomeItWorkss = () => {
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
      <div className="bg-[#020621]  px-4 lg:px-20 py-5 md:py-10">
        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HowItWorksBg})`,
          }}
        >
          <HowItWorksCommon />
          <div className="text-[28px] text-white mt-20 text-center lg:text-[44px]  font-poppins font-bold">
            What is the trading combine?
          </div>
          <div className="text-[14px] text-white text-center lg:text-[16px] mt-4  font-poppins font-light">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
          <button className="bg-gradient-to-r from-[#00fc9e] mx-auto to-[#1c7ef0] flex flex-row mt-8 gap-x-3 items-center text-[#141414]  font-outfit text-[16px] px-8 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition">
            GET STARTED TODAY
            <img className="" src={BlackArrowRight} alt="Arrow" />
          </button>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 xl:gap-20">
          <div className="w-full lg:w-[60%]">
            <Rule text="Follow the trading plan" />
          </div>
          <div className="w-full lg:w-[40%]">
            <img className="" src={RuleImg} alt="RuleImg" />
          </div>
        </div>
        <WithDrawalSection />
        <div className="bg-[#0f1827] bg-cover bg-center bg-no-repeat px-4 md:px-12 py-5 md:py-10">
          <TextMain
            text="Steps"
            title="Steps to become funded trader"
            description="Our platform makes crypto investments simple and accessible for all users."
          />
          <HowItWorks mainData={features} />
        </div>
        <div className="px-3 lg:px-20 xl:px-28">
          <FAQComponent />
        </div>
        <AceFundedTrader />
      </div>
    </>
  );
};

export default HomeItWorkss;
