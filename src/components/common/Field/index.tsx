import { Field as FormikField } from "formik";

interface FieldProps {
  type?: string;
  name: string;
  id: string;
  className: string;
  placeholder?: string;
}

const Field = ({ type = "text", name, id, className, placeholder }: FieldProps) => {
  return (
    <FormikField
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
    />
  );
};

export { Field };
