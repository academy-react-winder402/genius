import { useDarkModeSelector } from "../../../redux/darkMode";

import { Link } from "../../common/Link";

import teacherIcon from "../../../assets/images/CourseDetails/Icons/teacher.svg";
import teacherDarkIcon from "../../../assets/images/CourseDetails/Icons/teacher-dark.svg";

interface MyMobileCourseItemProps {
  image: string;
  id: React.Key;
  title: string;
  teacherName: string;
  formattedPrice: string;
}

const MyMobileCourseItem = ({
  image,
  id,
  title,
  teacherName,
  formattedPrice,
}: MyMobileCourseItemProps) => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="dashboardMyMobileCourseItem">
      <div>
        <img src={image} className="dashboardMyMobileCourseItemImage" />
      </div>
      <div>
        <Link to={`/courses/${id}`}>
          <h4 className="dashboardMyMobileCourseItemTitle">{title}</h4>
        </Link>
        <div className="dashboardMyMobileCourseItemBoxTwo">
          <div className="dashboardMyMobileCourseItemTeacherIconTitleBox">
            <img
              src={darkMode ? teacherDarkIcon : teacherIcon}
              className="dashboardMyMobileCourseItemTeacherIcon"
            />
            <h5 className="dashboardMyMobileCourseItemTeacherName">
              {teacherName}
            </h5>
          </div>
          <h6 className="dashboardMyMobileCourseItemPrice">
            {formattedPrice} تومان
          </h6>
        </div>
      </div>
    </div>
  );
};

export { MyMobileCourseItem };
