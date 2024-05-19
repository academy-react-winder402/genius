import { Typewriter } from "../common/Typewriter";

import dotIcon from "../../assets/images/Blogs/dot.svg";
import heroSectionLeftImage from "../../assets/images/Blogs/blogs-hero-section-left-image.svg";
import { typeWriterOptions } from "../../core/data/typewriter-options";

const BlogsHeroSection = () => {
  return (
    <div className="blogsHeroSectionWrapper">
      <div className="relative z-50">
        <img src={dotIcon} className="blogsHeroSectionDot" />
        <div className="relative pr-20 lg:pr-14 mt-10">
          <h1 className="blogsTitle">
            <Typewriter options={typeWriterOptions(["اخبار و مقالات نابغه"])} />
          </h1>
          <p className="blogsDescription">
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
