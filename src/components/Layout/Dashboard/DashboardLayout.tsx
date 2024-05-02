import { Link, Outlet, useLocation } from "react-router-dom";

import { dashboardMenuItems } from "./dashboardMenuItems";

import avatarImage from "../../../assets/images/Dashboard/Avatars/avatar.png";
import notificationIcon from "../../../assets/images/Dashboard/Icons/notification.svg";

const DashboardLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="dashboardWrapper">
      <div className="dashboardSidebar">
        <div className="dashboardSideBarTopSectionWrapper">
          <div className="dashboardSidebarUserInfoWrapper">
            <img src={avatarImage} className="dashboardSidebarAvatar" />
            <div className="mt-2">
              <h5 className="dashboardSidebarUsername">محمد بکران</h5>
              <span className="dashboardSidebarUserPhoneNumber">
                +989195461847
              </span>
            </div>
          </div>
          <div>
            <div className="dashboardSideBarNotificationWrapper">
              <img
                src={notificationIcon}
                className="dashboardSideBarNotificationIcon"
              />
              <span className="dashboardSideBarNotificationCount">2</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-blue-400 mt-7" />
        <div className="flex flex-col gap-1 px-4 mt-10">
          {dashboardMenuItems.map((item) => (
            <Link
              key={item.icon}
              to={item.href}
              className={`flex items-center gap-3 lg:w-[288px] h-[56px] rounded-[10px] px-5  ${
                pathname.startsWith(item.href)
                  ? "bg-[#00000099]"
                  : "hover:bg-[#0000001A] transition-colors duration-100"
              }`}
            >
              <img src={item.icon} />
              <span className="font-[400] text-white">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export { DashboardLayout };
