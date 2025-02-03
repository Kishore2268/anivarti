const ExpertSolutionsSection = () => {
    return (
      <section className="py-8">
        <h1 className="text-lg lg:text-3xl text-electricBlue font-light tracking-[3px] text-center">
          Expert Solutions for E-Commerce Management
        </h1>
        <div className="w-[95%] lg:w-[90%] container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-[85%] lg:w-1/2">
            <p className="mt-4 text-gray-600 text-md tracking-[1px] lg:text-lg">
              Unlock the full potential of your online business with our tailored eCommerce management services, designed to drive growth, streamline operations, and boost customer satisfaction.
            </p>
            <p className="mt-4 text-gray-600 text-md tracking-[1px] lg:text-lg">
              Our comprehensive solutions simplify workflows and accelerate sales growth, consistently exceeding expectations with a commitment to excellence.
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
    );
  };
  
  export default ExpertSolutionsSection;
  