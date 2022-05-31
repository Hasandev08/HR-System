import React from "react";
import "./style.css";

const Form = () => {
  return (
    <div className="form-container">
      <div className="container">
        <div className="data">
          <div className="update-user">Update User</div>
          <div className="update-form">
            <form>
              <div className="update-form-input">
                <input type="text" name="name" placeholder="name" />
                <input type="text" name="title" placeholder="title" />
                <input type="text" name="email" placeholder="email" />
                <input type="text" name="contact" placeholder="contact" />
                <input type="text" name="password" placeholder="password" />
              </div>
              <div className="update-buttons">
                <button className="update">UPDATE</button>
                <button className="delete">DELETE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
