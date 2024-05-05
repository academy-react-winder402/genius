import { DashboardMenuItemInterface } from "../../../types/dashboard-menu-item";

export const dashboardMenuItems: DashboardMenuItemInterface[] = [
  {
    icon: "/src/assets/images/Dashboard/Icons/dashboard.svg",
    label: "داشبورد",
    href: "/dashboard",
  },
  {
    icon: "/src/assets/images/Dashboard/Icons/book.svg",
    label: "دوره‌های من",
    href: "/dashboard/my-courses",
  },
  {
    icon: "/src/assets/images/Dashboard/Icons/heart.svg",
    label: "ذخیره شده‌ها",
    href: "/dashboard/favorite",
  },
  {
    icon: "/src/assets/images/Dashboard/Icons/messages.svg",
    label: "نظرات ثبت شده",
    href: "/dashboard/comments",
  },
  {
    icon: "/src/assets/images/Dashboard/Icons/user-edit.svg",
    label: "ویرایش پروفایل",
    href: "/dashboard/edit-profile",
  },
  {
    icon: "/src/assets/images/Dashboard/Icons/logout.svg",
    label: "خروج از حساب",
    href: "/dashboard/logout",
  },
];
