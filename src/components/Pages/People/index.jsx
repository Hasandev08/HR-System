import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../../common/Body";
import "./style.css";

import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import { green } from "@mui/material/colors";

const People = () => {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/people")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPeople(data);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="people">
      <div className="flex-container">
        <div className="sidebar">
          <div className="side box"></div>
          <div className="side bar">
            <div className="peopleIcon">
              <PeopleIcon sx={{ color: green[500] }} />
            </div>
            <div className="logoutIcon">
              <LogoutIcon color="action" onClick={() => navigate("/")} />
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="navbar"></div>
          <div className="card">
            <div className="card-header">
              {people && <h2>People ({people.length})</h2>}
            </div>
            <div className="card-root">
              <div className="card-scroller">
                <button>ALL USERS</button>
                <div className="separator"></div>
              </div>
              <div className="card-body">
                {people && <Body people={people} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
