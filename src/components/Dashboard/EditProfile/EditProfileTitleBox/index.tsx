interface EditProfileTitleBoxProps {
  title: string;
}
import avatarImage from "../../../../assets/images/Dashboard/Avatars/avatar.png";
import { EditProfileForm } from "../EditProfileForm";
const onSubmit = () => {};

const EditProfileTitleBox = ({ title }: EditProfileTitleBoxProps) => {
  return (
    <div className="editProfileTitleBoxWrapper">
      <span className="editProfileTitleBoxTitle">{title}</span>

      <img src={avatarImage} className="editProfileAvatar" />

      <EditProfileForm onSubmit={onSubmit} />
    </div>
  );
};

export { EditProfileTitleBox };
