import { createBrowserRouter } from "react-router-dom";

// Layouts
import { DashboardLayout } from "../../components/Layout/Dashboard/DashboardLayout";
import { LandingLayout } from "../../components/Layout/LandingLayout";
import { MainLayout } from "../../components/Layout/Layout";

import { BlogDetailsPage } from "../../screens/BlogDetails";
import { BlogsPage } from "../../screens/Blogs";
import { CourseDetailsPage } from "../../screens/CourseDetails";
import { CoursesPage } from "../../screens/Courses";
import { DashboardPage } from "../../screens/Dashboard";
import { ForgetPasswordPage } from "../../screens/ForgetPassword";
import { LandingPage } from "../../screens/Landing";
import { LoginPage } from "../../screens/Login";
import { MyCoursesPage } from "../../screens/MyCourses";
import { NotFoundPage } from "../../screens/NotFound";
import { RegisterPage } from "../../screens/Register";
<<<<<<< HEAD

import { EditProfilePage } from "../../screens/EditProfile";

import { MyCoursesPage } from "../../screens/MyCourses";
=======
>>>>>>> 4c1e5c9c26eb036d289a069338f5b56660137b8e

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/courses/:courseId",
        element: <CourseDetailsPage />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/blogs/:blogId",
        element: <BlogDetailsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/forget-password",
        element: <ForgetPasswordPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/dashboard/edit-Profile",
        element: <EditProfilePage />,
      },
      {
        path: "/dashboard/my-courses",
        element: <MyCoursesPage />,
      },
    ],
  },
]);
