import React from "react";

import { Heading } from "../common/Heading";
import { TeachersSlider } from "./Teachers/TeachersSlider";

const LandingTeachers = () => {
  return (
    <div className="bg-[#E3F2FD] dark:bg-inherit pt-14 pb-10">
      <Heading>اساتید برتر</Heading>
      <div className="mt-18">
        <TeachersSlider />
      </div>
    </div>
  );
};

export { LandingTeachers };
