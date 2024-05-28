import { useParams } from "react-router-dom";

import { blogItems } from "../../core/data/blogs/blogItems";

import { BlogHeroSection } from "./BlogHeroSection";
import { ShareBox } from "./ShareBox";
import { Satisfaction } from "../common/Satisfaction";
import { CommentForm } from "../common/CommentForm";
import { Comments } from "../common/Comments";

import videoPlayerImage from "../../assets/images/BlogDetails/video-player.png";

const BlogDetails = () => {
  const { blogId } = useParams();

  const blog = blogItems.find((blog) => blog.id == blogId);

  return (
    <div className="w-[83%] mx-auto">
      <BlogHeroSection blog={blog!} />
      <div className="flex justify-center mt-10">
        <div className="lg:w-[70%]">
          <h3 className="blogDetailsMainSectionTitle">چگونه اموزش ببینیم ؟</h3>
          <p className="blogDetailsMainSectionDescription">
            قبل از هر چیزی باید بدانیم که نمیشه یک روند یا روش خاصی رو برای همه
            افراد که ذهنیت های متفاوتی هم از هم دارند، در نظر گرفت. ولی خب هدف
            تمامی این افراد آموزش دیدن و رسیدن به درک عمیقی از اون مطلب است ولی
            آیا برای تمامی افراد آموزش دیدن به این جا ختم میشود و همه به درک
            عمیقی از اون مطلب میرسند؟ قطعا خیر. در ادامه به نحوه رسیدن به درک
            عمیق مطلب، مناسب برای تمامی افراد صحبت خواهیم کرد.
            <span>مثال:</span>
          </p>
          <p className="blogDetailsMainSectionDescription">
            فرض کنید شما در حال خواندن یک کتاب هستید، در صفحه 30 یک چیزی را
            متوجه نشدین. در حالت عادی شما به یک صفحه قبل میروید و دوباره خواندن
            را شروع میکنید و فرض کنید در صفحه 40 هم دقیقا همین اتفاق میافتد و به
            یک صفحه قبل برمیگردید و دوباره خواندن را شروع میکنید و تا رسیدن به
            آخرین صفحه این کتاب این چرخه بارها و بارها اتفاق میافتد. نکته و
            البته جواب ما اینجاست که شما اگر در صفحه 30 نکته را متوجه نشدین،
            برای رسیدن به درک عمیق باید به جای صفحه قبلی، به صفحه 1 کتاب برگردین
            و کتاب را از اول دوباره بخوانید، دوباره اگر در صفحه 50 نکته ای را
            متوجه نشدین، دوباره کتاب را از اول شروع کنید. شما تا پایان این کتاب
            به درک عمیق اون مطلبی که قرار بود آموزش ببینید میرسید.
          </p>
          <ul className="flex flex-col mt-3">
            <li className="blogDetailsMainSectionListItem">
              <p className="blogDetailsMainSectionDescription">
                <span className="blogDetailsMainSectionLiSpan">
                  افزایش انرژی:
                </span>
                کافئین به‌عنوان یک محرک عصبی عمل می‌کند و با ورود به جریان خون،
                کافئین به مغز می‌رود و سیستم عصب مرکزی را تحریک می‌کند. این
                احتشام ممکن است احساس افزایش انرژی و کاهش خستگی را در شما به
                ارمغان بیاورد.
              </p>
            </li>
            <li className="blogDetailsMainSectionListItem">
              <p className="blogDetailsMainSectionDescription">
                <span className="blogDetailsMainSectionLiSpan">
                  فزایش هوشیاری:{" "}
                </span>
                صرف قهوه می‌تواند تمرکز و هوشیاری شمارا بهبود بخشد. کافئین
                می‌تواند عملکرد مغزی را بهبود دهد و به شما کمک کند در موقعیت‌های
                مختلف ازجمله مطالعه، کار، و مذاکره بهتر عمل کنید.
              </p>
            </li>
            <li className="blogDetailsMainSectionListItem">
              <p className="blogDetailsMainSectionDescription">
                <span className="blogDetailsMainSectionLiSpan">
                  افزایش سطح انرژی بدن:{" "}
                </span>
                کافئین می‌تواند به افزایش سطح هورمون‌هایی مانند اپینفرین
                (آدرنالین) کمک کند. این هورمون‌ها به تنظیم مقدار قند خون و
                افزایش فعالیت قلب و عروق کمک می‌کنند، که نتیجه آن افزایش انرژی و
                تحرک در بدن است.
              </p>
            </li>
          </ul>
          <div className="flex justify-center mt-9 mb-4">
            <img src={videoPlayerImage} />
          </div>
          <p className="blogDetailsMainSectionDescription">
            این مثال برای آموزش از روی کتاب بود ولی برای ویدئو یا پادکست یا هر
            آنچه که میتوانید از آن مطلبی یاد بگیرید هم صدق میکند. شما در مثال
            بالا با هر بار از نو آموزش دیدن، هم مطلب را مرور میکنید و هم نکته
            هایی مهم که در طول آموزش متوجه نشده بودین را متوجه میشوید و این اصل
            قضیه است.
          </p>
          <p className="blogDetailsMainSectionDescription">
            امیدوارم مقاله مفیدی برای شما واقع بوده باشه.
          </p>
          <ShareBox />
          <Satisfaction nameData="مقاله" />
          <div className="blogDetailsCommentsSection">
            <h3 className="blogDetailsCommentsText">
              نظر کاربران درباره این مقاله
            </h3>
            <CommentForm />
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogDetails };
