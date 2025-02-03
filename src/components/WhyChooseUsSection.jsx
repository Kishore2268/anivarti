import { FaBullhorn, FaShieldAlt, FaSearch } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const WhyChooseUsSection = () => {
  return (
    <section className="w-[95%] lg:w-[95%] mx-auto py-16">
      <h1 className="text-lg lg:text-3xl text-electricBlue font-light tracking-[3px] text-center">
        Why Choose Anivarti for Your E-Commerce Management Needs?
      </h1>
      <p className="mt-4 w-[90%] lg:w-[80%] mx-auto text-md lg:text-lg text-start tracking-[1px] text-gray-600">
        With expert teams, customized strategies, cutting-edge technology, and a proven track record of driving success, we make it easy to scale your online business. Let us help you achieve rapid growth—connect with us today.
      </p>
      <div className="w-[95%] lg:w-[90%] mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 mt-8 text-center">
        <div className="bg-white p-6 border border-gray-100 shadow-lg rounded-lg">
          <AiOutlineUser className="text-5xl text-electricBlue mx-auto" />
          <h3 className="text-gray-700 mt-4 text-xl tracking-[3px]">
            Quick Support When You Need
          </h3>
          <p className="mt-2 text-gray-500 text-md lg:text-lg text-start">
            Our team ensures prompt and reliable assistance, so your store operates seamlessly and stays ahead of the competition.
          </p>
        </div>
        <div className="bg-white p-6 border border-gray-300 shadow-lg  rounded-lg">
          <FaBullhorn className="text-5xl text-electricBlue mx-auto" />
          <h3 className="text-gray-700 mt-4 text-xl tracking-[3px]">
            Drive Innovation Forward
          </h3>
          <p className="mt-2 text-gray-500 text-md lg:text-lg text-start">
            At Anivarti, innovation is at our core. We provide solutions that transform challenges into opportunities, helping your business stay ahead in the dynamic eCommerce space.
          </p>
        </div>
        <div className="bg-white p-6 border border-gray-300 shadow-lg  rounded-lg">
          <FaShieldAlt className="text-5xl text-electricBlue mx-auto" />
          <h3 className="text-gray-700 mt-4 text-xl tracking-[3px]">
            Robust Security & Superior Performance
          </h3>
          <p className="mt-2 text-gray-500 text-md lg:text-lg text-start">
            Your store's safety is our priority. We implement strong security measures while optimizing performance to deliver an unmatched experience.
          </p>
        </div>
        <div className="bg-white p-6 border border-gray-300 shadow-lg rounded-lg">
          <FaSearch className="text-5xl text-electricBlue mx-auto" />
          <h3 className="text-gray-700 mt-4 text-xl tracking-[3px]">
            Expand Your Reach
          </h3>
          <p className="mt-2 text-gray-500 text-md lg:text-lg text-start">
            Unlock new opportunities with Anivarti. We help you explore untapped markets and expand across platforms, growing your online presence effortlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
