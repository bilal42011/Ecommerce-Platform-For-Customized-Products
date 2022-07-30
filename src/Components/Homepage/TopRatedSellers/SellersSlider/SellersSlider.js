import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@mui/material";
import { Navigation, Pagination } from "swiper";
import SellerProfile from "../SellersProfiles/SellerProfile/SellerProfile";
import { topSellers } from "../SellersProfiles/SellersProfiles";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SellersSlider = () => {
  return (
    <Container disableGutters sx={{ paddingTop: "2rem" }}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={50}
        breakpoints={{
          1020: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          855: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        navigation
        speed={400}
        pagination={{ clickable: true }}
        onSwiper={() => console.log("swiper")}
        onSlideChange={() => {
          console.log("Slide Changed");
        }}
      >
        {topSellers.map((seller) => {
          return (
            <SwiperSlide key={seller.id}>
              <SellerProfile
                avatarSrc={seller.avatarSrc}
                name={seller.name}
                ratings={seller.ratings}
                description={seller.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default SellersSlider;
