import { motion } from "framer-motion";

const PartnersSection = () => {
  return (
    <section className="w-[95%] mx-auto py-12">
      <motion.h1
        className="p-4 text-lg lg:text-3xl text-electricBlue font-light tracking-[5px] text-center"
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{once: false}}
      >
        PARTNER & SUPPORTED BY
      </motion.h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1 gap-8 lg:gap-4 mt-8 text-center">
        {/* Logo 1 */}
        <motion.div
          className="transition transform hover:scale-105"
          initial={{ opacity: 0, x: -75 }}
          transition={{  duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
        >
          <img
            src="images/ABC.webp"
            alt="Company Logo"
            className="w-40 h-32 p-1 bg-white object-cover mx-auto"
          />
        </motion.div>

        {/* Logo 2 */}
        <motion.div
          className="transition transform hover:scale-105"
          initial={{ opacity: 0, x: -75 }}
          transition={{  duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
        >
          <img
            src="images/zentelia.jpg"
            alt="Company Logo"
            className="w-40 h-32 p-1 bg-white object-contain mx-auto"
          />
        </motion.div>

        {/* Logo 3 */}
        <motion.div
          className="transition transform hover:scale-105"
          initial={{ opacity: 0, y: 75 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <img
            src="images/ISTART.webp"
            alt="Company Logo"
            className="w-40 h-32 p-1 bg-white object-contain mx-auto"
          />
        </motion.div>

        {/* Logo 4 */}
        <motion.div
          className="transition transform hover:scale-105"
          initial={{ opacity: 0, x: 75 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
        >
          <img
            src="images/NITI-AIM-Logo.jpg"
            alt="Company Logo"
            className="w-40 h-32 p-1 bg-white object-contain mx-auto"
          />
        </motion.div>

        {/* Logo 5 */}
        <motion.div
          className="transition transform hover:scale-105"
          initial={{ opacity: 0, x: 75 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
        >
          <img
            src="images/startup-india.webp"
            alt="Company Logo"
            className="w-40 h-32 p-1 bg-white object-contain mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;

  