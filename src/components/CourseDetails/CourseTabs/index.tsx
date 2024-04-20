import { useState } from "react";

import { CourseLessonType } from "../../../types/course-lessons";

import { a11Props } from "./a11Props";

import { Tabs } from "../../common/Tabs";
import { Tab } from "../../common/Tabs/Tab";
import { CourseDetailsCommentsTab } from "./CourseDetailsCommentsTab";
import { CourseDetailsDescriptionTab } from "./CourseDetailsDescriptionTab";
import { CourseDetailsLessonsTab } from "./CourseDetailsLessonsTab";

interface CourseTabsProps {
  courseLessons: CourseLessonType[];
}

const CourseTabs = ({ courseLessons }: CourseTabsProps) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div
      className="bg-white shadow-primaryShadow rounded-[24px] mt-10 px-7 py-5"
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
      <CourseDetailsDescriptionTab value={value} />
      <CourseDetailsLessonsTab value={value} courseLessons={courseLessons} />
      <CourseDetailsCommentsTab value={value} />
    </div>
  );
};

export { CourseTabs };
