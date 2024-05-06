import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

const LandingLayout = () => {
  return (
    <div className="dark:bg-darkBackground dark:!text-darkText">
      <Header isLanding />
      <Outlet />
      <Footer />
    </div>
  );
};

export { LandingLayout };
