import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Marketplaces",
    description:
      "Comprehensive Services for Marketplace Onboarding and Seller Portal Management to Maximize Return on Investment.",
    image: "images/marketplace.webp",
    path: "marketplaces",
  },
  {
    title: "Marketplace Creation",
    description:
      "Building and Managing Your Own Online Store to Maximize Sales Performance.",
    image: "images/marketplacecreation.avif",
    path: "marketplace-creation",
  },
  {
    title: "Social Presence",
    description:
      "Managing Your Brand's Social Presence to Strengthen Its Impact and Enhance Brand Value.",
    image: "images/sp.webp",
    path: "social-presence",
  },
  {
    title: "Branding",
    description:
      "Developing and Implementing Strategies to Build Brand Value and Reach the Right Customers.",
    image: "images/br.webp",
    path: "branding",
  },
  {
    title: "Marketing",
    description:
      "Comprehensive Campaign Management to Maximize Return on Ad Spend (ROAS).",
    image: "images/marketing.webp",
    path: "marketing",
  },
  {
    title: "Payment",
    description:
      "Integrating Best-in-Class Payment Gateways to Ensure Seamless Transactions and Prevent Lost Sales.",
    image: "images/payment.webp",
    path: "payment",
  },
  {
    title: "Logistics",
    description:
      "Leverage Our Established Network of Logistics Partners for Seamless, Plug-and-Play Last-Mile Delivery Across the Country.",
    image: "images/logistics.webp",
    path: "logistics",
  },
  {
    title: "Finance & Accounting",
    description:
      "Access Comprehensive Return Filing and Accounting Solutions in One Place, with Interactive Reports for Better Insights.",
    image: "images/fc.webp",
    path: "finance-accounting",
  },
  {
    title: "Market Research",
    description:
      "Conducting Market Research to Identify Top Business Opportunities for Your Growth.",
    image: "images/mr.webp",
    path: "market-research",
  },
  {
    title: "Omni Channel Distribution",
    description:
      "Developing an Omnichannel Strategy to Enhance Your Distribution Across Online and Offline Sales Channels.",
    image: "images/omni.webp",
    path: "omni-channel-distribution",
  },
];

const Services = () => {
  return (
    <section className="py-24">
      {/* Main Heading */}
      <h2 className="text-center text-2xl lg:text-5xl tracking-[3px] lg:tracking-[5px] font-bold text-white mb-12">
        Our <span className="text-electricBlue">10Kadum</span> Solution for D2C
        Brands
      </h2>

      {/* Services List */}
      <div className="max-w-6xl mx-auto px-2 md:px-6 lg:px-0 space-y-12 lg:space-y-16">
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
              loading="lazy"
              className="w-96 md:w-112 lg:w-1/2 h-72 object-cover rounded-lg shadow-md"
            />
            {/* Content */}
            <div className="md:w-1/2 text-center md:text-left px-0 lg:px-6">
              <h3 className="text-lg md:text-xl lg:text-3xl tracking-[3px] md:tracking-[5px] text-white mb-3 lg:mb-6">
                {service.title}
              </h3>
              <p className="text-sm md:text-md lg:text-lg tracking-[2px] md:tracking-[3px] text-gray-300 mt-2 mb-4">
                {service.description}
              </p>

              {/* Know More Button */}
              <a
                href={`/services/${service.path}`}
                className="inline-flex items-center gap-2 underline text-electricBlue py-2 rounded-xl font-semibold text-sm md:text-md lg:text-lg tracking-[1px] lg:tracking-[3px] hover:text-[#286d7e] transition duration-300"
              >
                Know More <FaArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Collaboration Section */}
      <div className="text-center py-16 px-4">
        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-8 tracking-wide">
          What are you waiting for?
        </h2>
        <div className="w-full flex flex-col md:flex-row max-w-6xl bg-[#1a1a1a] border border-gray-400 rounded-2xl p-6 lg:p-10 gap-4 lg:gap-8 mx-auto justify-between items-center shadow-lg">
          {/* Text Section */}
          <div className="flex flex-col w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-xl lg:text-3xl text-white font-semibold tracking-wide mb-4 lg:mb-6">
              Let's collaborate with us and scale up your business
            </h3>
            <p className="text-gray-300 text-sm tracking-[1px] lg:tracking-[2px] lg:text-lg mb-0 lg:mb-6">
              Take your brand to the next level with our expert solutions. We
              provide top-notch services to help your business thrive.
            </p>
          </div>

          {/* Image + Button Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <img
              src="/images/collab.webp"
              alt="Collaboration"
              loading="lazy"
              className="w-44 h-32 mb-6 object-cover hidden md:block rounded-xl shadow-md"
            />
            <a
              href="https://forms.google.com/your-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-electricBlue text-white px-6 py-3 rounded-xl font-semibold text-md lg:text-lg tracking-[1px] lg:tracking-[3px] hover:bg-[#286d7e] transition duration-300"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
