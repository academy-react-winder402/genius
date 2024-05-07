import { Delete, RemoveRedEye } from "@mui/icons-material";

import { CourseItemsInterface } from "../../../types/course-items";

import { Link } from "../Link";

interface DashboardCourseItemProps {
  course: CourseItemsInterface;
  formattedPrice: string;
}

const DashboardCourseItem = ({ course, formattedPrice }: DashboardCourseItemProps) => {
  return (
    <div key={course.id} className="dashboardCourseItem">
      <img src={course.image} className="dashboardCourseItemImage" />
      <Link to={`/courses/${course.id}`} className="dashboardCourseTitleLink">
        <h5 className="dashboardCourseTitle">{course.title}</h5>
      </Link>
      <h6 className="dashboardCourseItemText">{course.teacherName}</h6>
      <h6 className="dashboardCourseItemText">{course.createdAt}</h6>
      <h6 className="dashboardCourseItemText">{formattedPrice} تومان</h6>
      <div className="dashboardCourseItemIconsWrapper">
        <Link to={`/courses/${course.id}`}>
          <RemoveRedEye className="dashboardCourseItemShowIcon" />
        </Link>
        <Delete className="dashboardCourseItemDeleteIcon" />
      </div>
    </div>
  );
};

export { DashboardCourseItem };
