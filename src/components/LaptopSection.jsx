import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LaptopSection = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate scale and position based on scroll
  const scale = Math.min(0.1 + scrollY / 500, 1); // Limit scaling
  // Apply a smooth upward transition for the laptop section
  const translateY = Math.min(scrollY, 200); // Limit the upward translation

  return (
    <section
      className="h-auto bg-white flex justify-center items-center "
      style={{
        transform: `translateY(-${translateY}px)`, // Smooth upward translation based on scrollY
        transition: "transform 0.5s ease-out", // Smooth transition for the movement
      }}
    >
      <div className="relative w-full lg:w-[80%] xl:w-[60%]">
        {/* Laptop Image */}
        <div
          className="relative bg-contain bg-no-repeat lg:bg-cover bg-center w-[95%] lg:w-full h-[400px] lg:h-[600px] rounded-lg"
          style={{
            backgroundImage:
              "url('https://cdn.prod.website-files.com/64710a58deace073b8c4a98a/64710a58deace073b8c4ab7a_Macbook%20Image.webp')", // Laptop image URL
          }}
        >
          {/* Scalable Image inside the laptop display */}
          <motion.div
            className="absolute top-[57px] left-[38px] w-[79%] h-[70%] lg:top-[32px] lg:left-[97px] lg:w-[81%] lg:h-[85%] bg-contain bg-no-repeat lg:bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://cdn.prod.website-files.com/64710a58deace073b8c4a98a/64724218cb63b9f6b8d27c3c_her-final.webp')", // Default app image URL
            }}
            animate={{
              scale: scale,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
          />
        </div>

        {/* Image inside the laptop with srcset for responsive images */}
        <picture>
          {/* For small screens: 500w, 800w, 1080w, 1600w images */}
          <source
            srcSet="https://cdn.prod.website-files.com/64710a58deace073b8c4a98a/64724218cb63b9f6b8d27c3c_her-final-p-500.webp 500w,"
            media="(max-width: 767px)"
          />
          {/* For larger screens: 1727w image */}
          <source
            srcSet="https://cdn.prod.website-files.com/64710a58deace073b8c4a98a/64724218cb63b9f6b8d27c3c_her-final.webp 1727w"
            media="(min-width: 768px)"
          />
        </picture>
      </div>
    </section>
  );
};

export default LaptopSection;
