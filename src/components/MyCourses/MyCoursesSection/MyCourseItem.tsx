import { Delete, RemoveRedEye } from "@mui/icons-material";

import { CourseItemsInterface } from "../../../types/course-items";

import { Link } from "../../common/Link";

interface MyCourseItemProps {
  course: CourseItemsInterface;
  formattedPrice: string;
}

const MyCourseItem = ({ course, formattedPrice }: MyCourseItemProps) => {
  return (
    <div key={course.id} className="dashboardMyCourseItem">
      <img src={course.image} className="dashboardMyCourseItemImage" />
      <Link to={`/courses/${course.id}`} className="dashboardMyCourseTitleLink">
        <h5 className="dashboardMyCourseTitle">{course.title}</h5>
      </Link>
      <h6 className="dashboardMyCourseItemText">{course.teacherName}</h6>
      <h6 className="dashboardMyCourseItemText">{course.createdAt}</h6>
      <h6 className="dashboardMyCourseItemText">{formattedPrice} تومان</h6>
      <div className="dashboardMyCourseItemIconsWrapper">
        <RemoveRedEye className="dashboardMyCourseItemShowIcon" />
        <Delete className="dashboardMyCourseItemDeleteIcon" />
      </div>
    </div>
  );
};

export { MyCourseItem };
