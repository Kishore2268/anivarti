import {
  FaShoppingCart,
  FaBullhorn,
  FaCreditCard,
  FaTruck,
  FaSearch,
  FaCalculator,
  FaShieldAlt,
} from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";



const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

  return (
    <div>
     {/* Header Section */}
<header className="fixed top-0 left-0 w-full bg-sky-50 shadow-md z-50">
  <div className="flex justify-between items-center w-[80%] mx-auto py-4 px-4">
    {/* Logo */}
    <div className="text-2xl font-bold text-sky-400">
      <a href="/">ANIVARTI</a>
    </div>

    {/* Navigation links */}
    <div className="hidden md:flex space-x-6">
      <a href="/" className="text-gray-700 hover:text-sky-400">Home</a>
      <a href="/contact" className="text-gray-700 hover:text-sky-400">Contact Us</a>
    </div>

    {/* Hamburger Menu for small and medium devices */}
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-gray-700">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu (hidden by default) */}
  <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
    <div className="flex justify-between items-center p-4">
      <button onClick={toggleMenu} className="text-gray-700">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div className="flex flex-col items-center space-y-4 py-4">
      <a href="/" className="text-gray-700 hover:text-sky-400">Home</a>
      <a href="/contact" className="text-gray-700 hover:text-sky-400">Contact Us</a>
    </div>
  </div>
</header>

{/* Banner Section */}
<section className="min-h-screen bg-gradient-to-r from-sky-100 via-white to-sky-100 py-16 flex justify-center items-center mt-16">
  <div className="flex justify-between items-center w-[80%] px-4">
    <div className="w-1/2 text-left">
      <h1 className="text-5xl font-bold text-sky-400 text-center">
        ANIVARTI
      </h1>
      <p className="mt-4 text-2xl text-gray-600">
        Anivarti is a digital Business enabler that helps businesses of
        all sizes grow online. We offer a wide range of services.
      </p>
    </div>
    <div className="w-1/2 ml-8 text-center">
      <img
        src="images/bannerimg.png"
        alt="Rounded"
        className="rounded-full mx-auto"
      />
    </div>
  </div>
</section>



    {/* Services Section */}
<section className="bg-white py-16 mt-4 w-[80%] mx-auto">
  <div className="container mx-auto text-center">
    {/* Our Services Heading */}
    <h1 className="bg-gray-300 px-6 py-3 text-3xl text-sky-400 rounded-md font-bold inline-block mb-10">
      Our Services
    </h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
      {/* Service 1 */}
      <div className="bg-sky-50 p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-gray-300">
        <FaShoppingCart className="text-sky-400 text-5xl mx-auto" />
        <h1 className="mt-4 text-2xl font-semibold text-gray-800">
          E-COMMERCE
        </h1>
        <p className="mt-2 text-lg text-gray-600 text-start">
          Comprehensive services for marketplace onboarding and seller portal management to maximize ROI.
        </p>
      </div>
      {/* Service 2 */}
      <div className="bg-sky-50 p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-gray-300">
        <FaBullhorn className="text-orange-400 text-5xl mx-auto" />
        <h1 className="mt-4 text-2xl font-semibold text-gray-800">
          BRANDING & MARKETING
        </h1>
        <p className="mt-2 text-lg text-gray-600 text-start">
          Developing strategies to boost brand value and manage ad campaigns for maximizing ROAS.
        </p>
      </div>
      {/* Service 3 */}
      <div className="bg-sky-50 p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-gray-300">
        <FaCreditCard className="text-green-400 text-5xl mx-auto" />
        <h1 className="mt-4 text-2xl font-semibold text-gray-800">PAYMENT</h1>
        <p className="mt-2 text-lg text-gray-600 text-start">
          Integrating top-tier payment gateways to ensure smooth transactions and prevent lost sales.
        </p>
      </div>
      {/* Service 4 */}
      <div className="bg-sky-50 p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-gray-300">
        <FaTruck className="text-yellow-400 text-5xl mx-auto" />
        <h1 className="mt-4 text-2xl font-semibold text-gray-800">
          LOGISTICS
        </h1>
        <p className="mt-2 text-lg text-gray-600 text-start">
          Partnering with logistics experts for efficient, last-mile global delivery solutions.
        </p>
      </div>
      {/* Service 5 */}
      <div className="bg-sky-50 p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-gray-300">
        <FaSearch className="text-red-400 text-5xl mx-auto" />
        <h1 className="mt-4 text-2xl font-semibold text-gray-800">
          MARKET RESEARCH
        </h1>
        <p className="mt-2 text-lg text-gray-600 text-start">
          Conducting market research to identify prime business opportunities for your growth.
        </p>
      </div>
      {/* Service 6 */}
      <div className="bg-sky-50 p-8 rounded-lg text-center shadow-lg border border-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-gray-300">
        <FaCalculator className="text-purple-400 text-5xl mx-auto" />
        <h1 className="mt-4 text-2xl font-semibold text-gray-800">
          ACCOUNTING
        </h1>
        <p className="mt-2 text-lg text-gray-600 text-start">
          Offering integrated return filing and accounting solutions, with interactive reports.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Partners Section */}
      <section className="bg-white py-16">
        <h1 className="p-4 text-4xl text-gray-800 font-bold text-center">
          Partner and Supported by
        </h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-8 mt-8 text-center">
          {/* Example logos */}
          <div className="transition transform hover:scale-105">
            <img
              src="images/company-logo-1.jpg"
              alt="Company Logo"
              className="w-64  mx-auto"
            />
          </div>
          <div className="transition transform hover:scale-105">
            <img
              src="images/company-logo-2.jpg"
              alt="Company Logo"
              className="w-64 h-32 mx-auto"
            />
          </div>
          <div className="transition transform hover:scale-105">
            <img
              src="images/company-logo-3.png"
              alt="Company Logo"
              className="w-64 h-32 mx-auto"
            />
          </div>
          <div className="transition transform hover:scale-105">
            <img
              src="images/company-logo-4.jpg"
              alt="Company Logo"
              className="w-64 h-32 mx-auto"
            />
          </div>
          <div className="transition transform hover:scale-105">
            <img
              src="images/company-logo-5.png"
              alt="Company Logo"
              className="w-64 h-32 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Expert Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2">
            <h1 className="text-3xl font-bold">
              Expert Solutions for E-Commerce Management
            </h1>
            <p className="mt-4 text-lg">
              Harness the full potential of your online business with our
              advanced eCommerce management services. We specialize in creating
              scalable and tailored solutions designed to meet your unique
              business needs. Our services are focused on ensuring smooth
              operations and unlocking maximum growth opportunities.
            </p>
            <p className="mt-4 text-lg">
              By leveraging our all-encompassing eCommerce management solutions,
              you can simplify your workflows, enhance customer satisfaction,
              and drive effortless sales growth. With a commitment to
              excellence, we deliver top-notch services that consistently
              surpass your expectations.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="path-to-image.jpg"
              alt="Expert Solutions"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-sky-100 py-16">
        <h1 className="text-3xl font-bold text-center text-white">
          Why Choose Anivarti for Your E-Commerce Management Needs?
        </h1>
        <p className="mt-4 text-lg text-center text-white">
          With expert teams, customized strategies, cutting-edge technology, and
          a proven track record of driving success, we make it easy to scale
          your online business. Let us help you achieve rapid growth—connect
          with us today.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8 text-center">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg">
            <AiOutlineUser className="text-3xl mx-auto" />
            <h3 className="mt-4 text-2xl font-bold">
              Quick Support When You Need It
            </h3>
            <p className="mt-2">
              Our team ensures prompt and reliable assistance, so your store
              operates seamlessly and stays ahead of the competition.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg">
            <FaBullhorn className="text-3xl mx-auto" />
            <h3 className="mt-4 text-2xl font-bold">
              Drive Innovation Forward
            </h3>
            <p className="mt-2">
              At Anivarti, innovation is at our core. We provide solutions that
              transform challenges into opportunities, helping your business
              stay ahead in the dynamic eCommerce space.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg">
            <FaShieldAlt className="text-3xl mx-auto" />
            <h3 className="mt-4 text-2xl font-bold">
              Robust Security & Superior Performance
            </h3>
            <p className="mt-2">
              Your store's safety is our priority. We implement strong security
              measures while optimizing performance to deliver an unmatched
              experience.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg">
            <FaSearch className="text-3xl mx-auto" />
            <h3 className="mt-4 text-2xl font-bold">Expand Your Reach</h3>
            <p className="mt-2">
              Unlock new opportunities with Anivarti. We help you explore
              untapped markets and expand across platforms, growing your online
              presence effortlessly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
