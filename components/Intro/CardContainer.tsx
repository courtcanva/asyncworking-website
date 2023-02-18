import React from "react";
import Card from "./Card";
import { introCardDetails } from "./CardDetails";

const CardContainer = () => {
  return (
    <div className="flex p-5 m-5 flex-col justify-center md:space-x-8 md:flex-row">
      <div className="flex flex-col md:translate-y-8">
        {introCardDetails.slice(0, introCardDetails.length / 2).map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
      <div className="flex flex-col md:-translate-y-8">
        {introCardDetails
          .slice(introCardDetails.length / 2, introCardDetails.length)
          .map((item, index) => (
            <Card {...item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default CardContainer;
