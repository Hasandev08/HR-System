import React from "react";
import logo from "../../../assets/logo.png";
import "./style.css";

const Logo = () => {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="Devsinc" />
        <div>Your Technology Partner</div>
      </div>
    </div>
  );
};

export default Logo;
