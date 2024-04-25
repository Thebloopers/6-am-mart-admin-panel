import React, { useState } from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { DataGrid } from "@mui/x-data-grid";
import SearchBox from "../Components/SearchBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ToggleButton from "../Components/ToggleButton";
import { Button } from "@mui/material";
import ModuleChecklist from "../Components/ModuleChecklist";
import withAuth from "../HOC/withAuth";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "SL", headerName: "SL", width: 130 },
  { field: "RoleName", headerName: "Role Name", width: 130 },
  { field: "Permissions", headerName: "Permissions", width: 130 },
  { field: "CreatedAt", headerName: "Created At", width: 130 },

  {
    field: "Action",
    headerName: "Action",
    width: 200,
    renderCell: (parms) => (
      <div className="flex gap-2 mt-2">
        <Button variant="outlined" color="success">
          <EditIcon />
        </Button>
        <Button variant="outlined" color="error">
          <DeleteIcon />
        </Button>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    SL: 1,
    RoleName: "Receptionist & Front Desk...",
    Permissions:
      "Banner , Campaign , Category , Employee , Notification , Store , Report , Parcel , Pos .",
    CreatedAt: "29 Sep 2022",

    Action: true,
  },
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

const EmpolyeeRole = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [selectAll, setSelectAll] = useState(false);

  // Function to handle select all checkbox change
  const handleSelectAllChange = (e) => {
    setSelectAll(e.target.checked);
    // Implement logic to update permissions based on selectAll state
  };
  return (
    <>
      <div className="page-header">
        <h1 className="page-header-title flex items-center">
          <span className="page-header-icon">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/role.png"
              alt="Employee Role Icon"
              className="w-6 h-6 mr-2"
            />
          </span>
          <span className="text-xl font-bold">Employee Role</span>
        </h1>
      </div>
      <Card className="mt-4" sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="English(EN)" {...a11yProps(0)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="flex flex-wrap mt-2">
            <div className="w-full md:w-1/2 px-2">
              <div className="form-group">
                <label className="input-label" htmlFor="en_title">
                  Role name (Default)
                </label>
                <input
                  type="text"
                  name="title[]"
                  id="en_title"
                  className="form-control w-full border py-2 rounded-md px-2 mt-2"
                  placeholder="Role Name Exampale"
                  fdprocessedid="lvbtf"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex flex-wrap items-center  select-all-checkes">
              <h5 className="input-label m-0 text-capitalize text-xl">
                Set permission :
              </h5>
              <div className="check-item pb-0 w-auto">
                <div className="form-group form-check form--check m-0 ml-2">
                  <input
                    type="checkbox"
                    name="modules[]"
                    value="collect_cash"
                    className="form-check-input"
                    id="select-all"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                  />
                  <label className="form-check-label ml-2" htmlFor="select-all">
                    Select all
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <ModuleChecklist />
            </div>
          </div>

          <div className="flex justify-end w-full mt-8">
            <button type="reset" id="reset_btn" className="btn btn--reset">
              Reset
            </button>
            <button
              type="submit"
              className="btn btn--primary ml-2 bg-[#24bac3] text-white hover:bg-[#20A7AF]"
            >
              Submit
            </button>
          </div>
        </CustomTabPanel>
      </Card>

      <Card className="card-header flex  gap-3 border p-2 mt-8">
        <div className="search--button-wrapper flex flex-wrap justify-between md:w-full max-w-[] mb-4">
          <h5 className="card-title">
            <span className="card-header-icon">
              <i className="tio-dollar-outlined"></i>
            </span>
            Roles Table &nbsp;
            <span className="badge badge-soft-secondary bg-[#DAE8EC]">2</span>
          </h5>
          <div className="flex flex-wrap items-center gap-3">
            <div className="">
              <SearchBox placeholder={"Ex:Search by Bonus Title"} />
            </div>
            <form className="search-form theme-style"></form>
            <div></div>
          </div>
        </div>
      </Card>
      <Card
        className="max-w-[400px] overflow-auto md:max-w-full"
        style={{ height: 400, width: "100%" }}
      >
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
      </Card>
    </>
  );
};

export default withAuth(EmpolyeeRole);
