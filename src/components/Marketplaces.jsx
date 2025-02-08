import React from "react";

const Marketplaces = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-electricBlue mb-6 tracking-[1px] md:tracking-[3px] lg:tracking-[5px">
        Marketplaces
      </h1>
      <p className="text-md md:text-lg lg:text-2xl text-gray-300">
        Comprehensive services for marketplace onboarding and seller portal
        management. We help brands establish their presence on top e-commerce
        platforms, ensuring smooth operations and maximizing return on
        investment.
      </p>
      <img
        src="/images/marketplace.webp"
        alt="Marketplaces"
        className="w-full mt-6 rounded-lg shadow-md"
      />
      <p className="text-md md:text-lg lg:text-2xl text-gray-300 mt-6">
        Our services include marketplace registration, product listing
        optimization, order management, and performance tracking. We ensure
        brands get the best visibility and sales conversions.
      </p>
    </section>
  );
};

export default Marketplaces;
