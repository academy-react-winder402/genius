import { ErrorMessage as FormikErrorMessage } from "formik";

interface ErrorMessageProps {
  name: string;
}

const ErrorMessage = ({ name }: ErrorMessageProps) => {
  return (
    <FormikErrorMessage
      name={name}
      component="p"
      className="errorMessage"
    />
  );
};

export { ErrorMessage };
