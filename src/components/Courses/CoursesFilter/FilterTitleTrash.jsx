import filterIcon from "../../../assets/images/Courses/Filter/filter.svg";
import trashIcon from "../../../assets/images/Courses/Filter/trash.svg";

const FilterTitleTrash = () => {
  return (
    <div className="bg-filterTitle rounded-[16px] h-[48px] px-3 flex justify-between items-center">
      <div className="flex gap-1">
        <img src={filterIcon} />
        <span className="font-[500] text-text1">فیلتر</span>
      </div>
      <button className="w-[32px] h-[32px] bg-red rounded-[12px] flex justify-center items-center">
        <img src={trashIcon} />
      </button>
    </div>
  );
};

export { FilterTitleTrash };
