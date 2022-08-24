import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@mui/material";
import { Navigation, Pagination } from "swiper";
import SellerProfile from "../SellersProfiles/SellerProfile/SellerProfile";
import { topSellers } from "../SellersProfiles/SellersProfiles";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../../Store/Slices/uiSlice";
import axiosInstance, { endPoints } from "../../../../axiosInstance";
import { apiServerUrl, truncate } from "../../../../assets/js/utils";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import OverlaySpinner from "../../../OverlaySpinner";

const SellersSlider = () => {
  const [topSellers, setTopSellers] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(
          `${endPoints.USER}/sellers/popular`
        );
        setTopSellers(response.data.sellers);
      } catch (error) {
        console.log(error);
        dispatch(
          uiActions.setAlert({
            severity: "error",
            text: "ERROR: " + error.response.data.message || error.message,
          })
        );
      }
    })();
  }, []);

  return (
    <Container disableGutters sx={{ paddingTop: "2rem", position: "relative" }}>
      {topSellers ? (
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
              <SwiperSlide key={seller._id}>
                <SellerProfile
                  id={seller._id}
                  avatarSrc={apiServerUrl(seller.avatar)}
                  name={seller.fullName}
                  city={seller.city}
                  description={truncate(seller.description, 150)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <OverlaySpinner />
      )}
    </Container>
  );
};

export default SellersSlider;
