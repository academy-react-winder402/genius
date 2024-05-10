import { useDarkModeSelector } from "../../../redux/darkMode";

import { Link } from "../Link";

import teacherIcon from "../../../assets/images/CourseDetails/Icons/teacher.svg";
import teacherDarkIcon from "../../../assets/images/CourseDetails/Icons/teacher-dark.svg";

interface DashboardMobileCourseItemProps {
  image: string;
  id: React.Key;
  title: string;
  teacherName: string;
  formattedPrice: string;
}

const DashboardMobileCourseItem = ({
  image,
  id,
  title,
  teacherName,
  formattedPrice,
}: DashboardMobileCourseItemProps) => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="dashboardMobileCourseItem">
      <div>
        <img src={image} className="dashboardMobileCourseItemImage" />
      </div>
      <div>
        <Link to={`/courses/${id}`}>
          <h4 className="dashboardMobileCourseItemTitle">{title}</h4>
        </Link>
        <div className="dashboardMobileCourseItemBoxTwo">
          <div className="dashboardMobileCourseItemTeacherIconTitleBox">
            <img
              src={darkMode ? teacherDarkIcon : teacherIcon}
              className="dashboardMobileCourseItemTeacherIcon"
            />
            <h5 className="dashboardMobileCourseItemTeacherName">
              {teacherName}
            </h5>
          </div>
          <h6 className="dashboardMobileCourseItemPrice">
            {formattedPrice} تومان
          </h6>
        </div>
      </div>
    </div>
  );
};

export { DashboardMobileCourseItem };
