import React from "react";
import { FaCube } from "react-icons/fa";

const TitleContainer = () => {
  return (
    <div className="flex flex-col justify-left w-60% lg:w-96 p-5">
      <FaCube
        color="main-100"
        fontSize="5rem"
        style={{
          background: "main-200",
          marginLeft: "2rem",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      />
      <h2 className="p-8 text-2xl text-left">Why Choose Us</h2>
      <p className="p-8 text-slate-600 text-xl text-left text-wrap">
        We believe that effective IT management should be proactive rather than reactive.
      </p>
      <button className="border-purple-600 w-32 h-12 py-3 rounded-6 text-[15px] text-main-100 text-center rounded-md hover:shadow-lg hover:-translate-y-1 transition duration-700 ease-in-out">
        Learn More
        {/* <button className="bg-main-100 text-white text-[15px] px-6 py-3 cursor-pointer rounded-md hover:shadow-lg hover:-translate-y-1 transition duration-700 ease-in-out ">
          Contact Us
        </button> */}
      </button>
    </div>
  );
};

export default TitleContainer;
