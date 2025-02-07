import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rakesh",
    company: "Raiika",
    feedback:
      "Anivarti transformed our e-commerce operations with their seamless inventory management and multi-channel order processing solutions. Their expertise helped us scale efficiently while reducing operational hassles. Highly recommended!.",
    image: "images/testimonial-men2.jpg", 
  },
  {
    id: 2,
    name: "Ravinder",
    company: "Morvi Retail",
    feedback:
      "As a handicraft business owner, I struggled with supply chain and market expansion. Anivarti provided us with tailored solutions that helped streamline our distribution and financial management. Thanks to them, our brand is reaching new heights!.",
    image: "images/testimonial-men1.jpg",
  },
  {
    id: 3,
    name: "Akshat Jain",
    company: "Health Affairs",
    feedback:
      "The team at Anivarti built an outstanding website for our brand. Their creative design and branding solutions truly set us apart in a competitive market. Professional, responsive, and innovative – they are the perfect partners for digital success!.",
    image: "images/testimonial-men.jpg",  
  },
  {
    id: 4,
    name: "Pooja Gupta",
    company: "Poshkpur",
    feedback:
      "Anivarti’s textile business community has been a game-changer for networking and industry growth. Their PR and outreach efforts helped us connect with potential clients and expand our reach in ways we never imagined.",
    image: "images/testimonial1.png", 
  },
];

const TestimonialSection = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full max-w-6xl mx-auto text-center px-2 py-8 lg:py-16">
      <h2 className="text-xl lg:text-4xl tracking-[2px] lg:tracking-[5px] text-white mb-8">
        What Our Clients Say About Us
      </h2>

      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={-10}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 6000 }}
        navigation={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          380:{
            slidesPerView:1
          },
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 1.4,
          },
          1024: {
            slidesPerView: 1.6,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id}>
            {({ isActive }) => (
              <motion.div
                className="w-full flex items-center bg-[#1a1a1a] border border-gray-300 shadow-lg rounded-lg p-2 lg:p-6 transition-all duration-500"
                style={{
                  transform: isActive ? "scale(1)" : "scale(0.9)",
                  opacity: isActive ? 1 : 0.3,
                }}
              >
                {/* Left Side: Name & Profile */}
                <div className="w-1/4 md:w-[30%] text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full mx-auto mb-3"
                  />
                  <h4 className="text-md md:text-lg lg:text-xl tracking-[1px] text-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm md:text-md lg:text-xl text-gray-300 mb-2 tracking-[1px]">{testimonial.company}</p>
                </div>

                {/* Divider Line */}
                <div className="h-32 w-px bg-gray-300 mx-4"></div>

                {/* Right Side: Feedback */}
                <div className="w-3/4 md:w-[70%] text-left text-sm md:text-md lg:text-lg tracking-[1px] md:tracking-[2px] text-gray-300">
                  <p
                    dangerouslySetInnerHTML={{ __html: testimonial.feedback }}
                  />
                </div>
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaChevronLeft className="text-xl text-gray-600" />
        </button>
        <button
          className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaChevronRight className="text-xl text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
