import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ServicesHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const serviceLinks = [
    { path: "/services/marketplaces", label: "Marketplaces" },
    { path: "/services/marketplace-creation", label: "Marketplace Creation" },
    { path: "/services/social-presence", label: "Social Presence" },
    { path: "/services/branding", label: "Branding" },
    { path: "/services/marketing", label: "Marketing" },
    { path: "/services/payment", label: "Payment" },
    { path: "/services/logistics", label: "Logistics" },
    { path: "/services/finance-accounting", label: "Finance & Accounting" },
    { path: "/services/market-research", label: "Market Research" },
    {
      path: "/services/omni-channel-distribution",
      label: "Omni-Channel Distribution",
    },
  ];

  const isServiceActive = location.pathname === "/services";
  const isDropdownLinkActive = serviceLinks.some(
    (link) => location.pathname === link.path
  );

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-md shadow-lg border-b border-gray-400 z-50">
      <div className="flex justify-between items-center w-[95%] md:w-[90%] lg:w-[95%] mx-auto py-2 px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img
              src="/images/anivarti-logo.webp"
              alt="Anivarti Logo"
              className="h-10 md:h-16 px-2 bg-transparent w-auto rounded-md"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className={`relative text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] pb-1.5 after:content-[''] after:block after:h-[3px] after:mt-1 after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
              location.pathname === "/"
                ? "text-[#00DEFC] after:scale-x-100"
                : ""
            }`}
          >
            Home
          </Link>

          {/* Services Link */}
          <Link
            to="/services"
            className={`relative text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] pb-1.5 after:content-[''] after:block after:h-[3px] after:mt-1 after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
              isServiceActive ? "text-[#00DEFC] after:scale-x-100" : ""
            }`}
          >
            Services
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className={`relative text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] pb-1.5 after:content-[''] after:block after:h-[3px] after:mt-1 after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                isDropdownLinkActive ? "text-[#00DEFC] after:scale-x-100" : ""
              }`}
            >
              Services Explained ▼
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-black bg-opacity-80 backdrop-blur-md shadow-lg rounded-md py-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={`block px-4 py-2 text-white hover:bg-gray-700 ${
                      location.pathname === service.path
                        ? "bg-[#00DEFC] text-black font-bold"
                        : ""
                    }`}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Book a Free Consultation Button */}
        <a
          href="https://your-google-form-link.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#00DEFC] text-lg tracking-[1px] xs:hidden lg:block text-black py-2 px-6 rounded-full font-medium hover:bg-[#286d7e]">
            Book a Free Consultation
          </button>
        </a>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-black bg-opacity-80 backdrop-blur-md shadow-lg z-50 transition-all duration-500 ease-in-out">
          <nav className="flex flex-col items-center space-y-3 border-t-1 border-gray-400">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`relative text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] pb-1.5 after:content-[''] after:block after:h-[3px] after:mt-1 after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                location.pathname === "/"
                  ? "text-[#00DEFC] after:scale-x-100"
                  : ""
              }`}
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={closeMobileMenu}
              className={`relative text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] pb-1.5 after:content-[''] after:block after:h-[3px] after:mt-1 after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                isServiceActive ? "text-[#00DEFC] after:scale-x-100" : ""
              }`}
            >
              Services
            </Link>

            {/* Dropdown in Mobile */}
            <button
              onClick={toggleDropdown}
              className={`relative text-white text-md xl:text-lg font-medium hover:text-[#00DEFC] pb-1.5 after:content-[''] after:block after:h-[3px] after:mt-1 after:bg-[#00DEFC] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                isDropdownLinkActive ? "text-[#00DEFC] after:scale-x-100" : ""
              }`}
            >
              Services Explained {isDropdownOpen ? "▲" : "▼"}
            </button>

            {isDropdownOpen && (
              <div className="flex flex-col items-center w-[100%] p-2 space-y-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={closeMobileMenu}
                    className={`block px-4 py-2 text-white hover:bg-gray-700 ${
                      location.pathname === service.path
                        ? "bg-[#00DEFC] text-black font-bold"
                        : ""
                    }`}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Book a Free Consultation Button in Mobile */}
            <a
              href="https://your-google-form-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8"
            >
              <button className="bg-[#00DEFC] text-lg tracking-[1px] text-black py-2 mb-3 px-6 rounded-full font-medium hover:bg-[#286d7e]">
                Book a Free Consultation
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default ServicesHeader;
