import React from "react";
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
import withAuth from "../HOC/withAuth";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "SL", headerName: "SL", width: 130 },
  { field: "BonusTitle", headerName: "Bonus Title", width: 130 },
  { field: "BonusInfo", headerName: "Bonus Info", width: 130 },
  { field: "BonusAmount", headerName: "Bonus Amount", width: 130 },
  { field: "StartedOn", headerName: "Started On", width: 130 },
  { field: "ExpriedOn", headerName: " Expried On", width: 130 },
  {
    field: "Status",
    headerName: "Status",
    width: 200,
    renderCell: (parms) => (
      <div className="mt-3">
        <ToggleButton />
      </div>
    ),
  },
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
    BonusTitle: "Add 100 get 10% Extras",
    BonusInfo: "Minimum add amount - $ 500.00 Maximum bonus - $ 300.00",
    BonusAmount: "10 (%)",
    ExpriedOn: "21 Jul 2027",
    Status: true,
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

const Bonus = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="page-header flex flex-wrap items-center justify-between">
        <h1 className="page-header-title flex items-center">
          <span className="page-header-icon">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/add.png"
              className="w-8 h-8 mr-2"
              alt="Wallet Bonus Setup Icon"
            />
          </span>
          <span className="text-xl">Wallet bonus setup</span>
        </h1>
        <div
          className="text-primary-2 flex items-center cursor-pointer"
          type="button"
          data-toggle="modal"
          data-target="#how-it-works"
        >
          <strong className="mr-2">See how it works!</strong>
          <div className="blinkings">
            <i className="tio-info-outlined"></i>
          </div>
        </div>
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
                  Bonus Title (EN)
                </label>
                <input
                  type="text"
                  name="title[]"
                  id="en_title"
                  className="form-control w-full border py-2 rounded-md px-2 mt-2"
                  placeholder="Ex: EID Dhamaka"
                  fdprocessedid="lvbtf"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="form-group">
                <label className="input-label" htmlFor="en_description">
                  Short Description (EN)
                </label>
                <input
                  type="text"
                  name="description[]"
                  id="en_description"
                  className="form-control w-full border rounded-md py-2 px-2 mt-2"
                  placeholder="Ex: EID Dhamaka"
                  fdprocessedid="nlatt9"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-4">
            {/* Bonus Type */}
            <div className="col-span-full sm:col-span-1">
              <div className="form-group">
                <label htmlFor="bonus_type" className="input-label">
                  Bonus Type{" "}
                  <span className="form-label-secondary text-danger">*</span>
                </label>
                <select
                  name="bonus_type"
                  className="form-control w-full border rounded-md py-2 px-2 mt-2"
                  id="bonus_type"
                  required=""
                >
                  <option value="percentage">Percentage (%)</option>
                  <option value="amount">Amount $</option>
                </select>
              </div>
            </div>

            {/* Bonus Amount */}
            <div className="col-span-full sm:col-span-1">
              <div className="form-group">
                <label htmlFor="bonus_amount" className="input-label">
                  Bonus Amount{" "}
                  <span className="form-label-secondary text-danger">*</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="1"
                  max="999999999999.99"
                  placeholder="Ex: 100"
                  name="bonus_amount"
                  id="bonus_amount"
                  className="form-control w-full border rounded-md py-2 px-2 mt-2"
                  required=""
                />
              </div>
            </div>

            {/* Minimum Add Money Amount */}
            <div className="col-span-full sm:col-span-1">
              <div className="form-group">
                <label htmlFor="minimum_add_amount" className="input-label">
                  Minimum Add Money Amount ($){" "}
                  <span className="form-label-secondary text-danger">*</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="1"
                  max="999999999999.99"
                  placeholder="Ex: 10"
                  name="minimum_add_amount"
                  id="minimum_add_amount"
                  className="form-control w-full border rounded-md py-2 px-2 mt-2"
                  required=""
                />
              </div>
            </div>

            {/* Maximum Bonus */}
            <div className="col-span-full sm:col-span-1">
              <div className="form-group">
                <label htmlFor="maximum_bonus_amount" className="input-label">
                  Maximum Bonus ($){" "}
                  <span className="form-label-secondary text-danger">*</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="1"
                  max="999999999999.99"
                  placeholder="Ex: 1000"
                  name="maximum_bonus_amount"
                  id="maximum_bonus_amount"
                  className="form-control w-full border rounded-md py-2 px-2 mt-2"
                  required=""
                />
              </div>
            </div>

            {/* Start Date */}
            <div className="col-span-full sm:col-span-1">
              <div className="form-group">
                <label htmlFor="start_date" className="input-label">
                  Start Date{" "}
                  <span className="form-label-secondary text-danger">*</span>
                </label>
                <input
                  type="date"
                  name="start_date"
                  className="form-control w-full border rounded-md py-2 px-2 mt-2"
                  id="start_date"
                  required=""
                  min="2024-04-10"
                />
              </div>
            </div>

            {/* Expire Date */}
            <div className="col-span-full sm:col-span-1">
              <div className="form-group">
                <label htmlFor="end_date" className="input-label">
                  Expire Date{" "}
                  <span className="form-label-secondary text-danger">*</span>
                </label>
                <input
                  type="date"
                  name="end_date"
                  className="form-control w-full border rounded-md py-2 px-2 mt-2"
                  id="end_date"
                  required=""
                  min="2024-04-10"
                />
              </div>
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
            Bonus List &nbsp;
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

export default withAuth(Bonus);
