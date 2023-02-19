import React from "react";
import { useState, useRef } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
  const form = useRef();
  const [missingInfo, setMissingInfo] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current[0].value) {
      setMissingInfo(" a Name");
    } else if (!form.current[1].value) {
      setMissingInfo(" an Email Address");
    } else if (!form.current[2].value) {
      setMissingInfo(" your Message");
    } else {
      setMissingInfo("");
      //send email to be added.
      e.target.reset();
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="form px-3 flex-auto mt-2 mb-10 w-[80%] lg:w-[50%] "
    >
      {missingInfo && <p className="block m-1 bg-amber-100 p-2">*Please enter{missingInfo}*</p>}
      <div className="form-row w-[100%] md:flex justify-items">
        <div className="md:w-[50%] p-1">
          <label className="text-[#3b3950] block w-[100%]">Name*</label>
          <input
            type="text"
            name="user_name"
            className="p-2 mb-2 block w-[100%] border focus:outline-0"
            placeholder="Your name..."
          />
        </div>
        <div className="md:w-[50%] p-1">
          <label className="text-[#3b3950] block">Email*</label>
          <input
            type="email"
            name="user_email"
            className="p-2 mb-2 block w-[100%] border focus:outline-0"
            placeholder="Your email..."
          />
        </div>
      </div>
      <div className="form-row w-[100%] p-1">
        <label className="text-[#3b3950] block w-[100%]">Message*</label>
        <textarea
          name="message"
          className="p-2 mb-2 h-20 w-[100%] border focus:outline-0"
          placeholder="Your message..."
        />
      </div>
      <button
        type="submit"
        name="send"
        value="Send Message"
        className="bg-[#5a4fdc] text-white text-[15px] px-6 py-3 cursor-pointer rounded-md hover:shadow-lg hover:-translate-y-1 transition duration-700 ease-in-out "
      >
        Send Message <FontAwesomeIcon icon={faPaperPlane} className="ml-1.5" />
      </button>
    </form>
  );
};

export default ContactForm;
