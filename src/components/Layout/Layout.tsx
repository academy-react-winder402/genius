import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

const MainLayout = () => {
  return (
    <div className="dark:bg-darkBackground dark:!text-darkText">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export { MainLayout };
