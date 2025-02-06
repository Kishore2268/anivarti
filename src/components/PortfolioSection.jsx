import React, { useState, useEffect } from "react";
import { Reorder, motion } from "framer-motion";

const initialBrands = [
  { id: 1, name: "Brand 1", logo: "images/myntra-logo-1.webp" },
  { id: 2, name: "Brand 2", logo: "images/amazon-logo.webp" },
  { id: 3, name: "Brand 3", logo: "images/Flipkart-Logo.webp" },
  { id: 4, name: "Brand 4", logo: "images/Etsy-logo.webp" },
  { id: 5, name: "Brand 5", logo: "images/meesho-logo.webp" },
  { id: 6, name: "Brand 6", logo: "images/Ajio-Logo.webp" },
];

const PortfolioSection = () => {
  const [brands, setBrands] = useState(initialBrands);

  // Shuffle brands every 2 seconds (you can trigger this manually instead)
  useEffect(() => {
    const interval = setInterval(() => {
      setBrands((prevBrands) => [...prevBrands].sort(() => Math.random() - 0.5));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1a1a1a] w-[95%] lg:w-full lg:max-w-7xl mx-auto px-2 lg:px-6 py-8 lg:py-16  flex flex-col border border-gray-200 rounded-2xl lg:flex-row items-center gap-10 lg:gap-6 mb-16 mt-16 ">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h3 className="text-xl lg:text-5xl tracking-[3px] font-light lg:tracking-[5px] text-white mb-4 lg:mb-6">Our Portfolio</h3>
        <p className="text-sm text-gray-300 lg:text-lg tracking-[2px] mb-6 lg:mb-8">
          We collaborate with top-tier brands to deliver outstanding solutions. Our commitment to quality and innovation has built long-lasting partnerships.
        </p>
        <a
          href="https://forms.gle/your-google-form-link" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-electricBlue text-md lg:text-lg text-white py-3 px-6 rounded-lg  tracking-[1px]  transition"
        >
          Book a Free Consultation
        </a>
      </div>

      {/* Right Content: Brand Logos with Reorder Animation */}
      <Reorder.Group
        as="div"
        axis="y"
        values={brands}
        onReorder={setBrands}
        className="lg:w-1/2 lg:flex lg:flex-wrap md:w-1/2 md:flex md:flex-wrap grid grid-cols-3 justify-center gap-3 md:gap-6 lg:gap-6"
      >
        {brands.map((brand) => (
          <Reorder.Item key={brand.id} value={brand} className="cursor-pointer list-none">
            <motion.div
              layout
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md p-4 rounded-lg"
            >
              <img src={brand.logo} alt={brand.name} className="w-20 h-10 md:w-24 md:h-12 lg:w-32 lg:h-20" />
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default PortfolioSection;
