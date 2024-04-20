import React from "react";

import { SearchBox } from "../common/SearchBox";
import { LandingHeroSectionFeatures } from "./HeroSection/LandingHeroSectionFeatures";

const LandingHeroSection = () => {
  return (
    <div className="bg-headerBg bg-no-repeat bg-cover w-full pt-7 pb-32 lg:pb-5 lg:rounded-br-[100px] lg:rounded-bl-[100px] lg:-mt-40 lg:pt-40">
      <div className="bg-landingPageProgrammingLanguagesIcon bg-center bg-no-repeat">
        <div>
          <h2 className="text-center text-[23px] font-[500] text-text1">
            پلتفرم اموزش طراحی وب
          </h2>
          <h1 className="text-center font-[800] text-[40px] lg:text-[53px] text-text1">
            مرجع اموزش برنامه نویسی
          </h1>
          <p className="text-center font-[500] text-[20px] mt-3 text-text1">
            مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به
            زبان فارسی .
          </p>
        </div>
        <SearchBox
          placeholder="چی میخوای یاد بگیری ؟"
          isMarginTop
          display="flex justify-center items-center"
          inputClasses="lg:w-[620px]"
        />
        <LandingHeroSectionFeatures />
      </div>
    </div>
  );
};

export { LandingHeroSection };
