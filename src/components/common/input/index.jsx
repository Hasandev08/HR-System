import React from "react";
import "./style.css";

const Input = ({ values, handleChange, className }) => {
  console.log(values);
  return (
    <div className="input">
      {values.map((item, index) => (
        <div key={index.toString()}>
          <div>
            <input
              onChange={(e) => handleChange(e.target.value, index)}
              className={className}
              type={item.type}
              name={item.type}
              placeholder={item.placeholder}
            />

            {item.error ? <p>{item.errorMessage}</p> : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Input;
