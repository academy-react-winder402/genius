import { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { Close } from "@mui/icons-material";

import { typeWriterOptions } from "../../core/data/typewriter-options";
import { landingReportAPI } from "../../core/services/api/landing/landing-report.api";

import { LandingReportInterface } from "../../types/landing-report";

import { useDarkModeSelector } from "../../redux/darkMode";

import { getCourseWithPaginationAPI } from "../../core/services/api/course/get-course-with-pagination.api";

import { CourseInterface } from "../../types/courses";

import { SearchBox } from "../common/SearchBox";
import { Typewriter } from "../common/Typewriter";
import { toast } from "../common/toast";
import { LandingHeroSectionFeatures } from "./HeroSection/LandingHeroSectionFeatures";
import { LandingSearchModal } from "./HeroSection/LandingSearchModal";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LandingHeroSection = () => {
  const [landingReport, setLandingReport] = useState<LandingReportInterface>();
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>();
  const [courses, setCourses] = useState<CourseInterface[]>();
  const [searchCourses, setSearchCourses] = useState<CourseInterface[]>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const darkMode = useDarkModeSelector();

  const fetchCourses = async () => {
    try {
      const getCourses = await getCourseWithPaginationAPI(
        1,
        5,
        undefined,
        "DESC",
        searchValue ? searchValue : undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      );

      setCourses(getCourses.courseFilterDtos);
    } catch (error) {
      toast.error("مشکلی در دریافت دوره ها به وجود آمد !");
    }
  };

  useEffect(() => {
    const fetchLandingReport = async () => {
      try {
        const getLandingReport = await landingReportAPI();

        setLandingReport(getLandingReport);
      } catch (error) {
        toast.error("مشکلی در دریافت اطلاعات به وجود آمد !");
      }
    };

    fetchLandingReport();
    fetchCourses();
  }, []);

  useEffect(() => {
    fetchCourses();
    setSearchCourses(courses);
  }, [searchValue]);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900" : "bg-headerBg bg-no-repeat bg-cover"
      } w-full pt-7 pb-32 lg:pb-5 lg:rounded-br-[100px] lg:rounded-bl-[100px] lg:-mt-40 lg:pt-40`}
    >
      <div className="bg-landingPageProgrammingLanguagesIcon bg-center bg-no-repeat dark:bg-none">
        <div>
          <h2 className="text-center text-[23px] font-[500] text-text1 dark:text-darkText">
            پلتفرم اموزش طراحی وب
          </h2>
          <h1 className="text-center font-[800] text-[40px] lg:text-[53px] text-text1 dark:text-darkText">
            <Typewriter
              options={typeWriterOptions(["پلتفرم اموزش طراحی وب"])}
            />
          </h1>
          <p className="text-center font-[500] text-[20px] mt-3 text-text1  dark:text-darkText">
            مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به
            زبان فارسی .
          </p>
          <div className="hidden dark:flex justify-center relative">
            <div className="bg-[blue] blur-[170px] w-[200px] h-[200px] rounded-full absolute top-0" />
          </div>
        </div>
        <SearchBox
          placeholder="چی میخوای یاد بگیری ؟"
          isMarginTop
          display="flex justify-center items-center"
          inputClasses="lg:w-[620px]"
          isLanding={true}
          onKeyUp={handleClickOpen!}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <LandingSearchModal
          handleClickOpen={handleClickOpen}
          open={open}
          searchCourses={searchCourses}
          searchValue={searchValue}
          setOpen={setOpen}
          setSearchValue={setSearchValue}
        />
        <LandingHeroSectionFeatures landingReport={landingReport!} />
      </div>
    </div>
  );
};

export { LandingHeroSection };
