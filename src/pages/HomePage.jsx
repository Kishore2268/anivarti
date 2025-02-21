import React, { useCallback, useState, useEffect } from "react"; 
// Importing React along with useCallback, useState, and useEffect hooks

// Importing various sections of the homepage
import BannerSection from "../components/BannerSection";
import ServicesSection from "../components/ServicesSection";
import PartnersSection from "../components/PartnersSection";
import LaptopSection from "../components/LaptopSection";
import Contact from "../components/Contact";
import TestimonialSection from "../components/Testimonials";
import PortfolioSection from "../components/PortfolioSection";

// Importing an icon for the scroll-to-top button
import { FaArrowUp } from "react-icons/fa";

const HomePage = () => {
  // State to manage the visibility of the scroll-to-top button
  const [showButton, setShowButton] = useState(false);

  // Function to check if the scroll position is beyond 500px
  const checkScrollTop = useCallback(() => {
    if (!showButton && window.scrollY > 500) {
      setShowButton(true); // Show the button when scrolled down past 500px
    } else if (showButton && window.scrollY <= 500) {
      setShowButton(false); // Hide the button when scrolled up
    }
  }, [showButton]); // Dependency array ensures re-execution when `showButton` changes

  // useEffect hook to add and remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop); // Add event listener on mount
    return () => window.removeEventListener("scroll", checkScrollTop); // Cleanup on unmount
  }, [checkScrollTop]); // Runs when `checkScrollTop` changes

  // Function to smoothly scroll back to the top of the page
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="w-full overflow-hidden">
      {/* Banner Section */}
      <section id="banner">
        <BannerSection />
      </section>

      {/* Laptop Section */}
      <LaptopSection />

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Partners Section */}
      <section id="partners">
        <PartnersSection />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <PortfolioSection />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <TestimonialSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 lg:bottom-8 lg:right-8 p-3 bg-electricBlue text-xl text-gray-950 z-50 rounded-full shadow-lg hover:bg-[#286d7e] focus:outline-none"
        >
          <FaArrowUp /> {/* Upward arrow icon */}
        </button>
      )}
    </div>
  );
};

export default HomePage; // Exporting the HomePage component for use in other parts of the application



