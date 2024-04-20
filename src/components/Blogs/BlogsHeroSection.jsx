const BlogsHeroSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:w-[1120px] mx-auto mt-5 lg:bg-coursesLandingPageDots lg:bg-no-repeat lg:bg-[right_bottom_0rem]">
      <div>
        <div className="relative pr-9">
          <h1 className="font-[800] text-[40px] text-text1 mt-5 w-[85%]">
            اخبار و مقالات هگزا اسکواد
          </h1>
          <p className="font-[500] text-text2 text-justify mt-3 w-[72%]">
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.
          </p>
        </div>
      </div>
    </div>
  );
};

export { BlogsHeroSection };
