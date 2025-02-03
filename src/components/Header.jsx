import React, { useState } from "react";

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
          <a href="/" className="text-[#00DEFC] hover:text-blue-500 font-medium">
            Home
          </a>
          <a href="/contact" className="text-[#00DEFC] hover:text-blue-500 font-medium">
            Contact Us
          </a>
        </nav>

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
          <a href="/" className="text-[#00DEFC] hover:text-blue-500 font-medium">
            Home
          </a>
          <a href="/contact" className="text-[#00DEFC] hover:text-blue-500 font-medium">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

