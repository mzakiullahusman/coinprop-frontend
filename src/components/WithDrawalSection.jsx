import React from "react";
import BrandIcon1 from "@assets/icons/BrandIcon1.svg";
import BrandIcon2 from "@assets/icons/BrandIcon2.svg";
import BrandIcon3 from "@assets/icons/BrandIcon3.svg";
import BrandIcon4 from "@assets/icons/BrandIcon4.svg";
import BrandIcon5 from "@assets/icons/BrandIcon5.svg";
import BrandIcon6 from "@assets/icons/BrandIcon6.svg";
import BrandIcon7 from "@assets/icons/BrandIcon7.svg";
import ArrowIcon1 from "@assets/icons/ArrowIcon1.svg";
import ArrowIcon2 from "@assets/icons/ArrowIcon2.svg";
import ArrowIcon3 from "@assets/icons/ArrowIcon3.svg";
import ArrowIcon4 from "@assets/icons/ArrowIcon4.svg";
import ArrowPlusIcon from "@assets/icons/ArrowPlusIcon.svg";
import TickIconLg from "@assets/icons/TickIconLg.svg";
import Graph from "@assets/icons/Graph.svg";
import TextMain from "./TextMain";
import AboutUsComponent from "./AboutUsComponent";
const WithDrawalSection = () => {
  const diveIcons = [
    { src: BrandIcon1, alt: "BrandIcon1" },
    { src: BrandIcon2, alt: "BrandIcon2" },
    { src: BrandIcon3, alt: "BrandIcon3" },
    { src: BrandIcon4, alt: "BrandIcon4" },
    { src: BrandIcon5, alt: "BrandIcon5" },
    { src: BrandIcon6, alt: "BrandIcon6" },
    { src: BrandIcon7, alt: "BrandIcon7" },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-20 px-4 md:px-12 py-5  md:py-10">
        <div className="w-full flex gap-x-3 items-start lg:w-1/2">
          <div className="border w-[30%] md:w-[15%] px-5 flex flex-col gap-y-6 p-8 border-white bg-white bg-opacity-[4%] border-opacity-20 rounded-[23px]">
            <div className="font-poppins font-light text-base text-white lg:text-[26px] text-center">
              Tools
            </div>
            <button className="rounded-full bg-[#01ff9d] mx-auto h-14 w-14 flex flex-col p-[10px]">
              <img src={ArrowIcon1} className="h-10 w-10" alt="ArrowIcon1" />
            </button>

            <button className="rounded-full bg-white bg-opacity-20 mx-auto h-14 w-14 flex flex-col p-[10px]">
              <img src={ArrowIcon2} className="h-10 w-10" alt="ArrowIcon1" />
            </button>

            <button className="rounded-full bg-white bg-opacity-20 mx-auto h-14 w-14 flex flex-col p-[10px]">
              <img src={ArrowIcon3} className="h-10 w-10" alt="ArrowIcon1" />
            </button>

            <button className="rounded-full bg-white bg-opacity-20 mx-auto h-14 w-14 flex flex-col p-[10px]">
              <img src={ArrowIcon4} className="h-10 w-10" alt="ArrowIcon1" />
            </button>
            <button>
              <img
                src={ArrowPlusIcon}
                className="h-14 w-14 m-auto"
                alt="ArrowIcon1"
              />
            </button>
          </div>
          <div className="w-full flex flex-col gap-y-4 lg:w-[85%]">
            <div className="border px-5 flex flex-col items-center gap-y-4 p-8 border-white bg-white bg-opacity-[4%] border-opacity-20 rounded-[23px]">
              <img src={TickIconLg} alt="TickIcon" className="w-24 h-24" />
              <div className="text-lg text-white lg:text-[23px]  font-bold">
                Withdrawal Request Submitted
              </div>
              <div className=" text-white text-[11px] font-normal">
                Your withdrawal is being processed and should be expected to
                arrive within 30 minutes.
              </div>
              <button className="bg-[#01ff9d] w-full font-semibold text-black font-poppins text-[17px] py-3 rounded-[11px] shadow-lg hover:opacity-90 transition">
                Go Home
              </button>
            </div>
            <div className="border px-5 flex flex-col gap-y-5 p-8 border-white bg-white  bg-opacity-[4%] border-opacity-20 rounded-[23px]">
              <div className="flex items-center justify-between">
                <div className="text-base text-white font-inter lg:text-lg  font-semibold">
                  Market
                </div>
                <div className="flex gap-x-1 items-center">
                  <button className="font-medium text-xs font-inter bg-[#01ff9d] py-1 px-[9px] rounded-[20px] text-white">
                    1M
                  </button>
                  <button className="font-medium text-xs font-inter bg-white bg-opacity-20 py-1 px-[9px] rounded-[20px] text-white">
                    1Y
                  </button>
                  <button className="font-medium text-xs font-inter bg-white bg-opacity-20 py-1 px-[9px] rounded-[20px] text-white">
                    All
                  </button>
                </div>
              </div>

              <div className="flex justify-between mt-2 items-center rounded-lg">
                <div className="flex gap-4 items-center ">
                  <div className="border-l rounded-r-lg border-2 border-[#f2f2f7] h-11 "></div>
                  <div className="flex flex-col">
                    <div className=" text-white font-inter text-lg  font-semibold">
                      Crypto
                    </div>
                    <div className="flex items-center gap-x-2 text-xs text-[#01ff9d] font-inter">
                      <span className="font-semibold">$38,795</span>
                      <div className="border border-[#f2f2f7] h-3"></div>
                      <span className="font-light">-2.3%</span>
                    </div>
                  </div>
                </div>

                {/* Right Section (Graph) */}
                <div>
                  <img src={Graph} alt="Graph" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full items-start flex flex-col gap-y-2 lg:w-1/2">
          <TextMain
            text="About Us"
            title="Why Crypto with Risk Master Trader?"
            description="Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis."
            index={false}
          />

          <AboutUsComponent />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center xl:py-12 justify-center gap-12 xl:gap-16 2xl:gap-24 ">
        {diveIcons.map((icon, index) => (
          <div key={index} className="flex items-center justify-center">
            <img src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>
    </>
  );
};

export default WithDrawalSection;
