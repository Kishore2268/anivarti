import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      {/* Contact Form Section */}
      <section className="w-[90%] mx-auto bg-white py-8 mb-4 mt-12 text-center">
      <motion.h1
          className="text-xl lg:text-3xl font-semibold text-black mb-8 tracking-[5px] typing-effect"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          Your Thoughts Matter! Send us a message, and let's make things right!
        </motion.h1>
        <motion.div
          className="w-[95%] lg:w-[80%] mx-auto p-6 rounded-xl border border-gray-300 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-xl lg:text-3xl font-semibold text-black mb-8 tracking-[5px]">
            Get In Touch
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <motion.input
              type="text"
              placeholder="Full Name"
              className="w-full h-12 border border-gray-400 p-2 rounded-lg"
              required
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            />
            <motion.input
              type="email"
              placeholder="Email Address"
              className="w-full h-12 border border-gray-400 p-2 rounded-lg"
              required
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            />
            <motion.input
              type="tel"
              placeholder="Phone Number"
              className="w-full h-12 border border-gray-400 p-2 rounded-lg"
              required
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            />
            <motion.input
              type="text"
              placeholder="Company Name"
              className="w-full h-12 border border-gray-400 p-2 rounded-lg"
              required
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            />
          </div>
          <motion.textarea
            placeholder="Message"
            className="w-full h-32 border border-gray-400 p-2 mt-4 rounded-lg"
            required
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="mt-4 bg-electricBlue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 1.2 }}
          >
            Send Message
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 text-center">
        <motion.h1
          className="text-xl lg:text-3xl font-bold text-electricBlue mb-8 tracking-[5px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Details
        </motion.h1>

        <div className="w-[95%] lg:w-[70%] flex flex-col lg:flex-row justify-between items-start mx-auto space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Address */}
          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Plot+No.+22,+Govind+Vihar+Sanganer,+Jaipur+302022"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 rounded-lg w-full lg:w-auto hover:bg-gray-200 transition"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <FaMapMarkerAlt className="text-electricBlue text-3xl mr-4" />
            </motion.div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-700">Address</h3>
              <p className="text-gray-500 text-md">
                Plot No. 22, Govind Vihar Sanganer, Jaipur 302022
              </p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:office@anivati.in"
            className="flex items-center p-4 rounded-lg w-full lg:w-auto hover:bg-gray-200 transition"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 1.2 }}
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
              <FaEnvelope className="text-electricBlue text-3xl mr-4" />
            </motion.div>

            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-700">Email</h3>
              <p className="text-gray-500">office@anivati.in</p>
            </div>
          </motion.a>

          {/* Mobile Number */}
          <motion.a
            href="tel:8955578234"
            className="flex items-center p-2 rounded-4xl w-full lg:w-auto hover:bg-gray-200 transition"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 1.4 }}
          >
            <motion.div
              className="relative"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              {/* Ringing Effect */}
              <motion.div
                className="absolute inset-0 border-l-2 border-r-2 border-gray-600 rounded-full animate-ping"
                style={{
                  animationDuration: "1.5s",
                  animationIterationCount: "infinite",
                }}
              ></motion.div>

              <FaPhone className="text-electricBlue text-3xl mr-4 relative z-10" />
            </motion.div>

            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-700">
                Mobile Number
              </h3>
              <p className="text-gray-500">8955578234</p>
            </div>
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
