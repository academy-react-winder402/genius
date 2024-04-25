import { CustomTabPanel } from "../CustomTabPanel";
import { CourseDetailComments } from "./CourseDetailComments";
import { CourseDetailsAddComment } from "./CourseDetailsAddComment";

interface CourseDetailsCommentsTabProps {
  value: number;
}

const CourseDetailsCommentsTab = ({ value }: CourseDetailsCommentsTabProps) => {
  return (
    <CustomTabPanel value={value} index={2}>
      <div className="mt-3">
        <CourseDetailsAddComment />
        <CourseDetailComments />
      </div>
    </CustomTabPanel>
  );
};

export { CourseDetailsCommentsTab };
