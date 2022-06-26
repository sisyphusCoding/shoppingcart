import { NextPage } from "next";
import React from "react";

const About: NextPage = () => {
  return (
    <div
      className="
      bg-black 
      min-h-full w-full items-center justify-center flex"
    >
      <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-8xl uppercase tracking-tight">
        about
      </h1>
    </div>
  );
};

export default About;
