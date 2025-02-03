const PartnersSection = () => {
    return (
      <section className="py-24">
        <h1 className="p-4 text-lg lg:text-3xl text-electricBlue font-light tracking-[5px] text-center">
          PARTNER & SUPPORTED BY
        </h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-8 lg:gap-4 mt-8 text-center">
          <div className="transition transform hover:scale-105">
            <img
              src="images/ABC.webp"
              alt="Company Logo"
              className="w-32 h-32 p-1 bg-white object-cover mx-auto"
            />
          </div>
          <div className="transition transform hover:scale-105">
            <img
              src="images/zentelia.jpg"
              alt="Company Logo"
              className="w-32 h-32  p-1 bg-white object-contain mx-auto"
            />
          </div>
          <div className="transition transform hover:scale-105">
            <img
              src="images/ISTART.webp"
              alt="Company Logo"
              className="w-32 h-32 p-1 bg-white object-contain mx-auto"
            />
          </div>
          <div className="transition transform hover:scale-105">
            <img
              src="images/NITI-AIM-Logo.jpg"
              alt="Company Logo"
              className="w-32 h-32  p-1 bg-white object-contain mx-auto"
            />
          </div>
          <div className="transition transform hover:scale-105">
            <img
              src="images/startup-india.webp"
              alt="Company Logo"
              className="w-32 h-32  p-1 bg-white object-contain mx-auto"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default PartnersSection;
  