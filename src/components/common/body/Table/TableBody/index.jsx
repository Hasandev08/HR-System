import React from "react";
import { useNavigate } from "react-router-dom";

import EnhancedTableHead from "../TableHead/index";
import Paginate from "../Paginate";
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
  handleChangePage,
  handleChangeRowsPerPage,
  getComparator,
  stableSort,
  headCells,
  tempData,
  people
}) => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <TableContainer className="tableContainer">
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
            rowCount={tempData.length}
            headCells={headCells}
          />
          <TableBody>
            {stableSort(tempData, getComparator(order, orderBy))
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
      <Paginate
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        people={people}
      />
    </div>
  );
};

export default EnhancedTableBody;
