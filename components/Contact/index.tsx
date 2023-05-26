import React from "react";
import ContactForm from "./ContactForm";
import { BiLinkAlt } from "react-icons/bi";
import { BsFillEnvelopeFill, BsClock } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 lg:px-16" id="contact">
      <h3 className="text-h1 text-title mb-16">Contact Us</h3>
      <div className="flex justify-around flex-col lg:flex-row flex-wrap items-center w-[100%]">
        <ContactForm />

        <div className="ml-8 lg:w-[15%] w-[80%] flex-auto">
          <p className="text-md text-light mb-4">
            <BsFillEnvelopeFill className="w-6 h-6 mb-2" /> <span> info@asyncworking.com</span>
          </p>
          <p className="text-md text-light mb-4">
            <BiLinkAlt className="w-6 h-6 mb-2" /> <span> www.asyncworking.com</span>
          </p>
          <p className="text-md text-light mb-4">
            <AiFillPhone className="w-6 h-6 mb-2" /> <span> 123 456 789</span>
          </p>
          <p className="text-md text-light mb-4">
            <BsClock className="w-6 h-6 mb-2" /> <span> 9:00 AM - 6:00 PM</span>
          </p>
          <p className="text-md text-light mb-4">
            <FaLocationArrow className="w-6 h-6" /> <span> Mount Waverley VIC 3149</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
