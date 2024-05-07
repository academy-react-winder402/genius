import { Form, Formik } from "formik";

import { EDIT_PROFILE_GENERAL_FORM } from "../../../../core/data/edit-profile/edit-profile-general-form";
import { editProfileGeneralFormSchema } from "../../../../core/validations/edit-profile/edit-profile-general-form.validation";

import { EditProfileGeneralFormInterface } from "../../../../types/edit-profile/edit-profile-general-form";

import { FieldBox } from "../../../common/FieldBox";

const EditProfileGeneralForm = () => {
  const onSubmit = (values: EditProfileGeneralFormInterface) => {
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
          birthdayDate: "1402/2/16",
          phoneNumber: "09112345678",
        }}
        enableReinitialize={true}
        validationSchema={editProfileGeneralFormSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="editProfileFormFieldsWrapper">
            {EDIT_PROFILE_GENERAL_FORM.map((field) => (
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
export { EditProfileGeneralForm };
