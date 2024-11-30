import React from "react";
import Streric from "@assets/icons/Steric.svg";
import Quote from "@assets/icons/quote.svg";

import ArrowLeft from "@assets/icons/ArrowLeft.svg";

import ArrowRight from "@assets/icons/ArrowRight.svg";
import TalkingAboutBgImg from "@assets/images/TalkingAboutBgImg.png";

const TalkingAbout = () => {
  return (
    <div className="flex flex-col xl:flex-row bg-white bg-opacity-[2%] border-white gap-12 xl:gap-32 border rounded-[44px] border-opacity-20 justify-between items-center m-4 md:m-8 xl:m-20 px-4 xl:px-10 py-5 xl:py-20">
      <div className="w-full lg:w-[45%] xl:w-[40%]">
        <div className="text-[28px] capitalize text-white lg:text-[50px] xl:text-[44px] font-poppins font-semibold">
          Who are talking <br /> about
          <span className="bg-gradient-to-r ml-3 from-[#00fc9e] to-[#1c7ef0] text-transparent bg-clip-text">
            Risk Master Trader
          </span>
        </div>

        <div className="text-lg text-white lg:text-lg font-poppins font-light">
          Innovative Approaches to Propel Sales Success: Utilizing Cutting-Edge
          Strategies to Achieve Unparalleled Results
        </div>
        <div className="flex gap-12 xl:mt-20">
          <div className="flex flex-col gap-3">
            <div className="text-[32px] md:text-[50px] xl:text-[84px] text-white font-poppins font-normal leading-[100px] ">
              +120
            </div>
            <div className="font-poppins font-normal text-base lg:text-lg">
              Total Companies Use
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-x-2">
              <img
                src={Streric}
                alt="Steric"
                className="w-5 h-5 xl:w-9 xl:h-9"
              />
              <div className="text-[32px] md:text-[50px] xl:text-[84px] text-white font-poppins font-normal leading-[100px] ">
                4.9
              </div>
            </div>
            <div className="font-poppins font-normal text-base lg:text-lg">
              Rated on Wavebox
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center lg:w-[55%] xl:w-[60%]">
        <div className="relative">
          <img
            className="hidden md:block"
            src={TalkingAboutBgImg}
            alt="TalkingAboutBgImage"
          />
          <div
            style={{ zIndex: 999 }}
            className="md:absolute md:top-14 md:left-[70px] z-1 border-2 border-white border-opacity-20 bg-white bg-opacity-5 p-10 rounded-[50px] backdrop-blur-[20px]"
          >
            <img className="mt-10" src={Quote} alt="Quote" />
            <div className="leading-[40px] text-justify font-poppins text-semibold text-xl lg:text-[26px] mt-9 text-white">
              I've been using the <br />
              communication tools from this company for several months now, and
              I'm blown away by how much they've improved our workflow.
            </div>
            <div className="border-t border-white border-opacity-10 mt-9 w-full"></div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-[0px] justify-between items-center mt-9">
              <div className="flex items-center gap-3 ">
                <div className="rounded-full p-4 bg-[#ffd88d] md:h-16 md:w-16"></div>
                <div className="flex flex-col gap-1">
                  <div className="font-poppins font-bold text-lg text-white">
                    James Rhye
                  </div>
                  <div className="font-poppins font-medium text-xs text-white">
                    Lead Designer, Layers
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button>
                  <img src={ArrowLeft} alt="ArrowLeft" />
                </button>
                <button>
                  <img src={ArrowRight} alt="ArrowRight" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkingAbout;
