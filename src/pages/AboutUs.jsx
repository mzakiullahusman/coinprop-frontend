import React from "react";
import HowItWorksBg from "@assets/images/HowItWorksBg.png";
import HowItWorksCommon from "@components/HowItWorksCommon";
import AceFundedTrader from "@components/AceFundedTrader";
import MainWork from "@components/MainWork";
import Crypto from "@assets/images/Crypto.png";
import Crypto1 from "@assets/images/Crypto1.png";
import TextMain from "@components/TextMain";
import AboutUsComponent from "@components/AboutUsComponent";
import RMTRight from "@components/RMTRight";

const AboutUs = () => {
  const tickList = [
    { text: "Innovation" },
    { text: "Entrepreneurial Spirit" },
    { text: "Transparency" },
    { text: "Diversity and Inclusion" },
    { text: "Collaboration" },
    { text: "Adaptability" },
  ];

  const mainSections = [
    {
      title: "Our Vision",
      description:
        "Our vision is to be the path to a better lifestyle, improving lives through innovative solutions.",
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to turn people who trade into better traders, with healthier habits, through learning by doing.",
    },
    {
      title: "Our Values",
      values: [
        "Empower traders to achieve better habits.",
        "Foster a culture of learning by doing.",
        "Promote transparency and integrity.",
        "Innovate for the betterment of trading practices.",
      ],
    },
  ];
  return (
    <>
      <div className="bg-[#020621]">
        <div
          className="bg-cover bg-center bg-no-repeat px-4 lg:px-20 py-5 md:py-10"
          style={{
            backgroundImage: `url(${HowItWorksBg})`,
          }}
        >
          <HowItWorksCommon text="About Us" index={true} />
          <MainWork data={mainSections} />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-20 pr-4 py-5 lg:py-10 lg:pr-20">
          <div className="w-full lg:w-[45%]">
            <img className="lg:w-full " src={Crypto} alt="Crypto" />
          </div>
          <div className="lg:w-[50%]">
            <TextMain
              text="About Us"
              title="Why Crypto with Risk Master Trader?"
              description="Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis."
              index={false}
            />

            <AboutUsComponent />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-4 pl:4 lg:pl-20 py-10 lg:py-20 lg:gap-20 ">
          <div className="w-full lg:w-[60%] ">
            <RMTRight tickList={tickList} />
          </div>
          <div className="w-full lg:w-[40%] ">
            <img className="lg:w-full" src={Crypto1} alt="Crypto1" />
          </div>
        </div>

        <AceFundedTrader />
      </div>
    </>
  );
};

export default AboutUs;
