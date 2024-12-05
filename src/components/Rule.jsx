import React from "react";

const Rule = ({ index, text }) => {
  return (
    <>
      <div className="text-[28px] capitalize text-white text-left lg:text-[44px]  font-poppins font-bold">
        {text}
      </div>
      <div className="text-lg capitalize md:text-2xl text-white text-left mt-4 font-poppins font-semibold">
        1 Rule: Maximum loss limit
      </div>
      {index && (
        <>
          <div className="text-base text-[#8a8a8a] mt-1 text-left font-poppins font-light">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>

          <div className="text-lg capitalize md:text-2xl text-white text-left mt-4 font-poppins font-semibold">
            Objectives:
          </div>
        </>
      )}
      <div className="flex flex-col md:flex-row md:gap-8 mt-5">
        <ul className="list-disc ml-5">
          <li className="font-normal text-[#01ff9d] text-base font-poppins leading-[32px]">
            It is a long established
          </li>
        </ul>
        <ul className="list-disc ml-5">
          <li className="font-normal text-[#01ff9d] text-base font-poppins leading-[32px]">
            It is a long established
          </li>
        </ul>
      </div>
      {index === false && (
        <div className="flex flex-col md:flex-row md:gap-8 mt-5">
          <ul className="list-disc ml-5">
            <li className="font-normal text-[#01ff9d] text-base font-poppins leading-[32px]">
              It is a long established
            </li>
          </ul>
          <ul className="list-disc ml-5">
            <li className="font-normal text-[#01ff9d] text-base font-poppins leading-[32px]">
              It is a long established
            </li>
          </ul>
        </div>
      )}
      <button className="bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] flex flex-row mt-5 gap-x-3 items-center text-[#141414]  font-outfit text-[16px] px-8 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition">
        View the full product list
      </button>
    </>
  );
};

export default Rule;
