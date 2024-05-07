import { Form, Formik } from "formik";

import { EDIT_PROFILE_EDIT_PASSWORD_FORM } from "../../../../core/data/edit-profile/edit-profile-edit-password-form";
import { editProfileEditPasswordFormSchema } from "../../../../core/validations/edit-profile/edit-profile-edit-password-form.validation";

import { EditProfileEditPasswordFormInterface } from "../../../../types/edit-profile/edit-profile-edit-password-form";

import { FieldBox } from "../../../common/FieldBox";

const EditProfileEditPasswordForm = () => {
  const onSubmit = (values: EditProfileEditPasswordFormInterface) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        nowPassword: "",
        newPassword: "",
        repeatPassword: "",
      }}
      validationSchema={editProfileEditPasswordFormSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="flex flex-col items-center gap-4">
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
          <button type="submit" className="editProfileSubmitButton mr-0 mt-6">
            ثبت اطلاعات
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export { EditProfileEditPasswordForm };
