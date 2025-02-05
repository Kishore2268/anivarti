import React from "react";
import BannerSection from "../components/BannerSection";
import ServicesSection from "../components/ServicesSection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";
import LaptopSection from "../components/LaptopSection";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <BannerSection />
      <LaptopSection />
      <ServicesSection />
      <PartnersSection />
      <Contact />
      <hr className="h-1 w-full text-gray-200" />
      <Footer />
    </div>
  );
};

export default HomePage;
