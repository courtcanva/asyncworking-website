import React from "react";
import Image from "next/image";
import FiveStar from "./FiveStar";

interface IReview {
  titleName: string;
  address: string;
  avatarUrl: string;
  review: string;
}

const ReviewCard = ({ titleName, address, avatarUrl, review }: IReview) => {
  return (
    <div className="flex justify-center border border-grey w-[80%] md:w-[60%] lg:w-[40%] items-center gap-8 px-8 py-8 my-6 shadow-review md:h-80">
      <div className="flex flex-col justify-center items-center max-w-[30%]">
        <div className="relative w-[150px] h-[150px] rounded-full mb-2 overflow-hidden">
          <Image src={avatarUrl} alt="avatar" fill className="object-cover" />
        </div>

        <p className="text-xs text-center">{address}</p>
      </div>
      <div className="max-w-[70%]">
        <div className="flex items-center gap-4 mb-2">
          <span className="font-bold text-lg">{titleName}</span>
          <FiveStar />
        </div>
        <p className="w-full text-sm text-light">{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
