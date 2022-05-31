import React, { useState } from "react";
import ToggleButton from "../ToggleButton/index";
import EnhancedTableBody from "../Table/TableBody/index";
import Profile from "../Profile/Card/index";
import Search from "../Search";
import Filter from "../Filter";
import "./style.css";

const Display = ({
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
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled((s) => !s);
  };

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
      <div className="search-bar">
        <div className="searchBar">
          <Search handleChange={handleChange} />
          <div className="switch">
            <ToggleButton toggled={toggled} onClick={handleClick} />
          </div>
          <div className="filter">
            <Filter people={people} />
          </div>
        </div>
      </div>
      {toggled ? (
        <Profile tempData={tempData} />
      ) : (
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
      )}
    </div>
  );
};

export default Display;
