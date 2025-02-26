import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";

const Swipper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={1}
      effect="coverflow"
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      speed={2400}
      className="h-[500px]"
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      <SwiperSlide className="relative">
        <img
          src="Images/slider1.jpg"
          className="h-[500px] w-full object-cover"
        />
        {activeIndex === 0 && (
          <motion.div
            key="slide-1"
            className="absolute top-60 left-32 transform -translate-y-1/2 text-5xl text-white drop-shadow-2xl font-bold"
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
          >
            Experience Elegance Beyond Imagination <br />
            Discover Your Dream Luxury Home Today!
          </motion.div>
        )}
      </SwiperSlide>

      <SwiperSlide className="relative">
        <img
          src="Images/slider2.jpg"
          className="h-[500px] w-full object-cover"
        />
        {activeIndex === 1 && (
          <motion.div
            key="slide-2"
            className="absolute top-60 left-36 transform -translate-y-1/2 text-5xl text-white drop-shadow-2xl font-bold"
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
          >
            Where Prestige Meets Comfort <br /> Explore Exclusive Luxury Real
            Estates
          </motion.div>
        )}
      </SwiperSlide>

      <SwiperSlide className="relative">
        <img
          src="Images/slider3.jpg"
          className="h-[500px] w-full object-cover"
        />
        {activeIndex === 2 && (
          <motion.div
            key="slide-3"
            className="absolute top-60 left-36 transform -translate-y-1/2 text-5xl text-white drop-shadow-2xl font-bold"
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.1, ease: "easeOut" }}
          >
            Live in Grandeur - Step Into a World of <br />
            Sophistication and Luxury Living!
          </motion.div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipper;
