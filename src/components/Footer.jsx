import React from "react";

const Footer = () => {
  return (
    <div>
      {/* footer Section */}
      <footer className="py-10 text-center">
        <p className="text-md lg:text-xl tracking-[1px] lg:tracking-[3px] text-white">
          Copyright &copy; {new Date().getFullYear()} Anivarti.All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
