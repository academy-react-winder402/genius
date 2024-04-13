import { LandingHeroSectionFeatures } from "./HeroSection/LandingHeroSectionFeatures";
import { LandingHeroSectionSearchBox } from "./HeroSection/LandingHeroSectionSearchBox";

const LandingHeroSection = () => {
  return (
    <div className="bg-headerBg pt-7 pb-10 lg:-mt-32 lg:pt-32">
      <div className="bg-landingPageProgrammingLanguagesIcon  bg-center bg-no-repeat">
        <div>
          <h2 className="text-center text-[23px] font-[500] text-text1">
            پلتفرم اموزش طراحی وب
          </h2>
          <h1 className="text-center font-[800] text-[53px] text-text1">
            مرجع اموزش برنامه نویسی
          </h1>
          <p className="text-center font-[500] text-[20px] mt-3 text-text1">
            مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به
            زبان فارسی .
          </p>
        </div>
        <LandingHeroSectionSearchBox />
        <LandingHeroSectionFeatures />
      </div>
    </div>
  );
};

export { LandingHeroSection };
