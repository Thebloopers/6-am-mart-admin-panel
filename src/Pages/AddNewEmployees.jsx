import React from "react";
import { Card } from "@mui/material";
import withAuth from "../HOC/withAuth";

const AddNewEmployees = () => {
  return (
    <>
      <div className="page-header">
        <h1 className="page-header-title flex items-center">
          <span className="page-header-icon mr-2">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/role.png"
              className="w-6 h-6"
              alt=""
            />
          </span>
          <span>Add new employee</span>
        </h1>
      </div>

      <Card className="card mb-4 mt-8 ">
        <div className="card-header border-b-2 py-4">
          <h5 className="card-title flex items-center">
            <span className="card-header-icon mr-2">
              <i className="tio-user"></i>
            </span>
            <span>General information</span>
          </h5>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {" "}
              <div>
                <label htmlFor="fname" className="input-label qcont">
                  First name
                  <span
                    className="form-label-secondary text-danger"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Required."
                  >
                    *
                  </span>
                </label>
                <input
                  type="text"
                  name="f_name"
                  id="fname"
                  className="form-control border px-2 py-2 w-[70%] mt-2 rounded-md"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="mt-2">
                <label htmlFor="lname" className="input-label qcont">
                  Last name
                  <span
                    className="form-label-secondary text-danger"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Required."
                  >
                    *
                  </span>
                </label>
                <input
                  type="text"
                  name="l_name"
                  id="lname"
                  className="form-control border px-2 py-2 w-[70%] mt-2 rounded-md"
                  placeholder="Last name"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="zone_id" className="input-label">
                  Zone
                  <span
                    className="form-label-secondary text-danger"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Required."
                  >
                    *
                  </span>
                </label>
                <select
                  name="zone_id"
                  id="zone_id"
                  className="form-control js-select2-custom  border px-2 py-3 w-[70%] mt-2 rounded-md"
                >
                  <option value="" selected>
                    All
                  </option>
                  <option value="1">Main Demo Zone</option>
                  <option value="2">سوبر ماركت</option>
                </select>
              </div>
              <div className="mt-2">
                <label htmlFor="role_id" className="input-label qcont">
                  Role
                  <span
                    className="form-label-secondary text-danger"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Required."
                  >
                    *
                  </span>
                </label>
                <select
                  name="role_id"
                  id="role_id"
                  className="form-control js-select2-custom  border px-2 py-3 w-[70%] mt-2 rounded-md"
                  required
                >
                  <option value="" disabled selected>
                    Select Role
                  </option>
                  <option value="2">Customer Relation Manager</option>
                  <option value="3">HR</option>
                  <option value="4">Manager</option>
                  <option value="5">Accountant</option>
                  <option value="6">
                    Receptionist &amp; Front Desk Manager
                  </option>
                </select>
              </div>
              <div className="col-span-2 md:col-span-1 mt-2">
                <label htmlFor="phone" className="input-label qcont">
                  Phone
                  <span
                    className="form-label-secondary text-danger"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Required."
                  >
                    *
                  </span>
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="form-control border px-2 py-2 w-[70%] mt-2 rounded-md"
                  placeholder="Ex: +88017********"
                  required
                />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1  flex flex-col items-center">
              <div className="text-center input-label qcont py-3">
                Employee image{" "}
                <small className="text-red-500">* ( Ratio 1:1 )</small>
              </div>
              <div className="text-center py-3">
                <img
                  className="w-40 h-40"
                  id="viewer"
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/400x400/img2.jpg"
                  alt="Employee thumbnail"
                />
              </div>
              <div className="custom-file w-full">
                <input
                  type="file"
                  name="image"
                  id="customFileUpload"
                  className="custom-file-input border mt-2 px-2 w-full rounded-md py-2"
                  accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Card Header */}
        <div className="px-4 py-3 bg-gray-100 border-b">
          <h5 className="text-lg font-semibold flex items-center">
            <span className="mr-2">
              <i className="tio-user"></i>
            </span>
            Account Information
          </h5>
        </div>

        {/* Card Body */}
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="input-label">
                Email
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-input border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                placeholder="Ex: ex@gmail.com"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="signupSrPassword" className="input-label">
                Password
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="signupSrPassword"
                  className="form-input border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  placeholder="8+ characters required"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Must contain at least one number and one uppercase and lowercase letter and symbol, and at least 8 characters"
                >
                  <img
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/info-circle.svg"
                    alt="Info"
                  />
                </span>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="signupSrConfirmPassword" className="input-label">
                Confirm password
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  id="signupSrConfirmPassword"
                  className="form-input border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  placeholder="8+ characters required"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Must match the password"
                >
                  <img
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/info-circle.svg"
                    alt="Info"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="reset"
              id="reset_btn"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-[#24bac3] hover:bg-[#20A7AF] text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(AddNewEmployees);
