import React from 'react'
import { FaChartLine, FaTasks, FaDollarSign, FaRocket, FaExpand, FaUsers, FaBolt, FaHeadset } from 'react-icons/fa'

export const BenefitsSection = () => {
  return (
    <section className="py-16 text-center">
    <h1 className="w-[90%] text-xl lg:text-3xl mx-auto font-light text-electricBlue tracking-[3px] mb-4">
      Benefits of E-Commerce Website Management
    </h1>
    <p className="w-[90%] lg:w-[90%] text-md lg:text-lg text-gray-600 mx-auto mb-8 text-start tracking-[1px] lg:text-start">
      Focus on growth while we manage tech and operations. Cut costs, boost efficiency, and get 24/7 support. Scale effortlessly, enhance your platform, and launch fast with our secure, high-performance solutions.
    </p>
  
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-7xl mx-auto px-4">
      {/* Card 1 */}
      <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-300">
        <FaChartLine className="text-electricBlue text-4xl mb-4" />
        <h3 className="text-md text-gray-800 tracking-[2px]">Market Trend Analysis</h3>
        <p className="text-gray-500 text-sm mt-2 hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 text-start tracking-[1px]">
          We analyze market trends and customer behaviors to deliver actionable insights, helping you stay ahead of competitors and meet evolving demands.
        </p>
      </div>
  
      {/* Card 2 */}
      <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-300">
        <FaTasks className="text-electricBlue text-4xl mb-4" />
        <h3 className="text-md text-gray-800 tracking-[2px]">Streamline Operations Effortlessly</h3>
        <p className="text-gray-500 text-sm mt-2 hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 text-start tracking-[1px]">
          We manage your technical and operational tasks to enhance efficiency, freeing up your time to focus on confidently scaling your business.
        </p>
      </div>
  
      {/* Card 3 */}
      <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-300">
        <FaDollarSign className="text-electricBlue text-4xl mb-4" />
        <h3 className="text-md text-gray-800 tracking-[2px]">Maximize Business Value</h3>
        <p className="text-gray-500 text-sm mt-2 hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 text-start tracking-[1px]">
          We handle operations and tech support, allowing you to focus on innovation, customer relationships, and revenue growth.
        </p>
      </div>
  
      {/* Card 4 */}
      <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-300">
        <FaRocket className="text-electricBlue text-4xl mb-4" />
        <h3 className="text-md text-gray-800 tracking-[2px]">Cut Costs & Boost Efficiency</h3>
        <p className="text-gray-500 text-sm mt-2 hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 text-start tracking-[1px]">
          Reduce overhead and streamline workflows through automated processes and expert support.
        </p>
      </div>
  
      {/* Card 5 */}
      <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-300">
        <FaExpand className="text-electricBlue text-4xl mb-4" />
        <h3 className="text-md text-gray-800 tracking-[2px]">Scale Your Business with Confidence</h3>
        <p className="text-gray-500 text-sm mt-2 hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 text-start tracking-[1px]">
          Gain the tools, expertise, and support needed for seamless scaling without growing pains.
        </p>
      </div>
  
      {/* Card 6 */}
      <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-300">
        <FaUsers className="text-electricBlue text-4xl mb-4" />
        <h3 className="text-md text-gray-800 tracking-[2px]">Focus on Customer Success</h3>
        <p className="text-gray-500 text-sm mt-2 hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 text-start tracking-[1px]">
          Enhance user experience and satisfaction with optimized operations and reliable solutions.
        </p>
      </div>
  
      {/* Card 7 */}
      <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-300">
        <FaBolt className="text-electricBlue text-4xl mb-4" />
        <h3 className="text-md text-gray-800 tracking-[2px]">Launch Faster, Grow Faster</h3>
        <p className="text-gray-500 text-sm mt-2 hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 text-start tracking-[1px]">
          Accelerate your time-to-market with our high-performance, ready-to-use solutions.
        </p>
      </div>
  
      {/* Card 8 */}
      <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-300">
        <FaHeadset className="text-electricBlue text-4xl mb-4" />
        <h3 className="text-md text-gray-800 tracking-[2px]">24/7 Dedicated Support</h3>
        <p className="text-gray-500 text-sm mt-2 text-start hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 tracking-[1px]">
          Enjoy peace of mind with round-the-clock tech and operational assistance.
        </p>
      </div>
    </div>
  </section>
  
  )
}
