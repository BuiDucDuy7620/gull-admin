import React, { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop'
// import Image from '../../../../public/assets/images/photo-wide-3.jpg'

const EasyCrop = () => {
   const [crop, setCrop] = useState({ x: 0, y: 0 })
   const [zoom, setZoom] = useState(1)

   const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
      console.log(croppedArea, croppedAreaPixels)
   }, [])

   return (
      <div>
         <Cropper
            image={'/assets/images/photo-wide-3.jpg'}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
         />
      </div>
   );
};

export default EasyCrop;