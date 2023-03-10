import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";
import { Button } from "react-bootstrap";

const ImageCropper = ({
  image,
  croppedImg,
  setCroppedImg,
  againCrop,
  setAgainCrop,
  handleFileSelect,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotation
      );
      if (croppedImage) {
        const convertDataUrl = croppedImage.toDataURL("image/jpeg");
        setCroppedImg(convertDataUrl);
        setAgainCrop(true);
        // const convertFileUrl = dataURLtoFile(convertDataUrl, "cropped-image.jpeg")
      }
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  return (
    <div>
      <div>
        {againCrop ? (
          <img className="img-fluid" src={croppedImg} alt="" />
        ) : (
          <div>
            <div className="cropContainer">
              <Cropper
                image={image}
                crop={crop}
                rotation={rotation}
                zoom={zoom}
                aspect={4 / 4}
                onCropChange={setCrop}
                onRotationChange={setRotation}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
            <div className="row pt-3 mt-3">
              <div className="d-flex align-items-center col-6">
                <span className="me-3 fs-4">ZOOM </span>
                <input
                  value={zoom}
                  type="range"
                  class="form-range"
                  style={{ width: "100%" }}
                  onChange={(e) => setZoom(e.target.value)}
                  max="10"
                  step="0.1"
                />
              </div>
              <div className="d-flex align-items-center col-6">
                <span className="me-3 fs-4">ROTATION </span>
                <input
                  value={rotation}
                  type="range"
                  class="form-range"
                  style={{ width: "100%" }}
                  onChange={(e) => setRotation(e.target.value)}
                  min="0"
                  max="360"
                  step="1"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="d-flex align-items-center pt-3 mb-5">
        <div>
          <label htmlFor="upload-single-file">
            <Button className="btn-rounded me-3" as="span">
              <div className="flex flex-middle">
                <i className="i-Share-on-Cloud"> </i>
                <span>Single File</span>
              </div>
            </Button>
          </label>
          <input
            className="d-none"
            onChange={(e) => handleFileSelect(e)}
            id="upload-single-file"
            type="file"
            accept="image/*"
          />
        </div>
        <button
          onClick={() => (againCrop ? setAgainCrop(false) : showCroppedImage())}
          className="btn btn-rounded btn-primary"
        >
          {againCrop ? "Crop Again" : "Crop And Save"}
        </button>
      </div>
    </div>
  );
};

export default ImageCropper;
