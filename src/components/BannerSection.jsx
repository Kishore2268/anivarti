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
    <section className="h-screen bg-black flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-between items-center w-[100%] lg:w-[85%] px-2 lg:px-4">
        <div className="w-full text-left">
          {/* Heading Animation */}
          <motion.h1
            className="text-2xl lg:text-7xl  font-semibold text-white text-center tracking-[2px] lg:tracking-[5px]"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            Hey,We're{" "}
            <span className="text-2xl lg:text-7xl  font-semibold text-electricBlue text-center tracking-[3px] lg:tracking-[5px]">
              ANIVARTI👋
            </span>
          </motion.h1>

          {/* Paragraph Animation */}
          <motion.p
            className="mt-10 lg:mt-12 text-lg lg:text-2xl text-gray-300 w-[95%] lg:w-[70%]  mx-auto text-center tracking-[1px] lg:tracking-[2px]"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
          >
            One-stop solution for D2C brands and B2B companies,
            helping them scale, expand market reach, and optimize operations
            with customized strategies for growth and efficiency.
          </motion.p>

          {/* Button Animation */}
          <motion.button
            className="text-white bg-electricBlue px-6 py-2 mt-10 lg:mt-12 text-sm lg:text-lg rounded-lg mx-auto flex items-center justify-center tracking-[1px]"
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
