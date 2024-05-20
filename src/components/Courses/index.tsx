import { useEffect, useState } from "react";

import { getCourseWithPaginationAPI } from "../../core/services/api/course/get-course-with-pagination.api";

import { CourseInterface } from "../../types/courses";

import { CoursesHeroSection } from "../Courses/CoursesHeroSection";
import { PaginatedCourses } from "./CourseItems/PaginatedCourses";
import { Filters } from "./CoursesFilter/Filters";
import { FilterTitleTrash } from "./CoursesFilter/FilterTitleTrash";
import { CoursesTopSection } from "./CoursesTopSection";
import { toast } from "../common/toast";

const Courses = () => {
  const [courses, setCourses] = useState<CourseInterface[]>();
  const [coursesStyle, setCoursesStyle] = useState<number>(1);
  const [query, setQuery] = useState<string>();
  const [totalCount, setTotalCount] = useState<number>();
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [sortingCol, setSortingCol] = useState<string>();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const getCourses = await getCourseWithPaginationAPI(
          1,
          9,
          undefined,
          undefined,
          undefined,
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
        setTotalCount(getCourses.totalCount);
      } catch (error) {
        toast.error("مشکلی در دریافت دوره ها به وجود آمد !");
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const handleQuery = query == "" ? undefined : query;

        const getCourses = await getCourseWithPaginationAPI(
          currentPage + 1,
          9,
          sortingCol,
          undefined,
          handleQuery,
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
        setTotalCount(getCourses.totalCount);
      } catch (error) {
        toast.error("مشکلی در دریافت دوره ها به وجود آمد !");
      }
    };

    fetchCourses();
  }, [query, currentPage, sortingCol]);

  return (
    <>
      <CoursesHeroSection />
      <div className="flex flex-col lg:flex-row justify-center gap-x-5 w-[90%] mx-auto mt-32 px-5 lg:px-0">
        <div className="lg:w-[296px] h-[98%] rounded-[24px] shadow-primaryShadow py-4 bg-white dark:bg-gray-900 hidden lg:block">
          <div className="px-2">
            <FilterTitleTrash />
          </div>
          <div className="mt-4">
            <Filters />
          </div>
        </div>
        <div className="lg:w-[957px] mt-3">
          <CoursesTopSection
            coursesStyle={coursesStyle}
            setCoursesStyle={setCoursesStyle}
            setQuery={setQuery}
            setSortingCol={setSortingCol}
          />
          <PaginatedCourses
            courses={courses!}
            totalCount={totalCount!}
            itemsPerPage={9}
            coursesStyle={coursesStyle}
            itemOffset={itemOffset}
            setItemOffset={setItemOffset}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export { Courses };
