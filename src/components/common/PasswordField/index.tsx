import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Field } from "formik";
import { useState } from "react";

import { ErrorMessage } from "../ErrorMessage";

interface PasswordFieldProps {
  showLabel?: boolean;
  name: string;
  id: string;
  placeholder: string;
  isLogin?: boolean;
  isRegister?: boolean;
  className: string;
}

const PasswordField = ({
  showLabel,
  name,
  id,
  placeholder,
  isLogin,
  isRegister,
  className,
}: PasswordFieldProps) => {
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const handleIsPasswordChange = () => setIsPassword((prevValue) => !prevValue);

  return (
    <div className="relative flex flex-col w-full">
      {showLabel && <p className="font-bold">رمز عبور</p>}
      <Field
        name={name}
        id={id}
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
        className={className}
      />
      <div
        className={`absolute ${isLogin && "!top-5"} ${
          isRegister && "top-5"
        }  left-2 cursor-pointer top-4`}
      >
        {isPassword ? (
          <VisibilityOffIcon onClick={handleIsPasswordChange} />
        ) : (
          <VisibilityIcon onClick={handleIsPasswordChange} />
        )}
      </div>
    </div>
  );
};

export { PasswordField };
