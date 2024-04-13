import { Outlet } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

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
