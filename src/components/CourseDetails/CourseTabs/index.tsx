import { useState } from "react";

import { a11Props } from "./a11Props";

import { Tabs } from "../../common/Tabs";
import { Tab } from "../../common/Tabs/Tab";
import { Accordion } from "../../common/Accordion";
import { AccordionSummary } from "../../common/Accordion/AccordionSummary";
import { AccordionDetails } from "../../common/Accordion/AccordionDetails";
import { CustomTabPanel } from "./CustomTabPanel";

const CourseTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div
      className="bg-white shadow-primaryShadow rounded-[24px] h-[472px] mt-10 px-7 py-5"
      aria-label="تب های صفحه جزئیات دوره"
    >
      <div className="border-b border-courseDetailsTabsBorder">
        <Tabs
          value={value}
          onChange={handleChange}
          className="text-text3"
          indicatorColor="primary"
        >
          <Tab label="توضیحات" {...a11Props(0)} />
          <Tab label="پیش‌نمایش‌ها" {...a11Props(1)} />
          <Tab label="نظرات کاربران" {...a11Props(2)} />
        </Tabs>
      </div>
      <CustomTabPanel value={value} index={0}>
        <h1 className="courseDetailsTitle">اموزش رایگان html</h1>
        <p className="courseDetailsParagraph">
          محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و
          تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی
          جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی
          پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش
          کدنویسی پیشرفته و تمیز.
        </p>
        <h1 className="courseDetailsTitle">
          اموزش رایگان html برای چه کسانی مناسب است ؟
        </h1>
        <p className="courseDetailsParagraph">
          محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و
          تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی
          جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی
          پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش
          کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به
          روش کدنویسی پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب
          ترین کتابخانه ی جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله
          به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل
          مساله به روش کدنویسی پیشرفته و تمیز؛
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Accordion>
          <AccordionSummary expandIcon={<img />}>dsds</AccordionSummary>
          <AccordionDetails>ds</AccordionDetails>
        </Accordion>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        ddsj
      </CustomTabPanel>
    </div>
  );
};

export { CourseTabs };
