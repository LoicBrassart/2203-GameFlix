import { Pagination, EffectCoverflow } from "swiper";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
/* eslint-enable import/no-unresolved */
import { news } from "../../data";

import SCarousel from "./style";

export default function Carousel() {
  return (
    <SCarousel>
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        slidesPerView={2}
        navigation
        grabCursor="true"
        centeredSlides="true"
        loop="true"
        pagination={{ clickable: true, dynamicBullets: true }}
        coverflowEffect={{
          rotate: 30,
          stretch: 25,
          depth: 250,
        }}
        effect="coverflow"
      >
        {news.map((item) => {
          return (
            <SwiperSlide className="slide" key={item.id}>
              <img src={item.picture} alt={item.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SCarousel>
  );
}
