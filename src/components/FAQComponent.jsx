import React, { useState } from "react";
import TextMain from "./TextMain";

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = [
    {
      id: 1,
      title: "Sign Up New Account",
      description:
        "Simply navigate to our website and fill out the quick and easy sign-up form. Provide basic information such as your name, email address, and a password of your choice.",
    },
    {
      id: 2,
      title: "Transforming Your Sales Approach.",
      description:
        "Learn how our platform can help streamline your sales strategies for better performance.",
    },
    {
      id: 3,
      title: "Reinventing How You Drive Sales.",
      description:
        "Discover innovative techniques to boost your sales figures and reach your targets.",
    },
    {
      id: 4,
      title: "Revamping Your Sales Game Plan.",
      description:
        "Understand the key components of a successful sales strategy to achieve long-term growth.",
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 md:px-12 xl:px-28 2xl:px-32 py-5 md:py-10">
      <TextMain
        text="FAQs"
        title="Frequently Asked Questions?"
        description="Our platform makes crypto investments simple and accessible for all users."
        textStyling="gradient"
      />

      {faqData.map((item, index) => (
        <div
          key={item.id}
          className={`group flex justify-center p-[1px] mt-8 rounded-[24px] items-center ${
            openIndex === index
              ? "bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0]"
              : "border border-opacity-30 opacity-50 border-white"
          } `}
        >
          <div
            className={`flex flex-col ${
              openIndex === index ? "bg-gray-900" : "bg-white bg-opacity-[4%]"
            } rounded-[24px] p-4 w-full `}
          >
            <div className="flex flex-col lg:flex-row gap-3 xl:gap-12 justify-between px-6 items-center">
              <div className="flex flex-col lg:flex-row items-center gap-3 xl:gap-12">
                <div className="bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] text-transparent bg-clip-text font-poppins font-normal text-[64px]">
                  {String(item.id).padStart(2, "0")}
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <div className="text-white text-center xl:text-start  font-semibold text-lg lg:text-2xl">
                    {item.title}
                  </div>

                  {openIndex === index && (
                    <div className="text-white font-light text-base font-poppins">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
              {/* Button to toggle */}
              <div
                onClick={() => toggleOpen(index)}
                className={`rounded-full text-lg flex items-center bg-white bg-opacity-10 justify-center w-16 h-16 transition duration-300 ease-in-out hover:scale-105 ${
                  openIndex === index
                    ? " to-[#1c7ef0] p-7 border-white border"
                    : "  p-3"
                } cursor-pointer`}
              >
                {openIndex === index ? "x" : "+"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
