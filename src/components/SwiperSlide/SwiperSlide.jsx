import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../styles/index.css";

const Carousel = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={swiper => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            className="slider"
            width="100%"
            src="https://ic.pics.livejournal.com/vikond65/53941713/1511311/1511311_original.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider"
            width="100%"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSBcw00meh-S4a1Ltabyu4ifmZVv7p2bGw2wgsHbBi-MzBITr"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider"
            width="100%"
            src="https://turizm.pibig.info/uploads/posts/2023-04/1682025161_turizm-pibig-info-p-uzgen-dostoprimechatelnosti-turizm-vkontak-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width="100%"
            className="slider"
            src="https://ic.pics.livejournal.com/vikond65/53941713/1511311/1511311_original.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
