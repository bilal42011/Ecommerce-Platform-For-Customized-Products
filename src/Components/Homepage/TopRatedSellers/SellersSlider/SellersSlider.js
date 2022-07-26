import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import {Navigation, EffectCards, Pagination} from "swiper";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-cards";

const SellersSlider = () => {
  return (
<Swiper
modules={[Navigation, EffectCards,Pagination]}
effect="Cards"
slidesPerView={3}
navigation
pagination={{clickable:true}}
onSwiper={()=>console.log("swiper")}
onSlideChange={()=>{console.log("Slide Changed")}}
>
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
</Swiper>
  )
}

export default SellersSlider