import { useState } from "react";

import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

import { SearchBox } from "../../common/SearchBox";

const BlogsTopSection = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-4 mt-4 lg:mt-0">
        <div>
          <SearchBox placeholder="دنبال چی میگردی" isBlogs={true} />
        </div>
        <div>
          <div className="w-[450px] bg-white rounded-2xl px-4 py-1">
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                classes={{
                  indicator: "hidden",
                }}
              >
                <Tab
                  value="one"
                  label="همه"
                  classes={{
                    root: "blogsSortTab",
                    selected: "blogsSortActiveTab",
                  }}
                />
                <Tab
                  value="two"
                  label="محبوب‌ترین‌ها"
                  classes={{
                    root: "blogsSortTab",
                    selected: "blogsSortActiveTab",
                  }}
                />
                <Tab
                  value="three"
                  label="پربازدیدترین‌ها"
                  classes={{
                    root: "blogsSortTab",
                    selected: "blogsSortActiveTab",
                  }}
                />
                <Tab
                  value="four"
                  label="جدیدترین‌ها"
                  classes={{
                    root: "blogsSortTab",
                    selected: "blogsSortActiveTab",
                  }}
                />
              </Tabs>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export { BlogsTopSection };