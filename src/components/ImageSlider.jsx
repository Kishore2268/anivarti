import React, { useEffect } from "react";

const ImageSlider = ({ images, currentIndex, setCurrentIndex, sectionIds }) => {

  // Sync scrolling with manual slider change
  useEffect(() => {
    if (sectionIds[currentIndex]) {
      const sectionElement = document.getElementById(sectionIds[currentIndex]);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [currentIndex]);
  

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Image Transition Effect */}
      <div className="transition-opacity duration-100 ease-in-out opacity-100">
        <img
          key={currentIndex}
          src={`/images/${images[currentIndex]}`}
          alt="Slider"
          className="object-cover w-full h-screen"
        />
      </div>
    </div>
  );
};

export default ImageSlider;



