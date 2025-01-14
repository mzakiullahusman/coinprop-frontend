import React, { useState } from "react";
import TextMain from "./TextMain";
import Streric from "@assets/icons/Steric.svg";
import Quote from "@assets/icons/quote.svg";
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";
import TalkingAboutBgImg from "@assets/images/TalkingAboutBgImg.png";

const Testimonial = () => {
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
      text: "Joined today, reviewed their website and it's been very refreshing to have some new features that no one has thought of after so long of being in the ...",
      name: "Byeon Wo Soek",
    },
    {
      id: 2,
      text: "The platform has changed the way I approach crypto investments. The tools and analytics provided are top-notch.",
      name: "Jane Doe",
    },
    {
      id: 3,
      text: "Joined today, reviewed their website and it's been very refreshing to have some new features that no one has thought of after so long of being in the ..",
      name: "John Smith",
    },
    {
      id: 4,
      text: "Joined today, reviewed their website and it's been very refreshing to have some new features that no one has thought of after so long of being in the ..",
      name: "Alex Kim",
    },
  ];

  const { text, name } = testimonials[currentIndex];

  return (
    <div className="px-4 md:px-12 xl:px-20 2xl:px-32 mt-12 py-5 md:py-10">
      <div className="flex flex-col xl:flex-row gap-12 xl:gap-32 justify-between items-center">
        <div className="w-full lg:w-[45%] xl:w-[40%]">
          <div className="text-[28px] capitalize text-white lg:text-[50px] xl:text-[44px] font-poppins font-semibold">
            Testimonials<br /> 
            <span className="bg-gradient-to-r ml-3 from-[#00fc9e] to-[#1c7ef0] text-transparent bg-clip-text">
            What Traders Say About Our Platform
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center lg:w-[55%] xl:w-[60%]">
          <div className="relative">
            <img
              className="hidden md:block"
              src={TalkingAboutBgImg}
              alt="TalkingAboutBgImage"
            />
            <div className="md:absolute md:top-14 md:left-[70px] z-1 border-2 border-white border-opacity-20 bg-white bg-opacity-5 p-10 rounded-[50px] backdrop-blur-[20px]">
              <img className="mt-10" src={Quote} alt="Quote" />
              <div className="leading-[40px] text-justify font-poppins text-semibold text-xl lg:text-[26px] mt-9 text-white">
                {text}
              </div>
              <div className="border-t border-white border-opacity-10 mt-9 w-full"></div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-[0px] justify-between items-center mt-9">
                <div className="flex items-center gap-3 ">
                  
                  <div className="flex flex-col gap-1">
                    <div className="font-poppins font-bold text-lg text-white">
                      {name}
                    </div>
                    
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    disabled={currentIndex === 0}
                    className={`${currentIndex === 0 ? "opacity-50" : ""}`}
                    onClick={handlePrev}
                  >
                    <ArrowLeft />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentIndex === testimonials.length - 1}
                    className={`${
                      currentIndex === testimonials.length - 1
                        ? "opacity-50"
                        : ""
                    }`}
                  >
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
