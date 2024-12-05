import React from "react";

const MainWork = ({ data }) => {
  return (
    <div className="bg-[#08122a] border border-white border-opacity-20 rounded-[14px] p-5 mt-8 xl:p-8 hover:shadow-lg transition">
      <div className="flex flex-col lg:flex-row gap-10">
        {data.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col w-full lg:w-[50%] xl:w-[33%] gap-6 ${
              index < data.length - 1
                ? "xl:border-r xl:border-white xl:border-opacity-10"
                : ""
            }`}
          >
            <div className="flex flex-col">
              <div className="font-poppins text-2xl lg:text-[28px] font-semibold text-white mt-4">
                {section.title}
              </div>

              {section.values ? (
                <ul className="list-disc mt-5 ml-5">
                  {section.values.map((value, idx) => (
                    <li
                      key={idx}
                      className="font-normal text-base font-poppins text-white leading-[32px]"
                    >
                      {value}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="font-normal text-base font-poppins text-white mt-5 leading-[32px]">
                  {section.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainWork;
