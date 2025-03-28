import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/navigation"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import { motion } from "framer-motion"; 

// Testimonials data array containing details about clients and their feedback
const testimonials = [
  {
    id: 1,
    name: "Rakesh",
    company: "Raiika",
    feedback:
      "Anivarti <span class='text-white'>transformed our e-commerce operations</span> with their seamless inventory management and multi-channel order processing solutions. Their expertise helped us <span class='text-white'>scale efficiently while reducing operational hassles</span>. Highly recommended!",
    image: "images/testimonial-men2.jpg",
  },
  {
    id: 2,
    name: "Ravinder",
    company: "Morvi Retail",
    feedback:
      "As a handicraft business owner, I struggled with supply chain and market expansion. Anivarti provided us with <span class='text-white'>tailored solutions that helped streamline our distribution and financial management</span>. Thanks to them, <span class='text-white'>our brand is reaching new heights</span>!",
    image: "images/testimonial-men1.jpg",
  },
  {
    id: 3,
    name: "Akshat Jain",
    company: "Health Affairs",
    feedback:
      "The team at Anivarti <span class='text-white'>built an outstanding website</span> for our brand. Their <span class='text-white'>creative design and branding solutions</span> truly set us apart in a competitive market. Professional, responsive, and innovative – they are the <span class='text-white'>perfect partners for digital success</span>!",
    image: "images/testimonial-men.jpg",
  },
  {
    id: 4,
    name: "Pooja Gupta",
    company: "Poshkpur",
    feedback:
      "Anivarti’s <span class='text-white'>textile business community has been a game-changer for networking and industry growth</span>. Their PR and outreach efforts  <span class='text-white'>helped us connect with potential clients and expand our reach</span> in ways we never imagined.",
    image: "images/testimonial1.png",
  },
];

const TestimonialSection = () => {
  const swiperRef = useRef(null); // useRef hook to store reference to the Swiper instance

  return (
    <div className="w-full max-w-6xl mx-auto text-center px-2 py-8 lg:py-24">
      <h2 className="text-2xl lg:text-4xl tracking-[1px] lg:tracking-[5px] text-white mb-8">
        What Our Clients Say About Us
      </h2>

      {/* Swiper Container for testimonials */}
      <Swiper
        modules={[Navigation, Autoplay]} // Enabling navigation and autoplay modules
        spaceBetween={-10} // Negative spacing between slides
        slidesPerView={1.2} // Initial number of slides visible
        centeredSlides={true} // Center the active slide
        loop={true} // Enable infinite looping
        autoplay={{ delay: 6000 }} // Autoplay interval of 6 seconds
        navigation={false} // Disable default navigation
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance in useRef
        breakpoints={{
          300: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 1.4 },
          1024: { slidesPerView: 1.6 },
        }} // Adjust slidesPerView based on screen width
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            {({ isActive }) => (
              <motion.div
                className="w-full flex items-center bg-[#1a1a1a] border border-gray-300 shadow-lg rounded-lg p-2 lg:p-6 transition-all duration-500"
                style={{
                  transform: isActive ? "scale(1)" : "scale(0.9)", // Scale active slide
                  opacity: isActive ? 1 : 0.3, // Reduce opacity for inactive slides
                }}
              >
                {/* Left Side: Name & Profile */}
                <div className="w-1/4 md:w-[30%] text-center">
                  <img
                    src={testimonial.image} // Client image
                    alt={testimonial.name}
                    loading="lazy" // Lazy load images for performance
                    className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full mx-auto mb-3"
                  />
                  <h4 className="text-md md:text-lg lg:text-xl tracking-[1px] text-white mb-1">
                    {testimonial.name} {/* Client name */}
                  </h4>
                  <p className="xs:text-xs sm:text-sm md:text-md lg:text-xl text-gray-300 mb-2 tracking-[1px]">
                    {testimonial.company} {/* Client company name */}
                  </p>
                </div>

                {/* Divider Line */}
                <div className="h-32 w-px bg-gray-300 mx-4"></div>

                {/* Right Side: Feedback */}
                <div className="w-3/4 md:w-[70%] text-left text-sm md:text-md lg:text-lg tracking-[1px] md:tracking-[2px] text-gray-400">
                  <p dangerouslySetInnerHTML={{ __html: testimonial.feedback }} /> {/* Displaying feedback with HTML content */}
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
          onClick={() => swiperRef.current?.slidePrev()} // Move to previous slide
        >
          <FaChevronLeft className="text-xl text-gray-600" />
        </button>
        <button
          className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
          onClick={() => swiperRef.current?.slideNext()} // Move to next slide
        >
          <FaChevronRight className="text-xl text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection; // Exporting TestimonialSection component for use in other parts of the application
