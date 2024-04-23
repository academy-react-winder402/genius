import ReactPaginate from "react-paginate";

import { useDarkModeSelector } from "../../../redux/darkMode";

import rightArrow from "../../../assets/images/Courses/Icons/arrow-right.svg";
import leftArrow from "../../../assets/images/Courses/Icons/arrow-left.svg";
import rightDarkArrow from "../../../assets/images/Courses/Icons/arrow-right-dark.svg";
import leftDarkArrow from "../../../assets/images/Courses/Icons/arrow-left-dark.svg";

interface PaginationProps {
  handlePageClick: (event: any) => void;
  pageCount: number;
}

const Pagination = ({ handlePageClick, pageCount }: PaginationProps) => {
  const darkMode = useDarkModeSelector();

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<img src={darkMode ? rightDarkArrow : rightArrow} />}
      previousLabel={<img src={darkMode ? leftDarkArrow : leftArrow} />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      className="flex flex-wrap justify-center items-center gap-2 mt-5"
      nextClassName="w-[32px] h-[32px] bg-paginationPreviousBackground rounded-full flex justify-center items-center dark:bg-gray-800"
      previousClassName="w-[32px] h-[32px] bg-primary rounded-full flex justify-center items-center"
      pageClassName="mr-2 w-[32px] h-[32px] flex justify-center items-center"
      activeClassName="bg-primary text-white rounded-full"
    />
  );
};

export { Pagination };
