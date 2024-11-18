import React from "react";
import BgImage from "../assets/Images/BgImage.png";
import Target from "../assets/Icons/Target.svg";
import Sparkle from "../assets/Icons/Sparkle.svg";
import ListChecks from "../assets/Icons/ListChecks.svg";
import CursorClick from "../assets/Icons/CursorClick.svg";
import SupportIcon from "../assets/Icons/SupportIcon.svg";
import ChartLine from "../assets/Icons/ChartLine.svg";
import Icon1 from "../assets/Icons/Icon1.svg";
import Icon2 from "../assets/Icons/Icon2.svg";
import Icon3 from "../assets/Icons/Icon3.svg";
import Icon4 from "../assets/Icons/Icon4.svg";
import Icon5 from "../assets/Icons/Icon5.svg";
const AboutAceFunded = () => {
  const aceFunded = [
    {
      icon: ChartLine,
      title: "Visual reports",
      description: "Visual insights into your site's performance.",
    },
    {
      icon: Sparkle,
      title: "Smart Keyword Generator",
      description: "Automatic suggestions and the best keywords to target.",
    },
    {
      icon: SupportIcon,
      title: "Automated alerts",
      description: "Automatic notifications about your SEO health.",
    },
    {
      icon: ListChecks,
      title: "Content evaluation",
      description: "Simple corrections for immediate improvements.",
    },
    {
      icon: Target,
      title: "Link Optimization Wizard",
      description: "Guides you through the process of creating Links.",
    },
    {
      icon: CursorClick,
      title: "One-click optimization",
      description: "Perform complex SEO audits and optimizations.",
    },
  ];

  const diveIcons = [
    { src: Icon1, alt: "Icon 1" },
    { src: Icon2, alt: "Icon 2" },
    { src: Icon3, alt: "Icon 3" },
    { src: Icon4, alt: "Icon 4" },
    { src: Icon5, alt: "Icon 5" },
  ];
  return (
    <div
      className="bg-[#020621] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <div className="flex flex-col lg:flex-row gap-20 px-4 md:px-12 py-5  md:py-10">
        <div className="w-full items-center mx-auto flex flex-col gap-y-2 lg:w-1/2">
          <div className="border-[#2A80B3] border text-white rounded-full px-3 py-1 font-normal font-redhat text-base">
            About Us
          </div>

          <div className="text-[32px] tracking-[-1px] xl:tracking-[-4px] xl:leading-[100px] text-white  lg:text-[60px] xl:text-[84px] font-redhat font-medium">
            About Ace Funded
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 bg-[#020621] text-white">
        {aceFunded.map((feature, index) => (
          <div
            key={index}
            className="bg-[#081b3a] p-6 rounded-[12px] shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-start gap-4 mb-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="h-10 w-10"
              />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center xl:py-12 justify-center gap-12 xl:gap-20 ">
        {diveIcons.map((icon, index) => (
          <div key={index} className="flex items-center justify-center">
            <img src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutAceFunded;
