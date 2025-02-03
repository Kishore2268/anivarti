import React from "react";

const PrefferedSection = () => {
  return (
    <div>
      {/* our preffered platforms Section */}
      <section className="w-[95%] mx-auto py-16 text-center">
        <h1 className="text-xl lg:text-3xl font-bold text-electricBlue mb-4">
          Our Preferred E-Commerce Platforms
        </h1>
        <p className="w-[95%] lg:w-[90%] text-md lg:text-lg text-gray-600 mx-auto mb-8 tracking-[1px] text-start">
          Anivarti utilizes advanced eCommerce CMS and CRM platforms, combining
          premium themes, plugins, and extensions. We create tailored eStores
          that simplify online selling. Our expertise helps local sellers
          effortlessly join platforms like Amazon, Flipkart, Etsy, and Myntra,
          expanding their reach and driving global revenue.
        </p>

        <div className="w-full grid md:grid-cols-2 gap-6 mx-auto px-4">
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
              <p className="text-sm lg:text-lg text-gray-700 mt-2 text-start tracking-[1px]">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PrefferedSection;
