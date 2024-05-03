interface EditProfileTitleBoxProps {
  title: string;
}
import avatarImage from "../../../assets/images/Dashboard/Avatars/avatar.png";

const EditProfileTitleBox = ({ title }: EditProfileTitleBoxProps) => {
  return (
    <div className="editProfileTitleBoxWrapper">
      <span className="editProfileTitleBoxTitle">{title}</span>

      <img src={avatarImage} className="editProfileAvatar" />

      <div>
        <input
          type="text"
          placeholder="نام"
          className=" relative -bottom-20 left-48 rounded-md lg:left-64"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="نام خانوادگی"
          className=" relative -bottom-20 left-40 rounded-md lg:left-44"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="کد ملی"
          className=" relative top-20 left-[573px] rounded-md lg:left-20 top-[79px]"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="ایمیل"
          className=" absolute rounded-md lg:right-[407px] bottom-20"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="تاریخ تولد"
          className=" absolute rounded-md lg:right-[680px] bottom-20"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="شماره موبایل"
          className=" absolute rounded-md lg:right-[966px] bottom-20"
        />
      </div>
      <div>
        <input
          type="submit"
          value="ثبت اطلاعات"
          className=" absolute rounded-md lg:right-[436px] bottom-3 bg-blue-500 text-cyan-50 w-28"
        />
      </div>
    </div>
  );
};

export { EditProfileTitleBox };
