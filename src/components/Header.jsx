import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react"; // Lucide icons
import clsx from "clsx"; // Utility for conditional classNames

const sections = [
  "services",
  "partners",
  "portfolio",
  "testimonials",
  "contact",
];
const ecommerceLinks = [
  { name: "Flipkart Account Management", path: "/services/flipkart" },
  { name: "Amazon Account Management", path: "/services/amazon" },
  { name: "Ajio Account Management", path: "/services/ajio" },
  { name: "BigBasket Account Management", path: "/services/bigbasket" },
  { name: "Etsy Account Management", path: "/services/etsy" },
  { name: "Myntra Account Management", path: "/services/myntra" },
  { name: "Nykaa Account Management", path: "/services/nykaa" },
  { name: "Blinkit Account Management", path: "/services/blinkit" },
  { name: "Zepto Account Management", path: "/services/zepto" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // Toggle function for services dropdown
  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Toggle Services dropdown
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setActiveSection("");
  };

  const handleScroll = useCallback(() => {
    let currentSection = "";
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= 100 && bottom > 100) {
          currentSection = id;
        }
      }
    });

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(
        () =>
          document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" }),
        700
      );
    } else {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(handleScroll, 1500);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-md shadow-lg border-b border-gray-700 z-50">
      <div className="flex justify-between items-center w-[95%] md:w-[90%] lg:w-[95%] mx-auto py-2 px-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          <img
            src="/images/anivarti-logo.webp"
            alt="Anivarti Logo"
            className="h-12 md:h-16 px-2 bg-transparent w-auto rounded-md"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <button
            onClick={handleHomeClick}
            className={clsx(
              "relative text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] pb-1.5 after:block after:h-[3px] after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100",
              {
                "text-[#00DEFC] after:scale-x-100":
                  activeSection === "" && location.pathname === "/",
              }
            )}
          >
            Home
          </button>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onClick={toggleDropdown}
              className={clsx(
                "flex items-center text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] after:block after:h-[3px] after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                (location.pathname.startsWith("/services") ||
                  activeSection === "services") &&
                  "text-[#00DEFC] after:scale-x-100"
              )}
            >
              Services{" "}
              <ChevronDown className="ml-1.5 group-hover:text-white w-5 h-5" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-72 bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                {/* 10ka Dum Services */}
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left px-4 py-3 text-white hover:bg-[#00DEFC]"
                >
                  1.Our 10kaDum Services
                </button>

                {/* Ecommerce Management Services */}
                <div className="border-t border-gray-700">
                  <span className="block px-4 py-2 text-md text-white">
                    2. Ecommerce Management Services
                  </span>
                  {ecommerceLinks.map((link, index) => (
                    <React.Fragment key={link.path}>
                      <a
                        href={link.path}
                        className="block px-4 py-3 text-white hover:bg-[#00DEFC]"
                      >
                        {link.name}
                      </a>
                      {/* Add separator except after the last link */}
                      {index !== ecommerceLinks.length - 1 && (
                        <div className="border-t border-gray-700"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other Sections */}
          {sections.slice(1).map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={clsx(
                "text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] after:block after:h-[3px] after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                { "text-[#00DEFC] after:scale-x-100": activeSection === id }
              )}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        {/* Consultation Button */}
        <a
          href="https://in.bigin.online/anivarti/forms/free"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-electricBlue text-md xl:text-lg tracking-[1px] text-white py-2 lg:px-6 hidden lg:block rounded-full font-medium hover:bg-[#286d7e]">
            Book a Free Consultation
          </button>
        </a>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="lg:hidden text-white">
          {isMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-40 backdrop-blur-md shadow-lg transition-all duration-500">
          <nav className="flex flex-col items-start py-6 space-y-6 px-4">
            {/* Home */}
            <button
              onClick={handleHomeClick}
              className={clsx(
                "relative text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] pb-1.5 after:block after:h-[3px] after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                {
                  "text-[#00DEFC] after:scale-x-100":
                    activeSection === "" && location.pathname === "/",
                }
              )}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <button
              onClick={toggleMobileDropdown}
              className={clsx(
                "flex items-center text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] after:block after:h-[3px] after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                (location.pathname.startsWith("/services") ||
                  activeSection === "services") &&
                  "text-[#00DEFC] after:scale-x-100"
              )}
            >
              Services{" "}
              <ChevronDown className="ml-1.5 group-hover:text-white w-5 h-5" />
            </button>

            {isMobileDropdownOpen && (
              <div className="pl-4">
                {/* 1. Our 10ka Dum Services */}
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left text-white text-lg font-medium py-1 hover:text-[#00DEFC]"
                >
                  1. Our 10ka Dum Services
                </button>

                {/* Divider Line */}
                <div className="border-t border-gray-700 my-2"></div>

                {/* 2. Ecommerce Management Services */}
                <span className="block text-white text-sm uppercase py-2">
                  2. Ecommerce Management
                </span>

                {ecommerceLinks.map((link) => (
                  <>
                    <a
                      key={link.path}
                      href={link.path}
                      className="block text-white text-lg py-3 hover:text-[#00DEFC]"
                    >
                      {link.name}
                    </a>
                    {/* Thin separator between links */}
                    <div className="border-t border-gray-700"></div>
                  </>
                ))}
              </div>
            )}

            {/* Other Sections */}
            {sections.slice(1).map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={clsx(
                  "text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] after:block after:h-[3px] after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                  { "text-[#00DEFC] after:scale-x-100": activeSection === id }
                )}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            {/* Book a Free Consultation */}
            <a
              href="https://in.bigin.online/anivarti/forms/free"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-electricBlue text-md tracking-[1px] text-white py-2 px-6 rounded-full font-medium hover:bg-[#286d7e]">
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
