import { RemoveRedEye } from "@mui/icons-material";

import { convertDateToPersian } from "../../core/utils/date-helper.utils";

import { CourseReserves } from "../../types/user-panel/course-reserves";

import { Link } from "../common/Link";

import blankThumbnail from "../../assets/images/Courses/blank-thumbnail.jpg";

interface DashboardCourseReserveItemProps {
  courseReserve: CourseReserves;
  imageAddress: string | undefined;
}

const DashboardCourseReserveItem = ({
  courseReserve,
  imageAddress,
}: DashboardCourseReserveItemProps) => {
  const convertedUpdateDate = convertDateToPersian(courseReserve.reserverDate);

  return (
    <div key={courseReserve.courseId} className="dashboardCourseItem">
      <Link to={`/courses/${courseReserve.courseId}`}>
        <img
          src={imageAddress || blankThumbnail}
          className="dashboardCourseItemImage"
        />
      </Link>
      <Link
        to={`/courses/${courseReserve.courseId}`}
        className="dashboardCourseTitleLink"
      >
        <h5 className="dashboardCourseTitle w-[110px]">
          {courseReserve.courseName}
        </h5>
      </Link>
      <h6 className="dashboardCourseItemText w-[130px] truncate">
        {courseReserve.studentName || "کاربر نابغه"}
      </h6>
      <h6 className="dashboardCourseItemText">{convertedUpdateDate}</h6>
      <div className="dashboardCourseItemIconsWrapper">
        <Link to={`/courses/${courseReserve.courseId}`}>
          <RemoveRedEye className="dashboardCourseItemShowIcon" />
        </Link>
      </div>
    </div>
  );
};

export { DashboardCourseReserveItem };
