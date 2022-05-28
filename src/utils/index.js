export const validator = (values, setValues) => {
  const tempValues = [...values];

  if (values[0].value.length === 0) {
    tempValues[0].errorMessage = "Required!";
    tempValues[0].error = true;
    setValues(tempValues);
  }
  if (values[1].value.length === 0) {
    tempValues[1].errorMessage = "Required!";
    tempValues[1].error = true;
    setValues(tempValues);
  } else if (values[1].value.length < 5) {
    tempValues[1].errorMessage = "Must be 5 characters or more";
    tempValues[1].error = true;
    setValues(tempValues);
  } else {
    tempValues[1].errorMessage = "";
  }
  if (values[2].value.length === 0) {
    tempValues[2].errorMessage = "Required!";
    tempValues[2].error = true;
    setValues(tempValues);
  }
  if (values[3].value.length === 0) {
    tempValues[3].errorMessage = "Required!";
    tempValues[3].error = true;
  }
  if (values[4].value.length === 0) {
    tempValues[4].errorMessage = "Required!";
    tempValues[4].error = true;
    setValues(tempValues);
  } else if (values[4].value.length < 5) {
    tempValues[4].errorMessage = "Must be 5 characters or more";
    tempValues[4].error = true;
    setValues(tempValues);
  }
  if (values[5].value.length === 0) {
    tempValues[5].errorMessage = "Required!";
    tempValues[5].error = true;
    setValues(tempValues);
  }
};

export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const headCells = [
  {
    id: "image",
    numeric: false,
    disablePadding: true,
    label: "Image"
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Name"
  },
  {
    id: "title",
    numeric: true,
    disablePadding: false,
    label: "Title"
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: "Email"
  },
  {
    id: "contact",
    numeric: true,
    disablePadding: false,
    label: "Contact"
  }
];
