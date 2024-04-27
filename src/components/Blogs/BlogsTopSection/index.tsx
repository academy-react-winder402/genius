import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

import { Search } from "../Search/index";

const BlogsTopSection = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="flex flex-wrap-reverse items-center gap-4 mt-4 lg:mt-0">
        <div className="w-[65%]">
          <Search placeholder="چی میخوای یاد بگیری ؟" />
        </div>
        <div className="w-[94% lg:w-[20%] absolute left-96 top-[600px lg:top-[90%]]">
          <div className=" w-[391px] bg-white rounded-2xl">
            <Box>
              <Tabs value={value} onChange={handleChange} textColor="secondary">
                <Tab value="one" label="همه" />
                <Tab value="two" label="محبوب‌ترین‌ها" />
                <Tab value="three" label="پربازدیدترین‌ها" />
                <Tab value="four" label="جدیدترین‌ها" />
              </Tabs>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

BlogsTopSection.propTypes = {
  coursesStyle: PropTypes.any,
  setCoursesStyle: PropTypes.any,
};

export { BlogsTopSection };
