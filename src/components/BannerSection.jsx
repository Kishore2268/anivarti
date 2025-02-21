import React from "react"; // Importing React to use JSX syntax
import { FaHandPointDown } from "react-icons/fa"; // Importing an icon from react-icons
import { motion } from "framer-motion"; // Importing motion for animations from Framer Motion

const BannerSection = () => {
  // Define animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -50 }, // Initially hidden with opacity 0 and moved up by 50px
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Fades in and moves to original position over 1 second
  };

  // Define animation variants for the paragraph
  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 }, // Initially hidden with opacity 0 and moved left by 50px
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1 } }, // Fades in and moves to original position after 0.5s delay
  };

  // Define animation variants for the button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Initially hidden with opacity 0 and slightly scaled down
    visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 1 } }, // Fades in and scales to normal size after 1s delay
  };

  // Define animation variants for the icon inside the button
  const iconVariants = {
    hidden: { opacity: 0, y: 10 }, // Initially hidden with opacity 0 and moved down by 10px
    visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 1 } }, // Fades in and moves to original position after 1.2s delay
  };

  return (
    // Section container with full-screen height and centered content
    <section className="h-screen bg-black flex justify-center items-center">
      {/* Main container with flexible layout for responsiveness */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-[100%] lg:w-[85%] px-2 lg:px-4">
        {/* Content wrapper with full width and left-aligned text */}
        <div className="w-full text-left">
          {/* Heading with animation */}
          <motion.h1
            className="text-2xl lg:text-7xl font-semibold text-white text-center tracking-[2px] lg:tracking-[5px]"
            variants={headingVariants} // Applying animation variants
            initial="hidden" // Initial animation state
            animate="visible" // Final animation state
          >
            Hey, We're{" "}
            <span className="text-2xl lg:text-7xl font-semibold text-electricBlue text-center tracking-[3px] lg:tracking-[5px]">
              ANIVARTI👋
            </span>
          </motion.h1>

          {/* Paragraph with animation */}
          <motion.p
            className="mt-10 lg:mt-12 text-lg lg:text-2xl text-gray-300 w-[95%] lg:w-[70%] mx-auto text-center tracking-[1px] lg:tracking-[2px]"
            variants={paragraphVariants} // Applying animation variants
            initial="hidden" // Initial animation state
            animate="visible" // Final animation state
          >
            One-stop solution for D2C brands and B2B companies,
            helping them scale, expand market reach, and optimize operations
            with customized strategies for growth and efficiency.
          </motion.p>

          {/* Button with animation */}
          <motion.button
            className="text-white bg-electricBlue px-6 py-2 mt-10 lg:mt-12 text-sm lg:text-lg rounded-lg mx-auto flex items-center justify-center tracking-[1px]"
            variants={buttonVariants} // Applying animation variants
            initial="hidden" // Initial animation state
            animate="visible" // Final animation state
          >
            Explore More About Us
            {/* Icon inside button with separate animation */}
            <motion.div
              variants={iconVariants} // Applying animation variants
              initial="hidden" // Initial animation state
              animate="visible" // Final animation state
              className="ml-2 text-lg lg:text-xl"
            >
              <FaHandPointDown /> {/* Hand pointing down icon */}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection; // Exporting the component for use in other parts of the application
