import { useDarkModeSelector } from "../../redux/darkMode";

import dotIcon from "../../assets/images/Blogs/dot.svg";
import dotDarkIcon from "../../assets/images/Blogs/dot.svg";
import heroSectionLeftImage from "../../assets/images/Blogs/blogs-hero-section-left-image.svg";

const BlogsHeroSection = () => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="blogsHeroSectionWrapper">
      <div className="relative z-50">
        {darkMode ? (
          <img src={dotIcon} className="absolute top-2 lg:-top-3 left-32" />
        ) : (
          <img src={dotIcon} className="absolute top-2 lg:-top-14 left-44" />
        )}
        <div className="relative pr-20 lg:pr-14 mt-10">
          <h1 className="blogsTitle">
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
