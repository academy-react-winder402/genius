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
import { ForgotPasswordPage } from "../../screens/ForgotPassword";
import { LandingPage } from "../../screens/Landing";
import { LoginPage } from "../../screens/Login";
import { NotFoundPage } from "../../screens/NotFound";
import { RegisterPage } from "../../screens/Register";
import { EditProfilePage } from "../../screens/EditProfile";

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
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
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
    ],
  },
]);
