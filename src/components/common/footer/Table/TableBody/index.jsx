import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../../searchBar/index";
import EnhancedTableHead from "../TableHead/index";
import "./style.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const EnhancedTableBody = ({
  page,
  dense,
  selected,
  emptyRows,
  order,
  orderBy,
  rowsPerPage,
  handleSelectAllClick,
  handleRequestSort,
  getComparator,
  stableSort,
  headCells,
  people
}) => {
  const navigate = useNavigate();

  const [data, setData] = useState(people);
  const [queryStr, setQueryStr] = useState([]);
  const [titleFilter, setTitleFilter] = useState([]);

  const getQueryString = (e) => {
    handleQueryStr(e);
  };

  const getTitleFilter = (val) => {
    handleTitleFilter(val);
  };

  const handleQueryStr = (e, total = people) => {
    if (e === "") {
      setQueryStr([]);
      setData(titleFilter.length > 0 ? titleFilter : total);
    } else {
      let tempPeople = [];
      let totalPeople = titleFilter.length > 0 ? titleFilter : total;
      totalPeople.forEach((item) => {
        let filterArr = ["name", "title", "contact", "email"];
        filterArr.forEach((it) => {
          if (item[it].includes(e)) {
            if (!tempPeople.includes(item)) {
              tempPeople.push(item);
            }
          }
        });
      });
      setData(tempPeople);
      setQueryStr(tempPeople);
    }
  };

  const handleTitleFilter = (val, total = people) => {
    if (val.length === 0) {
      setTitleFilter([]);
      setData(queryStr.length > 0 ? queryStr : [...total]);
    } else {
      if (val.length === 0) {
        setData(total);
      } else {
        let resultArr = [];
        const tempPeople = queryStr.length > 0 ? queryStr : [...total];
        tempPeople.forEach((item) => {
          val.forEach((it) => {
            if (it.title === item.title) {
              resultArr.push(item);
            }
          });
        });
        setData(resultArr);
        setTitleFilter(resultArr);
      }
    }
  };

  return (
    <div className="footer">
      <SearchBar
        people={people}
        getQueryString={getQueryString}
        getTitleFilter={getTitleFilter}
      />
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={dense ? "small" : "medium"}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            headCells={headCells}
          />
          <TableBody>
            {stableSort(data, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    className="TableBodyRow"
                    hover
                    onClick={() => navigate("/people/form")}
                    key={row.name}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.image}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.title}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.contact}</TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (dense ? 33 : 53) * emptyRows
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EnhancedTableBody;
