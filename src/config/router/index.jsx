import { createBrowserRouter } from "react-router-dom";

import { LandingPage } from "../../screens/Landing";
import { Layout } from "../../Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);
