import React, { useEffect, useState } from "react";
import Footer from "../../common/footer";
import "./style.css";

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

  return (
    <div className="people">
      <div className="flex-container">
        <div className="sidebar">
          <div className="side box"></div>
          <div className="side bar"></div>
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
                {people && <Footer people={people} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
