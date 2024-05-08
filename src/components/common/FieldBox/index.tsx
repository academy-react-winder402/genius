import { ErrorMessage } from "../ErrorMessage";
import { Field } from "../Field";
import { PasswordField } from "../PasswordField";

interface FieldBoxProps {
  label: string;
  type?: string;
  name: string;
  id: string;
  className: string;
  wrapperClassName?: string;
  isPassword?: boolean;
  placeholder?: string;
  isCheckbox?: boolean;
  isLogin?: boolean;
}

const FieldBox = ({
  label,
  type = "text",
  name,
  id,
  className,
  wrapperClassName,
  isPassword,
  placeholder,
  isCheckbox,
  isLogin,
}: FieldBoxProps) => {
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
          ) : (
            <Field
              type={type}
              name={name}
              id={id}
              placeholder={placeholder!}
              className={className}
            />
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
