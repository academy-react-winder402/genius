import { SearchBox } from "../SearchBox";
import { DashboardCoursesPerPageFilter } from "./DashboardCoursesPerPageFilter";

interface DashboardCoursesSearchFilterBoxProps {
  setCoursesPerPage: (coursesPerPage: number) => void;
}

const DashboardCoursesSearchFilterBox = ({
  setCoursesPerPage,
}: DashboardCoursesSearchFilterBoxProps) => {
  return (
    <div className="dashboardCoursesTopSection">
      <div className="lg:w-[87%]">
        <SearchBox placeholder="جستجوی دوره ..." inputClasses="pl-4 w-full" />
      </div>
      <DashboardCoursesPerPageFilter setCoursesPerPage={setCoursesPerPage} />
    </div>
  );
};

export { DashboardCoursesSearchFilterBox };
