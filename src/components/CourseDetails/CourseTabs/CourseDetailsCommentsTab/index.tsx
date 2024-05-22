import { AddComment } from "../../../common/AddComment";
import { Comments } from "../../../common/Comments";
import { CustomTabPanel } from "../../../common/CustomTabPanel";

interface CourseDetailsCommentsTabProps {
  value: number;
  courseId: string;
}

const CourseDetailsCommentsTab = ({
  value,
  courseId,
}: CourseDetailsCommentsTabProps) => {
  return (
    <CustomTabPanel value={value} index={2}>
      <div className="mt-3">
        <AddComment />
        <Comments courseId={courseId} />
      </div>
    </CustomTabPanel>
  );
};

export { CourseDetailsCommentsTab };
