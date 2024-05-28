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
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          maxWidth="xl"
          classes={{
            paper: "min-h-[400px]",
          }}
        >
          <DialogContent>
            <Close
              className="text-red absolute top-2 left-2 cursor-pointer"
              onClick={handleClose}
            />
            <div className="mt-5">
              <SearchBox
                placeholder="چی میخوای یاد بگیری ؟"
                display="flex justify-center items-center"
                inputClasses="lg:w-[800px] shadow-primaryShadow"
                isLanding={true}
                onKeyUp={handleClickOpen}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
              <h2 className="font-bold mt-5">
                نتایج جستجوجوی شما :{" "}
                {searchCourses && searchCourses.length + " دوره"}
              </h2>
              <div className="flex flex-col gap-4">
                <div className="grid lg:grid-cols-2 gap-3 mt-5">
                  {searchCourses &&
                    searchCourses.map((course) => (
                      <div key={course.courseId} className="flex gap-3">
                        <Link to={`/courses/${course.courseId}`}>
                          <img
                            src={course.tumbImageAddress}
                            className="w-[100px] h-[70px] rounded-md"
                          />
                        </Link>
                        <div>
                          <Link to={`/courses/${course.courseId}`}>
                            <h4 className="font-bold">{course.title}</h4>
                          </Link>
                          <span>
                            <span className="mr-2">مدرس دوره :</span>{" "}
                            {course.teacherName}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
                {searchCourses?.length !== 0 && (
                  <Link to="/courses" className="text-primaryColor underline">
                    نمایش بیشتر
                  </Link>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <LandingHeroSectionFeatures landingReport={landingReport!} />
      </div>
    </div>
  );
};

export { LandingHeroSection };
