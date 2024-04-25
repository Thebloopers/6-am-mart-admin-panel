import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import withAuth from "../../HOC/withAuth";
function Deliveryman() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl flex items-center mb-4">
          <span className="inline-block mr-2">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/disburstment.png"
              className="w-22"
              alt=""
            />
          </span>
          <span className="align-middle">Deliveryman Disbursement</span>
        </h1>
        <div>
          <div className="text-base mt-5">
            <div className="border-b border-divider md:border-b-0">
              <div className="md:flex md:justify-between">
                <div className="md:border-b md:border-divider">
                  <ul className="md:flex flex-wrap md:space-x-4 md:border-b-0 md:m-2 text-md font-light  ">
                    <li
                      className={`md:mr-6 p-2 hover:text-[#24bac3] ${
                        value === "1" ? "text-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "1")}
                    >
                      All
                    </li>
                    <li
                      className={`md:mr-6 p-2 focus:text- hover:text-[#24bac3] ${
                        value === "2" ? "text-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "2")}
                    >
                      Pending
                    </li>
                    <li
                      className={`md:mr-6 p-2 hover:text-[#24bac3] ${
                        value === "3" ? "text-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "3")}
                    >
                      Processing
                    </li>
                    <li
                      className={`md:mr-6 p-2 hover:text-[#24bac3] ${
                        value === "4" ? "text-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "4")}
                    >
                      completed
                    </li>
                    <li
                      className={`md:mr-6 p-2 hover:text-[#24bac3] ${
                        value === "4" ? "text-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "5")}
                    >
                      Partially completed
                    </li>
                    <li
                      className={`md:mr-6 p-2 hover:text-[#24bac3] ${
                        value === "5" ? "text-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "6")}
                    >
                      Canceled
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              {value === "1" && (
                <div>
                  <div className="flex flex-col gap-4 ">
                    <div className="bg-white shadow-md border rounded-lg p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h3 className="text-lg font-bold">
                            Disbursement # 1002
                          </h3>
                          <span className="inline-block px-2 py-1 text-xs bg-[#24bac3] text-[#163e40] rounded-md">
                            Pending
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          Created at 27 Nov 2023 12:43:pm
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-sm">Total amount:</span>
                          <span className="mx-2 font-bold text-xl">
                            {" "}
                            $ 8,308.86
                          </span>
                        </div>
                        <a
                          href=""
                          className="text-white bg-[#24bac3] hover:bg-[#24bac3] py-2 px-4 rounded-md font-semibold"
                        >
                          View details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {value === "2" && (
                <div>
                  <div className="flex flex-col gap-4 ">
                    <div className="bg-white shadow-md border rounded-lg p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h3 className="text-lg font-bold">
                            Disbursement # 1001
                          </h3>
                          <span className="inline-block px-2 py-1 text-xs bg-[#24bac3] text-[#163e40] rounded-md">
                            Pending
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          Created at 27 Nov 2023 12:43:pm
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-sm">Total amount:</span>
                          <span className="mx-2 font-bold text-xl ">
                            $ 940.91
                          </span>
                        </div>
                        <a
                          href=""
                          className="text-white bg-[#24bac3] hover:bg-[#24bac3] py-2 px-4 rounded-md font-semibold"
                        >
                          View details
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              )}
              {value === "3" && (
                <div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="bg-white  rounded-lg p-8 text-center">
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
                        alt="public"
                        className="w-22 mx-auto mb-4"
                      />
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">
                        No data found
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {value === "4" && (
                <div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="bg-white  rounded-lg p-8 text-center">
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
                        alt="public"
                        className="w-22 mx-auto mb-4"
                      />
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">
                        No data found
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {value === "5" && (
                <div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="bg-white  rounded-lg p-8 text-center">
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
                        alt="public"
                        className="w-22 mx-auto mb-4"
                      />
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">
                        No data found
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {value === "6" && (
                <div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="bg-white  rounded-lg p-8 text-center">
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
                        alt="public"
                        className="w-22 mx-auto mb-4"
                      />
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">
                        No data found
                      </h5>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Deliveryman);
