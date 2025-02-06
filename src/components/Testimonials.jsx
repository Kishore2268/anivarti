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
    name: "John Doe",
    company: "Tech Solutions",
    feedback:
      "The service was <strong>exceptional</strong>! Their attention to detail and professionalism exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Smith",
    company: "Creative Designs",
    feedback:
      "Absolutely <strong>love</strong> working with this team! Their <strong>dedication</strong> to quality is unmatched.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    company: "Finance Pro",
    feedback:
      "They delivered the project on time and it was <strong>better</strong> than I imagined. Great work!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emma Brown",
    company: "Health Hub",
    feedback:
      "The experience was <strong>amazing</strong>. They truly understand customer needs.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const TestimonialSection = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full max-w-6xl mx-auto text-center py-8 lg:py-16">
      <h2 className="text-xl lg:text-4xl tracking-[3px] text-white mb-8">
        What Our Clients Say About Us
      </h2>

      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={-10}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 4000 }}
        navigation={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          768: {
            slidesPerView: 1.4,
          },
          1024: {
            slidesPerView: 1.8,
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
                <div className="w-2/5 text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full mx-auto mb-3"
                  />
                  <h4 className="text-sm md:text-md lg:text-xl tracking-[1px] text-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs md:text-md lg:text-lg text-gray-300 mb-2 tracking-[1px]">{testimonial.company}</p>
                </div>

                {/* Divider Line */}
                <div className="h-32 w-px bg-gray-300 mx-4"></div>

                {/* Right Side: Feedback */}
                <div className="w-3/5 text-left text-sm md:text-md lg:text-lg tracking-[0.5px] text-gray-300">
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
