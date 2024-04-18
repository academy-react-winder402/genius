import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

import rightArrow from "../../../assets/images/Courses/Icons/arrow-right.svg";
import leftArrow from "../../../assets/images/Courses/Icons/arrow-left.svg";

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<img src={rightArrow} />}
      previousLabel={<img src={leftArrow} />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      className="flex flex-wrap justify-center items-center gap-2 mt-5"
      nextClassName="w-[32px] h-[32px] bg-paginationPreviousBackground rounded-full flex justify-center items-center"
      previousClassName="w-[32px] h-[32px] bg-primary rounded-full flex justify-center items-center"
      pageClassName="mr-2 w-[32px] h-[32px] flex justify-center items-center"
      activeClassName="bg-primary text-white rounded-full"
    />
  );
};

Pagination.propTypes = {
  handlePageClick: PropTypes.any,
  pageCount: PropTypes.number,
};

export { Pagination };