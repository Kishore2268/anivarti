import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Marketplaces",
    description: "Comprehensive Services for Marketplace Onboarding and Seller Portal Management to Maximize Return on Investment.",
    image: "images/marketplace.webp",
  },
  {
    title: "Marketplace Creation",
    description: "Building and Managing Your Own Online Store to Maximize Sales Performance.",
    image: "images/marketplacecreation.avif",
  },
  {
    title: "Social Presence",
    description: "Managing Your Brand's Social Presence to Strengthen Its Impact and Enhance Brand Value.",
    image: "images/sp.webp",
  },
  {
    title: "Branding",
    description: "Developing and Implementing Strategies to Build Brand Value and Reach the Right Customers.",
    image: "images/br.webp",
  },
  {
    title: "Marketing",
    description: "Comprehensive Campaign Management to Maximize Return on Ad Spend (ROAS).",
    image: "images/marketing.webp",
  },
  {
    title: "Payment",
    description: "Integrating Best-in-Class Payment Gateways to Ensure Seamless Transactions and Prevent Lost Sales.",
    image: "images/payment.webp",
  },
  {
    title: "Logistics",
    description: "Leverage Our Established Network of Logistics Partners for Seamless, Plug-and-Play Last-Mile Delivery Across the Globe.",
    image: "images/logistics.webp",
  },
  {
    title: "Finance & Accounting",
    description: "Access Comprehensive Return Filing and Accounting Solutions in One Place, with Interactive Reports for Better Insights.",
    image: "images/fc.webp",
  },
  {
    title: "Market Research",
    description: "Conducting Market Research to Identify Top Business Opportunities for Your Growth.",
    image: "images/mr.webp",
  },
  {
    title: "Omni Channel Distribution",
    description: "Developing an Omnichannel Strategy to Enhance Your Distribution Across Online and Offline Sales Channels.",
    image: "images/omni.webp",
  },
];

const ServicesPage = () => {
  return (
    <section className="bg-gray-100 mt-12 py-16">
      {/* Main Heading */}
      <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
        Our <span className="text-electricBlue">10 Kadum</span> Solution for D2C Brands
      </h2>

      {/* Services List */}
      <div className="max-w-6xl mx-auto space-y-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-12`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow-md"
            />
            {/* Content */}
            <div className="md:w-1/2 text-center md:text-left px-6">
              <h3 className="text-md lg:text-3xl text-gray-800 mb-6">{service.title}</h3>
              <p className="text-sm lg:text-lg tracking-[1px] text-gray-600 mt-2">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Collaboration Section */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-bold text-gray-900">
          Wanna collaborate with us and scale up your business?
        </h3>
        <p className="text-gray-600 mt-2">Let's take your brand to the next level with our expert solutions.</p>
        <a
          href="https://forms.google.com/your-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#0074E4] text-white px-6 py-3 rounded-lg mt-4 font-semibold hover:bg-blue-600 transition"
        >
          Book a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default ServicesPage;
