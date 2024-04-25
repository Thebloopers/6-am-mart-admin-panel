import { FilterIcon } from "@heroicons/react/outline";
// FilterIcon
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchBox from "../Components/SearchBox";
import { DataGrid } from "@mui/x-data-grid";
import withAuth from "../HOC/withAuth";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const NewStore = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold flex items-center">
          <FilterIcon className="h-6 w-6 mr-2" /> New joining requests
        </h1>
      </div>
      <div className="mt-8">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Pending Stores" {...a11yProps(0)} />
              <Tab label="Denied Stores" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="card-header flex  gap-3 border p-2">
              <div className="search--button-wrapper flex flex-wrap justify-between md:w-full max-w-[] mb-4">
                <h5 className="card-title">
                  <span className="card-header-icon">
                    <i className="tio-dollar-outlined"></i>
                  </span>
                  Stores List &nbsp;
                  <span className="badge badge-soft-secondary">0</span>
                </h5>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="">
                    <SearchBox placeholder={"Ex:Search Store Name"} />
                  </div>
                  <form className="search-form theme-style"></form>
                </div>
              </div>
            </div>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="card-header flex  gap-3 border p-2">
              <div className="search--button-wrapper flex flex-wrap justify-between md:w-full max-w-[] mb-4">
                <h5 className="card-title">
                  <span className="card-header-icon">
                    <i className="tio-dollar-outlined"></i>
                  </span>
                  Stores List &nbsp;
                  <span className="badge badge-soft-secondary">0</span>
                </h5>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="">
                    <SearchBox placeholder={"Ex:Search Store Name"} />
                  </div>
                  <form className="search-form theme-style"></form>
                </div>
              </div>
            </div>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </>
  );
};

export default withAuth(NewStore);
