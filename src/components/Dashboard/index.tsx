import { useProfileInfo } from "../../hooks/user-panel/useProfileInfo";
import { useCourseTop } from "../../hooks/course/useCourseTop";

import { convertDateToPersian } from "../../core/utils/date-helper.utils";

import { DashboardTitleBox } from "../common/DashboardTitleBox";
import { Link } from "../common/Link";
import { DashboardCourseItem } from "./DashboardCourseItem";
import { DashboardInformationBox } from "./DashboardInformationBox";
import { DashboardTitle } from "./DashboardTitle";
import { Skeleton } from "../common/Skeleton";

import blankThumbnail from "../../assets/images/Courses/blank-thumbnail.jpg";
import { useMyCourses } from "../../hooks/user-panel/useMyCourses";

const Dashboard = () => {
  const { data, isLoading } = useProfileInfo();
  const { data: topCourses } = useCourseTop(2);
  const { data: myCourses } = useMyCourses(1, 2);

  const formattedDate = convertDateToPersian(data?.birthDay!);

  const renderThumbnail = (thumbImageAddress: string | null) => {
    return thumbImageAddress &&
      thumbImageAddress !== "<string>" &&
      thumbImageAddress !== "undefined" &&
      thumbImageAddress !== "Not-set" &&
      thumbImageAddress !== "not-set"
      ? thumbImageAddress
      : blankThumbnail;
  };

  return (
    <div>
      <DashboardTitleBox>داشبورد</DashboardTitleBox>
      <div className="dashboardProfileInformationWrapper">
        <DashboardInformationBox
          label="نام و نام خانوادگی : "
          value={
            isLoading ? (
              <Skeleton width={140} height={7} className="mr-1 mt-[7px]" />
            ) : (
              `${data?.fName! || "کاربر"} ${data?.lName || "نابغه"}`
            )
          }
        />
        <DashboardInformationBox
          label="تاریخ تولد : "
          value={
            isLoading ? (
              <Skeleton width={140} height={7} className="mr-1 mt-[7px]" />
            ) : (
              formattedDate
            )
          }
        />
        <DashboardInformationBox
          label="شماره موبایل : "
          value={
            isLoading ? (
              <Skeleton width={140} height={7} className="mr-1 mt-[7px]" />
            ) : (
              data?.phoneNumber!
            )
          }
        />
        <DashboardInformationBox
          label="شماره ملی : "
          value={
            isLoading ? (
              <Skeleton width={140} height={7} className="mr-1 mt-[7px]" />
            ) : (
              data?.nationalCode!
            )
          }
        />
        <DashboardInformationBox
          label="ایمیل : "
          value={
            isLoading ? (
              <Skeleton width={140} height={7} className="mr-1 mt-[7px]" />
            ) : (
              data?.email!
            )
          }
        />
        <Link to="/dashboard/edit-profile" className="dashboardEditProfileLink">
          ویرایش
        </Link>
      </div>
      <div className="dashboardCoursesSection">
        <div>
          <DashboardTitle>آخرین دوره های ثبت شده</DashboardTitle>
          <div className="dashboardMappedCoursesWrapper">
            {topCourses?.map((course) => (
              <DashboardCourseItem
                key={course.courseId}
                image={renderThumbnail(course.tumbImageAddress)}
                title={course.title}
                teacherName={course.teacherName || "کاربر نابغه"}
                price={+course.cost}
              />
            ))}
          </div>
        </div>
        <div>
          <DashboardTitle>آخرین دوره های خریداری شده</DashboardTitle>
          <div className="dashboardMappedCoursesWrapper">
            {myCourses?.listOfMyCourses.map((course) => (
              <DashboardCourseItem
                key={course.courseId}
                image={renderThumbnail(course.tumbImageAddress)}
                title={course.courseTitle}
                teacherName={course.fullName}
                price={+course.cost}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
