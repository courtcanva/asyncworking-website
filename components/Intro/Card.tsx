import React from "react";

// interface IconTypeProps {
//   width: number;
//   height: number;
//   color: string;
// }

// type IconType = (props: IconTypeProps) => JSX.Element;

// interface Props {
//   title: string;
//   icon: IconType;
// }

interface ICardDetail {
  titleName: string;
  detail: string;
  // icon: any;
}

const Card = ({ titleName, detail }: ICardDetail) => {
  return (
    <div className="group">
      <div className="flex flex-col justify-center px-2 group-hover:bg-main-100 group-hover:-translate-y-2 transition duration-700 ease-in-out m-4 bg-white h-56 w-60% md:w-88 lg:h-64 lg:w-96 p-8 rounded-lg shadow">
        {/* <div className="text-slate-600 group-hover:text-slate-50 h-16 w-16"> */}
        {/* {React.createElement(icon, { width: 99, height: 16, color: "main-100" })} */}
        {/* {icon} */}
        {/* </div>÷\ */}
        {/* {Icon && <Icon classname="h-8 w-8 text-red-500" />} */}
        <h3 className="text-2xl font-semibold text-center text-slate-600 group-hover:text-slate-50 pt-2">
          {titleName}
        </h3>
        <p className="text-lg py-2 text-center text-wrap text-slate-500 group-hover:text-slate-300">
          {detail}
        </p>
      </div>
    </div>
  );
};

export default Card;
