import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerHeight = 100;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight, // Apply offset to avoid header overlap
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-md shadow-lg border-b border-gray-400 z-50">
      <div className="flex justify-between items-center w-[95%] lg:w-[80%] mx-auto py-2 px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">
            <img
              src="/images/anivarti-logo.jpg"
              alt="Anivarti Logo"
              className="h-16 w-auto rounded-md"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="/"
            className="text-white hover:text-[#00DEFC] font-medium relative"
          >
            Home
          </a>
          <button
            onClick={() => scrollToSection("services")}
            className="text-white hover:text-[#00DEFC] font-medium relative"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("partners")}
            className="text-white hover:text-[#00DEFC] font-medium relative"
          >
            Our Partners
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-white hover:text-[#00DEFC] font-medium relative"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-white hover:text-[#00DEFC] font-medium relative"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-[#00DEFC] font-medium relative"
          >
            Contact Us
          </button>
        </nav>

        {/* Book a Free Consultation Button */}
        <a
          href="https://your-google-form-link.com" // Replace with your Google Form link
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#00DEFC] text-white py-2 lg:px-6 hidden lg:block rounded-full font-medium hover:bg-[#009CC3]">
            Book a Free Consultation
          </button>
        </a>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Glass Background */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } bg-black bg-opacity-40 backdrop-blur-md shadow-lg z-50 transition-all duration-500 ease-in-out`}
      >
        <nav className="flex flex-col items-center space-y-6 py-6 px-4">
          <a
            href="/"
            className="text-white hover:text-[#00DEFC] font-medium relative"
          >
            Home
          </a>
          <button
            onClick={() => scrollToSection("services")}
            className="text-white hover:text-[#00DEFC] font-medium text-xl"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("partners")}
            className="text-white hover:text-[#00DEFC] font-medium text-xl"
          >
            Our Partners
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-white hover:text-[#00DEFC] font-medium text-xl"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-white hover:text-[#00DEFC] font-medium text-xl"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-[#00DEFC] font-medium text-xl"
          >
            Contact Us
          </button>

          {/* Mobile Call to Action Button */}
          <a
            href="https://your-google-form-link.com" // Replace with your Google Form link
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#00DEFC] text-white py-2 px-2 lg:px-6 rounded-full font-medium hover:bg-[#009CC3]">
              Book a Free Consultation
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
