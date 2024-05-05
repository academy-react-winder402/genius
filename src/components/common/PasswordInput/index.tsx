import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Field } from "formik";
import { useState } from "react";

import { ErrorMessage } from "../ErrorMessage";

interface PasswordInputProps {
  showLabel?: boolean;
  isRegister?: boolean;
}

const PasswordInput = ({ showLabel, isRegister }: PasswordInputProps) => {
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const handleIsPasswordChange = () => setIsPassword((prevValue) => !prevValue);

  return (
    <div className="relative flex flex-col w-full">
      {showLabel && <p className="font-bold">رمز عبور</p>}
      <Field
        name="password"
        type={isPassword ? "password" : "text"}
        placeholder="رمز عبور"
        className="authInput !pl-10"
      />
      <div
        className={`absolute ${
          isRegister ? "top-5" : "top-11"
        }  left-2 cursor-pointer`}
      >
        {isPassword ? (
          <VisibilityOffIcon onClick={handleIsPasswordChange} />
        ) : (
          <VisibilityIcon onClick={handleIsPasswordChange} />
        )}
      </div>
      <ErrorMessage name="password" />
    </div>
  );
};

export { PasswordInput };
