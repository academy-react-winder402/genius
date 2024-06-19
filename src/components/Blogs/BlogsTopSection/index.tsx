import { Dispatch, SetStateAction } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

import { SearchBox } from "../../common/SearchBox";

interface BlogsTopSectionProps {
  setQuery: Dispatch<SetStateAction<string | undefined>>;
  setSort: Dispatch<SetStateAction<string | undefined>>;
  setSortType: Dispatch<SetStateAction<string>>;
  sort: string | undefined;
}

const BlogsTopSection = ({
  setQuery,
  setSort,
  setSortType,
  sort,
}: BlogsTopSectionProps) => {
  const handleChange = (event: any, newValue: string) => {
    setSort(newValue);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="blogsSearchSortWrapper">
        <div className="w-[95%] lg:w-auto">
          <SearchBox
            placeholder="دنبال چی میگردی"
            isBlogs={true}
            setQuery={setQuery}
          />
        </div>
        <div className="w-[92%] lg:w-auto">
          <div className="blogsSortTabsBoxWrapper">
            <Box>
              <Tabs
                value={sort}
                onChange={handleChange}
                classes={{
                  indicator: "hidden",
                }}
              >
                <Tab
                  value=""
                  label="همه"
                  classes={{
                    root: "blogsSortTab",
                    selected: "blogsSortActiveTab",
                  }}
                />
                <Tab
                  value="currentRate"
                  label="محبوب‌ترین‌ها"
                  classes={{
                    root: "blogsSortTab",
                    selected: "blogsSortActiveTab",
                  }}
                />
                <Tab
                  value="isActive"
                  label="فعال"
                  classes={{
                    root: "blogsSortTab",
                    selected: "blogsSortActiveTab",
                  }}
                />
                <Tab
                  value="updateDate"
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
      <div className="w-[16%] customSelectBoxWrapper">
        <select
          className="customSelectBox"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="ASC">صعودی</option>
          <option value="DESC">نزولی</option>
        </select>
      </div>
    </div>
  );
};

export { BlogsTopSection };
