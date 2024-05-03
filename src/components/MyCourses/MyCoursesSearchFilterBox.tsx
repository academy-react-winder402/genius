import { SearchBox } from "../common/SearchBox";
import { MyCoursesPerPageFilter } from "./MyCoursesSearchFilterBox/MyCoursesPerPageFilter";

interface MyCoursesSearchFilterBoxProps {
  setCoursesPerPage: (coursesPerPage: number) => void;
}

const MyCoursesSearchFilterBox = ({
  setCoursesPerPage,
}: MyCoursesSearchFilterBoxProps) => {
  return (
    <div className="myCoursesTopSection">
      <div className="lg:w-[87%]">
        <SearchBox placeholder="جستجوی دوره ..." inputClasses="pl-4 w-full" />
      </div>
      <MyCoursesPerPageFilter setCoursesPerPage={setCoursesPerPage} />
    </div>
  );
};

export { MyCoursesSearchFilterBox };
