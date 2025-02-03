import React from 'react';
import { FaHandPointDown } from 'react-icons/fa';

const BannerSection = () => {
  return (
    <section className="h-screen bg-white flex justify-center items-center mt-16">
      <div className="flex flex-col lg:flex-row justify-between items-center w-[95%] lg:w-[85%] px-4">
        <div className="w-full text-left">
          <h1 className="text-2xl lg:text-5xl font-bold text-electricBlue text-center tracking-[5px]">
            WE'RE ANIVARTI
          </h1>
          <p className="mt-4 text-md lg:text-2xl text-gray-700">
            Anivarti is a digital Business enabler that helps businesses of
            all sizes grow online. We offer a wide range of services.
          </p>
          <button className="text-gray-700 bg-electricBlue px-6 py-2 text-md lg:text-lg mt-6 mx-auto flex items-center justify-center">
            Explore More About Us
            <FaHandPointDown className="ml-2 text-lg lg:text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
