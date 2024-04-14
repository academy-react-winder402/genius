import { LandingCourses } from "./LandingCourses";
import { LandingHeroSection } from "./LandingHeroSection";
import { LandingServices } from "./LandingServices";

const Landing = () => {
  return (
    <>
      <LandingHeroSection />
      <LandingServices />
      <LandingCourses />
    </>
  );
};

export { Landing };
