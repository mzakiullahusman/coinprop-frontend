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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
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
      <div className="flex flex-col xl:flex-row gap-20 px-4 md:px-12 py-5  md:py-10">
        <div className="w-full flex flex-col md:flex-row gap-3 items-start xl:w-1/2">
          <div className="border w-full justify-between items-center md:w-[15%] md:px-5 flex flex-row sm:flex-col p-4 md:gap-7 lg:gap-[26px] 2xl:gap-[25px] sm:p-8 border-white bg-white bg-opacity-[4%] border-opacity-20 rounded-[23px]">
            <div className="font-poppins font-light text-base text-white lg:text-[26px] text-center">
              Tools
            </div>
            <button className="sm:mx-auto">
              <img
                src={ArrowIcon1}
                className="w-8 h-8 md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px] xl:w-[55px]"
                alt="ArrowIcon1"
              />
            </button>

            <button className="sm:mx-auto">
              <img
                src={ArrowIcon2}
                className="w-8 h-8 md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px] xl:w-[55px]"
                alt="ArrowIcon2"
              />
            </button>

            <button className="sm:mx-auto">
              <img
                src={ArrowIcon3}
                className="w-8 h-8 md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px] xl:w-[55px]"
                alt="ArrowIcon3"
              />
            </button>

            <button className="sm:mx-auto">
              <img
                src={ArrowIcon4}
                className="w-8 h-8 md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px] xl:w-[55px]"
                alt="ArrowIcon4"
              />
            </button>

            <button className="sm:mx-auto">
              <img
                src={ArrowPlusIcon}
                className="w-8 h-8 md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px] xl:w-[55px]"
                alt="ArrowPlusIcon"
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
                      crypto
                    </div>
                    <div className="flex items-center gap-x-2 text-xs text-[#01ff9d] font-inter">
                      <span className="font-semibold">$38,795</span>
                      <div className="border border-[#f2f2f7] h-3"></div>
                      <span className="font-light">-2.3%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <img src={Graph} alt="Graph" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full items-start flex flex-col gap-y-2 xl:w-1/2">
          <TextMain
            text="About Us"
            title="Why Crypto with Risk Master Trader?"
            description="Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis."
            index={false}
          />

          <AboutUsComponent />
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        slidesPerView={5}
        spaceBetween={30}
        allowTouchMove={false}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="w-full max-w-[90%] h-28 xl:h-48"
      >
        {diveIcons.map((icon, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity"
          >
            <img src={icon.src} alt={icon.alt} className="h-8" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default WithDrawalSection;
