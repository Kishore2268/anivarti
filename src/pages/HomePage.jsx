import {
  FaShoppingCart,
  FaBullhorn,
  FaCreditCard,
  FaSearch,
  FaCalculator,
  FaComments,
  FaGlobe,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaTruckMoving,
  FaPhone,
  FaHandPointDown,
  FaSearchDollar,
  FaImages,
  FaTruckLoading,
  FaTruck,
  FaBoxes,
  FaTools,
  FaTasks,
  FaDollarSign,
  FaRocket,
  FaExpand,
  FaUsers,
  FaBolt,
  FaHeadset,
  FaChartLine,
} from "react-icons/fa";
import {
  MdInventory,
  MdOutlineCategory,
  MdOutlineManageSearch,
} from "react-icons/md";
import { BsClipboardCheck } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const HomePage = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="h-screen  bg-white flex justify-center items-center mt-16">
        <div className="flex flex-col lg:flex-row justify-between items-center w-[95%] lg:w-[85%] px-4">
          <div className="w-full lg:w-1/2 text-left">
            <h1 className="text-2xl lg:text-5xl font-bold text-electricBlue text-center tracking-[5px]">
              WE'RE ANIVARTI
            </h1>
            <p className="mt-4 text-md lg:text-2xl text-gray-700">
            Anivarti is a digital Business enabler that helps businesses of all sizes grow online. We offer a wide range of services
            </p>
            <button className="text-gray-700 bg-electricBlue px-6 py-2 text-md lg:text-lg mt-6 mx-auto flex items-center justify-center">
              Explore More About Us
              <FaHandPointDown className="ml-2 text-lg lg:text-xl" />
            </button>
          </div>

          <div className="w-full lg:w-1/2 ml-0 mt-4 lg:mt-0 lg:ml-8 text-center">
            <img
              src="images/bannerimg.png"
              alt="Rounded"
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="bg-gray-100 py-16 mt-4 w-[100%] mx-auto">
        <div className="w-[95%] lg:w-[90%] container mx-auto text-center">
          {/* Our Services Heading */}
          <h1 className="px-6 py-3 text-2xl lg:text-3xl text-electricBlue rounded-md font-light tracking-[5px] inline-block mb-2 lg:mb-4">
            OUR SERVICES
          </h1>
          <p className="text-md lg:text-xl text-gray-700 mb-12 tracking-[1px] text-center">
            We provide comprehensive solutions to help businesses thrive in the
            digital world, from e-commerce management to logistics and branding.
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-electricBlue">
              <FaShoppingCart className="text-electricBlue text-3xl lg:text-5xl mx-auto" />
              <h1 className="mt-4 text-lg lg:text-xl font-light text-gray-600 tracking-[3px]">
                E-COMMERCE
              </h1>
              <p className="mt-2 text-md tracking-[1px] text-gray-500 text-start">
                Comprehensive services for marketplace onboarding and seller
                portal management to maximize ROI.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2  hover:border-electricBlue">
              <FaBullhorn className="text-electricBlue text-3xl lg:text-5xl mx-auto" />
              <h1 className="mt-4 text-lg lg:text-xl font-light text-gray-600 tracking-[3px]">
                BRANDING & MARKETING
              </h1>
              <p className="mt-2 text-md tracking-[1px] text-gray-500 text-start">
                Developing strategies to boost brand value and manage ad
                campaigns for maximizing ROAS.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2  hover:border-electricBlue">
              <FaCreditCard className="text-electricBlue text-3xl lg:text-5xl mx-auto" />
              <h1 className="mt-4 text-lg font-light text-gray-600 tracking-[3px]">
                PAYMENT
              </h1>
              <p className="mt-2 text-md tracking-[1px] text-gray-500 text-start">
                Integrating top-tier payment gateways to ensure smooth
                transactions and prevent lost sales.
              </p>
            </div>
            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2  hover:border-electricBlue">
              <FaTruckMoving className="text-electricBlue text-3xl lg:text-5xl mx-auto" />
              <h1 className="mt-4 text-lg lg:text-xl font-light text-gray-700 tracking-[3px]">
                LOGISTICS
              </h1>
              <p className="mt-2 text-md tracking-[1px] text-gray-500 text-start">
                Partnering with logistics experts for efficient, last-mile
                global delivery solutions.
              </p>
            </div>
            {/* Service 5 */}
            <div className="bg-white p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2  hover:border-electricBlue">
              <FaSearchDollar className="text-electricBlue text-3xl lg:text-5xl mx-auto" />
              <h1 className="mt-4 text-lg lg:text-xl font-light text-gray-700 tracking-[3px]">
                MARKET RESEARCH
              </h1>
              <p className="mt-2 text-md tracking-[2px]  text-gray-500 text-start">
                Conducting market research to identify prime business
                opportunities for your growth.
              </p>
            </div>
            {/* Service 6 */}
            <div className="bg-white p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2  hover:border-electricBlue">
              <FaCalculator className="text-electricBlue text-3xl lg:text-5xl mx-auto" />
              <h1 className="mt-4 text-lg lg:text-xl font-light text-gray-700 tracking-[3px]">
                ACCOUNTING
              </h1>
              <p className="mt-2 text-md tracking-[1px] text-gray-500 text-start">
                Offering integrated return filing and accounting solutions, with
                interactive reports.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Partners Section */}
      <section className="py-16">
        <h1 className="p-4 text-lg lg:text-3xl text-electricBlue font-light tracking-[5px] text-center">
          PARTNER & SUPPORTED BY
        </h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-8 lg:gap-4 mt-8 text-center">
          {/* Example logos */}
          <div className="transition transform hover:scale-105">
            <img
              src="images/ABC.webp"
              alt="Company Logo"
              className="w-56 h-32 p-1 bg-white object-cover mx-auto"
            />
          </div>
          <div className="transition transform hover:scale-105">
            <img
              src="images/zentelia.jpg"
              alt="Company Logo"
              className="w-56 h-32  p-1 bg-white object-contain mx-auto"
            />
          </div>
          <div className="transition transform hover:scale-105">
            <img
              src="images/ISTART.webp"
              alt="Company Logo"
              className="w-56 h-32 p-1 bg-white object-contain mx-auto"
            />
          </div>
          <div className="transition transform hover:scale-105">
            <img
              src="images/NITI-AIM-Logo.jpg"
              alt="Company Logo"
              className="w-56 h-32  p-1 bg-white object-contain mx-auto"
            />
          </div>
          <div className="transition transform hover:scale-105">
            <img
              src="images/startup-india.webp"
              alt="Company Logo"
              className="w-56 h-32  p-1 bg-white object-contain mx-auto"
            />
          </div>
        </div>
      </section>


      {/* Expert Solutions Section */}
      <section className="bg-gray-100 py-8">
        <div className="w-[95%] lg:w-[90%] container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-[85%] lg:w-1/2">
            <h1 className="text-lg lg:text-3xl text-electricBlue font-light tracking-[3px] text-center">
              Expert Solutions for E-Commerce Management
            </h1>
            <p className="mt-4 text-gray-600 text-md tracking-[1px] lg:text-lg">
              Unlock the full potential of your online business with our
              tailored eCommerce management services, designed to drive growth,
              streamline operations, and boost customer satisfaction.
            </p>
            <p className="mt-4 text-gray-600 text-md tracking-[1px] lg:text-lg">
              Our comprehensive solutions simplify workflows and accelerate
              sales growth, consistently exceeding expectations with a
              commitment to excellence.
            </p>
          </div>
          <div className="w-[90%] lg:w-1/2">
            <img
              src="images/ESCM.png"
              alt="Expert Solutions"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-[95%] lg:w-[95%] mx-auto py-16">
        <h1 className="text-lg lg:text-3xl text-electricBlue font-light tracking-[3px] text-center">
          Why Choose Anivarti for Your E-Commerce Management Needs?
        </h1>
        <p className="mt-4 w-[90%] lg:w-[80%] mx-auto text-md lg:text-lg text-start tracking-[1px] text-gray-600">
          With expert teams, customized strategies, cutting-edge technology, and
          a proven track record of driving success, we make it easy to scale
          your online business. Let us help you achieve rapid growth—connect
          with us today.
        </p>
        <div className="w-[95%] lg:w-[90%] mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8 text-center">
          {/* Card 1 */}
          <div className="bg-white p-6 border border-gray-100 shadow-lg rounded-lg">
            <AiOutlineUser className="text-5xl text-electricBlue mx-auto" />
            <h3 className="text-gray-700 mt-4 text-xl tracking-[3px]">
              Quick Support When You Need
            </h3>
            <p className="mt-2 text-gray-500 text-md lg:text-lg text-start">
              Our team ensures prompt and reliable assistance, so your store
              operates seamlessly and stays ahead of the competition.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 border border-gray-300 shadow-lg  rounded-lg">
            <FaBullhorn className="text-5xl text-electricBlue mx-auto" />
            <h3 className="text-gray-700 mt-4 text-xl tracking-[3px]">
              Drive Innovation Forward
            </h3>
            <p className="mt-2 text-gray-500 text-md lg:text-lg text-start">
              At Anivarti, innovation is at our core. We provide solutions that
              transform challenges into opportunities, helping your business
              stay ahead in the dynamic eCommerce space.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 border border-gray-300 shadow-lg  rounded-lg">
            <FaShieldAlt className="text-5xl text-electricBlue mx-auto" />
            <h3 className="text-gray-700 mt-4 text-xl tracking-[3px] ">
              Robust Security & Superior Performance
            </h3>
            <p className="mt-2 text-gray-500 text-md lg:text-lg text-start">
              Your store's safety is our priority. We implement strong security
              measures while optimizing performance to deliver an unmatched
              experience.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-6 border border-gray-300 shadow-lg rounded-lg">
            <FaSearch className="text-5xl text-electricBlue mx-auto" />
            <h3 className="text-gray-700 mt-4 text-xl tracking-[3px]">
              Expand Your Reach
            </h3>
            <p className="mt-2 text-gray-500 text-md lg:text-lg text-start">
              Unlock new opportunities with Anivarti. We help you explore
              untapped markets and expand across platforms, growing your online
              presence effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* What We Cover Section */}
      <section className="bg-gray-100 w-[100%] py-16 text-center mx-auto">
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

        <div className="w-[95%] lg:w-[90%] grid md:grid-cols-3 gap-8 mx-auto px-4">
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
              experience for both you and your customers
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md relative">
            <div className="absolute top-2 left-2 text-xl text-gray-700 rounded-full w-12 h-12 flex items-center justify-center">
              03
            </div>
            <div className="flex justify-center mb-4  mt-6">
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
            <div className="absolute top-2 left-2  text-xl text-gray-700 rounded-full w-12 h-12 flex items-center justify-center">
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

      {/* Benefits Section */}
      <section className="py-16 text-center">
        <h1 className="w-[90%] text-xl lg:text-3xl font-light text-electricBlue tracking-[3px] mb-4">
          Benefits of E-Commerce Website Management
        </h1>
        <p className="w-[90%] lg:w-[60%] text-md lg:text-lg text-gray-600 mx-auto mb-8 text-start tracking-[1px] lg:text-center">
          Focus on growth while we manage tech and operations. Cut costs, boost
          efficiency, and get 24/7 support. Scale effortlessly, enhance your
          platform, and launch fast with our secure, high-performance solutions.
        </p>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-7xl mx-auto px-4">
          {/* Card 1 - Market Trend Analysis */}
          <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center  border border-gray-300">
            <FaChartLine className="text-electricBlue text-4xl mb-4" />
            <h3 className="text-md text-gray-800 tracking-[2px]">
              Market Trend Analysis
            </h3>
            <p className="text-gray-500 text-sm mt-2 hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 text-start tracking-[1px]">
              We analyze market trends and customer behaviors to deliver
              actionable insights, helping you stay ahead of competitors and
              meet evolving demands.
            </p>
          </div>

          {/* Card 2 - Streamline Operations */}
          <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-300">
            <FaTasks className="text-electricBlue text-4xl mb-4" />
            <h3 className="text-md text-gray-800 tracking-[2px]">
              Streamline Operations Effortlessly
            </h3>
            <p className="text-gray-500 text-sm mt-2 hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 text-start tracking-[1px]">
              We manage your technical and operational tasks to enhance
              efficiency, freeing up your time to focus on confidently scaling
              your business.
            </p>
          </div>

          {/* Card 3 - Maximize Business Value */}
          <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center  border border-gray-300">
            <FaDollarSign className="text-electricBlue text-4xl mb-4" />
            <h3 className="text-md text-gray-800 tracking-[2px]">
              Maximize Business Value
            </h3>
            <p className="text-gray-500 text-sm mt-2 hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 text-start tracking-[1px]">
              We handle operations and tech support, allowing you to focus on
              innovation, customer relationships, and revenue growth.
            </p>
          </div>

          {/* Card 4 - Cut Costs & Boost Efficiency */}
          <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center  border border-gray-300">
            <FaRocket className="text-electricBlue text-4xl mb-4" />
            <h3 className="text-md text-gray-800 tracking-[2px]">
              Cut Costs & Boost Efficiency
            </h3>
            <p className="text-gray-500 text-sm mt-2 hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 text-start tracking-[1px]">
              Reduce overhead and streamline workflows through automated
              processes and expert support.
            </p>
          </div>

          {/* Card 5 - Scale Your Business */}
          <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center  border border-gray-300">
            <FaExpand className="text-electricBlue text-4xl mb-4" />
            <h3 className="text-md text-gray-800 tracking-[2px]">
              Scale Your Business with Confidence
            </h3>
            <p className="text-gray-500 text-sm mt-2 hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 text-start tracking-[1px]">
              Gain the tools, expertise, and support needed for seamless scaling
              without growing pains.
            </p>
          </div>

          {/* Card 6 - Focus on Customer Success */}
          <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center  border border-gray-300">
            <FaUsers className="text-electricBlue text-4xl mb-4" />
            <h3 className="text-md text-gray-800 tracking-[2px]">
              Focus on Customer Success
            </h3>
            <p className="text-gray-500 text-sm mt-2 hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 text-start tracking-[1px]">
              Enhance user experience and satisfaction with optimized operations
              and reliable solutions.
            </p>
          </div>

          {/* Card 7 - Launch Faster, Grow Faster */}
          <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center  border border-gray-300">
            <FaBolt className="text-electricBlue text-4xl mb-4" />
            <h3 className="text-md text-gray-800 tracking-[2px]">
              Launch Faster, Grow Faster
            </h3>
            <p className="text-gray-500 text-sm mt-2  hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 text-start tracking-[1px]">
              Accelerate your time-to-market with our high-performance,
              ready-to-use solutions.
            </p>
          </div>

          {/* Card 8 - 24/7 Dedicated Support */}
          <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center  border border-gray-300">
            <FaHeadset className="text-electricBlue text-4xl mb-4" />
            <h3 className="text-md text-gray-800 tracking-[2px]">
              24/7 Dedicated Support
            </h3>
            <p className="text-gray-500 text-sm mt-2 text-start hover:border-l-4 pl-2 hover:border-electricBlue transition-all duration-200 tracking-[1px]">
              Enjoy peace of mind with round-the-clock tech and operational
              assistance.
            </p>
          </div>
        </div>
      </section>


      {/* ecommerce solutions Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-xl lg:text-3xl font-light text-electricBlue tracking-[3px] mb-4">
          E-Commerce Management Solutions
        </h1>
        <p className="w-[90%] lg:w-[65%] text-md lg:text-lg text-gray-600 mx-auto mb-8 tracking-[1px] text-start">
          Streamline your online business with our comprehensive e-commerce
          management solutions. We offer a suite of tools and expertise to
          optimize your sales, enhance customer experience, and drive
          sustainable growth.
        </p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-12 max-w-7xl mx-auto px-4">
          {/* Solution Cards */}
          <div className=" p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <FaShoppingCart className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[5px]">
              Pre-Sales Support
            </h3>
          </div>

          <div className=" p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <MdInventory className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[5px]">
              Inventory Management
            </h3>
          </div>

          <div className="p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <MdOutlineCategory className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[5px]">
              Catalog Management
            </h3>
          </div>

          <div className="p-6 rounded-lg shadow-md flex flex-col items-center border border-gray-300">
            <BsClipboardCheck className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[5px]">
              Order Management
            </h3>
          </div>

          <div className="p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <FaTruck className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[5px]">
              Logistic Management
            </h3>
          </div>

          <div className="p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <FaGlobe className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[5px]">
              Marketplace Management
            </h3>
          </div>

          <div className=" p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <MdOutlineManageSearch className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[5px]">
              Data Management & Annotation
            </h3>
          </div>

          <div className="p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <FaComments className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[5px]">
              Customer Support
            </h3>
          </div>

          <div className="p-6 rounded-lg shadow-md flex flex-col items-center  border border-gray-300">
            <FaChartLine className="text-4xl text-electricBlue" />
            <h3 className="text-lg text-gray-700 mt-2 tracking-[5px]">
              Customer Data Insights
            </h3>
          </div>
        </div>
      </section>


      {/* our preffered platforms Section */}
      <section className="w-[95%] mx-auto py-16 text-center">
        <h1 className="text-xl lg:text-3xl font-bold text-electricBlue mb-4">
          Our Preferred E-Commerce Platforms
        </h1>
        <p className="w-[95%] lg:w-[75%] text-md lg:text-lg text-gray-600 mx-auto mb-8 tracking-[1px] text-start">
          Anivarti utilizes advanced eCommerce CMS and CRM platforms, combining
          premium themes, plugins, and extensions. We create tailored eStores
          that simplify online selling. Our expertise helps local sellers
          effortlessly join platforms like Amazon, Flipkart, Etsy, and Myntra,
          expanding their reach and driving global revenue
        </p>

        <div className="w-full grid md:grid-cols-4 gap-6 mx-auto px-4">
          {[
            {
              platform: "Amazon",
              logo: "/images/amazon-logo.webp",
              description:
                "As certified Amazon Selling Partners, we help businesses succeed on Amazon. Our services include product optimization, inventory management, marketing, and customer support. Partner with us to boost sales, enhance your brand, and streamline operations.",
            },
            {
              platform: "Flipkart",
              logo: "/images/Flipkart-Logo.webp",
              description:
                "As certified Flipkart Selling Partners, we help businesses thrive on India's largest marketplace. Our services include product optimization, inventory management, and marketing. Partner with us to boost sales, enhance brand visibility, and streamline operations.",
            },
            {
              platform: "Myntra",
              logo: "/images/myntra.webp",
              description:
                "As Myntra partners, we help brands succeed on India's leading fashion platform. Our services include catalog management, marketing, and performance analysis. Partner with us to boost brand visibility, drive sales, and enhance customer experience.",
            },
            {
              platform: "Etsy",
              logo: "/images/Etsy-Logo.webp",
              description:
                "As Etsy sellers, we create unique, handcrafted products. We prioritize quality and customer satisfaction. Our shop offers a range of items, from personalized gifts to home decor. Support small business and shop with us on Etsy.",
            },
          ].map((platform, index) => (
            <div
              key={index}
              className="bg-white border-4 border-electricBlue p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={platform.logo}
                alt={platform.platform}
                className="w-28 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 tracking-[3px]">
                {platform.platform}
              </h3>
              <p className="text-sm lg:text-md text-gray-700 mt-2 text-start tracking-[1px]">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* contact details Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-xl lg:text-3xl font-bold text-electricBlue mb-8 tracking-[5px]">
          Contact Details
        </h1>

        <div className="w-[95%] lg:w-[70%] flex flex-wrap justify-between items-center mx-auto gap-x-6">
          {/* Address */}
          <div className="flex items-center  p-6 rounded-lg w-full lg:w-auto">
            <FaMapMarkerAlt className="text-electricBlue text-4xl mr-4" />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-700">Address</h3>
              <p className="text-gray-500">
                Plot No. 22, Govind Vihar Sanganer, Jaipur 302022
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center  p-6 rounded-lg w-full lg:w-auto">
            <FaEnvelope className="text-electricBlue text-4xl mr-4" />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-700">Email</h3>
              <p className="text-gray-500">office@anivati.in</p>
            </div>
          </div>

          {/* Mobile Number */}
          <div className="flex items-center p-6 rounded-lg w-full lg:w-auto">
            <FaPhone className="text-electricBlue text-4xl mr-4" />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-700">
                Mobile Number
              </h3>
              <p className="text-gray-500">8955578234</p>
            </div>
          </div>
        </div>
      </section>

      {/* footer Section */}
      <footer className="py-10 text-center">
        <p className="text-md lg:text-xl text-gray-600">
          Copyright &copy; {new Date().getFullYear()} Anivarti. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
