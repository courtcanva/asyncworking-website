import React from "react";

interface ICardDetail {
  titleName: string;
  detail: string;
}

const Card = ({ titleName, detail }: ICardDetail) => {
  return (
    <div className="group">
      <div className="flex flex-col justify-center px-2 group-hover:bg-main-300 group-hover:-translate-y-2 transition duration-700 ease-in-out m-4 bg-white h-40 lg:w-96 lg:h-64 md:m-2 md:w-80 md:h-64 p-8 rounded-lg shadow-lg">
        <h3 className="text-md sm:text-xl p-3 font-semibold text-center text-slate-600 group-hover:text-slate-50 pt-2">
          {titleName}
        </h3>
        <p className="text-md sm:p-3 text-center text-wrap text-main-400 group-hover:text-slate-300 sm:leading-8">
          {detail}
        </p>
      </div>
    </div>
  );
};

export default Card;
