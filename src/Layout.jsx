import { Outlet } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Up } from "./components/Courses/coursesHeroSection";

const Layout = () => {
  return (
    <>
      <Header />
      <Up/>
      <Outlet />
      <Footer />
    </>
  );
};

export { Layout };
