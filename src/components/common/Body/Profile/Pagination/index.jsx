import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./style.css";

export default function BasicPagination({
  postsPerPage,
  totalPosts,
  handleChangePage
}) {
  const count = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="pagination">
      <Stack spacing={2}>
        <Pagination count={count} onChange={handleChangePage} />
      </Stack>
    </div>
  );
}
