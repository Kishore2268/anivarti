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
  const scale = Math.min(0.1 + scrollY / 300, 1); // Limit scaling
  const translateY = Math.min(scrollY, 75); // Limit the upward translation

  return (
    <section
      className="laptop-section mb-1 lg:mb-6"
      style={{ transform: `translateY(-${translateY}px)` }}
    >
      <div className="laptop">
        <div className="screen">
          <div className="lcd">
            {/* Background image placed inside the laptop screen */}
            <motion.img
              src="https://cdn.prod.website-files.com/64710a58deace073b8c4a98a/64724218cb63b9f6b8d27c3c_her-final.webp"
              alt="Laptop Screen"
              className="screen-bg"
              animate={{
                scale: scale,
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
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
