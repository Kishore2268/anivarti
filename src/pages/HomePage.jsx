import React, { useState, useEffect } from "react";
import BannerSection from "../components/BannerSection";
import ServicesSection from "../components/ServicesSection";
import PartnersSection from "../components/PartnersSection";
import ExpertSolutionsSection from "../components/ExpertSolutionsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import WhatWeCoverSection from "../components/WhatWeCoverSection";
import { BenefitsSection } from "../components/BenefitsSection";
import Ecommerce from "../components/Ecommerce";
import PrefferedSection from "../components/PrefferedSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionImages = [
    "digital.webp",
    "services.webp",
    "partners.webp",
    "expertSolutions.webp",
    "whychooseus.webp",
    "cover.webp",
    "benefits.webp",
    "ecommerce.webp",
    "preffered.webp",
    "contact.webp",
  ];

  const sectionIds = [
    "home",
    "services",
    "partners",
    "expertSolutions",
    "whyChooseUs",
    "whatWeCover",
    "benefits",
    "ecommerce",
    "preferred",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      let closestIndex = currentIndex;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          closestIndex = index;
        }
      });

      // Update currentIndex only if it's different
      if (closestIndex !== currentIndex) {
        setCurrentIndex(closestIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentIndex]);

  return (
    <div className="flex w-full overflow-hidden">
      {/* Left Side: Sections */}
      <div className="w-1/2 overflow-y-auto scroll-smooth">
        {sectionIds.map((id, index) => (
          <div key={id} className="section py-20 px-10" id={id}>
            {index === 0 && <BannerSection />}
            {index === 1 && <ServicesSection />}
            {index === 2 && <PartnersSection />}
            {index === 3 && <ExpertSolutionsSection />}
            {index === 4 && <WhyChooseUsSection />}
            {index === 5 && <WhatWeCoverSection />}
            {index === 6 && <BenefitsSection />}
            {index === 7 && <Ecommerce />}
            {index === 8 && <PrefferedSection />}
            {index === 9 && <Contact />}
          </div>
        ))}
        <hr className="h-1 w-full text-gray-200" />
        <Footer />
      </div>

      {/* Right Side: Fixed Image Slider */}
      <div className="w-1/2 fixed top-0 right-0 h-screen overflow-hidden">
        <ImageSlider images={sectionImages} currentIndex={currentIndex} />
      </div>
    </div>
  );
};

export default HomePage;
