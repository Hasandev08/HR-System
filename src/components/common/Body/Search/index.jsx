import React, { useState } from "react";
import Input from "../../Input";
import "./style.css";

import SearchIcon from "@mui/icons-material/Search";

const Search = ({ handleChange }) => {
  const [values] = useState([
    {
      type: "text",
      placeholder: "Search",
      value: ""
    }
  ]);

  return (
    <div className="search">
      <div className="searchIcon">
        <SearchIcon color="action" fontSize="small" />
      </div>
      <Input
        values={values}
        className={"searchItem"}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Search;
