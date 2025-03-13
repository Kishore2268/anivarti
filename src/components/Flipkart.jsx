import React from "react";
import { motion } from "framer-motion";

const Flipkart = () => {
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
        Flipkart Account Management
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
          <img src="/images/Flipkart-logo.webp" alt="Flipkart Logo" className="w-48 h-32 mr-6" />
          <h3 className="text-white text-4xl mr-6">X</h3>
          <img src="/images/anivarti-logo.webp" alt="Anivarti Logo" className="w-32 h-32" />
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
            Flipkart is one of the leading e-commerce platforms in India, known for its wide range of products and exceptional customer service. It has transformed the way people shop online, providing a seamless shopping experience for millions of customers. Flipkart offers a variety of services to help sellers reach their target audience effectively.
          </p>
          <p className="text-sm md:text-md lg:text-lg tracking-[1px] text-gray-300">
            Anivarti is committed to helping businesses thrive on Flipkart by providing expert consultancy and support tailored to your needs. Our team of professionals is dedicated to ensuring your success in the competitive e-commerce landscape.
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
          { title: "Flipkart Seller Registration", desc: "We assist with the registration process to get you started on Flipkart." },
          { title: "Flipkart Product Listing", desc: "We list products to increase visibility and generate traffic on Flipkart." },
          { title: "Flipkart Advertising", desc: "Drive sales and boost visibility with targeted ads on Flipkart's platform." },
          { title: "Payment Reconciliation", desc: "We ensure money leaving on account matches the amount spent." },
          { title: "Flipkart SEO", desc: "Optimize product listings to improve rankings, visibility, and sales on Flipkart." },
          { title: "Product Image Editing", desc: "Enhance your product photos with professional editing to boost appeal and sales." },
          { title: "Reviews Management", desc: "We manage all Flipkart reviews of your products in the most effective way." },
          { title: "Flipkart Brand Store Creation", desc: "Build a custom storefront on Flipkart to showcase your brand and increase customer engagement." },
          { title: "Account Suspension", desc: "Our experts will help get your suspended Flipkart account back to you." },
          { title: "Warehouse Services", desc: "Our Warehouse Service is an added advantage for your Flipkart business." },
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

export default Flipkart;
