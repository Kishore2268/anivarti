import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg border-b border-[#00DEFC] z-50">
      <div className="flex justify-between items-center w-[80%] mx-auto py-4 px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#00DEFC]">
          <a href="/">ANIVARTI</a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="#banner" // Link to Banner Section
            className="text-[#00DEFC] hover:text-blue-500 font-medium relative"
            activeClassName="active" // Active class to trigger the underline animation
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00DEFC] transition-all duration-300"></span>
          </NavLink>
          <NavLink
            to="#services" // Link to Services Section
            className="text-[#00DEFC] hover:text-blue-500 font-medium relative"
            activeClassName="active"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00DEFC] transition-all duration-300"></span>
          </NavLink>
          <NavLink
            to="#contact" // Link to Contact Section
            className="text-[#00DEFC] hover:text-blue-500 font-medium relative"
            activeClassName="active"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00DEFC] transition-all duration-300"></span>
          </NavLink>
        </nav>

        {/* Book a Call Button */}
        <button className="bg-[#00DEFC] text-white py-2 px-6 rounded-full font-medium hidden md:block hover:bg-[#009CC3]">
          Book a Free Consultation
        </button>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#00DEFC]" aria-label="Toggle Menu">
            {isMenuOpen ? (
              // Close Icon when menu is open
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon when menu is closed
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white shadow-md transition-all`}>
        <nav className="flex flex-col items-center space-y-4 py-4">
          <NavLink
            to="#banner"
            className="text-[#00DEFC] hover:text-blue-500 font-medium"
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            to="#services"
            className="text-[#00DEFC] hover:text-blue-500 font-medium"
            activeClassName="active"
          >
            Services
          </NavLink>
          <NavLink
            to="#partners"
            className="text-[#00DEFC] hover:text-blue-500 font-medium"
            activeClassName="active"
          >
            Our Partners
            </NavLink>
            <NavLink
            to="#Testimonials"
            className="text-[#00DEFC] hover:text-blue-500 font-medium"
            activeClassName="active"
          >
            Testimonials
            </NavLink>
          <NavLink
            to="#contact"
            className="text-[#00DEFC] hover:text-blue-500 font-medium"
            activeClassName="active"
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

