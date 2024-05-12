import { useState } from "react";
import { CameraAltOutlined } from "@mui/icons-material";

const AddProfileImageForm = () => {
  const [image, setImage] = useState<File>();

  const handleFileInputChange = () => {
    const imageData = new FormData();

    imageData.append("images", image!);
  };

  return (
    <>
      <input
        type="file"
        id="images"
        onChange={(e) => {
          setImage(e.target.files![0]);
          handleFileInputChange();
        }}
        className="hidden"
      />
      <label htmlFor="images">
        <CameraAltOutlined className="text-white" />
      </label>
    </>
  );
};

export { AddProfileImageForm };
