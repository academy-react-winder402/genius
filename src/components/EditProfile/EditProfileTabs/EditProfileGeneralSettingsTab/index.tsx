import { useUserProfile } from "../../../../redux/user-profile";

import { CustomTabPanel } from "../../../common/CustomTabPanel";
import { AddProfileImageForm } from "./AddProfileImageForm";
import { EditProfileGeneralForm } from "./EditProfileGeneralForm";

import blankThumbnail from "../../../../assets/images/Courses/blank-thumbnail.jpg";

interface EditProfileGeneralSettingsTabProps {
  value: number;
}

const EditProfileGeneralSettingsTab = ({
  value,
}: EditProfileGeneralSettingsTabProps) => {
  const profileInfo = useUserProfile();

  return (
    <CustomTabPanel value={value} index={0} className="w-full">
      <div className="editProfileUploadImageSection">
        <div className="editProfileImageBox">
          <img
            src={profileInfo.userImage[0].puctureAddress || blankThumbnail}
            className="editProfileImage"
          />
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
