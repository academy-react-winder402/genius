import { Outlet } from "react-router-dom";

import { Footer } from "../Footer";
import { Header } from "../Header";

const LandingLayout = () => {
  return (
    <>
      <Header isLanding />
      <Outlet />
      <Footer />
    </>
  );
};

export { LandingLayout };
