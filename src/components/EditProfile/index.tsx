import { CameraAltOutlined } from "@mui/icons-material";

import { DashboardTitleBox } from "../common/DashboardTitleBox";
import { EditProfileForm } from "./EditProfileForm";

import avatar from "../../assets/images/Dashboard/Avatars/avatar2.jpg";

const EditProfile = () => {
  return (
    <div>
      <DashboardTitleBox>ویرایش پروفایل</DashboardTitleBox>
      <div className="editProfileContentSection">
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
      </div>
    </div>
  );
};
export { EditProfile };
