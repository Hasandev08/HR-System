import React, { useState } from "react";
import EnhancedTableBody from "./Table/TableBody";
import Paginate from "./Paginate/index";

import { getComparator, stableSort, headCells } from "../../../utils";

const Footer = ({ people }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = people.map((n) => n.image);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - people.length) : 0;

  return (
    <div className="Page">
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
        getComparator={getComparator}
        stableSort={stableSort}
        headCells={headCells}
        people={people}
      />
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

export default Footer;
