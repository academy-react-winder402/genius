import { createBrowserRouter } from "react-router-dom";

import { LandingPage } from "../../screens/Landing";
import { LandingLayout } from "../../LandingLayout";

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
]);
