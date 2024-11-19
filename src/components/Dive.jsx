import React from "react";
import TickIcon from "../assets/Icons/TickIcon.svg";
import BgImage from "../assets/Images/BgImage.png";
import Icon1 from "../assets/Icons/Icon1.svg";
import Icon2 from "../assets/Icons/Icon2.svg";
import Icon3 from "../assets/Icons/Icon3.svg";
import Icon4 from "../assets/Icons/Icon4.svg";
import Icon5 from "../assets/Icons/Icon5.svg";
import ArrowIcon1 from "../assets/Icons/ArrowIcon1.svg";
import ArrowIcon2 from "../assets/Icons/ArrowIcon2.svg";
import ArrowIcon3 from "../assets/Icons/ArrowIcon3.svg";
import ArrowIcon4 from "../assets/Icons/ArrowIcon4.svg";
import ArrowPlusIcon from "../assets/Icons/ArrowPlusIcon.svg";
import ArrowRightIcon from "../assets/Icons/ArrowRightIcon.svg";
import TickIconLg from "../assets/Icons/TickIconLg.svg";
import Graph from "../assets/Icons/Graph.svg";
const Dive = () => {
  const tickList = [
    { text: "Up To $400,000 Starting Capital" },
    { text: "First Withdrawal On Demand" },
    { text: "Unlimited Days Available" },
    { text: "Up To 90% Performance Split" },
  ];

  const diveIcons = [
    { src: Icon1, alt: "Icon 1" },
    { src: Icon2, alt: "Icon 2" },
    { src: Icon3, alt: "Icon 3" },
    { src: Icon4, alt: "Icon 4" },
    { src: Icon5, alt: "Icon 5" },
  ];

  return (
    <div
      className="bg-[#020621] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <div className="flex flex-col lg:flex-row gap-20 px-4 md:px-12 py-5  md:py-10">
        <div className="w-full items-start flex flex-col gap-y-2 lg:w-1/2">
          <div className="border-[#2A80B3] border text-white rounded-full px-3 py-1 font-normal font-redhat text-base">
            Welcome to Ace Funded
          </div>

          <div className="text-[32px] tracking-[-1px] xl:tracking-[-4px] xl:leading-[100px] text-white  lg:text-[60px] xl:text-[84px] font-redhat font-medium">
            Dive into Success With Our Capital.
          </div>
          <div className="text-lg text-white lg:text-2xl font-redhat font-medium">
            Trade with our Capital and keep up to 95% of the Profit.
          </div>

          <div className="grid xl:grid-cols-2 gap-x-20 gap-y-6 text-white mt-6">
            {tickList.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={TickIcon} alt="tickIcon" />
                <span className="font-redhat font-normal text-base">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="bg-gradient-to-b flex flex-row gap-x-3 items-center from-[#2A80B3] via-[#236191] to-[#142738] font-redhat text-lg text-white px-6 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition">
              Start Challenge
              <img src={ArrowRightIcon} alt="Arrow" />
            </button>

            <button className="bg-transparent font-redhat border border-white text-lg text-white px-6 py-3 rounded-full font-normal hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full flex gap-x-3 items-start lg:w-1/2">
          <div className="border-2 w-[30%] md:w-[15%] px-5 flex flex-col gap-y-8 p-8 border-white border-opacity-20 rounded-[16px]">
            <div className="font-redhat font-light text-base text-white lg:text-[26px] text-center">
              Tools
            </div>
            <button className="rounded-full bg-[#2a80b3] mx-auto h-14 w-14 flex flex-col p-[10px]">
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
          <div className="w-full flex flex-col gap-y-3 lg:w-[85%]">
            <div className="border-2  px-5 flex flex-col items-center gap-y-4 p-8 border-white border-opacity-20 rounded-[16px]">
              <img src={TickIconLg} alt="TickIcon" className="w-24 h-24" />
              <div className="text-lg text-white lg:text-[23px]  font-bold">
                Withdrawal Request Submitted
              </div>
              <div className=" text-white text-[11px] font-normal">
                Your withdrawal is being processed and should be expected to
                arrive within 30 minutes.
              </div>
              <button className="bg-[#2a80b3] w-full to-[#142738] text-lg text-white py-3 rounded-[11px] shadow-lg font-normal hover:opacity-90 transition">
                Go Home
              </button>
            </div>
            <div className="border-2 px-5 flex flex-col gap-y-5 p-8 border-white border-opacity-20 rounded-[16px]">
              <div className="flex items-center justify-between">
                <div className="text-base text-white font-inter lg:text-lg  font-semibold">
                  Market
                </div>
                <div className="flex gap-x-1 items-center">
                  <button className="font-medium text-xs font-inter bg-[#2a80b3] py-1 px-[9px] rounded-[20px] text-white">
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
                      Bitcoin
                    </div>
                    <div className="flex items-center gap-x-2 text-xs text-[#2A80B3] font-inter">
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
      </div>
      <div className="flex flex-col md:flex-row items-center xl:py-12 justify-center gap-12 xl:gap-20 ">
        {diveIcons.map((icon, index) => (
          <div key={index} className="flex items-center justify-center">
            <img src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dive;
