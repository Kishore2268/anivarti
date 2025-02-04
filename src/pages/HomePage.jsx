import React from "react";
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
import LaptopSection from "../components/LaptopSection";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <BannerSection />
      <LaptopSection />
      <ServicesSection />
      <PartnersSection />
      <ExpertSolutionsSection />
      <WhyChooseUsSection />
      <WhatWeCoverSection />
      <BenefitsSection />
      <Ecommerce />
      <PrefferedSection />
      <Contact />
      <hr className="h-1 w-full text-gray-200" />
      <Footer />
    </div>
  );
};

export default HomePage;

