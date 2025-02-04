import React, { useEffect } from "react";

const ImageSlider = ({ images, currentIndex }) => {
  // Add the "page-loaded" class to the body after the component mounts
  useEffect(() => {
    document.body.classList.add("page-loaded");
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Image Container */}
      <div className="about-img-container">
        <div className="slide-img">
          <img
            src={`/images/${images[currentIndex]}`}
            alt="Slider"
            className="w-full h-full object-cover wave-effect"
          />
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          /* General Styles */
          .about-img-container {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
          }

          .slide-img {
            position: absolute;
            left: -30vw;
            transition: 1s cubic-bezier(0.67, 0.02, 0.2, 0.97);
          }

          .slide-img img {
            display: block;
            width: 62vw;
            height: 100vh;
            object-fit: cover;
            transition: 1.2s cubic-bezier(0.67, 0.02, 0.2, 0.97) 0.65s;
          }

          /* Page Loaded Styles */
          .page-loaded .slide-img {
            left: 0;
          }

          .page-loaded .slide-img img {
            width: 100vw;
          }

          /* Wave Effect (Mask Image) */
          .wave-effect {
            mask-image: linear-gradient(to bottom, transparent 20%, black 20%, black 80%, transparent 80%);
            animation: wave 3s infinite linear;
          }

          /* Wave Animation */
          @keyframes wave {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px); /* You can adjust this value for higher/lower waves */
            }
            100% {
              transform: translateY(0);
            }
          }

          /* Responsive Styles */
          @media only screen and (max-width: 880px) {
            .page-loaded .slide-img {
              left: 0;
            }

            .slide-img img {
              width: 100vw;
            }

            .wave-effect {
              mask-image: linear-gradient(to bottom, transparent 15%, black 15%, black 85%, transparent 85%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ImageSlider;
