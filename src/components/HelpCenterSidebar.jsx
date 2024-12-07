import React, { useState } from "react";
import Arrow from "./assets/Arrow"; // Assuming you have this component for the down arrow

const HelpCenterSidebar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: "Introduction",
      id: 1,
      content: [
        "💻 How to register a Bitfunded Account?",
        "🔑 Login to Bitfunded Account",
        "👾 How to Enroll a Challenge?",
        "🎯 Challenge & Trader Stage",
        "🥇 Criteria to be Success",
        "📱 Join Our Social & Community",
      ],
    },
    {
      title: "Trading module",
      id: 2,
      content: ["This is the Overview section."],
    },
    {
      title: "👤Common Questions",
      id: 3,
      content: ["Features content goes here."],
    },
    { title: "Referral and Affiliates", id: 4, content: [] },
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <>
      {sections.map((section) => (
        <div
          key={section.id}
          onClick={() => toggleSection(section.id)}
          className="flex w-full flex-col gap-y-4 border border-white bg-white bg-opacity-[2%] rounded-[12px] border-opacity-10 p-5 mb-4 cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <div className="font-poppins font-medium text-lg lg:text-2xl text-white">
              {section.title}
            </div>

            <Arrow direction={activeSection === section.id ? "up" : "down"} />
          </div>

          {activeSection === section.id && (
            <>
              {section.content.map((item, index) => (
                <div className="flex flex-col gap-6" key={index}>
                  <hr className="border-t-1 border-white border-opacity-10" />
                  <div className="text-white text-base font-poppins font-normal">
                    {item}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default HelpCenterSidebar;
