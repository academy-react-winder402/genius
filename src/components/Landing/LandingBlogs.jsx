import { Heading } from "../common/Heading";
import { MainButton } from "../common/MainButton";
import { LandingBlogItemsMapped } from "./Blogs/LandingBlogItemsMapped";

const LandingBlogs = () => {
  return (
    <div className="mt-14 lg:w-[1240px] mx-auto">
      <Heading title="اخبار و مقالات" />
      <div className="lg:w-[1300px] mx-auto">
        <LandingBlogItemsMapped />
      </div>
      <div className="flex justify-center items-center mt-12">
        <MainButton text="مشاهده همه" />
      </div>
    </div>
  );
};

export { LandingBlogs };
