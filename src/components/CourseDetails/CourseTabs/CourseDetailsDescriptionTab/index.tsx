import { CustomTabPanel } from "../../../common/CustomTabPanel";
interface CourseDetailsDescriptionTabProps {
  value: number;
}

const CourseDetailsDescriptionTab = ({
  value,
}: CourseDetailsDescriptionTabProps) => {
  return (
    <CustomTabPanel value={value} index={0}>
      <h1 className="courseDetailsTitle">اموزش رایگان html</h1>
      <p className="courseDetailsParagraph">
        محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و
        تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی جاوااسکریپت
        محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و
        تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته
        و تمیز.
      </p>
      <h1 className="courseDetailsTitle">
        اموزش رایگان html برای چه کسانی مناسب است ؟
      </h1>
      <p className="courseDetailsParagraph">
        محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و
        تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی جاوااسکریپت
        محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و
        تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته
        و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی
        پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی
        جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی
        پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش
        کدنویسی پیشرفته و تمیز؛
      </p>
    </CustomTabPanel>
  );
};

export { CourseDetailsDescriptionTab };
