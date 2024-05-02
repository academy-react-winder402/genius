import { DashboardTitleBox } from "../common/DashboardTitleBox";
import { Link } from "../common/Link";
import { DashboardInformationBox } from "./DashboardInformationBox";

const Dashboard = () => {
  return (
    <div>
      <DashboardTitleBox title="داشبورد" />
      <div className="relative border-[1px] border-solid border-dashboardUserInfoEditProfileBorder w-full rounded-[12px] mt-10 py-5 px-5 grid grid-cols-2 lg:grid-cols-3 place-content-center gap-y-8">
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
    </div>
  );
};

export { Dashboard };
