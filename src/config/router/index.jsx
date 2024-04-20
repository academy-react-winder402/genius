import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../../Layout";
import { LandingLayout } from "../../LandingLayout";
import { LandingPage } from "../../screens/Landing";
import { CoursesPage } from "../../screens/Courses";
import { BlogsPage } from "../../screens/Blogs";

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
    path: "/courses",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CoursesPage />,
      },
    ],
  },
  {
    path: "/blogs",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BlogsPage />,
      },
    ],
  },
]);
