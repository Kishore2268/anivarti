import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";
import Services from "../components/Services";
const ServicesPage = () => {
  // State to control the visibility of the scroll-to-top button
  const [showButton, setShowButton] = useState(false);

  // Function to check the scroll position and toggle the button visibility
  const checkScrollTop = useCallback(() => {
    if (!showButton && window.scrollY > 500) {
      setShowButton(true); // Show button if scrolled past 500px
    } else if (showButton && window.scrollY <= 500) {
      setShowButton(false); // Hide button if scrolled above 500px
    }
  }, [showButton]); // Dependency ensures re-execution when `showButton` changes

  // useEffect to add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop); // Add listener on mount
    return () => window.removeEventListener("scroll", checkScrollTop); // Cleanup on unmount
  }, [checkScrollTop]); // Runs when `checkScrollTop` changes

  // Function to smoothly scroll back to the top of the page
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="relative mt-20">
      {/* Back to Homepage link (Top Left) */}
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className="absolute top-8 left-4 lg:top-6 lg:left-8 underline flex items-center text-blue-500 hover:text-blue-700 font-medium"
      >
        <FaArrowLeft className="mr-2" /> Back to Homepage
      </Link>

      {/* Render Services component */}
      <Services />

      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 lg:bottom-8 lg:right-8 p-3 bg-electricBlue text-xl text-gray-950 z-50 rounded-full shadow-lg hover:bg-[#286d7e] focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Back to Homepage link (Bottom Right) */}
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className="absolute right-4 lg:bottom-6 lg:right-8 underline text-blue-500 hover:text-blue-700 font-medium"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default ServicesPage;
