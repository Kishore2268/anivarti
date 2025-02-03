import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {" "}
      {/* contact details Section */}
      <section className="bg-white py-16 text-center">
        <h1 className="text-xl lg:text-3xl font-bold text-electricBlue mb-8 tracking-[5px]">
          Contact Details
        </h1>

        <div className="w-[95%] lg:w-[90%] flex flex-wrap justify-between items-center mx-auto gap-x-6">
          {/* Address */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Plot+No.+22,+Govind+Vihar+Sanganer,+Jaipur+302022"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 rounded-lg w-full lg:w-auto hover:bg-gray-200 transition"
          >
            <FaMapMarkerAlt className="text-electricBlue text-3xl mr-4" />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-700">Address</h3>
              <p className="text-gray-500">
                Plot No. 22, Govind Vihar Sanganer,
              </p>
              <p className="text-gray-500">Jaipur 302022</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:office@anivati.in"
            className="flex items-center p-2 rounded-lg w-full lg:w-auto hover:bg-gray-200 transition"
          >
            <FaEnvelope className="text-electricBlue text-3xl mr-4" />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-700">Email</h3>
              <p className="text-gray-500">office@anivati.in</p>
            </div>
          </a>

          {/* Mobile Number */}
          <a
            href="tel:8955578234"
            className="flex items-center p-2 rounded-lg w-full lg:w-auto hover:bg-gray-200 transition"
          >
            <FaPhone className="text-electricBlue text-3xl mr-4" />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-700">
                Mobile Number
              </h3>
              <p className="text-gray-500">8955578234</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
