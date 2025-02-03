import { FaImages, FaTruckLoading, FaBoxes, FaHeadset, FaTools, FaChartLine } from "react-icons/fa";

const WhatWeCoverSection = () => {
  return (
    <>
    {/* What We Cover Section */}
    <section className="w-full py-16 text-center mx-auto">
      <h1 className="text-lg lg:text-3xl text-electricBlue font-light tracking-[3px] text-center mb-4">
        What We Cover in E-Commerce Management Services
      </h1>
      <p className="w-[95%] lg:w-[85%] text-md lg:text-lg text-gray-600 mx-auto mb-8 tracking-[1px] text-start">
        At ANIVARTI, our E-commerce Management Services streamline your online
        business through product image optimization, seamless order
        processing, and 24/7 customer support. We enhance operational
        efficiency, maximize growth potential, and provide market insights,
        allowing you to focus on scaling your brand confidently.
      </p>

      <div className="w-[95%] lg:w-[90%] grid md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto px-4">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <div className="absolute top-2 left-2 text-xl text-gray-700 rounded-full w-12 h-12 flex items-center justify-center">
            01
          </div>
          <div className="flex justify-center mb-4 mt-6">
            <FaImages className="text-electricBlue text-5xl" />
          </div>
          <h3 className="text-lg lg:text-xl tracking-[3px] font-semibold text-gray-700 mb-2">
            Product Image Optimization
          </h3>
          <p className="text-gray-500 text-sm lg:text-md tracking-[1px] text-start">
            We ensure your product images are high-quality, visually
            appealing, and fast-loading to captivate customers instantly.
            Optimized images not only enhance the shopping experience but also
            boost conversions by showcasing products clearly and
            professionally.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <div className="absolute top-2 left-2 text-xl text-gray-700 rounded-full w-12 h-12 flex items-center justify-center">
            02
          </div>
          <div className="flex justify-center mb-4 mt-6">
            <FaTruckLoading className="text-electricBlue text-5xl" />
          </div>
          <h3 className="text-lg lg:text-xl tracking-[3px] font-semibold text-gray-700 mb-2">
            Seamless Order Processing
          </h3>
          <p className="text-gray-500 text-sm lg:text-md tracking-[1px] text-start">
            Our end-to-end order management system handles every step, from
            order placement to timely delivery. We eliminate delays and
            streamline the process, ensuring a smooth and hassle-free
            experience for both you and your customers.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <div className="absolute top-2 left-2 text-xl text-gray-700 rounded-full w-12 h-12 flex items-center justify-center">
            03
          </div>
          <div className="flex justify-center mb-4 mt-6">
            <FaBoxes className="text-electricBlue text-5xl" />
          </div>
          <h3 className="text-lg lg:text-xl tracking-[3px] font-semibold text-gray-700 mb-2">
            Inventory Optimization
          </h3>
          <p className="text-gray-500 text-sm lg:text-md tracking-[1px] text-start">
            We help you track, manage, and forecast inventory with precision
            to prevent stockouts and overstocking. This ensures optimal
            product availability, enhances customer satisfaction, and reduces
            unnecessary storage costs.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <div className="absolute top-2 left-2 text-xl text-gray-700 rounded-full w-12 h-12 flex items-center justify-center">
            04
          </div>
          <div className="flex justify-center mb-4 mt-6">
            <FaHeadset className="text-electricBlue text-5xl" />
          </div>
          <h3 className="text-lg lg:text-xl tracking-[3px] font-semibold text-gray-700 mb-2">
            Customer Support Excellence
          </h3>
          <p className="text-gray-500 text-sm lg:text-md tracking-[1px] text-start">
            Our 24/7 customer support team delivers prompt and effective
            assistance to resolve queries and issues. By ensuring exceptional
            support, we boost customer satisfaction, retention, and overall
            trust in your brand.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <div className="absolute top-2 left-2 text-xl text-gray-700 rounded-full w-12 h-12 flex items-center justify-center">
            05
          </div>
          <div className="flex justify-center mb-4 mt-6">
            <FaTools className="text-electricBlue text-5xl" />
          </div>
          <h3 className="text-lg lg:text-xl tracking-[3px] font-semibold text-gray-700 mb-2">
            Technical Support
          </h3>
          <p className="text-gray-500 text-sm lg:text-md tracking-[1px] text-start">
            Our robust technical support solutions keep your platform secure,
            scalable, and high-performing. We focus on maintaining seamless
            operations with reliable tech services, minimizing downtime, and
            optimizing site performance.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <div className="absolute top-2 left-2 text-xl text-gray-700 rounded-full w-12 h-12 flex items-center justify-center">
            06
          </div>
          <div className="flex justify-center mb-4 mt-6">
            <FaChartLine className="text-electricBlue text-5xl" />
          </div>
          <h3 className="text-lg lg:text-xl tracking-[3px] font-semibold text-gray-700 mb-2">
            Maximize Your Growth Potential
          </h3>
          <p className="text-gray-500 text-sm lg:text-md tracking-[1px] text-start">
            By handling the backend processes like order fulfillment,
            inventory management, and platform operations, we empower you to
            focus on growth. Our support allows you to prioritize customer
            engagement and expand your business effortlessly.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default WhatWeCoverSection;
