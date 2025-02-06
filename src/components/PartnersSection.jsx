const PartnersSection = () => {
  return (
    <section className="bg-black w-[95%] mx-auto py-12 lg:py-20">
      <h1 className="p-4 text-lg lg:text-3xl text-white font-light mb-12 tracking-[3px] lg:tracking-[5px] text-center">
        PARTNER & SUPPORTED BY
      </h1>

      {/* Scrolling logos container */}
      <div className="overflow-hidden">
        <div className="scrolling-logos flex gap-8 justify-center items-center">
          {[
            { src: "images/ABC.webp" },
            { src: "images/zentelia.webp" },
            { src: "images/ISTART.png" },
            { src: "images/NITI-AIM-Logo.jpg" },
            { src: "images/startup-india.webp" },
            { src: "images/amazon-logo.webp" },
          ].map((logo, index) => (
            <div key={index} className="transition transform hover:scale-105">
              <img
                src={logo.src}
                alt="Company Logo"
                className="w-48 h-24 lg:h-32 bg-white object-fit mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;



  