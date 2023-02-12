import React from "react";
import Card from "./card";
import { introCardDetails } from "./CardDetails";

const CardContainer = () => {
  return (
    <div className="flex justify-center	">
      <h2>Why Choose Us</h2>
      <div className="grid grid-cols-2 gap-4">
        {introCardDetails.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
