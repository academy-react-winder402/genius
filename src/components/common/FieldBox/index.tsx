import { ErrorMessage } from "../ErrorMessage";
import { Field } from "../Field";

interface FieldBoxProps {
  label: string;
  type?: string;
  name: string;
  id: string;
  className: string;
}

const FieldBox = ({
  label,
  type = "text",
  name,
  id,
  className,
}: FieldBoxProps) => {
  return (
    <div>
      <label htmlFor={id} className="editProfileFormLabel">
        {label}
      </label>
      <Field type={type} name={name} id={id} className={className} />
      <ErrorMessage name={name} />
    </div>
  );
};

export { FieldBox };
