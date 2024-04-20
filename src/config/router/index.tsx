import { createBrowserRouter } from "react-router-dom";

import { LandingLayout } from "../../LandingLayout";
import { Layout } from "../../Layout";
import { CourseDetailsPage } from "../../screens/CourseDetails";
import { CoursesPage } from "../../screens/Courses";
import { LandingPage } from "../../screens/Landing";
import { NotFoundPage } from "../../screens/NotFound";

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
    element: <Layout />,
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
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
