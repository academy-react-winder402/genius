import { createBrowserRouter } from "react-router-dom";

import { LandingLayout } from "../../LandingLayout";

import { CoursesHead} from "../../screens/Courses";

import { Layout } from "../../Layout";
import { CoursesPage } from "../../screens/Courses";
import { LandingPage } from "../../screens/Landing";


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

  },
    {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CoursesHead />,
      }
    ],
  },

]);
