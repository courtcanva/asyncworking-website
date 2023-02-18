import React from "react";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLink,
  faPhone,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h3 className="text-[36px] md:text-[52px] text-[#3b3950] font-medium mb-4 drop-shadow-lg w-[100%] text-center">
        Contact Us
      </h3>
      <div className="flex justify-around flex-col lg:flex-row flex-wrap items-center w-[100%]">
        <ContactForm />

        <div className="ml-8 lg:w-[15%] w-[80%] flex-auto">
          <p className="text-[17px] text-[#9e9cb9] mb-4">
            <FontAwesomeIcon icon={faEnvelope} /> :<span> info@asyncworking.com</span>
          </p>
          <p className="text-[17px] text-[#9e9cb9] mb-4">
            <FontAwesomeIcon icon={faLink} /> :<span> www.asyncworking.com</span>
          </p>
          <p className="text-[17px] text-[#9e9cb9] mb-4">
            <FontAwesomeIcon icon={faPhone} /> :<span> 123 456 789</span>
          </p>
          <p className="text-[17px] text-[#9e9cb9] mb-4">
            <FontAwesomeIcon icon={faClock} /> :<span> 9:00 AM - 6:00 PM</span>
          </p>
          <p className="text-[17px] text-[#9e9cb9] mb-4">
            <FontAwesomeIcon icon={faLocationDot} /> :<span> Mount Waverley VIC 3149</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
