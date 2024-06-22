import { Dispatch, SetStateAction } from "react";

import { SearchBox } from "../SearchBox";
import { DashboardCoursesPerPageFilter } from "./DashboardCoursesPerPageFilter";

interface DashboardCoursesSearchFilterBoxProps {
  query: string | undefined;
  setCoursesPerPage: (coursesPerPage: number) => void;
  setQuery: Dispatch<SetStateAction<string | undefined>>;
}

const DashboardCoursesSearchFilterBox = ({
  query,
  setCoursesPerPage,
  setQuery,
}: DashboardCoursesSearchFilterBoxProps) => {
  return (
    <div className="dashboardCoursesTopSection">
      <div className="lg:w-[87%]">
        <SearchBox
          placeholder="جستجوی دوره ..."
          inputClasses="pl-4 w-full"
          setQuery={setQuery}
        />
      </div>
      <DashboardCoursesPerPageFilter setCoursesPerPage={setCoursesPerPage} />
    </div>
  );
};

export { DashboardCoursesSearchFilterBox };
