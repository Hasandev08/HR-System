import React from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const Filter = ({ people }) => {
  return (
    <Stack spacing={3} sx={{ width: 650 }}>
      <Autocomplete
        multiple
        autoComplete={true}
        size="small"
        options={people}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label="Filter" />}
      />
    </Stack>
  );
};

export default Filter;
