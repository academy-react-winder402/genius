import {
  Field as FormikField,
  FieldProps as FormikFieldProps,
  FormikProps,
} from "formik";
import React from "react";

interface FieldProps {
  type?: string;
  name: string;
  id: string;
  className?: string;
  placeholder?: string;
  multiple?: boolean;
  render?: (props: FormikFieldProps & FormikProps<any>) => JSX.Element | null;
}

const Field = ({
  type = "text",
  name,
  id,
  className,
  placeholder,
  multiple,
  render,
}: FieldProps) => {
  return (
    <FormikField
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
      multiple={multiple}
      render={render}
    />
  );
};

export { Field };
