import { Form, Formik } from "formik";

import { EditProfileFormInterface } from "../../types/edit-profile-form";

import { editProfileFormSchema } from "../../core/validations/edit-profile-form.validation";

import { FieldBox } from "../common/FieldBox";
import { EDIT_PROFILE_FORM } from "../../core/data/edit-profile/edit-profile-form";

const EditProfileForm = () => {
  const onSubmit = (values: EditProfileFormInterface) => {
    console.log(values);
  };

  return (
    <div className="w-full mt-12">
      <Formik
        initialValues={{
          firstName: "فرنام",
          lastName: "میانرودیان",
          nationalCode: "1234567890",
          email: "test@gmail.com",
          birthdayDate: "1386/7/18",
          phoneNumber: "09112345678",
        }}
        enableReinitialize={true}
        validationSchema={editProfileFormSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="editProfileFormFieldsWrapper">
            {EDIT_PROFILE_FORM.map((field) => (
              <FieldBox
                key={field.id}
                label={field.label}
                type={field.type}
                name={field.name}
                id={field.id}
                className={field.className}
              />
            ))}
          </div>
          <button type="submit" className="editProfileSubmitButton">
            ثبت اطلاعات
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export { EditProfileForm };
