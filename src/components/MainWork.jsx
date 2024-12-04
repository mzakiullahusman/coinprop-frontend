import React from "react";

const MainWork = () => {
  return (
    <div className="bg-[#08122a] border border-white border-opacity-20 rounded-[14px] p-5 mt-8 xl:p-8 hover:shadow-lg transition">
      <div className="flex flex-col md:flex-row md:flex-wrap  xl:flex-nowrap items-start justify-start xl:justify-center gap-10">
        <div className="flex flex-col">
          <div className="font-poppins text-2xl lg:text-[28px] font-semibold text-white mt-4">
            Our Vision
          </div>

          <div className="font-normal text-base font-poppins text-white mt-5 leading-[32px]">
            Our vision is to be the path to a better lifestyle
          </div>
        </div>
        <div className="w-full flex md:w-1/2 xl:w-[33%] gap-6">
          <div className="hidden xl:block border-l border-white border-opacity-10 h-auto"></div>
          <div className="flex flex-col ">
            <div className="font-poppins text-2xl lg:text-[28px] font-semibold text-white mt-4">
              Our Mission
            </div>

            <div className="font-normal text-base font-poppins text-white mt-5 leading-[32px]">
              Our mission is to turn people who trade into better traders, with
              healthier habits, through learning by doing
            </div>
          </div>
        </div>
        <div className="w-full flex md:w-1/2 xl:w-[33%] gap-6">
          <div className="hidden xl:block border-l border-white border-opacity-10 h-auto"></div>

          <div className="flex flex-col">
            <div className="font-poppins text-2xl lg:text-[28px] font-semibold text-white  mt-4">
              Our Values
            </div>
            <ul className="list-disc mt-6 ml-5">
              <li className="font-normal text-base font-poppins text-white leading-[32px]">
                Our mission is to turn people who trade into better traders,
                with healthier habits, through learning by doing
              </li>
              <li className="font-normal text-base font-poppins text-white leading-[32px]">
                Our mission is to turn people who trade into better traders,
                with healthier habits, through learning by doing
              </li>
              <li className="font-normal text-base font-poppins text-white leading-[32px]">
                Our mission is to turn people who trade into better traders,
                with healthier habits, through learning by doing
              </li>
              <li className="font-normal text-base font-poppins text-white leading-[32px]">
                Our mission is to turn people who trade into better traders,
                with healthier habits, through learning by doing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWork;
