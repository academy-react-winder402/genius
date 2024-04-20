import React from "react";

import titleAfter from "../../../assets/images/Landing/LandingServices/title.svg";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="flex flex-col justify-center items-center text-text1">
      <h3 className="font-[900] text-[40px]">{title}</h3>
      <img src={titleAfter} />
    </div>
  );
};

export { Heading };
