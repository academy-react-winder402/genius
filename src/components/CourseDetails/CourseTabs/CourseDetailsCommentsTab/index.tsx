import { CustomTabPanel } from "../CustomTabPanel";
import { CourseDetailsAddComment } from "./CourseDetailsAddComment";

interface CourseDetailsCommentsTabProps {
  value: number;
}

const CourseDetailsCommentsTab = ({ value }: CourseDetailsCommentsTabProps) => {
  return (
    <CustomTabPanel value={value} index={2}>
      <div className="mt-3">
        <CourseDetailsAddComment />
      </div>
    </CustomTabPanel>
  );
};

export { CourseDetailsCommentsTab };
