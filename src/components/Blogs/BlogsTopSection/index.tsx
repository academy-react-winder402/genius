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
      <div className="blogsSearchSortWrapper">
        <div className="w-[95%] lg:w-auto">
          <SearchBox placeholder="دنبال چی میگردی" isBlogs={true} />
        </div>
        <div className="w-[92%] lg:w-auto">
          <div className="blogsSortTabsBoxWrapper">
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
