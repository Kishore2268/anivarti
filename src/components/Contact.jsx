import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneVolume } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      {/* Contact Form Section */}
      <section className="w-[95%] lg:w-[90%] mx-auto bg-black py-8 mt-12 text-center">
        <motion.h1
          className="text-lg lg:text-3xl font-light text-white mb-8 tracking-[3px] "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          Your <span className="text-electricBlue">Thoughts Matter!</span> Send us a <span className="text-electricBlue">message</span>, and let's make things <span className="text-electricBlue">right!</span>
        </motion.h1>

        <motion.div
          className="w-[95%] lg:w-[80%] mx-auto p-6 rounded-xl border border-gray-300 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-xl lg:text-3xl font-light text-white mb-8 tracking-[5px]">
            Get In Touch!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <motion.input
              type="text"
              placeholder="Full Name"
              className="w-full h-12 border bg-[#2a2a2a] border-gray-400 p-2 rounded-lg"
              required
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            />
            <motion.input
              type="email"
              placeholder="Email Address"
              className="w-full h-12 border bg-[#2a2a2a] border-gray-400 p-2 rounded-lg"
              required
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            />
            <motion.input
              type="tel"
              placeholder="Phone Number"
              className="w-full h-12 border bg-[#2a2a2a] border-gray-400 p-2 rounded-lg"
              required
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            />
            <motion.input
              type="text"
              placeholder="Company Name"
              className="w-full h-12 border bg-[#2a2a2a] border-gray-400 p-2 rounded-lg"
              required
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            />
          </div>
          <motion.textarea
            placeholder="Message"
            className="w-full h-32 border bg-[#2a2a2a] border-gray-400 p-2 mt-4 mb-4 rounded-lg"
            required
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="bg-electricBlue text-md lg:text-lg text-white py-2 px-6 rounded-lg  tracking-[1px] transition"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 1.2 }}
          >
            Send Message
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Details Section */}
      <section className="py-8 lg:py-16 text-center">
        <motion.h1
          className="text-2xl lg:text-3xl font-light text-white mb-8 tracking-[5px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Details
        </motion.h1>

        <div className="w-[90%] md:w-[90%] lg:w-[80%] flex flex-col lg:flex-row justify-between items-start mx-auto space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Address */}
          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Plot+No.+22,+Govind+Vihar+Sanganer,+Jaipur+302022"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4  rounded-lg w-full lg:w-auto hover:bg-gray-700 transition"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <FaMapMarkerAlt className="text-electricBlue text-4xl mr-4" />
            </motion.div>
            <div className="text-left">
              <h3 className="text-xl tracking-[2px] text-white">Address</h3>
              <p className="text-gray-300 text-md lg:text-lg">
                Plot No. 22, Govind Vihar Sanganer, Jaipur 302022
              </p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:office@anivati.in"
            className="flex items-center p-4 rounded-lg w-full lg:w-auto hover:bg-gray-700 transition"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              initial={{ scale: 1 }}
              whileInView={{
                scale: [1, 1.2, 1], // Scale from 1 to 1.2 and back to 1
                opacity: [1, 0.8, 1], // Optional: add slight opacity change for a smooth pulse
              }}
              transition={{
                repeat: Infinity, // Repeat the animation indefinitely
                duration: 1.5, // Duration for one complete pulse
                ease: "easeInOut", // Smooth easing for the pulse
              }}
            >
              <FaEnvelope className="text-electricBlue text-4xl mr-4" />
            </motion.div>

            <div className="text-left">
              <h3 className="text-xl tracking-[2px] text-white">Email</h3>
              <p className="text-gray-300 text-md lg:text-lg">office@anivati.in</p>
            </div>
          </motion.a>

          {/* Mobile Number */}
          <motion.a
            href="tel:8955578234"
            className="flex items-center p-2 rounded-4xl w-full lg:w-auto hover:bg-gray-700 transition"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.div
              className="relative"
              animate={{ rotate: [0, 4, -4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              {/* Ringing Effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  animationDuration: "1.5s",
                  animationIterationCount: "infinite",
                }}
              ></motion.div>

              <FaPhoneVolume className="text-electricBlue text-4xl mr-4 relative z-10" />
            </motion.div>

            <div className="text-left">
              <h3 className="text-xl tracking-[2px] text-white">
                Mobile Number
              </h3>
              <p className="text-gray-300 text-md lg:text-lg">8955578234</p>
            </div>
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
