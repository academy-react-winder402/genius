import { useEffect, useState } from "react";

import { courseItems } from "../../core/data/courses/courseItems";
import { getProfileInfoAPI } from "../../core/services/api/user-panel/get-profile-info.api";
import { convertDateToPersian } from "../../core/utils/date-helper.utils";

import { ProfileInfoInterface } from "../../types/profile-info";

import { DashboardTitleBox } from "../common/DashboardTitleBox";
import { Link } from "../common/Link";
import { DashboardCourseItem } from "./DashboardCourseItem";
import { DashboardInformationBox } from "./DashboardInformationBox";
import { DashboardTitle } from "./DashboardTitle";

const Dashboard = () => {
  const [profileInfo, setProfileInfo] = useState<ProfileInfoInterface>({});

  const latestCourses = courseItems.slice(0, 2);

  useEffect(() => {
    const fetchProfileInfo = async () => {
      const getProfileInfo = await getProfileInfoAPI();

      setProfileInfo(getProfileInfo!);
    };

    fetchProfileInfo();
  }, []);

  const formattedDate = convertDateToPersian(profileInfo?.birthDay!);

  return (
    <div>
      <DashboardTitleBox>داشبورد</DashboardTitleBox>
      <div className="dashboardProfileInformationWrapper">
        <DashboardInformationBox
          label="نام و نام خانوادگی : "
          value={profileInfo?.fName! + " " + profileInfo?.lName}
        />
        <DashboardInformationBox label="تاریخ تولید : " value={formattedDate} />
        <DashboardInformationBox
          label="شماره موبایل : "
          value={profileInfo?.phoneNumber!}
        />
        <DashboardInformationBox
          label="شماره ملی : "
          value={profileInfo?.nationalCode!}
        />
        <DashboardInformationBox label="ایمیل : " value={profileInfo?.email!} />
        <Link to="/dashboard/edit-profile" className="dashboardEditProfileLink">
          ویرایش
        </Link>
      </div>
      <div className="dashboardCoursesSection">
        <div>
          <DashboardTitle>آخرین دوره های ثبت شده</DashboardTitle>
          <div className="dashboardMappedCoursesWrapper">
            {latestCourses.map((course) => (
              <DashboardCourseItem
                key={course.id}
                image={course.image}
                title={course.title}
                teacherName={course.teacherName}
                price={course.price}
              />
            ))}
          </div>
        </div>
        <div>
          <DashboardTitle>دوره های پیشنهادی</DashboardTitle>
          <div className="dashboardMappedCoursesWrapper">
            {latestCourses.map((course) => (
              <DashboardCourseItem
                key={course.id}
                image={course.image}
                title={course.title}
                teacherName={course.teacherName}
                price={course.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
