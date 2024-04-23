import { createBrowserRouter } from "react-router-dom";

import { CourseDetailsPage } from "../../screens/CourseDetails";
import { CoursesPage } from "../../screens/Courses";
import { LandingPage } from "../../screens/Landing";
import { LoginPage } from "../../screens/Login";
import { NotFoundPage } from "../../screens/NotFound";
import { LandingLayout } from "../../components/Layout/LandingLayout";
import { MainLayout } from "../../components/Layout/Layout";

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
        path: "/courses/:id",
        element: <CourseDetailsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
