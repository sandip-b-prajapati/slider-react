import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "./Card";
import SLIDER_DATA from "../data/SLIDER_DATA";

import "swiper/css";
import "swiper/css/navigation";

function Slider() {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Navigation]}
      navigation
      breakpoints={{
        600: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 60,
        },
        1600: {
          slidesPerView: 6,
          spaceBetween: 70,
        },
      }}
    >
      {SLIDER_DATA.Data.map((slider) => (
        <SwiperSlide key={slider.id}>
          <Card
            imgURL={slider.imageURL}
            Icons={slider.Icons}
            name={slider.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
