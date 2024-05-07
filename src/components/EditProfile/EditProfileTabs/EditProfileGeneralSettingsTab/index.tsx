import { CameraAltOutlined } from "@mui/icons-material";

import { CustomTabPanel } from "../../../common/CustomTabPanel";
import { EditProfileGeneralForm } from "./EditProfileGeneralForm";

import avatar from "../../../../assets/images/Dashboard/Avatars/avatar1.png";

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
            <CameraAltOutlined className="text-white" />
          </div>
        </div>
        <span className="editProfileUploadImageText">ویرایش تصویر</span>
      </div>
      <EditProfileGeneralForm />
    </CustomTabPanel>
  );
};

export { EditProfileGeneralSettingsTab };
