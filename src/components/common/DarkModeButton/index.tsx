import { DarkMode, LightMode } from "@mui/icons-material";
import { onDarkModeChange, useDarkModeSelector } from "../../../redux/darkMode";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const DarkModeButton = () => {
  const darkMode = useDarkModeSelector();
  const dispatch = useDispatch();

  const handleDarkModeChange = () => {
    dispatch(onDarkModeChange(!darkMode));
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (darkMode == true) html?.classList.add("dark");
    else html?.classList.remove("dark");
  }, [darkMode]);

  return (
    <button
      onClick={handleDarkModeChange}
      className={`w-[48px] h-[48px] bg-white rounded-full outline-none ${
        darkMode === true ? "" : ""
      }`}
    >
      {darkMode === true ? <DarkMode /> : <LightMode />}
    </button>
  );
};

export { DarkModeButton };
