import React, { useState } from "react";
import cx from "classnames";
import "./style.css";

const ToggleButton = ({ rounded = true }) => {
  const [switchButton, setSwitchButton] = useState(true);

  const sliderCX = cx("slider", {
    rounded: rounded
  });

  return (
    <label className="switch">
      <input type="checkbox" onClick={() => setSwitchButton(!switchButton)} />
      {switchButton ? console.log("true") : console.log("false")}
      <span className={sliderCX} />
    </label>
  );
};

export default ToggleButton;
