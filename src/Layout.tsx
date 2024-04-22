import React from "react";

import { Outlet } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const Layout = () => {
  return (
    <div className="dark:bg-darkBackground dark:!text-darkText">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export { Layout };
