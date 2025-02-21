import React, { useState, useEffect, useRef } from "react";
import { Reorder, motion } from "framer-motion";

// brands logo images and texts for brands without proper logo
const initialBrands = [
  { id: 1, name: "Pretty Living Thing", logo: "images/PLT.webp" },
  { id: 2, name: "Big Flex Marketing", logo: "images/bigflex.png" },
  { id: 3, name: "ARR", logo: "images/arrr.png" },
  { id: 4, name: "Rock MidWest Group Granite", text: "Rock MidWest Group Granite" },
  { id: 5, name: "Gulabo", logo: "images/gulabo.jpg" },
  { id: 6, name: "Kriti", logo: "images/kriti.png" },
];

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const PortfolioSection = () => {
  const [brands, setBrands] = useState(initialBrands);
  const brandsRef = useRef(brands); // Ref to track state without triggering re-render

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffledBrands = shuffleArray(brandsRef.current);
      brandsRef.current = shuffledBrands; // Update ref value
      setBrands([...shuffledBrands]); // Trigger minimal re-render with new order
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="py-24">
      <h1 className="text-2xl md:text-4xl lg:text-5xl tracking-[3px] text-center font-light lg:tracking-[5px] text-white mb-4 lg:mb-8">
        Our Clients
      </h1>
      <div className="bg-[#1a1a1a] w-[95%] md:w-[85%] lg:w-[90%] mx-auto px-2 py-8 lg:px-6 lg:py-12 flex flex-col border border-gray-200 rounded-2xl lg:flex-row items-center gap-6 lg:gap-6">
        {/* Left Content */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h3 className="text-2xl md:text-4xl lg:text-5xl tracking-[3px] font-light lg:tracking-[5px] text-white mb-4 lg:mb-8">
            Our Portfolio
          </h3>
          <p className="text-sm md:text-md lg:text-xl text-gray-300 tracking-[2px] mb-6 lg:mb-10">
            We collaborate with top-tier brands to deliver outstanding solutions. Our commitment to quality and innovation has built long-lasting partnerships.
          </p>
          <a
            href="https://in.bigin.online/anivarti/forms/free"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-electricBlue text-md md:text-lg hover:bg-[#286d7e] text-white py-3 px-6 rounded-lg tracking-[1px] transition"
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
                  <img src={brand.logo} alt={brand.name} loading="lazy" className="w-56 h-28 md:w-56 md:h-28 lg:w-64 lg:h-36" />
                ) : (
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-stone-600 w-56 h-28 md:w-56 md:h-28 lg:w-64 lg:h-36 text-center py-8 md:py-10 lg:py-10 bg-white">{brand.text}</p>
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
