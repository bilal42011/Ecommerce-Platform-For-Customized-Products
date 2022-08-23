import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ProductMedia.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import { apiServerUrl } from "../../assets/js/utils";

export default function ProductMedia({ product }) {
  const [activeThumb, setActiveThumb] = useState();

  return (
    <div className="product-media-container">
      <Swiper
        spaceBetween={1}
        navigation
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: activeThumb }}
        className="product-media-main"
      >
        {product.images.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="product-image-wrapper">
                <img src={apiServerUrl(item.path)} alt={item.filename} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        spaceBetween={1}
        slidesPerView={3}
        className="product-thumbs"
      >
        {product.images.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="product-thumb-wrapper">
                <img src={apiServerUrl(item.path)} alt={item.filename} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
