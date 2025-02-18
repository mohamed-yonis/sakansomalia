import React from "react";
import "tailwindcss/tailwind.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Header from "../pages/Header";

const Contact = () => {
  return (
    <> 
    <Header/>
    <div className=" mx-auto lg:px-20 p-8 w-full pt-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <p className="text-gray-700 mb-4">
            Feel free to reach out to us for any inquiries or questions. We are
            here to help you with your construction needs.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> info@sakanconstruction.com
          </p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
