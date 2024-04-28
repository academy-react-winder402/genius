import { useDarkModeSelector } from "../../redux/darkMode";

import dotsIcon from "../../assets/images/Blogs/Dots.svg";
import dotIcon from "../../assets/images/Blogs/Dot.svg";
import heroSectionLeftImage from "../../assets/images/Blogs/blogs-hero-section-left-image.svg";
import rightImage from "../../assets/images/Blogs/blogs-hero-section-right-image.svg";
import circleIcon from "../../assets/images/Blogs/blogs-hero-section-circle.svg";

const BlogsHeroSection = () => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:w-[1120px] mx-auto mt-5 lg:bg-coursesLandingPageDots dark:lg:bg-coursesLandingPageDotsDark lg:bg-no-repeat lg:bg-[right_bottom_0rem]">
      <div className="relative">
        {darkMode ? (
          <img src={dotIcon} className="absolute top-2 lg:-top-30 left-16" />
        ) : (
          <img src={dotIcon} className="absolute top-2 lg:-top-10 left-16" />
        )}

        <div className="relative pr-9">
          <h1 className="font-[800] text-[40px] text-text1 dark:text-darkText mt-5 w-[85%]">
            اخبار و مقالات نابغه
          </h1>
          <p className="font-[500] text-text2 dark:text-darkText text-justify mt-3 w-[72%]">
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

export { BlogsHeroSection };
