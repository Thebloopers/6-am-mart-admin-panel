import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import withAuth from "../HOC/withAuth";

const Attribute = [
  {
    label: "Color",
  },
  {
    label: "Size",
  },
  {
    label: "Type",
  },
];

const ProductImport = () => {
  const handleFileChange = (event) => {
    // Handle file change logic here
  };
  return (
    <>
      <div>
        <div className="py-5">
          <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold">
            <span className="page-header-icon">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/resturant.png"
                className="w-26"
                alt=""
              />
            </span>
            <span>Items Bulk Import</span>
          </h1>
        </div>

        <div className="border-2 p-5 rounded mt-3 ">
          <div className="flex flex-col gap-9 sm:flex-row sm:gap-4 py-4">
            <div className="bg-white shadow-md rounded-md p-6 flex-grow border mx-4 py-6">
              <div className="export-steps-item-2 h-full">
                <div className="top flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold pt-5">Step 1</h3>
                    <div className="text-sm py-5">Download Excel File</div>
                  </div>
                  <img
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/bulk-import-1.png"
                    alt=""
                    className="w-18 h-auto"
                  />
                </div>
                <h4 className="font-bold">Instruction</h4>
                <ul className="m-0 pl-4 py-4">
                  <li className="list-disc py-2">
                    Download the format file and fill it with proper data.
                  </li>
                  <li className="list-disc py-2">
                    You can download the example file to understand how the data
                    must be filled.
                  </li>
                  <li className="list-disc py-2">Have to upload excel file.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-6 flex-grow border mx-4 py-6">
              <div className="export-steps-item-2 h-full">
                <div className="top flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold pt-5">Step 2</h3>
                    <div className="text-sm py-5">
                      Match Spread sheet data according to instructione
                    </div>
                  </div>
                  <img
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/bulk-import-1.png"
                    alt=""
                    className="w-18 h-auto"
                  />
                </div>
                <h4 className="font-bold">Instruction</h4>
                <ul className="m-0 pl-4 py-4">
                  <li className="list-disc py-2">
                    Download the format file and fill it with proper data.
                  </li>
                  <li className="list-disc py-2">
                    You can download the example file to understand how the data
                    must be filled.
                  </li>
                  <li className="list-disc py-2">Have to upload excel file.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-6 flex-grow border mx-4 py-6">
              <div className="export-steps-item-2 h-full">
                <div className="top flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold pt-5">Step 3</h3>
                    <div className="text-sm py-5">
                      Validate data and complete import
                    </div>
                  </div>
                  <img
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/bulk-import-1.png"
                    alt=""
                    className="w-18 h-auto"
                  />
                </div>
                <h4 className="font-bold">Instruction</h4>
                <ul className="m-0 pl-4 py-2 pb-9 pl">
                  <li className="list-disc py-2 text-sm">
                    In the Excel file upload section first select the upload
                    option.
                  </li>
                  <li className="list-disc py-2 text-sm">
                    Upload your file in .xls .xlsx format..
                  </li>
                  <li className="list-disc py-2 text-sm">
                    Finally click the upload button.
                  </li>
                  <li className="list-disc py-2 text-sm">
                    After uploading stores you need to edit them and set
                    stores`s logo and cover.`s path
                  </li>
                  <li className="list-disc py-2 text-sm">
                    Default password for store is 12345678..
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h1 className="text-center text-2xl mt-5">
            Download spreadsheet template
          </h1>

          <div className="md:flex md:justify-center pt-8  md:gap-5">
            <button className="btn  btn-outline-primary  mb-4 w-full md:w-1/4 py-3 px-9 text-center border-[#24bac3] border  text-[#24bac3] rounded-md  text-sm hover:bg-[#24bac3] hover:text-white  font-semibold ">
              <a href="" download>
                With Current data
              </a>
            </button>
            <button className="btn  btn-outline-primary  mb-4 w-full md:w-1/4 py-3 px-9 text-center border-[#24bac3] border  text-[#24bac3] rounded-md  text-sm hover:bg-[#24bac3] hover:text-white  font-semibold ">
              <a href="" download>
                without Any Data
              </a>
            </button>
            {/* <button className="btn btn-primary btn-outline-primary mx-5   py-3  px-9 text-center hover:border-[#70bfc4] border  rounded-md  text-sm bg-[#24bac3] text-white  font-semibold ">
        <a href="" download>
         
        </a>
      </button> */}
          </div>
        </div>

        <div>
          <div className="border p-2 py-7 mt-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="col-span-1">
                <h5 className="text-uppercase mb-3 font-bold">
                  Select Data Upload type
                </h5>
                <div className="flex-col flex border rounded  ">
                  <label className="inline-flex items-center pl-5 p-4 hover:bg-slate-300 border">
                    <input
                      className="form-radio"
                      value="import"
                      type="radio"
                      name="upload_type"
                      defaultChecked
                    />
                    <span className="ml-2 text-xl">Upload New Data</span>
                  </label>
                  <br></br>
                  <label className="inline-flex items-center hover:bg-slate-300 pl-5 p-4">
                    <input
                      className="form-radio  "
                      value="update"
                      type="radio"
                      name="upload_type"
                    />
                    <span className="ml-2 text-xl ">Update Existing Data</span>
                  </label>
                </div>
              </div>

              <div className="col-span-1  ">
                <h5 className="text-uppercase font-bold mb-3 mr-1 text-center">
                  Import Stores file
                </h5>

                <div className="uploadDnD border-[#24bac3] border border-dashed hover:border-spacing-1 rounded-md">
                  <div className="form-group inputDnD input_image input_image_edit position-relative ml-5 py-5 ">
                    <div className="upload-text">
                      <div className=" flex justify-center">
                        <img
                          className=""
                          src="https://6ammart-admin.6amtech.com/public/assets/admin/img/bulk-import-3.png"
                          alt=""
                        />
                      </div>
                      <div className=" text-center ">
                        Must be Excel files using our Excel template above
                      </div>
                    </div>
                    <input
                      type="file"
                      name="products_file"
                      className="text-primary font-bold action-upload-section-dot-area hidden"
                      id="products_file"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="products_file"
                      className="block cursor-pointer text-primary font-bold action-upload-section-dot-area text-center"
                    >
                      Choose File
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-3">
              <button
                id="reset_btn"
                type="reset"
                className="px-4 py-2 mr-3 border rounded text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              >
                Reset
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white border rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 py-8 px-4">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">Generate Variations</h2>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex items-center">
                <img
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/icons/intel.png"
                  width="22"
                  alt="Intel"
                  className="mr-2"
                />
                <strong className="text-base">Attention!</strong>
                <button type="button" className="ml-auto close">
                  ×
                </button>
              </div>
              <p className="text-sm text-gray-700 mt-2">
                You must generate variations from this generator if you want to
                add variations to your products. Copy and paste the specific
                field to your Excel sheet. Enter an empty array [ ] to make it
                empty.
              </p>
            </div>

            <div className="p-4">
              <div className="flex justify-between mb-4">
                <label className="text-sm font-medium">Attribute</label>
                <button type="button" className="btn btn-primary">
                  Generate Value
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Attribute}
                    sx={{ width: "100%" }} // Use full width
                    renderInput={(params) => (
                      <TextField {...params} label="Attribute" />
                    )}
                  />
                </div>

                {/* Customer choice options */}
                <div className="sm:col-span-2">
                  {/* Placeholder for customer choice options */}
                </div>

                {/* Variant combination */}
                <div className="sm:col-span-2">
                  {/* Placeholder for variant combination */}
                </div>

                <div>
                  <label
                    htmlFor="variation_output"
                    className="text-sm font-medium block"
                  >
                    Generated Variant <span className="text-red">*</span>
                  </label>
                  <textarea
                    id="variation_output"
                    className="form-textarea w-full h-24 border bg-[#F8FAFD]"
                    rows="5"
                    readOnly
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="choice_output"
                    className="text-sm font-medium block"
                  >
                    Generated Choice Option{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="choice_output"
                    className="form-textarea w-full h-24 border bg-[#F8FAFD]"
                    rows="5"
                    readOnly
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="attributes"
                    className="text-sm font-medium block"
                  >
                    Generated Attributes Field{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="attributes"
                    className="form-textarea w-full h-24 border bg-[#F8FAFD]"
                    rows="5"
                    readOnly
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button type="button" className="btn btn-reset">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(ProductImport);
