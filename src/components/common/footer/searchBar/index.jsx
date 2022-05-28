import React, { useState } from "react";
import Input from "../../input/index";
import "./style.css";

import Switch from "@mui/material/Switch";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const SearchBar = ({ people, getQueryString, getTitleFilter }) => {
  const [values, setValues] = useState([
    {
      type: "text",
      placeholder: "Search",
      value: ""
    }
  ]);

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleChange = (val) => {
    let tempValues = values[0];
    tempValues = { ...tempValues, ...{ value: val } };
    setValues([tempValues]);
    getQueryString(val);
  };

  const handleTitleChange = (event, val) => {
    getTitleFilter(val);
  };

  return (
    <div className="searchBar">
      <div className="search">
        <Input
          values={values}
          className={"searchBar"}
          handleChange={handleChange}
        />
      </div>
      <div className="switch">
        <Switch
          {...label}
          defaultChecked
          onChange={(val, l) => {
            console.log(l);
          }}
        />
      </div>
      <div className="filter">
        <Stack spacing={3} sx={{ width: 500 }}>
          <Autocomplete
            multiple
            id="size-small-outlined-multi"
            size="small"
            options={people}
            onChange={handleTitleChange}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField {...params} placeholder="Filter" />
            )}
          />
        </Stack>
        );
      </div>
    </div>
  );
};

export default SearchBar;
