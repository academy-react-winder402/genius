import { CustomTabPanel } from "../../../common/CustomTabPanel";
import { EditProfileGeneralForm } from "./EditProfileGeneralForm";

import avatar from "../../../../assets/images/Dashboard/Avatars/avatar2.jpg";
import { AddProfileImageForm } from "./AddProfileImageForm";

interface EditProfileGeneralSettingsTabProps {
  value: number;
}

const EditProfileGeneralSettingsTab = ({
  value,
}: EditProfileGeneralSettingsTabProps) => {
  return (
    <CustomTabPanel value={value} index={0} className="w-full">
      <div className="editProfileUploadImageSection">
        <div className="editProfileImageBox">
          <img src={avatar} className="editProfileImage" />
          <div className="editProfileUploadImageIconWrapper">
            <AddProfileImageForm />
          </div>
        </div>
        <span className="editProfileUploadImageText">ویرایش تصویر</span>
      </div>
      <EditProfileGeneralForm />
    </CustomTabPanel>
  );
};

export { EditProfileGeneralSettingsTab };
