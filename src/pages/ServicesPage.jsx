import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa"; // Up arrow icon
import Services from "../components/Services";

const ServicesPage = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when user scrolls down
  const checkScrollTop = () => {
    if (!showButton && window.scrollY > 500) {
      setShowButton(true);
    } else if (showButton && window.scrollY <= 500) {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showButton]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative">
      {/* Back to Homepage link with icon */}
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)} // Scroll to top when navigating back
        className="absolute top-6 left-8 flex items-center text-blue-500 hover:text-blue-700 font-medium"
      >
        <FaArrowLeft className="mr-2" /> Back to Homepage
      </Link>

      <Services />

      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-electricBlue text-xl text-gray-950 rounded-full shadow-lg hover:bg-sky-400 focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ServicesPage;

