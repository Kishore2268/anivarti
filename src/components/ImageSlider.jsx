import React, { useEffect } from "react";

const ImageSlider = ({ images, currentIndex, setCurrentIndex, sectionIds }) => {
  // Handle prev button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Sync manual slider change with scrolling
  useEffect(() => {
    if (sectionIds[currentIndex]) {
      const sectionElement = document.getElementById(sectionIds[currentIndex]);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [currentIndex]);
  

  return (
    <div className="relative w-full h-screen">
      <div className="transition-all duration-500 ease-in-out">
        <img
          key={currentIndex}
          src={`/images/${images[currentIndex]}`}
          alt="Slider"
          className="object-cover w-full h-screen"
        />
      </div>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white bg-black p-4 rounded-full"
      >
        &lt;
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white bg-black p-4 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;



