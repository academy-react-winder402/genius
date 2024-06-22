import { RemoveRedEye } from "@mui/icons-material";

import { convertDateToPersian } from "../../../core/utils/date-helper.utils";

import { MyCoursesList } from "../../../types/user-panel/my-courses-list";

import { Link } from "../Link";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

interface DashboardCourseItemProps {
  course: MyCoursesList;
  formattedPrice: string;
}

const DashboardCourseItem = ({
  course,
  formattedPrice,
}: DashboardCourseItemProps) => {
  const convertedUpdateDate = convertDateToPersian(course.lastUpdate);

  return (
    <div key={course.courseId} className="dashboardCourseItem">
      <img
        src={course.tumbImageAddress || blankThumbnail}
        className="dashboardCourseItemImage"
      />
      <Link
        to={`/courses/${course.courseId}`}
        className="dashboardCourseTitleLink"
      >
        <h5 className="dashboardCourseTitle w-[110px]">{course.courseTitle}</h5>
      </Link>
      <h6 className="dashboardCourseItemText">{course.fullName}</h6>
      <h6 className="dashboardCourseItemText">{convertedUpdateDate}</h6>
      <h6 className="dashboardCourseItemText">{formattedPrice} تومان</h6>
      <div className="dashboardCourseItemIconsWrapper">
        <Link to={`/courses/${course.courseId}`}>
          <RemoveRedEye className="dashboardCourseItemShowIcon" />
        </Link>
      </div>
    </div>
  );
};

export { DashboardCourseItem };
