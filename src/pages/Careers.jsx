import React, { useEffect } from "react";

import HowItWorksCommon from "@components/HowItWorksCommon";
import AceFundedTrader from "@components/AceFundedTrader";
import FAQComponent from "@components/FAQComponent";
import HowItWorksBg from "@assets/images/HowItWorksBg.png";
import MainWork from "@components/MainWork";
import AboutAceFunded from "@components/AboutAceFunded";
import TextMain from "@components/TextMain";
import CareerCard from "@components/CareerCard";
import CareerSwipe from "@components/CareerSwipe";
import AOS from "aos";
import "aos/dist/aos.css";

const Careers = () => {
  const data = [
    {
      title: "Thoughtful Benefits",
      values: [
        "Generous Paid Family Leave",
        "5% 401(k) Match",
        "$500 Bonus For Taking PTO",
        "Supported Volunteer Time And Donation Matching",
      ],
    },
    {
      title: "A Culture That Cares",
      values: [
        "Inclusive And People-Focused",
        "Flexible Work Schedules",
        "Company-Paid Telehealth",
      ],
    },
    {
      title: "Growth Opportunities",
      values: [
        "Professional Development Budget",
        "Company-Wide Annual Planning Process",
        "Team Member-Organized Lunch And Learns",
        "Investment In Mentoring",
      ],
    },
    {
      title: "Impact",
      values: [
        "Empowerment At The Core Of Every Role",
        "Influence Team Dynamics, Processes, And Tools",
        "Mission-Driven Company",
        "Share In Success With Profit Participation",
      ],
    },
  ];

  const workData = [
    {
      text: "01",
      title: "Application Screening",
      description:
        "Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.",
    },
    {
      text: "02",
      title: "Initial Interview",
      description:
        "Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.",
    },
    {
      text: "03",
      title: "Technical Assessment",
      description:
        "Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.",
    },
    {
      text: "04",
      title: "Final Interview & Decision",
      description:
        "Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      // once: true,
    });
  }, []);
  return (
    <div className="bg-[#020621]">
      <div
        data-aos="fade-up"
        className="bg-cover bg-center bg-no-repeat gap-6 px-4 lg:px-16 py-5 md:py-10"
        style={{
          backgroundImage: `url(${HowItWorksBg})`,
        }}
      >
        <HowItWorksCommon text="Explore Careers at Risk Master" index={true} />
        <MainWork data={data} />
      </div>
      <div data-aos="fade-up">
        <TextMain
          text="Process"
          title="Recruitment Process Overview"
          description="Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu."
          index={true}
          textStyling="gradient"
        />
        <div className="flex flex-wrap md:flex-nowrap justify-center px-4 lg:px-16 py-5 md:py-10 items-start gap-4">
          <AboutAceFunded text="Process" data={workData} />
        </div>
      </div>
      <TextMain
        text="Open Roles"
        title="Some Things We’ve Done"
        description="Commodo nec mi id ullamcorper vitae augue neque dis."
        index={true}
      />
      <div data-aos="fade-up">
        <CareerSwipe />
      </div>
      <div>
        <CareerCard />
      </div>
      <div data-aos="fade-up" className="xl:px-28">
        <FAQComponent />
      </div>
      <div data-aos="fade-up">
        <AceFundedTrader />
      </div>
    </div>
  );
};

export default Careers;
