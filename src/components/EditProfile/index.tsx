import { DashboardTitleBox } from "../common/DashboardTitleBox";
import { EditProfileForm } from "./EditProfileForm";

import avatar from "../../assets/images/Dashboard/Avatars/avatar.png";

const EditProfile = () => {
  return (
    <div>
      <DashboardTitleBox>ویرایش پروفایل</DashboardTitleBox>
      <div className="flex flex-col items-center mt-10">
        <img src={avatar} />
        <EditProfileForm />
      </div>
    </div>
  );
};
export { EditProfile };
