import React from "react";
import { motion } from "framer-motion";

const Amazon = () => {
  return (
    <div className="service-card bg-black p-4 rounded shadow flex flex-col py-28">
      {/* H1 - Scale up when visible */}
      <motion.h1
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-white text-xl tracking-[2px] md:text-4xl text-center mb-4"
      >
        Amazon Account Management
      </motion.h1>

      <div className="flex flex-col md:flex-row w-full">
        {/* Images - Fade in from bottom when visible */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="logos w-full md:w-1/3 flex flex-col md:flex-row items-center justify-center mb-4 md:mb-0 order-1"
        >
          <img src="/images/amazon-logo.webp" alt="Amazon Logo" className="sm:w-36 h-32 sm:mr-0 md:mr-6" />
          <h3 className="text-white text-4xl sm:mr-0 md:mr-6">X</h3>
          <img src="/images/anivarti-logo.webp" alt="Anivarti Logo" className="sm:w-36 h-32" />
        </motion.div>

        {/* About Content - Fade in when visible */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="content w-full md:w-2/3 pl-0 md:pl-4 order-2 text-white mb-10"
        >
          <h3 className="text-electricBlue text-xl mb-4">ABOUT OUR SERVICE</h3>
          <p className="text-sm md:text-md lg:text-lg tracking-[1px] text-gray-300 mb-4">
            Amazon is the world's largest online marketplace, offering a vast range of products
            from electronics to fashion, and more. With its powerful e-commerce ecosystem, Amazon
            provides businesses with the tools to sell effectively.
          </p>
          <p className="text-sm md:text-md lg:text-lg tracking-[1px] text-gray-300">
            Anivarti specializes in optimizing Amazon seller accounts, offering expert guidance
            to improve sales, product visibility, and brand presence.
          </p>
        </motion.div>
      </div>

      {/* Our Services - Scale up when visible */}
      <motion.h3
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-electricBlue text-xl text-center mb-4"
      >
        Our Services
      </motion.h3>

      {/* Service Cards - Animate when visible */}
      <div className="service-list w-[95%] md:w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {[
          { title: "Amazon Seller Registration", desc: "We help you get registered as a seller on Amazon seamlessly." },
          { title: "Amazon Product Listing", desc: "Optimize product listings to maximize visibility and conversions." },
          { title: "Amazon Advertising", desc: "Boost sales with targeted Amazon PPC ad campaigns." },
          { title: "Amazon SEO", desc: "Improve product rankings with strategic keyword optimization." },
          { title: "Account Health Management", desc: "Ensure compliance with Amazon policies to maintain good account health." },
          { title: "Product Image Editing", desc: "Enhance product photos to attract more buyers and boost sales." },
          { title: "Reviews Management", desc: "We handle your Amazon reviews to maintain a strong seller reputation." },
          { title: "Amazon Brand Registry", desc: "Protect your brand and unlock exclusive tools with Brand Registry." },
          { title: "Account Suspension Recovery", desc: "Recover suspended Amazon accounts with our expert assistance." },
          { title: "FBA & Warehouse Services", desc: "Optimize fulfillment with Amazon FBA and warehouse solutions." },
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-950 shadow-lg border border-gray-300 rounded-xl p-2 flex flex-col items-center text-center"
          >
            <h4 className="text-electricBlue tracking-[1px]">{service.title}</h4>
            <p className="text-sm md:text-md lg:text-lg tracking-[1px] text-gray-300">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Amazon;
