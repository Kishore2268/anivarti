import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx"; // Utility for conditional classNames

// Define sections for navigation
const sections = ["services", "partners", "portfolio", "testimonials", "contact"];
const headerHeight = 100; // Fixed header height for calculations

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const [activeSection, setActiveSection] = useState(""); // Track active section while scrolling
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Hook to get current URL path

  // Function to toggle mobile menu state
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Handles click on Home button
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top if already on home
    } else {
      navigate("/"); // Navigate to home page
    }
    setActiveSection(""); // Reset active section to indicate Home is active
  };

  // Function to handle scroll and detect active section
  const handleScroll = useCallback(() => {
    let currentSection = "";
    let hasScrolledPastFirstSection = false;

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        if (top - headerHeight <= 100 && bottom - headerHeight > 100) {
          currentSection = id;
          hasScrolledPastFirstSection = true;
        }
      }
    });

    setActiveSection(hasScrolledPastFirstSection ? currentSection : "");
  }, []);

  // Attach and clean up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Scroll to a specific section with smooth animation
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 700);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(handleScroll, 1500); // Ensure active section updates after scrolling
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-md shadow-lg border-b border-gray-700 z-50">
      <div className="flex justify-between items-center w-[95%] md:w-[90%] lg:w-[95%] mx-auto py-2 px-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          <img src="/images/anivarti-logo.webp" alt="Anivarti Logo" className="h-12 md:h-16 px-2 bg-transparent w-auto rounded-md" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {/* Home Button */}
          <button
            onClick={handleHomeClick}
            className={clsx(
              "relative text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] pb-1.5 after:block after:h-[3px] after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100",
              { "text-[#00DEFC] after:scale-x-100": activeSection === "" && location.pathname === "/" }
            )}
          >
            Home
          </button>

          {/* Section Links */}
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={clsx(
                "relative text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] pb-1.5 after:block after:h-[3px] after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                { "text-[#00DEFC] after:scale-x-100": activeSection === id }
              )}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        {/* Consultation Button (Desktop) */}
        <a href="https://in.bigin.online/anivarti/forms/free" target="_blank" rel="noopener noreferrer">
          <button className="bg-electricBlue text-md xl:text-lg tracking-[1px] text-white py-2 lg:px-6 hidden lg:block rounded-full font-medium hover:bg-[#286d7e]">
            Book a Free Consultation
          </button>
        </a>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className="lg:hidden text-white">
          {isMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-40 backdrop-blur-md shadow-lg z-50 transition-all duration-500 ease-in-out">
          <nav className="flex flex-col items-center space-y-6 border-t-1 border-gray-700 py-6 px-4">
            {/* Mobile Home Button */}
            <button
              onClick={handleHomeClick}
              className={clsx(
                "relative text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] pb-1.5 after:block after:h-[3px] after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                { "text-[#00DEFC] after:scale-x-100": activeSection === "" && location.pathname === "/" }
              )}
            >
              Home
            </button>

            {/* Mobile Section Links */}
            {sections.map((id) => (
              <button key={id} onClick={() => scrollToSection(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}

            {/* Mobile CTA Button */}
            <a href="https://in.bigin.online/anivarti/forms/free">
              <button className="bg-[#00DEFC] text-white py-2 px-4 rounded-full font-medium hover:bg-[#009CC3]">
                Book a Free Consultation
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
