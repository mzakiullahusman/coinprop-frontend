import React from "react";

const AboutAceFunded = ({ text, data }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 ${
        text === "Values" ? "" : "bg-[#020621]"
      } text-white`}
    >
      {data.map((feature, index) => (
        <div
          key={index}
          className="p-6 rounded-[12px] shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div
            className={`flex flex-col ${
              text === "Values" ? "items-center" : " items-start"
            } gap-4 mb-4`}
          >
            {text === "Values" ? (
              <div className="font-poppins bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] bg-clip-text text-transparent font-semibold text-[32px] leading-[52px] lg:text-[64px]">
                {feature?.text}
              </div>
            ) : (
              <img
                src={feature.icon}
                alt={feature.title}
                className="h-10 w-10"
              />
            )}

            <h3
              className={`${
                text === "Values" ? "font-poppins" : "font-outfit"
              } font-medium text-lg xl:text-2xl`}
            >
              {feature.title}
            </h3>
          </div>
          <p
            className={`text-base  ${
              text === "Values"
                ? "text-center font-poppins font-medium"
                : "xl:text-[20px] font-outfit font-normal"
            }  text-[#8e8e8e]`}
          >
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutAceFunded;
