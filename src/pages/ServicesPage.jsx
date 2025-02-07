import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";
import Services from "../components/Services";

const ServicesPage = () => {
  const [showButton, setShowButton] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (!showButton && window.scrollY > 500) {
      setShowButton(true);
    } else if (showButton && window.scrollY <= 500) {
      setShowButton(false);
    }
  }, [showButton]);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [checkScrollTop]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative mt-20">
      {/* Back to Homepage link with icon */}
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)} // Scroll to top when navigating back
        className="absolute top-8 left-4 lg:top-6 lg:left-8 flex items-center text-blue-500 hover:text-blue-700 font-medium"
      >
        <FaArrowLeft className="mr-2" /> Back to Homepage
      </Link>

      <Services />

      {/* Back to Homepage link with icon */}
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)} // Scroll to top when navigating back
        className="absolute bottom-6 right-4 lg:bottom-6 lg:right-8 flex items-center text-blue-500 hover:text-blue-700 font-medium"
      >
        <FaArrowLeft className="mr-2" /> Back to Homepage
      </Link>
      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 lg:bottom-8 lg:right-8 p-3 bg-electricBlue text-xl text-gray-950 z-50 rounded-full shadow-lg hover:bg-sky-400 focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ServicesPage;
