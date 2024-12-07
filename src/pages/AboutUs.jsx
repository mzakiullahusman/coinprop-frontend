import React from "react";
import HowItWorksBg from "@assets/images/HowItWorksBg.png";
import HowItWorksCommon from "@components/HowItWorksCommon";
import AceFundedTrader from "@components/AceFundedTrader";
import MainWork from "@components/MainWork";
import Crypto from "@assets/images/Crypto.png";
import About2 from "@assets/images/About2.png";
import Stop from "@assets/icons/Stop.svg";
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
        "We care deeply about and support the well-being of our team",
        "We strive to motivate and develop our traders",
        "We seek diverse perspectives",
        "We trust our team to take accountability and drive results",
        "We embrace feedback as a means for growth",
        "We are never finished learning and always seeking to improve",
      ],
    },
  ];
  return (
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

      <div className="relative w-full h-screen flex justify-center items-center">
        <img src={About2} alt="About2" />
        <button className="absolute">
          <img
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            src={Stop}
            alt="Stop"
          />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-20 pr-4 py-5 lg:py-10 lg:pr-20">
        <div className="w-full lg:w-[45%]">
          <img className="lg:w-full " src={Crypto} alt="Crypto" />
        </div>
        <div className="w-full lg:w-[55%]">
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
        <div className="w-full lg:w-1/2 ">
          <RMTRight tickList={tickList} />
        </div>
        <div className="w-full lg:w-1/2 ">
          <img className="lg:w-full" src={Crypto1} alt="Crypto1" />
        </div>
      </div>

      <AceFundedTrader />
    </div>
  );
};

export default AboutUs;
