import React from "react";
import Image from "next/image";
import FiveStar from "./FiveStar";

const ReviewCard = () => {
  return (
    <div className="flex justify-center border border-grey w-[40%] items-center gap-8 px-8 py-8  shadow-review">
      <div className="flex flex-col justify-center items-center max-w-[30%]">
        <Image
          src={"/reviews/avatar1.jpeg"}
          alt="avatar"
          width={150}
          height={150}
          className="rounded-full mb-2"
        />
        <p className="text-xs text-center">China, Beijing</p>
      </div>
      <div className="max-w-[70%]">
        <div className="flex items-center gap-4 mb-2">
          <span className="font-bold text-lg">Green approval</span>
          <FiveStar />
        </div>
        <p className="w-full text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt optio beatae saepe
          reprehenderit? Ipsum natus, qui id pariatur minus odio!
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
