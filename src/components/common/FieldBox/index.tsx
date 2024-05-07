import { ErrorMessage } from "../ErrorMessage";
import { Field } from "../Field";
import { PasswordField } from "../PasswordField";

interface FieldBoxProps {
  label: string;
  type?: string;
  name: string;
  id: string;
  className: string;
  isPassword?: boolean;
  passwordPlaceholder?: string;
}

const FieldBox = ({
  label,
  type = "text",
  name,
  id,
  className,
  isPassword,
  passwordPlaceholder,
}: FieldBoxProps) => {
  return (
    <div>
      <label htmlFor={id} className="editProfileFormLabel">
        {label}
      </label>
      {isPassword ? (
        <PasswordField
          name={name}
          id={id}
          placeholder={passwordPlaceholder!}
          className={className}
        />
      ) : (
        <Field type={type} name={name} id={id} className={className} />
      )}

      <ErrorMessage name={name} />
    </div>
  );
};

export { FieldBox };
