import React, { useState } from "react";
import TextMain from "./TextMain";
import TestimonialIcon from "@assets/icons/Logo.svg";
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";

const testimonials = [
  {
    id: 1,
    text: "Joined today, reviewed their website and it's been very refreshing to have some new features that no one has thought of after so long of being in the ..",
    author: "Byeon Wo Soek",
    icon: TestimonialIcon,
  },
  {
    id: 2,
    text: "The platform has changed the way I approach crypto investments. The tools and analytics provided are top-notch.",
    author: "Jane Doe",
    icon: TestimonialIcon,
  },
  {
    id: 3,
    text: "Joined today, reviewed their website and it's been very refreshing to have some new features that no one has thought of after so long of being in the ..",
    author: "John Smith",
    icon: TestimonialIcon,
  },
  {
    id: 4,
    text: "Joined today, reviewed their website and it's been very refreshing to have some new features that no one has thought of after so long of being in the ..",
    author: "Alex Kim",
    icon: TestimonialIcon,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="px-4 md:px-12 py-5 md:py-10">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 mb-4 md:mb-0 justify-center md:justify-between items-center">
        <TextMain
          text="Testimonials"
          title="What Traders Say About Our Platform."
          index={false}
        />
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ArrowLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === testimonials.length - 1}
            className={`${
              currentIndex === testimonials.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {testimonials
          .slice(
            currentIndex,
            currentIndex + (window.innerWidth >= 1024 ? 2 : 1)
          )
          .map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-white border-opacity-20 bg-white bg-opacity-5 p-10 rounded-[24px]"
            >
              <img src={testimonial.icon} alt="TestimonialIcon" />
              <div className="text-white text-base md:text-lg font-light mt-4">
                {testimonial.text}
              </div>
              <div className="flex flex-col justify-center items-center mt-9">
                <div className="w-64 h-[1px] bg-gradient-to-r from-[#140F2A] via-[#FFFFFF] to-[#140F2A]"></div>
                <div className="mt-4 font-outfit font-bold text-2xl md:text-[34px] text-white">
                  {testimonial.author}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Testimonial;
