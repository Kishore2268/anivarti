import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaStore,
  FaCogs,
  FaShareAlt,
  FaPen,
  FaBullhorn,
  FaCreditCard,
  FaTruck,
  FaMoneyBillWave,
  FaSearch,
  FaBoxes,
  FaArrowRight,
} from "react-icons/fa";

const servicesData = [
  {
    name: "Marketplaces",
    icon: <FaStore />,
    link: "/marketplaces",
    iconColor: "text-blue-500",
  },
  {
    name: "Marketplace Creation",
    icon: <FaCogs />,
    link: "/marketplace-creation",
    iconColor: "text-green-500",
  },
  {
    name: "Social Presence",
    icon: <FaShareAlt />,
    link: "/social-presence",
    iconColor: "text-pink-500",
  },
  {
    name: "Branding",
    icon: <FaPen />,
    link: "/branding",
    iconColor: "text-indigo-500",
  },
  {
    name: "Marketing",
    icon: <FaBullhorn />,
    link: "/marketing",
    iconColor: "text-red-500",
  },
  {
    name: "Payment",
    icon: <FaCreditCard />,
    link: "/payment",
    iconColor: "text-yellow-500",
  },
  {
    name: "Logistics",
    icon: <FaTruck />,
    link: "/logistics",
    iconColor: "text-purple-500",
  },
  {
    name: "Finance & Accounting",
    icon: <FaMoneyBillWave />,
    link: "/finance-accounting",
    iconColor: "text-teal-500",
  },
  {
    name: "Market Research",
    icon: <FaSearch />,
    link: "/market-research",
    iconColor: "text-indigo-500",
  },
  {
    name: "Omni Channel Distribution",
    icon: <FaBoxes />,
    link: "/omni-channel-distribution",
    iconColor: "text-blue-600",
  },
];

const ServicesSection = () => {
  return (
    <div className="px-2 bg-black lg:px-12 py-6">
      {/* Heading and Paragraph */}
      <div className="text-center">
        <motion.h2
          className="text-2xl lg:text-5xl font-light text-white tracking-[3px] lg:tracking-[5px] mb-4 lg:mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-md lg:text-xl mb-4 lg:mb-8 tracking-[1px] text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          We offer a wide range of services to help you succeed in the digital
          world. Explore our solutions and find the perfect one for your
          business.
        </motion.p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-2 lg:gap-6">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-950 shadow-lg border border-gray-300 rounded-xl p-2 flex flex-col items-center text-center relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            {/* Parallax Text */}
            <motion.div
              className="absolute top-2 lg:top-3 left-2 lg:left-3 transform -translate-y-1/2 text-xs lg:text-lg text-gray-300"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, whileInView: true }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              #{index + 1 < 10 ? `0${index + 1}` : index + 1}
            </motion.div>

            {/* Icon */}
            <motion.div
              className={`w-8 h-8 lg:w-16 lg:h-16 text-md lg:text-4xl mb-2 mt-2 bg-white lg:mb-4 lg:mt-4 flex items-center justify-center rounded-full ${service.iconColor}`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {service.icon}
            </motion.div>

            <motion.h3
              className="text-sm lg:text-lg text-white tracking-[2px] mb-4"
              initial={{ y: -20 }}
              whileInView={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 0.2 * index,
                duration: 0.5,
              }}
            >
              {service.name}
            </motion.h3>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="col-span-full flex justify-center mt-8 lg:mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Link
          to="/services"
          onClick={() => window.scrollTo(0, 0)} // Scroll to top when navigating to services
          className="text-white bg-electricBlue py-3 px-8 rounded-full tracking-[1px] text-sm lg:text-lg hover:bg-[#286d7e] transition duration-300 flex items-center gap-2"
        >
          Know More About Our Services
          <FaArrowRight className="text-white text-lg transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
