import React, { useState } from "react";
import Streric from "@assets/icons/Steric.svg";
import Quote from "@assets/icons/quote.svg";
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";
import TalkingAboutBgImg from "@assets/images/TalkingAboutBgImg.png";
import BrandIcon1 from "@assets/icons/BrandIcon1.svg";
import BrandIcon2 from "@assets/icons/BrandIcon2.svg";
import BrandIcon3 from "@assets/icons/BrandIcon3.svg";
import BrandIcon4 from "@assets/icons/BrandIcon4.svg";
import BrandIcon5 from "@assets/icons/BrandIcon5.svg";
import BrandIcon6 from "@assets/icons/BrandIcon6.svg";
import BrandIcon7 from "@assets/icons/BrandIcon7.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const TalkingAbout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonials.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };
  const testimonials = [
    {
      id: 1,
      text: "I've been using the communication tools from this company for several months now, and I'm blown away by how much they've improved our workflow.",
      name: "James Rhye",
      role: "Lead Designer, Layers",
      avatarColor: "#ffd88d",
    },
    {
      id: 2,
      text: "I've been using the communication tools from this company for several months now, and I'm blown away by how much they've improved our workflow.",
      name: "James Rhye New",
      role: "Lead Designer, Layers",
      avatarColor: "#ffd88d",
    },
  ];
  const diveIcons = [
    { src: BrandIcon1, alt: "BrandIcon1" },
    { src: BrandIcon2, alt: "BrandIcon2" },
    { src: BrandIcon3, alt: "BrandIcon3" },
    { src: BrandIcon4, alt: "BrandIcon4" },
    { src: BrandIcon5, alt: "BrandIcon5" },
    { src: BrandIcon6, alt: "BrandIcon6" },
    { src: BrandIcon7, alt: "BrandIcon7" },
  ];

  const { text, name, role, avatarColor } = testimonials[currentIndex];
  return (
    <div className="flex flex-col gap-12 xl:gap-12 justify-between items-center">
      <div className="w-full">
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
    </div>
  );
};

export default TalkingAbout;
