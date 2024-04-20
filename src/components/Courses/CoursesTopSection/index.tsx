import { SearchBox } from "../../common/SearchBox";
import { MobileFilter } from "../CoursesFilter/MobileFilter";

import gridStyleOne from "../../../assets/images/Courses/Icons/grid-1.svg";
import gridStyleTwo from "../../../assets/images/Courses/Icons/grid-2.svg";

interface CoursesTopSectionProps {
  coursesStyle: number;
  setCoursesStyle: (value: number) => void;
}

const CoursesTopSection = ({
  coursesStyle,
  setCoursesStyle,
}: CoursesTopSectionProps) => {
  return (
    <>
      <div className="flex flex-wrap-reverse items-center gap-4 mt-4 lg:mt-0">
        <div className="coursesGridView">
          <button
            className={`${
              coursesStyle === 1
                ? "coursesGridViewItemsActive"
                : "coursesGridViewItems"
            }`}
            onClick={() => setCoursesStyle(1)}
          >
            <img src={gridStyleOne} />
          </button>
          <button
            className={`${
              coursesStyle === 2
                ? "coursesGridViewItemsActive"
                : "coursesGridViewItems"
            }`}
            onClick={() => setCoursesStyle(2)}
          >
            <img src={gridStyleTwo} />
          </button>
        </div>
        <div className="w-[65%]">
          <SearchBox placeholder="چی میخوای یاد بگیری ؟" />
        </div>
        <div className="w-[94%] lg:w-[20%]">
          <div className="coursesSelectBoxWrapper">
            <select className="coursesSelectBox">
              <option>محبوب ترین ها</option>
              <option>گران ترین</option>
              <option>ارزان ترین</option>
              <option>پر فروش ترین</option>
            </select>
          </div>
        </div>
      </div>
      <div className="my-5">
        <MobileFilter />
      </div>
    </>
  );
};

export { CoursesTopSection };
