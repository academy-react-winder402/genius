import { Outlet, useLocation } from "react-router-dom";

import { dashboardMenuItems } from "./dashboardMenuItems";
import { Link } from "../../common/Link";

import avatarImage from "../../../assets/images/Dashboard/Avatars/avatar.png";
import notificationIcon from "../../../assets/images/Dashboard/Icons/notification.svg";
import dashboardLogo from "../../../assets/images/Dashboard/Icons/dashboard-logo.svg";
import homeIcon from "../../../assets/images/Dashboard/Icons/home.svg";

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
        <div className="dashboardDivider" />
        <div className="dashboardMappedMenuItemsWrapper">
          {dashboardMenuItems.map((item) => (
            <Link
              key={item.icon}
              to={item.href}
              className={`dashboardMenuItem  ${
                pathname === item.href
                  ? "bg-dashboardActiveMenuItem"
                  : "dashboardMenuItemHover"
              }`}
            >
              <img src={item.icon} />
              <span className="dashboardMenuItemLabel">{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="dashboardBottomSection">
          <Link to="/" className="w-[70%]">
            <img src={dashboardLogo} />
          </Link>
          <Link to="/dashboard" className="dashboardHomeLink">
            <img src={homeIcon} className="dashboardHomeIcon" />
          </Link>
        </div>
      </div>
      <div className="lg:w-[80%] px-7 py-5">
        <Outlet />
      </div>
    </div>
  );
};

export { DashboardLayout };
