import React from "react";
import { FaCube } from "react-icons/fa";

const TitleContainer = () => {
  return (
    <div className="flex flex-col justify-left w-60% xl:w-96 p-5">
      <FaCube className="w-20 h-20 text-main-300 bg-main-100 p-4 m-8 rounded-xl " />
      <div className="p-8">
        <h2 className="text-slate-600 text-3xl text-left font-semibold">Why Choose Us ?</h2>
        <p className=" text-main-400 py-4 text-md md:text-lg leading-loose text-left text-wrap ">
          We believe that effective IT management should be proactive rather than reactive.
        </p>
      </div>
      <button className="mx-8 bg-main-100 w-32 h-12 px-3 rounded-lg font-semibold text-[15px] text-main-300 text-center hover:bg-main-300 hover:text-main-100 hover:shadow-lg hover:-translate-y-1 transition duration-700 ease-in-out">
        Learn More
      </button>
    </div>
  );
};

export default TitleContainer;
