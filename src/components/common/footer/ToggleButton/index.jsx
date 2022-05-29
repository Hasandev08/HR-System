import React from "react";
import cx from "classnames";
import "./style.css";

const ToggleButton = ({ rounded = true }) => {
  const sliderCX = cx("slider", {
    rounded: rounded
  });
  //   const [isToggled, setIsToggled] = useState(false);

  //   const handleToggleClick = () => {
  //     setIsToggled(true);
  //   };

  return (
    <label className="switch">
      <input type="checkbox" />
      <span className={sliderCX} />
    </label>
  );
};

export default ToggleButton;
