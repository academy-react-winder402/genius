import React from "react";

import { Outlet } from "react-router-dom";

import { Footer } from "../Footer";
import { Header } from "../Header";

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
