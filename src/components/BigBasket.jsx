import React from "react";
import { motion } from "framer-motion";

const BigBasket = () => {
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
        Big Basket Account Management
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
          <img src="/images/Bigbasket-logo.webp" alt="Big Basket Logo" className="sm:w-36 h-32 sm:mr-0 md:mr-6" />
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
            Big Basket is one of India's largest online grocery stores, offering a wide range of products including fresh fruits, vegetables, and daily essentials. It is known for its quality and convenience.
          </p>
          <p className="text-sm md:text-md lg:text-lg tracking-[1px] text-gray-300">
            Anivarti is dedicated to helping brands succeed on Big Basket by providing expert consultancy and tailored support to enhance your online presence.
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
          { title: "Big Basket Seller Registration", desc: "We assist with the registration process to get you started on Big Basket." },
          { title: "Big Basket Product Listing", desc: "We list products to increase visibility and generate traffic on Big Basket." },
          { title: "Big Basket Advertising", desc: "Drive sales and boost visibility with targeted ads on Big Basket's platform." },
          { title: "Payment Reconciliation", desc: "We ensure money leaving on account matches the amount spent." },
          { title: "Big Basket SEO", desc: "Optimize product listings to improve rankings, visibility, and sales on Big Basket." },
          { title: "Product Image Editing", desc: "Enhance your product photos with professional editing to boost appeal and sales." },
          { title: "Reviews Management", desc: "We manage all Big Basket reviews of your products in the most effective way." },
          { title: "Big Basket Brand Store Creation", desc: "Build a custom storefront on Big Basket to showcase your brand and increase customer engagement." },
          { title: "Account Suspension", desc: "Our experts will help get your suspended Big Basket account back to you." },
          { title: "Warehouse Services", desc: "Our Warehouse Service is an added advantage for your Big Basket business." },
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

export default BigBasket;

