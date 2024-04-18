import heroSectionLeftImage from "../../assets/images/Courses/HeroSection/hero-section-left-image.svg";
import heroSectionDotsTwo from "../../assets/images/Courses/HeroSection/dots2.svg";
import { Search } from "./Search";

const CoursesHeroSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:w-[1120px] mx-auto mt-5 bg-coursesLandingPageDots bg-no-repeat bg-[right_bottom_0rem]">
      <div className="relative">
        <img
          src={heroSectionDotsTwo}
          className="absolute top-2 lg:-top-20 left-16"
        />
        <span className="font-[700] text-[24px] text-primaryColor lg:bg-coursesHeroSectionTitleAfter lg:bg-no-repeat lg:bg-[right_top_2.4rem] h-[50px] pr-10 pt-20 pb-9">
          مهمه از کی یاد می گیری!!
        </span>
        <div className="relative pr-9">
          <h1 className="font-[800] text-[40px] text-text1 mt-5 w-[85%]">
            اموزش برنامه نویسی با بهترین ها
          </h1>
          <p className="font-[500] text-text2 text-justify mt-3 w-[72%]">
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-7 lg:mb-0">
        <img src={heroSectionLeftImage} className="w-[80%] lg:w-auto" />
      </div>
    </div>
  );
};

export { CoursesHeroSection };
