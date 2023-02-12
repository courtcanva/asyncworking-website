import React from "react";
import Image from "next/image";

interface ICardDetail {
  titleName: string;
  detail: string;
}

const Card = ({ titleName, detail }: ICardDetail) => {
  return (
    <div className="h-36 w-36 border-r-slate-400">
      <h3 className="text-2xl">{titleName}</h3>
      <p className="text-lg">{detail}aaaa</p>
    </div>
  );
};

export default Card;
