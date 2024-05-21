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
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [sortingCol, setSortingCol] = useState<string>();
  const [listTechState, setListTechState] = useState<string[]>([]);
  const [teacherId, setTeacherId] = useState<number>();
  const [courseLevel, setCourseLevel] = useState<number>();
  const [courseTypeId, setCourseTypeId] = useState<number>();
  const [costDown, setCostDown] = useState<number>();
  const [costUp, setCostUp] = useState<number>();
  const [sortType, setSortType] = useState<string>();

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
          sortingCol || sortingCol !== undefined ? sortingCol : undefined,
          sortType ? sortType : undefined,
          handleQuery || handleQuery !== undefined ? handleQuery : undefined,
          costDown || costDown == undefined ? costDown : undefined,
          costUp || costUp !== undefined ? costUp : undefined,
          listTechState.length > 0 ? 1 : undefined,
          listTechState.length > 0 ? listTechState.toString() : undefined,
          courseLevel || courseLevel !== undefined ? courseLevel : undefined,
          courseTypeId || courseTypeId !== undefined ? courseTypeId : undefined,
          undefined,
          undefined,
          teacherId ? teacherId : undefined
        );

        setCourses(getCourses.courseFilterDtos);
        setTotalCount(getCourses.totalCount);
      } catch (error) {
        toast.error("مشکلی در دریافت دوره ها به وجود آمد !");
      }
    };

    fetchCourses();
  }, [
    query,
    currentPage,
    sortingCol,
    listTechState,
    teacherId,
    courseLevel,
    courseTypeId,
    costDown,
    costUp,
    sortType,
  ]);

  return (
    <>
      <CoursesHeroSection />
      <div className="coursesMainSection">
        <div className="coursesFilterSectionWrapper">
          <div className="px-2">
            <FilterTitleTrash
              setSortingCol={setSortingCol}
              setListTechState={setListTechState}
              setTeacherId={setTeacherId}
              setCourseLevel={setCourseLevel}
              setCourseTypeId={setCourseTypeId}
              setCostDown={setCostDown}
              setCostUp={setCostUp}
              setSortType={setSortType}
            />
          </div>
          <div className="mt-4">
            <Filters
              setListTechState={setListTechState}
              setTeacherId={setTeacherId}
              setQuery={setQuery}
              setCourseLevel={setCourseLevel}
              setCourseTypeId={setCourseTypeId}
              setCostDown={setCostDown}
              setCostUp={setCostUp}
              setSortType={setSortType}
            />
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
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export { Courses };
