import { Field as FormikField } from "formik";

interface FieldProps {
  type?: string;
  name: string;
  id: string;
  className: string;
}

const Field = ({ type = "text", name, id, className }: FieldProps) => {
  return <FormikField type={type} name={name} id={id} className={className} />;
};

export { Field };
