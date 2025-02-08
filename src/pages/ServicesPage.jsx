import React, { useCallback, useState, useEffect } from "react";
import { Link, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";
import Services from "../components/Services";

// Import all service pages
import Marketplaces from "../components/Marketplaces";
import MarketplaceCreation from "../components/MarketplaceCreations";
import SocialPresence from "../components/SocialPresence";
import Branding from "../components/Branding";
import Marketing from "../components/Marketing";
import Payment from "../components/Payment";
import Logistics from "../components/Logistics";
import FinanceAccounting from "../components/FinanceAccounting";
import MarketResearch from "../components/MarketResearch";
import OmniChannelDistribution from "../components/OmniChannelDistribution";

const ServicesPage = () => {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation(); // Get current route

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
    <div className="relative mt-20">
      {/* Back to Homepage link */}
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className="absolute top-8 left-4 lg:top-6 lg:left-8 flex items-center text-blue-500 hover:text-blue-700 font-medium"
      >
        <FaArrowLeft className="mr-2" /> Back to Homepage
      </Link>

      {/* Render Services component only on /services route */}
      {location.pathname === "/services" && <Services />}

      {/* Nested Routes for Service Details */}
      <Routes>
        <Route path="marketplaces" element={<Marketplaces />} />
        <Route path="marketplace-creation" element={<MarketplaceCreation />} />
        <Route path="social-presence" element={<SocialPresence />} />
        <Route path="branding" element={<Branding />} />
        <Route path="marketing" element={<Marketing />} />
        <Route path="payment" element={<Payment />} />
        <Route path="logistics" element={<Logistics />} />
        <Route path="finance-accounting" element={<FinanceAccounting />} />
        <Route path="market-research" element={<MarketResearch />} />
        <Route path="omni-channel-distribution" element={<OmniChannelDistribution />} />
      </Routes>

      {/* Back to Homepage link */}
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className="absolute bottom-6 right-4 lg:bottom-6 lg:right-8 flex items-center text-blue-500 hover:text-blue-700 font-medium"
      >
        <FaArrowLeft className="mr-2" /> Back to Homepage
      </Link>

      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 lg:bottom-8 lg:right-8 p-3 bg-electricBlue text-xl text-gray-950 z-50 rounded-full shadow-lg hover:bg-[#286d7e] focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
      
      {/* Render Nested Route Component */}
      <Outlet />
    </div>
  );
};

export default ServicesPage;
