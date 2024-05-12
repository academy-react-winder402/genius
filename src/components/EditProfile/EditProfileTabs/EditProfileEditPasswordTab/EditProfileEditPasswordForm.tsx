import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { EDIT_PROFILE_EDIT_PASSWORD_FORM } from "../../../../core/data/edit-profile/edit-profile-edit-password-form";
import { editProfileEditPasswordFormSchema } from "../../../../core/validations/edit-profile/edit-profile-edit-password-form.validation";

import { EditProfileEditPasswordFormInterface } from "../../../../types/edit-profile/edit-profile-edit-password-form";
import { setItem } from "../../../../core/services/common/storage.services";

import { FieldBox } from "../../../common/FieldBox";
import { editPassword } from "../../../../core/services/api/EditProfile/editProfile-editPassword";

const EditProfileEditPasswordForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values: EditProfileEditPasswordFormInterface) => {
    try {
      const Password = await toast.promise(editPassword(values), {
        pending: "شما در حال ثبت اطلاعات میباشید می باشید ...",
      });
      if (Password.success) {
        setItem("token", Password.token);
        toast.success("اطلاعات با موفقیت ثبت شد ...");
        navigate("/SharePanel/ChangePassword");
      } else {
        toast.error(Password.message);
      }
    } catch (error) {
      toast.error("مشکلی در فرایند ثبت اطلاعات به وجود آمد !");
    }
  };

  return (
    <Formik
      initialValues={{
        oldPassword: "",
        newPassword: "",
        repeatPassword: "",
      }}
      validationSchema={editProfileEditPasswordFormSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="flex flex-col lg:items-center gap-4">
          {EDIT_PROFILE_EDIT_PASSWORD_FORM.map((field) => (
            <FieldBox
              key={field.id}
              type={field.type}
              label={field.label}
              name={field.name}
              id={field.id}
              className={field.className}
              isPassword={field.isPassword}
            />
          ))}
          <button type="submit" className="editProfileSubmitButton mr-0 mt-4">
            ثبت اطلاعات
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export { EditProfileEditPasswordForm };
