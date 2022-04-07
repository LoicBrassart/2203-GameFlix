// import { Pagination, EffectCoverflow } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";

// import img1 from "@assets/carousel/01.jpg";
// import img2 from "@assets/carousel/02.jpg";
// import img3 from "@assets/carousel/03.jpg";
import SCarousel from "./style";

export default function Carousel() {
  return (
    <SCarousel>
      {/* <Swiper
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
        {[img1, img2, img3].map((pic, idx) => {
          const newId = `${idx}-id`;
          return (
            <SwiperSlide className="slide" key={newId}>
              <img src={pic} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </SCarousel>
  );
}
