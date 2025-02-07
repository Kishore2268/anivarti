import { FaHandshake } from "react-icons/fa";

const PartnersSection = () => {
  const logos = [
    { src: "images/ABC.webp" },
    { src: "images/zentelia.webp" },
    { src: "images/ISTART.png" },
    { src: "images/NITI-AIM-Logo.webp" },
    { src: "images/startup-india.webp" },
    { src: "images/amazon-logo.webp" },
    { src: "images/shiprocket-logo.svg" },
    { src: "images/razorpay.webp" },
    { src: "images/Flipkart-Logo.webp" },
    { src: "images/shopify-logo.webp" },
  ];

  return (
    <section className="bg-black w-[95%] mx-auto py-6 lg:py-20">
      <h1 className="p-4 text-lg lg:text-4xl text-white font-light mb-12 tracking-[3px] lg:tracking-[5px] text-center">
        PARTNER & SUPPORTED BY
      </h1>

      {/* Scrolling logos container */}
      <div className="logos-container">
        <div className="scrolling-logos">
          {/* "Our Partners" text as the first item */}
          <div className="text-white text-xl lg:text-3xl tracking-[3px] font-light flex items-center gap-2">
            <FaHandshake className="text-yellow-500 text-2xl lg:text-4xl" />
            <span>Our Partners:</span>
          </div>

          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img
                src={logo.src}
                alt="Company Logo"
                loading="lazy"
                className="w-32 h-16 md:w-40 md:h-20 lg:w-52 lg:h-28 object-contain mx-auto"
              />
            </div>
          ))}

          {/* Duplicate logos for smooth scrolling */}
          <div className="text-white text-xl lg:text-3xl tracking-[3px] font-light flex items-center gap-2">
            <FaHandshake className="text-yellow-500 text-2xl lg:text-4xl" />
            <span>Our Partners:</span>
          </div>

          {logos.map((logo, index) => (
            <div key={`dup-${index}`} className="logo-item">
              <img
                src={logo.src}
                alt="Company Logo"
                loading="lazy"
                className="w-32 h-16 md:w-40 md:h-20 lg:w-52 lg:h-28 object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;


