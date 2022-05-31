import React, { useEffect, useState } from "react";
import Login from "./Pages/Login";
import People from "./Pages/People";
import Form from "./common/Form";
import Signup from "./Pages/Signup/index";

import { Route, Routes } from "react-router-dom";

const Router = () => {
  const [user, setUser] = useState(null);

  const login = (email) => {
    localStorage.setItem("token", JSON.stringify(email));
    setUser(email);
  };

  useEffect(() => {
    const tempUser = localStorage.getItem("token");
    if (tempUser) {
      setUser(JSON.parse(tempUser));
    } else {
      setUser(null);
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/people/form" exact element={<Form />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/people" exact element={<People />} />
        <Route path="/" exact element={<Login login={login} />} />
      </Routes>
    </div>
  );
};

export default Router;
