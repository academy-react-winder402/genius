import { useDarkModeSelector } from "../../../redux/darkMode";

import filterIcon from "../../../assets/images/Courses/Filter/filter.svg";
import filterDarkIcon from "../../../assets/images/Courses/Filter/filter-dark.svg";
import trashIcon from "../../../assets/images/Courses/Filter/trash.svg";

const FilterTitleTrash = () => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="bg-filterTitle dark:bg-gray-800 rounded-[16px] h-[48px] px-3 flex justify-between items-center">
      <div className="flex gap-1">
        {darkMode ? <img src={filterDarkIcon} /> : <img src={filterIcon} />}
        <span className="font-[500] text-text1 dark:text-darkText">فیلتر</span>
      </div>
      <button className="w-[32px] h-[32px] bg-red rounded-[12px] flex justify-center items-center">
        <img src={trashIcon} />
      </button>
    </div>
  );
};

export { FilterTitleTrash };
