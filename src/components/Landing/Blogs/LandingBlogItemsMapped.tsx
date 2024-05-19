import { useEffect, useState } from "react";

import { newsAPI } from "../../../core/services/api/news/news.api";

import { NewsInterface } from "../../../types/news";

import { BlogItemStyleTwo } from "./BlogItemStyleTwo";
import { LandingBlogItem } from "./LandingBlogItem";

const LandingBlogItemsMapped = () => {
  const [news, setNews] = useState<{ news: NewsInterface[] }>();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const getNews = await newsAPI(null, null, null, null, null, null);

        console.log(getNews);

        setNews(getNews);
      } catch (error) {
        return false;
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="lg:flex gap-9 justify-between mt-7">
      <div>
        {/* <BlogItemStyleTwo
          id={4}
          image="/src/assets/images/Landing/LandingBlogs/BlogsImages/blog-1.png"
          allSeas={22}
          createdAt="1402/7/2"
          title="چگونه مطالعه موثر را برای شما آسانتر کنیم."
          description="لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است   و برای شرایط فعلی تکنولوژی مورد."
        /> */}
      </div>
      <div className="flex flex-col gap-8 mt-10 lg:mt-0">
        {news &&
          news.news.map((blog) => (
            <LandingBlogItem key={blog.id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export { LandingBlogItemsMapped };
