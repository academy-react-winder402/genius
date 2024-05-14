import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { EDIT_PROFILE_GENERAL_FORM } from "../../../../core/data/edit-profile/edit-profile-general-form";
import { getProfileInfoAPI } from "../../../../core/services/api/user-panel/get-profile-info.api";
import { updateProfileInfoAPI } from "../../../../core/services/api/user-panel/update-profile-info.api";
import { onFormData } from "../../../../core/utils/form-data-helper.utils";
import { editProfileGeneralFormSchema } from "../../../../core/validations/edit-profile/edit-profile-general-form.validation";
import { convertDateToPersian } from "../../../../core/utils/date-helper.utils";

import { EditProfileGeneralFormInterface } from "../../../../types/edit-profile/edit-profile-general-form";
import { ProfileInfoInterface } from "../../../../types/profile-info";

import { FieldBox } from "../../../common/FieldBox";

const EditProfileGeneralForm = () => {
  const [profileInfo, setProfileInfo] = useState<ProfileInfoInterface>();

  const formattedBirthday = convertDateToPersian(profileInfo?.birthDay!);

  const onSubmit = async (values: EditProfileGeneralFormInterface) => {
    const data = onFormData(values);

    try {
      const response = await toast.promise(updateProfileInfoAPI(data), {
        pending: "در حال آپدیت اطلاعات ...",
      });

      if (response.success) {
        toast.success("اطلاعات با موفقیت آپدیت شد ...");
      } else {
        toast.error(response.errors);
      }
    } catch (error) {
      toast.error("مشکلی در آپدیت اطلاعات به وجود آمد ...");
    }
  };

  useEffect(() => {
    const fetchProfileInfo = async () => {
      const getProfileInfo = await getProfileInfoAPI();

      setProfileInfo(getProfileInfo);
    };

    fetchProfileInfo();
  }, []);

  return (
    <div className="w-full mt-12">
      <Formik
        initialValues={{
          FName: profileInfo?.fName || "",
          LName: profileInfo?.lName || "",
          NationalCode: profileInfo?.nationalCode || "",
          email: profileInfo?.email || "",
          BirthDay: profileInfo?.birthDay || "",
          phoneNumber: profileInfo?.phoneNumber || "",
          userAbout: profileInfo?.userAbout || "",
          HomeAdderess: profileInfo?.homeAdderess || "",
          LinkdinProfile: profileInfo?.linkdinProfile || "",
          TelegramLink: profileInfo?.telegramLink || "",
          ReceiveMessageEvent: profileInfo?.receiveMessageEvent!,
          Gender: profileInfo?.gender!,
        }}
        enableReinitialize={true}
        validationSchema={editProfileGeneralFormSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="editProfileFormFieldsWrapper">
              {EDIT_PROFILE_GENERAL_FORM.map((field) => (
                <FieldBox
                  key={field.id}
                  label={field.label}
                  type={field.type}
                  as={field.as}
                  name={field.name}
                  id={field.id}
                  className={field.className || ""}
                  wrapperClassName={field.wrapperClassName}
                  isCheckbox={field.isCheckbox}
                  isDate={field.isDate || false}
                  setFieldValue={setFieldValue}
                  dateValue={formattedBirthday}
                  options={field.options}
                />
              ))}
            </div>
            <button type="submit" className="editProfileSubmitButton">
              ثبت اطلاعات
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export { EditProfileGeneralForm };
