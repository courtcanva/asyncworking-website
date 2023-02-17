import React from "react";
import CardContainer from "./CardContainer";
import TitleContainer from "./TitleContainer";

const Intro = () => {
  return (
    <section className="flex flex-col justify-center items-center xl:flex-row flex-wrap">
      <TitleContainer />
      <CardContainer />
    </section>
  );
};

export default Intro;
