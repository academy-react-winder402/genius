import { useState } from "react";

import { a11Props } from "../../../core/utils/tab-helper.utils";

import { Tabs } from "../../common/Tabs";
import { Tab } from "../../common/Tabs/Tab";
import { EditProfileEditPasswordTab } from "./EditProfileEditPasswordTab";
import { EditProfileGeneralSettingsTab } from "./EditProfileGeneralSettingsTab";

const EditProfileTabs = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: number) => setValue(newValue);

  return (
    <>
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
      <EditProfileGeneralSettingsTab value={value} />
      <EditProfileEditPasswordTab value={value} />
    </>
  );
};

export { EditProfileTabs };
