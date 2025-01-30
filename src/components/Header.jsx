import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Header Section
    <header className="fixed top-0 left-0 w-full bg-black shadow-lg border-b border-blue-950 z-50">
      <div className="flex justify-between items-center w-[80%] mx-auto py-4 px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-sky-400">
          <a href="/">ANIVARTI</a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-electricBlue hover:text-sky-600">
            Home
          </a>
          <a href="/contact" className="text-electricBlue hover:text-sky-600">
            Contact Us
          </a>
        </nav>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-electricBlue" aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-black shadow-md`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-electricBlue" aria-label="Close Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-4 py-4">
          <a href="/" className="text-electricBlue hover:text-sky-600">
            Home
          </a>
          <a href="/contact" className="text-electricBlue hover:text-sky-600">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
