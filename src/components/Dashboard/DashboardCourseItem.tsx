import { useDarkModeSelector } from "../../redux/darkMode";

import { priceWithCommas } from "../../core/utils/number-helper.utils";

import teacherIcon from "../../assets/images/Courses/Icons/teacher.svg";
import teacherDarkIcon from "../../assets/images/Courses/Icons/teacher-dark.svg";
import { Skeleton } from "../common/Skeleton";

interface DashboardCourseItemProps {
  image: string;
  title: string;
  teacherName: string;
  price: number;
  isLoading: boolean;
}

const DashboardCourseItem = ({
  image,
  title,
  teacherName,
  price,
  isLoading,
}: DashboardCourseItemProps) => {
  const darkMode = useDarkModeSelector();

  const formattedPrice = priceWithCommas(price);

  console.log(isLoading);

  return (
    <div className="dashboardPageCourseItem">
      <div className="w-[30%]">
        {isLoading ? (
          <Skeleton width={120} height={80} borderRadius={20} />
        ) : (
          <img src={image} className="dashboardPageCourseItemImage" />
        )}
      </div>
      <div className="dashboardPageCourseItemLeftSide">
        <div>
          {isLoading ? (
            <Skeleton width={120} height={7} />
          ) : (
            <h4 className="dashboardPageCourseItemTitle">{title}</h4>
          )}
          <div className="dashboardPageCourseItemTeacherBoxWrapper">
            {isLoading ? (
              <Skeleton width={100} height={7} />
            ) : (
              <>
                <img src={darkMode ? teacherDarkIcon : teacherIcon} />
                <span className="dashboardPageCourseItemTeacherName">
                  {teacherName}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="mt-auto">
          <div className="-mb-[3px]">
            {isLoading ? (
              <Skeleton width={90} height={7} />
            ) : (
              <span className="dashboardPageCourseItemPrice">
                {formattedPrice}{" "}
                <span className="text-text1 dark:text-darkText">تومان</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashboardCourseItem };
