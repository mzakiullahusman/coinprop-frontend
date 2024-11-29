import React from "react";
import Target from "@assets/icons/Target.svg";
import Sparkle from "@assets/icons/Sparkle.svg";
import ListChecks from "@assets/icons/ListChecks.svg";
import CursorClick from "@assets/icons/CursorClick.svg";
import ChartLine from "@assets/icons/Chartline.svg";
import Bell from "@assets/icons/Bell.svg";
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
      icon: Bell,
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 bg-[#020621] text-white">
      {aceFunded.map((feature, index) => (
        <div
          key={index}
          className="p-6 rounded-[12px] shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-col items-start gap-4 mb-4">
            <img src={feature.icon} alt={feature.title} className="h-10 w-10" />
            <h3 className="text-lg xl:text-2xl font-outfit font-medium">
              {feature.title}
            </h3>
          </div>
          <p className="text-base xl:text-[20px] font-normal text-[#8e8e8e]">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutAceFunded;
