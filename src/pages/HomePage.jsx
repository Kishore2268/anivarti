import React, {useCallback , useState, useEffect } from "react";
import BannerSection from "../components/BannerSection";
import ServicesSection from "../components/ServicesSection";
import PartnersSection from "../components/PartnersSection";
import LaptopSection from "../components/LaptopSection";
import Contact from "../components/Contact";
import TestimonialSection from "../components/Testimonials";
import PortfolioSection from "../components/PortfolioSection";
import { FaArrowUp } from "react-icons/fa";

const HomePage = () => {
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
    <div className="w-full overflow-hidden">
      <section id="banner">
        <BannerSection />
      </section>
      <LaptopSection />
      <section id="services">
        <ServicesSection />
      </section>
      <section id="partners">
        <PartnersSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="testimonials">
        <TestimonialSection />
      </section>
      <section id="contact">
        <Contact />
      </section>

      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 lg:bottom-8 lg:right-8 p-3 bg-electricBlue text-xl text-gray-950 z-50 rounded-full shadow-lg hover:bg-[#286d7e] focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default HomePage;


