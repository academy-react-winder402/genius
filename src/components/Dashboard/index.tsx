import { courseItems } from "../Courses/CourseItems/courseItems";
import { DashboardTitleBox } from "../common/DashboardTitleBox";
import { Link } from "../common/Link";
import { DashboardCourseItem } from "./DashboardCourseItem";
import { DashboardInformationBox } from "./DashboardInformationBox";
import { DashboardTitle } from "./DashboardTitle";

const Dashboard = () => {
  const latestCourses = courseItems.slice(0, 2);

  return (
    <div>
      <DashboardTitleBox title="داشبورد" />
      <div className="dashboardProfileInformationWrapper">
        <DashboardInformationBox
          label="نام و نام خانوادگی : "
          value="محمد بکران"
        />
        <DashboardInformationBox label="تاریخ تولید : " value="1403/2/13" />
        <DashboardInformationBox label="شماره موبایل : " value="091234567890" />
        <DashboardInformationBox label="شماره ملی : " value="1234567890" />
        <DashboardInformationBox label="ایمیل : " value="test@gmail.com" />
        <Link to="/dashboard" className="dashboardEditProfileLink">
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
