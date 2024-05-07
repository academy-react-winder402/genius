import { useState } from "react";
import { CameraAltOutlined } from "@mui/icons-material";

import { a11Props } from "../../core/utils/tab-helper.utils";

import { DashboardTitleBox } from "../common/DashboardTitleBox";
import { EditProfileForm } from "./EditProfileForm";
import { Tabs } from "../common/Tabs";
import { Tab } from "../common/Tabs/Tab";

import avatar from "../../assets/images/Dashboard/Avatars/avatar2.jpg";
import { CustomTabPanel } from "../common/CustomTabPanel";

const EditProfile = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: number) => setValue(newValue);

  console.log(value);

  return (
    <div>
      <DashboardTitleBox>ویرایش پروفایل</DashboardTitleBox>
      <div className="editProfileContentSection">
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab
            label="اطلاعات عمومی"
            className={`dark:text-darkText ${
              value == 0 && "dark:text-primaryColor"
            }`}
            {...a11Props(0)}
          />
          <Tab
            label="ویرایش رمز عبور"
            className={`dark:text-darkText ${
              value == 1 && "dark:text-primaryColor"
            }`}
            {...a11Props(1)}
          />
        </Tabs>
        <CustomTabPanel value={value} index={0} className="w-full">
          <div className="editProfileUploadImageSection">
            <div className="editProfileImageBox">
              <img src={avatar} className="editProfileImage" />
              <div className="editProfileUploadImageIconWrapper">
                <CameraAltOutlined className="text-white" />
              </div>
            </div>
            <span className="editProfileUploadImageText">ویرایش تصویر</span>
          </div>
          <EditProfileForm />
        </CustomTabPanel>
      </div>
    </div>
  );
};
export { EditProfile };
