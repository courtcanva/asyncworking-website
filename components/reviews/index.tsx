import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-h1 mb-16">What Customers Say</h1>
      <ReviewCard />
    </div>
  );
};

export default Reviews;
