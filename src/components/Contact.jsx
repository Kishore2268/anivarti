import React, { useState , useEffect } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneVolume } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  // State for loading status
  const [isLoading, setIsLoading] = useState(false);
  // State for status message after submission
  const [statusMessage, setStatusMessage] = useState("");

  // Handle input changes and update form data state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setIsLoading(true); // Set loading state to true
    setStatusMessage(""); // Clear previous status message

    emailjs
      .send(
        "service_22ia1gj", // EmailJS Service ID
        "template_nudgzae", // EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        "0kTNxjqEMsDoFDT9P" // EmailJS User ID
      )
      .then(() => {
        setStatusMessage("Message sent successfully!"); // Show success message
        // Reset form fields after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      })
      .catch((error) => {
        setStatusMessage("Failed to send message. Please try again."); // Show error message
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        setIsLoading(false); // Reset loading state
      });
  };

  // Clear the status message after 3 seconds
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(""), 3000);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [statusMessage]);
  
  return (
    <div>
      {/* Contact Form Section */}
      <section className="w-[98%] lg:w-[90%] mx-auto bg-black xs:py-6 md:py-24 text-center">

      <motion.h1
    className="text-2xl lg:text-5xl font-light text-white mb-8 tracking-[2px] md:tracking-[5px]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 2 }}
  >
    Have a Thought?
  </motion.h1>
  <motion.h1
    className="text-lg lg:text-3xl font-light text-white mb-8 tracking-[3px]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 2 }}
  >
    Your <span className="text-electricBlue">Thoughts Matter!</span> Send us a{" "}
    <span className="text-electricBlue">message</span>, and let's make things{" "}
    <span className="text-electricBlue">work!</span>
  </motion.h1>

  <motion.div
    className="w-[98%] lg:w-[95%] xl:w-[80%] mx-auto p-6 rounded-xl border border-gray-300 shadow-xl"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-xl lg:text-3xl font-light text-white mb-8 tracking-[5px]">
      Get In Touch!
    </h1>
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Left side inputs */}
        <div className="flex flex-col gap-4">
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full h-12 border bg-[#2a2a2a] text-white border-gray-400 p-2 rounded-2xl"
            required
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          />
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full h-12 border bg-[#2a2a2a] text-white border-gray-400 p-2 rounded-2xl"
            required
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          />
          <motion.input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full h-12 border bg-[#2a2a2a] text-white border-gray-400 p-2 rounded-2xl"
            required
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          />
          <motion.input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full h-12 border bg-[#2a2a2a] text-white border-gray-400 p-2 rounded-2xl"
            required
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          />
        </div>

        {/* Right side - Message Box */}
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full h-full min-h-[200px] border text-white bg-[#2a2a2a] border-gray-400 p-2 rounded-2xl"
          required
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        ></motion.textarea>
      </div>

      {/* Submit Button - Centered */}
      <motion.button
        type="submit"
        className="mt-6 bg-electricBlue text-md lg:text-lg text-white py-2 px-6 rounded-2xl tracking-[1px] transition hover:bg-[#286d7e]"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 1.2 }}
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </motion.button>
    </form>
    {/* Status Message */}
    {statusMessage && (
        <motion.p 
          className="text-white mt-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          {statusMessage}
        </motion.p>
      )}
  </motion.div>
</section>


      {/* Contact Details Section */}
      <section className="py-8 lg:py-16 text-center">
        <motion.h1
          className="text-2xl lg:text-3xl font-light text-white mb-8 tracking-[5px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
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
              <p className="text-gray-300 text-md lg:text-lg">
                office@anivati.in
              </p>
            </div>
          </motion.a>

          {/* Mobile Number */}
          <motion.a
            href="tel:8955578234"
            className="flex items-center p-4 rounded-4xl w-full lg:w-auto hover:bg-gray-700 transition"
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
