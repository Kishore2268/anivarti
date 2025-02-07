import React, { useState, useEffect } from "react";
import { Reorder, motion } from "framer-motion";

const initialBrands = [
  { id: 1, name: "Pretty Living Thing", logo: "images/PLT.webp" },
  { id: 2, name: "Big Flex Marketing", logo: "images/bigflex.png" },
  { id: 3, name: "ARR", logo: "images/arrr.png" },
  { id: 4, name: "Rock MidWest Group Granite", text: "Rock MidWest Group Granite" },
  { id: 5, name: "Gulabo", logo: "images/gulabo.jpg" },
  { id: 6, name: "Kriti", logo: "images/kriti.png" },
];

const PortfolioSection = () => {
  const [brands, setBrands] = useState(initialBrands);

  // Shuffle brands every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBrands((prevBrands) => [...prevBrands].sort(() => Math.random() - 0.5));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-24">
      <div className="bg-[#1a1a1a] w-[90%] md:w-[90%] lg:w-[85%] mx-auto px-2 py-8 lg:px-6 lg:py-12 flex flex-col border border-gray-200 rounded-2xl lg:flex-row items-center gap-6 lg:gap-6">
        {/* Left Content */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h3 className="text-2xl lg:text-5xl tracking-[3px] font-light lg:tracking-[5px] text-white mb-4 lg:mb-8">
            Our Portfolio
          </h3>
          <p className="text-sm text-gray-300 lg:text-2xl tracking-[2px] mb-6 lg:mb-10">
            We collaborate with top-tier brands to deliver outstanding solutions. Our commitment to quality and innovation has built long-lasting partnerships.
          </p>
          <a
            href="https://forms.gle/your-google-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-electricBlue text-md md:text-lg text-white py-3 px-6 rounded-lg tracking-[1px] transition"
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
          className="lg:w-2/3 lg:flex lg:flex-wrap md:w-full md:flex md:flex-wrap grid grid-cols-2 justify-center gap-3 md:gap-6 lg:gap-6"
        >
          {brands.map((brand) => (
            <Reorder.Item key={brand.id} value={brand} drag={false} className="cursor-pointer list-none">
              <motion.div
                layout
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-md flex items-center justify-center"
              >
                {brand.logo ? (
                  <img src={brand.logo} alt={brand.name} loading="lazy" className="w-56 h-28 md:w-64 md:h-36 lg:w-64 lg:h-36" />
                ) : (
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold w-56 h-28 md:w-64 md:h-36 lg:w-64 lg:h-36 text-center  py-8 md:py-10 lg:py-10 text-black bg-white">{brand.text}</p>
                )}
              </motion.div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
};

export default PortfolioSection;
