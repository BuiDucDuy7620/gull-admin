import React, { useState } from "react";
import { Range } from "rc-slider";

const RangeSlider = () => {
  const [value, setValue] = useState([25, 75]);

  const handleChange = (value) => {
    setValue(value);
  };

  return <Range value={value} onChange={handleChange} />;
};

export default RangeSlider;
