import { AddComment } from "../../../common/AddComment";
import { Comments } from "../../../common/Comments";
import { CustomTabPanel } from "../../../common/CustomTabPanel";

interface CourseDetailsCommentsTabProps {
  value: number;
}

const CourseDetailsCommentsTab = ({ value }: CourseDetailsCommentsTabProps) => {
  return (
    <CustomTabPanel value={value} index={2}>
      <div className="mt-3">
        <AddComment />
        <Comments />
      </div>
    </CustomTabPanel>
  );
};

export { CourseDetailsCommentsTab };
