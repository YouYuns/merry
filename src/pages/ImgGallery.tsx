import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";  // ⬅ 여기가 중요
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/thumbs";

import p1 from "../images/1.jpg";
import p2 from "../images/2.jpg";
import p3 from "../images/3.jpg";

const ImgGallery: React.FC = () => {
  const images = [p1, p2, p3];
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div style={{ width: "100%", maxWidth: "360px", margin: "0 auto" }}>
      {/* Main Swiper */}
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Thumbs]}      
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`slide-${idx}`}
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode
        watchSlidesProgress
        modules={[Thumbs]}         
        style={{ marginTop: "10px" }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`thumb-${idx}`}
              style={{ width: "100%", cursor: "pointer" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImgGallery;
