import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

function Swipers({ slidesPerView = 1, images }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={slidesPerView}
      pagination={{ dynamicBullets: true }}
      modules={[Pagination, Autoplay]}
      centeredSlides={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full h-full rounded-xl"
      breakpoints={{
        0: {
          slidesPerView: 1, // 📱 Mobile uchun
        },
      }}
    >
      {images.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item}
            alt={`slide-${index}`}
            className="h-full w-full object-cover rounded-md"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Swipers;
