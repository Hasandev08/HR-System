import React from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import TocIcon from "@mui/icons-material/Toc";
import "./style.css";

const ToggleButton = ({ toggled, onClick }) => {
  return (
    <div onClick={onClick} className={toggled ? "toggled-left" : "toggle"}>
      <div className="notch">
        <div className="icon">
          {toggled ? (
            <GridViewOutlinedIcon sx={{ color: "white" }} fontSize="small" />
          ) : (
            <TocIcon fontSize="small" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
