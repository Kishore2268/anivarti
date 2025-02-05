import React from "react";
import { FaHandPointDown } from "react-icons/fa";
import { motion } from "framer-motion";

const BannerSection = () => {
  // Define animations for each section
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 1 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 1 } },
  };

  return (
    <section className="h-screen bg-white flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-between items-center w-[95%] lg:w-[85%] px-4">
        <div className="w-full text-left">
          {/* Heading Animation */}
          <motion.h1
            className="text-2xl lg:text-7xl  font-semibold text-electricBlue text-center tracking-[5px]"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            Hey,We're ANIVARTI👋
          </motion.h1>

          {/* Paragraph Animation */}
          <motion.p
            className="mt-6 lg:mt-12 text-md lg:text-2xl  text-gray-500 w-[95%] lg:w-[70%]  mx-auto text-center tracking-[2px]"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
          >
            Unlock your growth potential with tailored digital solutions. We’ve got everything you need to scale your eCommerce, branding, and
            operations effortlessly!
          </motion.p>

          {/* Button Animation */}
          <motion.button
            className="text-gray-700 bg-electricBlue px-6 py-2 mt-6 lg:mt-12 text-sm lg:text-lg  mx-auto flex items-center justify-center tracking-[1px]"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            Explore More About Us
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="ml-2 text-lg lg:text-xl"
            >
              <FaHandPointDown />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
