import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../common/logo/index";
import Input from "../../common/input";
import { validator } from "../../../utils/index";
import "./style.css";

const Login = ({ login }) => {
  const [values, setValues] = useState([
    {
      type: "email",
      placeholder: "email",
      value: "",
      error: false,
      errorMessage: ""
    },
    {
      type: "password",
      placeholder: "password",
      value: "",
      error: false,
      errorMessage: ""
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    validator(values, setValues);
    login(values[0].value);
  };

  const handleChange = (value, index) => {
    const tempValues = [...values];
    tempValues[index].value = value;
    setValues(tempValues);
  };

  return (
    <div className="app">
      <div className="form">
        <Logo />
        <form onSubmit={handleSubmit}>
          <div className="form-inner">
            <Input
              className={values.error ? "error-form-input" : "form-input"}
              handleChange={handleChange}
              values={values}
            />
            <button className="login-button">SIGN IN</button>
            <Link className="login-link" to="/signup">
              Create account!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
