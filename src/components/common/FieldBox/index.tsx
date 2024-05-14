import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

import { FieldBoxProps } from "../../../types/field-box";

import { ErrorMessage } from "../ErrorMessage";
import { Field } from "../Field";
import { PasswordField } from "../PasswordField";

const FieldBox = ({
  label,
  type = "text",
  as,
  name,
  id,
  className,
  wrapperClassName,
  isPassword,
  placeholder,
  isCheckbox,
  isLogin,
  isDate,
  setFieldValue,
  dateValue,
  options,
}: FieldBoxProps) => {
  const datePickerOnChange = (e: any) => {
    const date = e.year + "-" + e.month + "-" + e.day;

    setFieldValue(name, date);
  };

  return (
    <div className={wrapperClassName}>
      {!isCheckbox && (
        <>
          <label htmlFor={id} className="editProfileFormLabel">
            {label}
          </label>
          {isPassword ? (
            <PasswordField
              name={name}
              id={id}
              placeholder={placeholder!}
              className={className}
              isLogin={isLogin}
            />
          ) : isDate ? (
            <Field
              type={type}
              name={name}
              id={id}
              placeholder={placeholder!}
              className={className}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  name={name}
                  id={id}
                  value={dateValue}
                  format="YYYY/MM/DD"
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  onChange={datePickerOnChange}
                  className="dark:bg-gray-900 !dark:text-darkText border-t-black after:bg-black dark:shadow-primaryShadow"
                  inputClass={className}
                />
              )}
            />
          ) : (
            <div>
              <div>
                <Field
                  type={type}
                  name={name}
                  id={id}
                  placeholder={placeholder!}
                  className={className}
                  as={as}
                  select={as == "select" ? true : false}
                  options={options!}
                />
              </div>
            </div>
          )}
          <ErrorMessage name={name} />
        </>
      )}
      {isCheckbox && (
        <>
          <div className={wrapperClassName}>
            <Field type={type} name={name} id={id} className={className} />
            <label htmlFor={id} className="editProfileFormLabel">
              {label}
            </label>
          </div>
          <ErrorMessage name={name} />
        </>
      )}
    </div>
  );
};

export { FieldBox };
