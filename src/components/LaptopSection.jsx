import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LaptopSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = Math.min(0.1 + scrollY / 600, 1); // Smooth scaling
  const opacity = Math.max(1 - scrollY / 600, 0); // Fade effect
  const translateY = Math.min(scrollY , 75); // Limit the upward translation

  return (
    <section
      className="laptop-section mb-8 bg-black lg:mb-12"
      style={{ transform: `translateY(-${translateY}px)` }}
    >
      <div className="laptop">
        <div className="screen">
          <div className="lcd">
            {/* Animated background scales up */}
            <motion.img
              src="https://cdn.prod.website-files.com/64710a58deace073b8c4a98a/64724218cb63b9f6b8d27c3c_her-final.webp"
              alt="Laptop Screen"
              className="screen-bg"
              style={{ transformOrigin: "center" }}
              loading="lazy"
              animate={{
                scale: scale,
                transition: { type: "spring", stiffness: 100, damping: 20 },
              }}
            />
            {/* Default image fades out */}
            <motion.img
              src="https://cdn.prod.website-files.com/64710a58deace073b8c4a98a/64710a58deace073b8c4abaa_Hero%20BG%20Image.webp"
              alt="Gradient Laptop Screen"
              className="default-screen"
              loading="lazy"
              animate={{ opacity: opacity }}
            />
          </div>
          <div className="glass_frame"></div>
          <div className="screen_reflection"></div>
        </div>
        <div className="keyboard top"></div>
        <div className="keyboard bottom"></div>
      </div>
    </section>
  );
};

export default LaptopSection;

