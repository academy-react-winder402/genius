import { createBrowserRouter } from "react-router-dom";

import { LandingPage } from "../../screens/Landing";
import { LandingLayout } from "../../LandingLayout";
import { CoursesPage } from "../../screens/Courses";
import { Layout } from "../../Layout";

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
    element: <Layout/>,
    children: [
      {
        index:true,
        element: <CoursesPage/>

      }
    ],

  }
]);
