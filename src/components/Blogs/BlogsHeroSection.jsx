import heroSectionDots from "../../assets/images/blogs/Dots.png";
import heroSectionDot from "../../assets/images/blogs/Dot.png";
import heroSectionLeftImage from "../../assets/images/blogs/Asset.png";
import heroSectionRightImage from "../../assets/images/blogs/Rectangle.png";
import heroSectionGerd from "../../assets/images/blogs/Ellipse.png";

const BlogsHeroSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:w-[1120px] mx-auto mt-5">
      <div className="relative">
        <img
          src={heroSectionDots}
          className="absolute top-24 -left-24 w-[398px] h-[110px]"
        />
        <img
          src={heroSectionDot}
          className="absolute -top-16 right-[360px] w-[239px] h-[110px]"
        />
        <img
          src={heroSectionRightImage}
          className="absolute -top-24 -right-36 w-[389px] h-[262px] z-10"
        />
        <img
          src={heroSectionGerd}
          className="absolute -bottom-24 right-44 w-[120px] h-[120px]"
        />
        <div className="relative bottom-7 pr-9 z-20">
          <h1 className="font-[800] text-[40px] text-text1 mt-5 w-[85%]">
            اخبار و مقالات سایت نابفه
          </h1>
          <p className="font-[500] text-text2 text-justify mt-3 w-[72%] ">
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-7 lg:mb-0">
        <img src={heroSectionLeftImage} className="w-[80%] z-10 lg:w-auto" />
      </div>
    </div>
  );
};

export { BlogsHeroSection };
