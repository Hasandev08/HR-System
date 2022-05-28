import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../common/logo";
import Input from "../../common/input";
import { validator } from "../../../utils";
import "./style.css";

const Signup = () => {
  const [values, setValues] = useState([
    {
      type: "text",
      placeholder: "name",
      value: "",
      error: false,
      errorMessage: ""
    },
    {
      type: "text",
      placeholder: "title",
      value: "",
      error: false,
      errorMessage: ""
    },
    {
      type: "text",
      placeholder: "contact",
      value: "",
      error: false,
      errorMessage: ""
    },
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
    },
    {
      type: "password",
      placeholder: "confirm password",
      value: "",
      error: false,
      errorMessage: ""
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    validator(values, setValues);
  };

  return (
    <div className="app">
      <div className="form">
        <Logo />
        <form onSubmit={handleSubmit}>
          <div className="signup-form-inner">
            <Input
              className={values.error ? "error-form-input" : "form-input"}
              values={values}
            />
            <button className="signup-button">SIGN UP</button>
            <Link className="signup-link" to="/">
              Login!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
