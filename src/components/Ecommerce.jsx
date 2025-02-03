import React from "react";
import {
  FaShoppingCart,
  FaTruck,
  FaGlobe,
  FaChartLine,
  FaComments,
} from "react-icons/fa";
import {
  MdInventory,
  MdOutlineCategory,
  MdOutlineManageSearch,
} from "react-icons/md";
import { BsClipboardCheck } from "react-icons/bs";

const Ecommerce = () => {
  return (
    <div>
      {/* ecommerce solutions Section */}
      <section className="py-16 text-center">
        <h1 className="text-xl lg:text-3xl font-light text-electricBlue tracking-[3px] mb-4">
          E-Commerce Management Solutions
        </h1>
        <p className="w-[90%] lg:w-[90%] text-md lg:text-lg text-gray-600 mx-auto mb-8 tracking-[1px] text-start">
          Streamline your online business with our comprehensive e-commerce
          management solutions. We offer a suite of tools and expertise to
          optimize your sales, enhance customer experience, and drive
          sustainable growth.
        </p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-12 max-w-7xl mx-auto px-4">
          {/* Solution Cards */}
          <div className=" p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <FaShoppingCart className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[3px]">
              Pre-Sales Support
            </h3>
          </div>

          <div className=" p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <MdInventory className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[3px]">
              Inventory Management
            </h3>
          </div>

          <div className="p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <MdOutlineCategory className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[3px]">
              Catalog Management
            </h3>
          </div>

          <div className="p-6 rounded-lg shadow-md flex flex-col items-center border border-gray-300">
            <BsClipboardCheck className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[3px]">
              Order Management
            </h3>
          </div>

          <div className="p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <FaTruck className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[3px]">
              Logistic Management
            </h3>
          </div>

          <div className="p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <FaGlobe className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[3px]">
              Marketplace Management
            </h3>
          </div>

          <div className=" p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <MdOutlineManageSearch className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[3px]">
              Data Management & Annotation
            </h3>
          </div>

          <div className="p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <FaComments className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[3px]">
              Customer Support
            </h3>
          </div>

          <div className="p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <FaChartLine className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[3px]">
              Customer Data Insights
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
