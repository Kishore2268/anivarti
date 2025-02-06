import { motion } from "framer-motion";

const PartnersSection = () => {
  return (
    <section className="bg-black w-[95%] mx-auto py-4 lg:py-12">
      <motion.h1
        className="p-4 text-lg lg:text-3xl text-white font-light tracking-[3px] lg:tracking-[5px] text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        PARTNER & SUPPORTED BY
      </motion.h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1 gap-8 lg:gap-4 mt-8 text-center">
        {/* Common animation variants for logos */}
        {[
          { src: "images/ABC.webp", x: -50 },
          { src: "images/zentelia.jpg", x: -50 },
          { src: "images/ISTART.webp", y: 50 },
          { src: "images/NITI-AIM-Logo.jpg", x: 50 },
          { src: "images/startup-india.webp", x: 50 },
        ].map((logo, index) => (
          <motion.div
            key={index}
            className="transition transform hover:scale-105"
            initial={{ opacity: 0, x: logo.x || 0, y: logo.y || 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <img
              src={logo.src}
              alt="Company Logo"
              className="w-48 h-24 lg:h-32  bg-white object-contain mx-auto"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;


  