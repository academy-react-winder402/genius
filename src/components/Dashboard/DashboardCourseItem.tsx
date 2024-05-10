import { useDarkModeSelector } from "../../redux/darkMode";

import { priceWithCommas } from "../../core/utils/number-helper.utils";

import teacherIcon from "../../assets/images/Courses/Icons/teacher.svg";
import teacherDarkIcon from "../../assets/images/Courses/Icons/teacher-dark.svg";

interface DashboardCourseItemProps {
  image: string;
  title: string;
  teacherName: string;
  price: number;
}

const DashboardCourseItem = ({
  image,
  title,
  teacherName,
  price,
}: DashboardCourseItemProps) => {
  const darkMode = useDarkModeSelector();

  const formattedPrice = priceWithCommas(price);

  return (
    <div className="dashboardPageCourseItem">
      <div className="w-[30%]">
        <img src={image} className="dashboardPageCourseItemImage" />
      </div>
      <div className="dashboardPageCourseItemLeftSide">
        <div>
          <h4 className="dashboardPageCourseItemTitle">{title}</h4>
          <div className="dashboardPageCourseItemTeacherBoxWrapper">
            <img src={darkMode ? teacherDarkIcon : teacherIcon} />
            <span className="dashboardPageCourseItemTeacherName">
              {teacherName}
            </span>
          </div>
        </div>
        <div className="mt-auto">
          <div className="-mb-[3px]">
            <span className="dashboardPageCourseItemPrice">
              {formattedPrice}{" "}
              <span className="text-text1 dark:text-darkText">تومان</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashboardCourseItem };
