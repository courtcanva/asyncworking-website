import React from "react";
import ReviewCard from "./ReviewCard";
import { reviewCardDetails } from "./ReviewDetails.data";

const Reviews = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center pb-24" id="reviews">
      <h2 className="text-h1 mb-16 text-title text-center">What Customers Say</h2>
      <div className="flex justify-around flex-col md:flex-row flex-wrap items-center">
        {reviewCardDetails.map((item, index) => (
          <ReviewCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
