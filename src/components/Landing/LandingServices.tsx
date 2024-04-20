import React from "react";

import { Heading } from "../common/Heading";
import { LandingServicesMapped } from "./LandingServices/LandingServicesMapped";

const LandingServices = () => {
  return (
    <div className="mt-14">
      <Heading title="خدمات ما" />
      <div>
        <LandingServicesMapped />
      </div>
    </div>
  );
};

export { LandingServices };
