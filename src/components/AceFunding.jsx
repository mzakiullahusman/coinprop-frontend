import React from "react";
import ArrowRightIcon from "../assets/Icons/ArrowRightIcon.svg";
import SupportIcon from "../assets/Icons/SupportIcon.svg";
import ThumbIcon from "../assets/Icons/ThumbIcon.svg";
import TickIcon from "../assets/Icons/TickIcon.svg";
import BgImage1 from "../assets/Images/BgImage1.png";
import RocketIcon from "../assets/Icons/RocketIcon.svg";
import BulbIcon from "../assets/Icons/BulbIcon.svg";

const AceFunding = () => {
  const features = [
    {
      icon: ThumbIcon,
      title: "Your Skill, Our Risk",
      description:
        "Trade with our Capital without being liable for any losses.",
    },
    {
      icon: RocketIcon,
      title: "Fast & Reliable Payouts",
      description:
        "Receive Payouts with a High Profit Split, protected by our Payout Guarantee.",
    },
    {
      icon: SupportIcon,
      title: "24/7 Support",
      description: "Our dedicated Support team is always here to help.",
    },
    {
      icon: BulbIcon,
      title: "Always 90% Profit Split",
      description:
        "At Ace Funded, we offer an industry-leading profit split of 90%.",
    },
  ];

  const highlights = [
    "Lowest Spreads in the Industry",
    "Spreads Starting From 0.0",
    "True Market Pricing & Execution",
  ];

  return (
    <div
      className="bg-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgImage1})`,
      }}
    >
      <div className="px-4 md:px-12 py-5 md:py-10">
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <div className="border-white border border-opacity-20 text-white rounded-full px-3 py-1 font-normal font-redhat text-base">
            Features
          </div>
          <div className="text-[28px] tracking-[-1px] xl:tracking-[-4px] xl:leading-[84px] text-white  lg:text-[50px] xl:text-[64px] font-redhat font-medium">
            Features of Ace funded
          </div>
          <div className="text-base text-white lg:text-[20px] font-redhat font-medium">
            Trade with our Capital and keep up to 95% of the Profit.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#08122a] border  border-white border-opacity-20 rounded-[12px] p-5 xl:p-8 hover:shadow-lg transition"
            >
              <img src={feature.icon} alt={`${feature.title} Icon`} />

              <div className="text-lg xl:text-[28px] font-redhat font-semibold text-white mt-4">
                {feature.title}
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="text-lg xl:text-[24px] font-normal font-redhat text-[#8e8e8e]">
                  {feature.description}
                </div>
                <img
                  src={ArrowRightIcon}
                  alt="Arrow Right Icon"
                  className="w-6 h-6 ml-auto"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap xl:flex-nowrap xl:items-center justify-center xl:justify-between gap-4 mt-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center bg-[#08122a] text-white h-12 p-[6px] font-medium text-base gap-x-6 w-full rounded-full border border-[#2A80B3]"
            >
              <img
                src={TickIcon} // Reusing an icon for tick/indicator
                alt="Highlight Icon"
                className="w-9 h-9"
              />
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AceFunding;
