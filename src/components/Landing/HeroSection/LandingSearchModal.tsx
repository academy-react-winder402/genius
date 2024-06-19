import { Close } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide, { SlideProps } from "@mui/material/Slide";
import { Dispatch, SetStateAction, forwardRef } from "react";
import { Link } from "react-router-dom";

import { CourseInterface } from "../../../types/courses";

import { SearchBox } from "../../common/SearchBox";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

interface LandingSearchModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSearchValue: Dispatch<SetStateAction<string | undefined>>;
  handleClickOpen: () => void;
  searchValue: string | undefined;
  searchCourses: CourseInterface[] | undefined;
}

const Transition = forwardRef<unknown, SlideProps>(function Transition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LandingSearchModal = ({
  open,
  searchValue,
  searchCourses,
  setOpen,
  setSearchValue,
  handleClickOpen,
}: LandingSearchModalProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      maxWidth="xl"
      classes={{
        paper: "min-h-[400px] dark:bg-gray-900",
      }}
    >
      <DialogContent>
        <Close
          className="text-red absolute top-2 left-2 cursor-pointer"
          onClick={handleClose}
        />
        <div className="mt-5">
          <SearchBox
            placeholder="چی میخوای یاد بگیری ؟"
            display="flex justify-center items-center"
            inputClasses="lg:w-[800px] shadow-primaryShadow"
            isLanding={true}
            onKeyUp={handleClickOpen}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <h2 className="font-bold mt-5 dark:text-darkText">
            نتایج جستجوی شما : {searchCourses && searchCourses.length + " دوره"}
          </h2>
          <div className="flex flex-col gap-4">
            <div className="grid lg:grid-cols-2 gap-3 mt-5">
              {searchCourses &&
                searchCourses.map((course) => (
                  <div key={course.courseId} className="flex gap-3">
                    <Link to={`/courses/${course.courseId}`}>
                      <img
                        src={
                          !course.tumbImageAddress ||
                          course.tumbImageAddress === "Not-set" ||
                          course.tumbImageAddress === "<string>"
                            ? blankThumbnail
                            : course.tumbImageAddress
                        }
                        className="w-[100px] h-[70px] rounded-md"
                      />
                    </Link>
                    <div>
                      <Link to={`/courses/${course.courseId}`}>
                        <h4 className="font-bold dark:text-[#8f8e8e]">
                          {course.title}
                        </h4>
                      </Link>
                      <span className="dark:text-[#8f8e8e]">
                        <span className="mr-2">مدرس دوره :</span>{" "}
                        {course.teacherName}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
            {searchCourses?.length !== 0 && (
              <Link to="/courses" className="text-primaryColor underline">
                نمایش بیشتر
              </Link>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { LandingSearchModal };
