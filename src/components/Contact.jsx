import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {/* Contact Form Section */}
      <section className="bg-white py-8 mb-4 text-center rounded-lg border border-gray-200 shadow-xl">
        <h1 className="text-xl lg:text-3xl font-bold text-electricBlue mb-8 tracking-[5px]">
          Get In Touch
        </h1>
        
        <form className="w-[95%] lg:w-[90%] mx-auto  p-2 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="w-full h-12 border border-gray-400 p-2" required />
            <input type="email" placeholder="Email Address" className="w-full h-12 border border-gray-400 p-2" required />
            <input type="tel" placeholder="Phone Number" className="w-full h-12 border border-gray-400 p-2" required />
            <input type="text" placeholder="Address" className="w-full h-12 border border-gray-400 p-2" required />
            <input type="text" placeholder="Company Name" className="w-full h-12 border border-gray-400 p-2" required />
            <select name="Preferred Platform" className="w-full h-12 border border-gray-400 p-2 bg-white">
              <option value="" disabled selected>Choose Platform</option>
              <option value="Amazon">Amazon</option>
              <option value="Flipkart">Flipkart</option>
              <option value="Myntra">Myntra</option>
              <option value="Etsy">Etsy</option>
            </select>
          </div>
          <textarea placeholder="Message" className="w-full h-32 border border-gray-400 p-2 mt-4" required></textarea>
          <button type="submit" className="mt-4 bg-electricBlue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Details Section */}
      <section className="py-8 text-center">
        <h1 className="text-xl lg:text-3xl font-bold text-electricBlue mb-8 tracking-[5px]">
          Contact Details
        </h1>

        <div className="w-[95%] lg:w-[90%] flex flex-col  justify-between items-start mx-auto gap-y-4">
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
              <p className="text-gray-500 text-md">Plot No. 22, Govind Vihar Sanganer, Jaipur 302022</p>
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
              <h3 className="text-lg font-semibold text-gray-700">Mobile Number</h3>
              <p className="text-gray-500">8955578234</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

