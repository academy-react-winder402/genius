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
          firstName: "محمد",
          lastName: "بکران",
          nationalCode: 1234567890,
          email: "test@gmail.com",
          birthDayDate: "1403/2/16",
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
              <p className="editProfileFormLabel">نام خانواردگی</p>
              <Field
                type="text"
                name="lastName"
                className="editProfileFormInput"
              />
              <ErrorMessage name="lastName" />
            </div>
            <div>
              <p className="editProfileFormLabel">کد ملی</p>
              <Field
                type="text"
                name="nationalCode"
                className="editProfileFormInput"
              />
              <ErrorMessage name="nationalCode" />
            </div>
            <div>
              <p className="editProfileFormLabel">ایمیل</p>
              <Field
                type="email"
                name="email"
                className="editProfileFormInput"
              />
              <ErrorMessage name="email" />
            </div>
            <div>
              <p className="editProfileFormLabel">تاریخ تولد</p>
              <Field
                type="text"
                name="birthdayDate"
                className="editProfileFormInput"
              />
              <ErrorMessage name="birthdayDate" />
            </div>
            <div>
              <p className="editProfileFormLabel">شماره موبایل</p>
              <Field name="phoneNumber" className="editProfileFormInput" />
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
