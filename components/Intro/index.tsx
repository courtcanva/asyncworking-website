import React from "react";
import CardContainer from "./CardContainer";
import TitleContainer from "./TitleContainer";

const Intro = () => {
  return (
    <section className="flex flex-col justify-center items-center md:flex-row flex-wrap my-40">
      <TitleContainer />
      <CardContainer />
    </section>
  );
};

export default Intro;
