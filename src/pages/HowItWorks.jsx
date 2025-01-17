import React, { useEffect } from "react";
import FAQComponent from "../components/FAQComponent";
import HowItWorksBg from "@assets/images/HowItWorksBg.png";
import HowItWorksCommon from "@components/HowItWorksCommon";
import AboutAceFunded from "@components/AboutAceFunded";
import TextMain from "@components/TextMain";
import AceFundedTrader from "@components/AceFundedTrader";
import MoneyPrices from "@components/MoneyPrices";
import MainWork from "@components/MainWork";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      // once: true,
    });
  }, []);
  const workData = [
    {
      text: "01",
      title: "Integrity",
      description:
        "Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.",
    },
    {
      text: "02",
      title: "Innovation",
      description:
        "Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.",
    },
    {
      text: "03",
      title: "Customer-Centricity",
      description:
        "Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.",
    },
    {
      text: "04",
      title: "Collaboration",
      description:
        "Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.",
    },
    {
      text: "05",
      title: "Accountability",
      description:
        "Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.",
    },
    {
      text: "06",
      title: "Empowerment",
      description:
        "Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.",
    },
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
        "We care deeply about and support the well-being of our team.",
        "We strive to motivate and develop our traders.",
        "We seek diverse perspectives.",
        "We trust our team to take accountability and drive results.",
        "We embrace feedback as a means for growth.",
        "We are never finished learning and always seeking to improve.",
      ],
    },
  ];
  return (
    <>
      <div
        className="px-4 lg:px-20 py-5 md:py-10"
        style={{ backgroundImage: `url(${HowItWorksBg})` }}
        data-aos="fade-up"
      >
        <HowItWorksCommon />
      </div>
      <MainWork data={mainSections} />

      <div
        className="bg-white bg-opacity-[2%] my-4 md:my-6 xl:my-20 border border-white border-opacity-20 rounded-[14px] p-5 xl:p-8 hover:shadow-lg transition mx-4 lg:mx-20 px-4 lg:px-20 py-5 md:py-10"
        data-aos="fade-up"
      >
        <TextMain
          text="Values"
          title="Risk Master Foundational Values"
          description="Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu."
          index={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 text-white">
          <AboutAceFunded text="Values" data={workData} />
        </div>
      </div>

      <div className="mt-20 xl:mt-32" data-aos="fade-up">
        <TextMain
          text="Integrations"
          title="Insights into the Crypto Landscape"
          description="Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu."
          index={true}
        />
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-36 mt-8">
          <MoneyPrices textSize="big" />
        </div>
      </div>

      <div className="px-3 mt-20 xl:mt-32 lg:px-20 xl:px-28" data-aos="fade-up">
        <FAQComponent />
      </div>
      <div data-aos="fade-up" className="mt-12 xl:mt-20">
        <AceFundedTrader />
      </div>
    </>
  );
};

export default HomeItWorks;
