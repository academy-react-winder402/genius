import { Outlet } from "react-router-dom";

import avatarImage from "../../assets/images/Dashboard/Avatars/avatar.png";
import notificationIcon from "../../assets/images/Dashboard/Icons/notification.svg";

const DashboardLayout = () => {
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
      </div>
      <div className="lg:w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export { DashboardLayout };
