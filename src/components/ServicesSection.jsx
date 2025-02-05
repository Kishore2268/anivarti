import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { FaStore, FaCogs, FaShareAlt, FaPen, FaBullhorn, FaCreditCard, FaTruck, FaMoneyBillWave, FaSearch, FaBoxes } from 'react-icons/fa';

const servicesData = [
  { name: 'Marketplaces', icon: <FaStore />, link: '/marketplaces', iconColor: 'text-blue-500' },
  { name: 'Marketplace Creation', icon: <FaCogs />, link: '/marketplace-creation', iconColor: 'text-green-500' },
  { name: 'Social Presence', icon: <FaShareAlt />, link: '/social-presence', iconColor: 'text-pink-500' },
  { name: 'Branding', icon: <FaPen />, link: '/branding', iconColor: 'text-indigo-500' },
  { name: 'Marketing', icon: <FaBullhorn />, link: '/marketing', iconColor: 'text-red-500' },
  { name: 'Payment', icon: <FaCreditCard />, link: '/payment', iconColor: 'text-yellow-500' },
  { name: 'Logistics', icon: <FaTruck />, link: '/logistics', iconColor: 'text-purple-500' },
  { name: 'Finance & Accounting', icon: <FaMoneyBillWave />, link: '/finance-accounting', iconColor: 'text-teal-500' },
  { name: 'Market Research', icon: <FaSearch />, link: '/market-research', iconColor: 'text-indigo-500' },
  { name: 'Omni Channel Distribution', icon: <FaBoxes />, link: '/omni-channel-distribution', iconColor: 'text-blue-600' }
];

const ServicesSection = () => {
  return (
    <div className="px-2 lg:px-12 mb-12">
      {/* Heading and Paragraph */}
      <div className="text-center">
        <motion.h2
          className="text-3xl lg:text-4xl font-semibold text-electricBlue mb-4 lg:mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-sm lg:text-xl mb-4 lg:mb-8 tracking-[1px] text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{once:true}}
        >
          We offer a wide range of services to help you succeed in the digital world. Explore our offerings and find the perfect solution for your business.
        </motion.p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-6">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg border border-gray-300 rounded-xl p-2 flex flex-col items-center text-center relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 * index, duration: 1 }}
          >
            {/* Parallax Text */}
            <motion.div
              className="absolute top-2 lg:top-3 left-2 lg:left-3 transform -translate-y-1/2 text-xs lg:text-lg text-gray-500"
              initial={{ x: -100 }}
              animate={{x: 0, whileInView:true}}
              transition={{ type: 'spring', stiffness: 300, delay: 0.2 * index, duration: 1 }}
              viewport={{once:false}}
            >
              #{index + 1 < 10 ? `0${index + 1}` : index + 1}
            </motion.div>

            {/* Icon */}
            <motion.div
              className={`w-8 h-8 lg:w-16 lg:h-16 text-md lg:text-4xl mb-2 mt-2 lg:mb-4 lg:mt-4 flex items-center justify-center rounded-full ${service.iconColor}`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 ,}}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {service.icon}
            </motion.div>

            <motion.h3
              className="text-sm lg:text-lg tracking-[2px] mb-4"
              initial={{ y: -20 }}
              whileInView={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 200 , delay: 0.2*index , duration: 2 }}
            >
              {service.name}
            </motion.h3>
          </motion.div>
        ))}
      </div>

      {/* Read More Button */}
      <motion.div
        className="col-span-full flex justify-center mt-8 lg:mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Link
          to="/services"
          className="text-white bg-gradient-to-r from-sky-100 to-electricBlue py-3 px-8 rounded-full text-md lg:text-lg"
        >
          Know More About Our Services
        </Link>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
