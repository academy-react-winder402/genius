interface MyCoursesPerPageFilterProps {
  setCoursesPerPage: (perPage: number) => void;
}

const MyCoursesPerPageFilter = ({
  setCoursesPerPage,
}: MyCoursesPerPageFilterProps) => {
  return (
    <div className="myCoursesPerPageFilter">
      <select
        name="coursesPerPage"
        defaultValue={8}
        className="myCoursesPerPageFilterSelectBox"
        onChange={(e) => setCoursesPerPage(parseInt(e.target.value))}
      >
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={12}>12</option>
      </select>
    </div>
  );
};

export { MyCoursesPerPageFilter };
