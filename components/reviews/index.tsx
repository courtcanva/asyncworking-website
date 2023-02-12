import React from "react";
import ReviewCard from "./ReviewCard";
import { reviewCardDetails } from "./ReviewDetails";

const Reviews = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center pb-24">
      <h1 className="text-h1 mb-16 text-title">What Customers Say</h1>
      <div className="flex justify-around flex-col md:flex-row flex-wrap items-center">
        {reviewCardDetails.map((item, index) => (
          <ReviewCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
