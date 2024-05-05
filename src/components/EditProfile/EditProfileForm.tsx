import { Field, Form, Formik } from "formik";

import { EditProfileFormInterface } from "../../types/edit-profile-form";

import { editProfileFormSchema } from "../../core/validations/edit-profile-form.validation";

import { ErrorMessage } from "../common/ErrorMessage";

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
          birthdayDate: "1402/2/16",
          phoneNumber: "09112345678",
        }}
        enableReinitialize={true}
        validationSchema={editProfileFormSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 gap-y-5 lg:gap-y-10 w-full">
            <div>
              <label htmlFor="firstName" className="editProfileFormLabel">
                نام
              </label>
              <Field
                type="text"
                name="firstName"
                id="firstName"
                className="editProfileFormInput"
              />
              <ErrorMessage name="firstName" />
            </div>
            <div>
              <label htmlFor="lastName" className="editProfileFormLabel">
                نام خانواردگی
              </label>
              <Field
                type="text"
                name="lastName"
                id="lastName"
                className="editProfileFormInput"
              />
              <ErrorMessage name="lastName" />
            </div>
            <div>
              <label htmlFor="nationalCode" className="editProfileFormLabel">
                کد ملی
              </label>
              <Field
                name="nationalCode"
                id="nationalCode"
                className="editProfileFormInput"
              />
              <ErrorMessage name="nationalCode" />
            </div>
            <div>
              <label htmlFor="email" className="editProfileFormLabel">
                ایمیل
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="editProfileFormInput"
              />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="birthdayDate" className="editProfileFormLabel">
                تاریخ تولد
              </label>
              <Field
                name="birthdayDate"
                id="birthdayDate"
                className="editProfileFormInput"
              />
              <ErrorMessage name="birthdayDate" />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="editProfileFormLabel">
                شماره موبایل
              </label>
              <Field
                name="phoneNumber"
                id="phoneNumber"
                className="editProfileFormInput"
              />
              <ErrorMessage name="phoneNumber" />
            </div>
          </div>
          <button
            type="submit"
            className="mainButton dark:bg-gray-900 h-[45px] rounded-[7px] mt-12"
          >
            ثبت اطلاعات
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export { EditProfileForm };
