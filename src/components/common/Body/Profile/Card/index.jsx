import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicPagination from "../Pagination";
import "./style.css";

const Profile = ({ tempData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tempData.slice(indexOfFirstPost, indexOfLastPost);

  const handleChangePage = (e, newPage) => {
    setCurrentPage(newPage);
  };

  const navigate = useNavigate();

  return (
    <div className="profile">
      <div className="row">
        {currentPosts.map((data) => (
          <div className="col-md-6 animated fadeIn" key={data.name}>
            <div
              className="profile-card"
              onClick={() => navigate("/people/form")}
            >
              <div className="avatar"></div>
              <h5 className="card-name">{data.name}</h5>
              <p className="card-email">{data.email}</p>
              <p className="phone">{data.contact}</p>
              <p className="card-title">{data.title.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
      <BasicPagination
        postsPerPage={postsPerPage}
        totalPosts={tempData.length}
        handleChangePage={handleChangePage}
      />
    </div>
  );
};

export default Profile;
