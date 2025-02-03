// src/components/ServicesSection.js
import React from 'react';
import { FaShoppingCart, FaBullhorn, FaCreditCard, FaTruckMoving, FaSearchDollar, FaCalculator } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section className="py-16 mt-4 w-[100%] mx-auto">
      <div className="w-[95%] lg:w-[90%] container mx-auto text-center">
        {/* Our Services Heading */}
        <h1 className="px-6 py-3 text-2xl lg:text-3xl text-electricBlue rounded-md font-light tracking-[5px] inline-block mb-2 lg:mb-4">
          OUR SERVICES
        </h1>
        <p className="text-md lg:text-xl text-gray-700 mb-12 tracking-[1px] text-center">
          We provide comprehensive solutions to help businesses thrive in the
          digital world, from e-commerce management to logistics and branding.
        </p>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-electricBlue">
            <FaShoppingCart className="text-electricBlue text-3xl lg:text-5xl mx-auto" />
            <h1 className="mt-4 text-lg lg:text-xl font-light text-gray-600 tracking-[3px]">
              E-COMMERCE
            </h1>
            <p className="mt-2 text-md tracking-[1px] text-gray-500 text-start">
              Comprehensive services for marketplace onboarding and seller portal management to maximize ROI.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-electricBlue">
            <FaBullhorn className="text-electricBlue text-3xl lg:text-5xl mx-auto" />
            <h1 className="mt-4 text-lg lg:text-xl font-light text-gray-600 tracking-[3px]">
              BRANDING & MARKETING
            </h1>
            <p className="mt-2 text-md tracking-[1px] text-gray-500 text-start">
              Developing strategies to boost brand value and manage ad campaigns for maximizing ROAS.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-electricBlue">
            <FaCreditCard className="text-electricBlue text-3xl lg:text-5xl mx-auto" />
            <h1 className="mt-4 text-lg font-light text-gray-600 tracking-[3px]">
              PAYMENT
            </h1>
            <p className="mt-2 text-md tracking-[1px] text-gray-500 text-start">
              Integrating top-tier payment gateways to ensure smooth transactions and prevent lost sales.
            </p>
          </div>
          {/* Service 4 */}
          <div className="bg-white p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-electricBlue">
            <FaTruckMoving className="text-electricBlue text-3xl lg:text-5xl mx-auto" />
            <h1 className="mt-4 text-lg lg:text-xl font-light text-gray-700 tracking-[3px]">
              LOGISTICS
            </h1>
            <p className="mt-2 text-md tracking-[1px] text-gray-500 text-start">
              Partnering with logistics experts for efficient, last-mile global delivery solutions.
            </p>
          </div>
          {/* Service 5 */}
          <div className="bg-white p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-electricBlue">
            <FaSearchDollar className="text-electricBlue text-3xl lg:text-5xl mx-auto" />
            <h1 className="mt-4 text-lg lg:text-xl font-light text-gray-700 tracking-[3px]">
              MARKET RESEARCH
            </h1>
            <p className="mt-2 text-md tracking-[2px]  text-gray-500 text-start">
              Conducting market research to identify prime business opportunities for your growth.
            </p>
          </div>
          {/* Service 6 */}
          <div className="bg-white p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-electricBlue">
            <FaCalculator className="text-electricBlue text-3xl lg:text-5xl mx-auto" />
            <h1 className="mt-4 text-lg lg:text-xl font-light text-gray-700 tracking-[3px]">
              ACCOUNTING
            </h1>
            <p className="mt-2 text-md tracking-[1px] text-gray-500 text-start">
              Offering integrated return filing and accounting solutions, with interactive reports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
