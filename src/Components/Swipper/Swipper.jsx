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
      className="h-[560px] overflow-x-hidden"
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      <SwiperSlide className="relative">
        <img
          src="Images/slider1.jpg"
          className="h-full w-full object-cover"
          alt="Luxury Home"
        />
        {activeIndex === 0 && (
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white drop-shadow-2xl font-bold 
              text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] px-4"
            initial={{ y: -800, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
          >
            Experience Elegance Beyond Imagination <br />
            Discover Your Dream Luxury Home Today!
          </motion.div>
        )}
      </SwiperSlide>

      <SwiperSlide className="relative">
        <img
          src="Images/slider2.jpg"
          className="h-full w-full object-cover"
          alt="Luxury Living Room"
        />
        {activeIndex === 1 && (
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white drop-shadow-2xl font-bold 
              text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] px-4"
            initial={{ x: -600, opacity: 0 }}
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
          className="h-full w-full object-cover"
          alt="Luxury Interior"
        />
        {activeIndex === 2 && (
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white drop-shadow-2xl font-bold 
              text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] px-4"
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
