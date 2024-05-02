import { DashboardTitleBox } from "../common/DashboardTitleBox";
import { SearchBox } from "../common/SearchBox";

const MyCourses = () => {
  return (
    <div>
      <DashboardTitleBox>دوره های من</DashboardTitleBox>
      <div className="myCoursesTopSection">
        <div className="lg:w-[87%]">
          <SearchBox
            placeholder="جستجوی دوره ..."
            inputClasses="myCoursesSearchBox"
          />
        </div>
        <div className="myCoursesPerPageFilter">
          <select
            name="coursesPerPage"
            defaultValue={8}
            className="myCoursesPerPageFilterSelectBox"
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export { MyCourses };
