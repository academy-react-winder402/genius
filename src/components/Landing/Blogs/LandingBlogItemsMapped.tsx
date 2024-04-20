import React from "react";

import { BlogItemStyleTwo } from "./BlogItemStyleTwo";
import { LandingBlogItem } from "./LandingBlogItem";
import { landingBlogItems } from "./landingBlogItems";

const LandingBlogItemsMapped = () => {
  return (
    <div className="lg:flex gap-9 justify-between mt-7">
      <div>
        <BlogItemStyleTwo
          image="/src/assets/images/Landing/LandingBlogs/BlogsImages/blog-1.png"
          allSeas={22}
          createdAt="1402/7/2"
          title="چگونه مطالعه موثر را برای شما آسانتر کنیم."
          description="لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است   و برای شرایط فعلی تکنولوژی مورد."
          id={4}
        />
      </div>
      <div className="flex flex-col gap-8 mt-10 lg:mt-0">
        {landingBlogItems.map((blog) => (
          <LandingBlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export { LandingBlogItemsMapped };
