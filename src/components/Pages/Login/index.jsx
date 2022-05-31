import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../common/Logo/index";
import Input from "../../common/Input";
import { validator } from "../../../utils/index";
import "./style.css";

const Login = ({ login }) => {
  const navigate = useNavigate();
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
            <button
              className="login-button"
              onClick={() => navigate("/people")}
            >
              SIGN IN
            </button>
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
