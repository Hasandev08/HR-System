import React, { useState } from "react";
import ToggleButton from "../ToggleButton/index";
import EnhancedTableBody from "../Table/TableBody/index";
import Input from "../../input/index";
import "./style.css";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const SearchBar = ({
  page,
  dense,
  selected,
  emptyRows,
  order,
  orderBy,
  rowsPerPage,
  handleSelectAllClick,
  handleRequestSort,
  handleChangePage,
  handleChangeRowsPerPage,
  getComparator,
  stableSort,
  headCells,
  people
}) => {
  const [tempData, setTempData] = useState(people);
  const [values] = useState([
    {
      type: "text",
      placeholder: "Search",
      value: ""
    }
  ]);

  const handleChange = (val) => {
    const newData = people.filter(
      (item) =>
        item.name.toLowerCase().includes(val.toLowerCase()) ||
        item.title.toLowerCase().includes(val.toLowerCase()) ||
        item.email.includes(val) ||
        item.contact.includes(val)
    );
    setTempData(newData);
  };

  return (
    <div className="display">
      <div className="bar">
        <div className="searchBar">
          <div className="search">
            <Input
              values={values}
              className={"searchItem"}
              handleChange={handleChange}
            />
          </div>
          <div className="switch">
            <ToggleButton />
          </div>
          <div className="filter">
            <Stack spacing={3} sx={{ width: 650 }}>
              <Autocomplete
                multiple
                id="size-small-outlined-multi"
                size="small"
                options={people}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField {...params} label="Filter" placeholder="Filter" />
                )}
              />
            </Stack>
          </div>
        </div>
      </div>
      <EnhancedTableBody
        page={page}
        dense={dense}
        selected={selected}
        emptyRows={emptyRows}
        order={order}
        orderBy={orderBy}
        rowsPerPage={rowsPerPage}
        handleSelectAllClick={handleSelectAllClick}
        handleRequestSort={handleRequestSort}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        getComparator={getComparator}
        stableSort={stableSort}
        headCells={headCells}
        tempData={tempData}
        people={people}
      />
    </div>
  );
};

export default SearchBar;
