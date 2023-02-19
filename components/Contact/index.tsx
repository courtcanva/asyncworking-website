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
    <div className="flex flex-col justify-center items-center py-20 lg:px-16">
      <h3 className="text-h1 text-title mb-16">Contact Us</h3>
      <div className="flex justify-around flex-col lg:flex-row flex-wrap items-center w-[100%]">
        <ContactForm />

        <div className="ml-8 lg:w-[15%] w-[80%] flex-auto">
          <p className="text-md text-light mb-4">
            <FontAwesomeIcon icon={faEnvelope} /> :<span> info@asyncworking.com</span>
          </p>
          <p className="text-md text-light mb-4">
            <FontAwesomeIcon icon={faLink} /> :<span> www.asyncworking.com</span>
          </p>
          <p className="text-md text-light mb-4">
            <FontAwesomeIcon icon={faPhone} /> :<span> 123 456 789</span>
          </p>
          <p className="text-md text-light mb-4">
            <FontAwesomeIcon icon={faClock} /> :<span> 9:00 AM - 6:00 PM</span>
          </p>
          <p className="text-md text-light mb-4">
            <FontAwesomeIcon icon={faLocationDot} /> :<span> Mount Waverley VIC 3149</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
