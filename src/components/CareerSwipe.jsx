import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import CareerImg1 from "@assets/images/CareerImg.png";
import CareerImg2 from "@assets/images/CareerImg.png";
import CareerImg3 from "@assets/images/CareerImg.png";
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";

function CareerSwipe() {
  return (
    <div className="px-4 lg:px-16 py-5 md:py-10">
      <Swiper
        effect={"coverflow"}
        // grabCursor={true}
        centeredSlides={true}
        // loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 10,
          modifier: 10,
        }}
        slidesPerView={"auto"}
        initialSlide={1}
        navigation={{
          nextEl: ".swiper-button-prev",
          prevEl: ".swiper-button-next",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        <SwiperSlide className="xl:w-[50%] 2xl:w-[49%]">
          <img src={CareerImg1} alt="slide_image1" />
        </SwiperSlide>
        <SwiperSlide className="xl:w-[50%] 2xl:w-[49%]">
          <img src={CareerImg2} alt="slide_image2" />
        </SwiperSlide>
        <SwiperSlide className="xl:w-[50%] 2xl:w-[49%]">
          <img src={CareerImg3} alt="slide_image3" />
        </SwiperSlide>

        <div className="slider-controler absolute top-[50%] w-full">
          <div className="swiper-button-prev slider-arrow">
            <ArrowLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowRight />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default CareerSwipe;
