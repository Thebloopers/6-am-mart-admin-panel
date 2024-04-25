import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import SearchBox from "../Components/SearchBox";
import ExportButton from "../Components/ExportButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import withAuth from "../HOC/withAuth";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "SL", headerName: "SL", width: 130 },
  { field: "Name", headerName: "Name", width: 130 },
  { field: "Email", headerName: "Email", width: 130 },
  { field: "Phone", headerName: "Phone", width: 130 },
  { field: "Role", headerName: "Role", width: 130 },
  {
    field: "Action",
    headerName: "Action",
    width: 130,
    renderCell: (parms) => (
      <div className="flex gap-2 mt-2">
        <button className="btn btn-sm btn-outline hover:bg-[#24bac3]  text-[#24bac3]   mr-2">
          {" "}
          <EditIcon />
        </button>
        <button className="btn btn-sm  btn-outline btn-error ">
          <DeleteIcon />
        </button>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    SL: "1",
    Name: "	Ronnie Dickson",
    Email: "	D**********@gmail.com",
    Phone: "	0**********",
    Role: "	Receptionist & Front Desk Manager",
    Action: "true",
  },
];

function EmployeeList() {
  return (
    <>
      <div className="page-header">
        <div className="flex flex-wrap items-center justify-between mb-4">
          <h1 className="page-header-title flex items-center mb-3 mr-1">
            <span className="page-header-icon mr-2">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/role.png"
                className="w-6 h-6"
                alt=""
              />
            </span>
            <span>Employee list</span>
          </h1>
          <button className="btn text-white mb-3 bg-[#24bac3] hover:bg-[#20A4AC] flex items-center">
            <AddIcon />
            <span className="text">Add new</span>
          </button>
        </div>
      </div>
      <div className="card-header flex  gap-3 border p-2 mt-8">
        <div className="search--button-wrapper flex flex-wrap justify-between md:w-full max-w-[] mb-4">
          <h5 className="card-title">
            <span className="card-header-icon">
              <i className="tio-dollar-outlined"></i>
            </span>
            Employee Table &nbsp;
            <span className="badge badge-soft-secondary">0</span>
          </h5>
          <div className="flex flex-wrap items-center gap-3">
            <div className="">
              <SearchBox placeholder={"Ex:Search by Name"} />
            </div>
            <form className="search-form theme-style"></form>
            <div>
              <ExportButton />
            </div>
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
    </>
  );
}

export default withAuth(EmployeeList);
