import { CourseLessonType } from "../../../../types/course-lessons";
import { CustomTabPanel } from "../CustomTabPanel";
import { CourseDetailsAccordion } from "./CourseDetailsAccordion";

interface CourseDetailsLessonsTabProps {
  value: number;
  courseLessons: CourseLessonType[];
}

const CourseDetailsLessonsTab = ({
  value,
  courseLessons,
}: CourseDetailsLessonsTabProps) => {
  return (
    <CustomTabPanel value={value} index={1}>
      <div className="pr-3 flex flex-col gap-3 mt-2 ">
        {courseLessons.map((lesson) => (
          <CourseDetailsAccordion lesson={lesson} />
        ))}
      </div>
    </CustomTabPanel>
  );
};

export { CourseDetailsLessonsTab };
