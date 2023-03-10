import React, { useState } from "react";
import ImageCropper from "./ImageCropper/ImageCropper";

const AppImageCropper = () => {
  const [croppedImg, setCroppedImg] = useState(null);
  const [againCrop, setAgainCrop] = useState(false);

  const handleFileSelect = (event) => {
    let file = event.target.files[0];
    let src = URL.createObjectURL(file);
    setCroppedImg(src);
  };

  return (
    <div>
      <h3 className="text-primary mb-3">Image Cropping</h3>
      {againCrop ? (
        <ImageCropper
          image={croppedImg}
          croppedImg={croppedImg}
          setCroppedImg={setCroppedImg}
          againCrop={againCrop}
          setAgainCrop={setAgainCrop}
          handleFileSelect={handleFileSelect}
        />
      ) : (
        <ImageCropper
          image={croppedImg || "/assets/images/photo-wide-3.jpg"}
          croppedImg={croppedImg}
          setCroppedImg={setCroppedImg}
          againCrop={againCrop}
          setAgainCrop={setAgainCrop}
          handleFileSelect={handleFileSelect}
        />
      )}
    </div>
  );
};

export default AppImageCropper;
