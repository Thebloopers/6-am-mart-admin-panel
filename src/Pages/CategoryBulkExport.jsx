import React from "react";
import withAuth from "../HOC/withAuth";

const CategoryBulkExport = () => {
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
            <span>Export Categories</span>
          </h1>
        </div>

        <div className="border-2 p-1 rounded mt-2  shadow-md ">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-3 py-3">
            <div className="bg-white shadow-md rounded-md p-6 flex-grow border mx-3 py-5">
              <div className="export-steps-item-2 h-full">
                <div className="top flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold pt-5">Step 1</h3>
                    <div className="text-sm py-5">Select Data Type</div>
                  </div>
                  <img
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/bulk-export-1.png"
                    alt=""
                    className="w-18 h-auto"
                  ></img>
                </div>
                <h4 className="font-bold">Instruction</h4>
                <ul className="m-0 pl-4 py-4">
                  <li className="list-disc py-2">
                    Select data type in which order you want your data sorted
                    while downloading.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-6 flex-grow border mx-4 py-6">
              <div className="export-steps-item-2 h-full">
                <div className="top flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold pt-5">Step 2</h3>
                    <div className="text-sm py-5">
                      Select Data Range by Date or ID and Export
                    </div>
                  </div>
                  <img
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/bulk-export-2.png"
                    alt=""
                    className="w-18 h-auto"
                  ></img>
                </div>
                <h4 className="font-bold">Instruction</h4>
                <ul className="m-0 pl-3 py-3">
                  <li className="list-disc py-2">
                    The file will be downloaded in .xls format
                  </li>
                  <li className="list-disc py-2">
                    Click reset if you want to clear you changes and want to
                    download in default sort wise data
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="bg-white shadow-md rounded-md p-6  flex-grow border-0 mx-4 py-6 md:w-[400px]" >
          <div className="export-steps-item-2 h-full">
             <div className="top flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold pt-5">Step 3</h3>
                <div className='text-sm py-5'>Validate data and complete import</div>
              </div>
              <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/bulk-import-1.png" alt="" className="w-18 h-auto" />
            </div>
            <h4 className='font-bold'>Instruction</h4> */}
            {/* <ul className="m-0 pl-1 py-2 pb-9 pl">
              <li className='list-disc py-2 text-sm'>In the Excel file upload section first select the upload option.</li>
              <li className='list-disc py-2 text-sm'>Upload your file in .xls .xlsx format..</li>
              <li className='list-disc py-2 text-sm'>Finally click the upload button.</li>
              <li className='list-disc py-2 text-sm'>After uploading stores you need to edit them and set stores`s logo and cover.`s path</li>
              <li className='list-disc py-2 text-sm'>Default password for store is 12345678..</li>

            </ul> 
          </div>
        </div> */}
          </div>

          <div className="mt-6 p-2">
            <div className="form-group w-full">
              <label className="input-label ml-4 " htmlFor="type">
                Type
              </label>
              <select
                name="type"
                id="type"
                className="form-select block  md:w-1/3 w-full  p-3  mt-2  border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
                title="Select Type"
              >
                <option value="all">All data</option>
                <option value="date_wise">Date wise</option>
                <option value="id_wise">Id wise</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-5 mr-2 mb-4">
            <button
              className="px-6 py-2 mr-3 border rounded text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              id="reset-btn"
              type="reset"
            >
              Clear
            </button>
            <button
              className="px-6 py-2 bg-[#24BAC3] text-white border rounded hover:bg-[#20A7AF] focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
              type="submit"
            >
              Export
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(CategoryBulkExport);
