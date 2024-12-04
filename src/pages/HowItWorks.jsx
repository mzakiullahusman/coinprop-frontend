import React from "react";
// import AceFundedTrader from "../components/AceFundedTrader";
// import Partners from "../components/Partners";
import FAQComponent from "../components/FAQComponent";
import HowItWorksBg from "@assets/images/HowItWorksBg.png";
import HowItWorksCommon from "@components/HowItWorksCommon";
import AboutAceFunded from "@components/AboutAceFunded";
import TextMain from "@components/TextMain";
import AceFundedTrader from "@components/AceFundedTrader";
import MoneyPrices from "@components/MoneyPrices";
import MainWork from "@components/MainWork";

const HomeItWorks = () => {
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
  return (
    <>
      <div className="bg-[#020621]">
        <div
          className="bg-cover bg-center bg-no-repeat px-4 lg:px-20 py-5  md:py-10"
          style={{
            backgroundImage: `url(${HowItWorksBg})`,
          }}
        >
          <HowItWorksCommon />
          <MainWork />
        </div>
        <div className="bg-[#08122a] border border-white border-opacity-20 rounded-[14px] p-5 mt-2 xl:p-8 hover:shadow-lg transition mx-4 lg:mx-20 px-4 lg:px-20 py-5 md:py-10">
          <TextMain
            text="Values"
            title="Risk Master Foundational Values"
            description="Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu."
            index={true}
          />
          <AboutAceFunded text="Values" data={workData} />
        </div>
        <div className="mt-4 md:mt-12">
          <TextMain
            text="Integrations"
            title="Insights into the Crypto Landscape"
            description="Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu."
            index={true}
          />
          <div className="flex justify-center items-center gap-8 md:gap-16 lg:gap-36 mt-8">
            <MoneyPrices textSize="big" />
          </div>
        </div>

        <div className="px-3 lg:px-20 xl:px-28">
          <FAQComponent />
        </div>
        <AceFundedTrader />
      </div>
    </>
  );
};

export default HomeItWorks;
