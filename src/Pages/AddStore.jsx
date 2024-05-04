import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import withAuth from "../HOC/withAuth";
import { useMutation, useQuery } from "react-query";
import { createStore } from "../helpers/store";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { APIProvider } from "@vis.gl/react-google-maps";
import GoogleMap from "../Map/googlemap";
import { Autocomplete, TextField } from "@mui/material";
import { getAllAdminZones } from "../helpers/zone";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
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

function AddStore() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [tax, setTax] = useState("");
  const [minimumDeliveryTime, setMinimumDeliveryTime] = useState("");
  const [maximumDeliveryTime, setMaximumDeliveryTime] = useState("");
  const [deliveryTimeType, setDeliveryTimeType] = useState("min");
  const [loading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["admin"]);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    // Get current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPoints({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const { isError, isLoading, data, refetch } = useQuery(
    ["adminzones", { cookies }], // Use a unique key and any relevant parameters
    () => getAllAdminZones(cookies) // Pass a function that returns a promise
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTaxChange = (e) => {
    setTax(e.target.value);
  };

  const handleMinimumDeliveryTimeChange = (e) => {
    setMinimumDeliveryTime(e.target.value);
  };

  const handleMaximumDeliveryTimeChange = (e) => {
    setMaximumDeliveryTime(e.target.value);
  };

  const handleDeliveryTimeTypeChange = (e) => {
    setDeliveryTimeType(e.target.value);
  };

  const handleDeliveryTimeSubmit = () => {
    // Handle submission logic here
  };
  const [countryCode, setCountryCode] = useState("+1"); // Default country code
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const [selectedLogo, setSelectedLogo] = useState([]);
  const [selectedCover, setSelectedCover] = useState([]);

  const storeMutation = useMutation(createStore, {
    onSuccess: (data) => {
      setIsLoading(false);
      if (data.success === true) {
        return Swal.fire({
          icon: "success",
          title: "Store Created Successfully",
          timer: "3000",
          confirmButtonText: "Ok",
          confirmButtonColor: "#33996A",
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show",
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide",
          },
        }).then((result) => {
          if (
            result.isConfirmed ||
            result.dismiss === Swal.DismissReason.timer
          ) {
            navigate("/StoreList");
          }
        });
      }
      if (data.success === false) {
        return Swal.fire({
          icon: "error",
          title: data?.error || data?.errors || "something went wrong",
          timer: "2000",
          confirmButtonText: "Ok",
          confirmButtonColor: "#33996A",
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show",
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide",
          },
        });
      }
    },
    onError: (error) => {
      setIsLoading(false);
      return Swal.fire({
        icon: "error",
        title: error || "something went wrong",
        timer: "2000",
        confirmButtonText: "Ok",
        confirmButtonColor: "#33996A",
        showClass: {
          popup: "swal2-show",
          backdrop: "swal2-backdrop-show",
          icon: "swal2-icon-show",
        },
        hideClass: {
          popup: "swal2-hide",
          backdrop: "swal2-backdrop-hide",
          icon: "swal2-icon-hide",
        },
      });
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    formData.append("latitude", Number(points?.lat));
    formData.append("longitude", Number(points?.lng));
    storeMutation.mutate({ formData: formData, cookies: cookies });
  };

  // State to hold pic selected images

  const handleFileChangeLogo = (event) => {
    const files = event.target.files;
    // Check if any files were selected
    if (files.length === 0) {
      return;
    }
    const imagePreviews = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setSelectedLogo([...selectedLogo, imagePreviews]);
  };

  const handleFileChangeCover = (event) => {
    const files = event.target.files;

    console.log(files);
    // Check if any files were selected
    if (files.length === 0) {
      return;
    }
    const imagePreviews = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setSelectedCover([...selectedCover, imagePreviews]);
  };

  return (
    <div>
      <div>
        <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold">
          <span className="page-header-icon">
            <IoStorefrontOutline className="w-26" />
          </span>
          <span>Add New Store</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-8  md:flex-row md:justify-between md:items-center w-full gap-4">
          {/* Left Section */}
          <div className="p-5 md:-mt-36 shadow-md border-red-500 w-full md:w-[50%]">
            <div sx={{ width: "100%" }}>
              <div sx={{ borderBottom: 1, borderColor: "#24bac3" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="English (EN)" />
                </Tabs>
              </div>

              {/* English (EN) Tab Panel */}
              <CustomTabPanel value={value} index={0}>
                <div className="lang_form" id="en-form">
                  <div className="form-group">
                    <label htmlFor="en_name" className="input-label">
                      Name (Default)
                    </label>
                    <div>
                      <input
                        type="text"
                        name="storeName"
                        id="en_name"
                        className="w-full h-[50px] border p-4 border-[#24bac3]"
                        placeholder="Store name"
                        aria-invalid="false"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="input-label"
                    >
                      Address (Default)
                    </label>
                    <div>
                      <textarea
                        type="text"
                        name="completeAddress"
                        placeholder="Store"
                        className="form-control min-h-200px ckeditor w-full p-4 border border-[#24bac3]"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </CustomTabPanel>
            </div>
          </div>

          {/* Right Section */}
          <div className=" p-5 shadow-md w-full md:w-[50%]">
            <div className="sm:flex-nowrap gap-12px">
              {/* Logo Section */}
              <div className="">
                <label className="font-semibold block mb-1">
                  Logo <span className="text-primary">(1:1)</span>
                </label>
                <label className="text-center relative">
                  <img
                    className="w-100 h-50 min-h-170px min-w-170px border border-dotted border-[#24bac3]"
                    id="viewer"
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/upload-img.png"
                    alt="logo image"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white">
                    <i className="tio-edit"></i>
                    <input
                      type="file"
                      name="storeLogo"
                      id="customFileEg1"
                      className="absolute inset-0 opacity-0"
                      accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                      onChange={handleFileChangeLogo}
                    />
                  </div>
                </label>
              </div>

              {/* Store Cover Section */}
              <div>
                <label className="font-semibold block mb-1">
                  Store Cover <span className="text-primary">(2:1)</span>
                </label>
                <label className="text-center relative">
                  <img
                    className="w-170 h-340 min-h-170px min-w-170px border border-[#24bac3]"
                    id="coverImageViewer"
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/upload-img.png"
                    alt="Fav icon"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white">
                    <i className="tio-edit"></i>
                    <input
                      type="file"
                      name="storeCover"
                      id="coverImageUpload"
                      className="absolute inset-0 opacity-0"
                      accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                      onChange={handleFileChangeCover}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded mt-5 shadow-sm ">
          <div className="card-header bg-gray-100 p-4 border-b">
            <h4 className="card-title m-0 flex items-center">
              <img
                className="mr-2 h-8"
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/resturant.png"
                alt="instructions"
              />
              <span>Store information</span>
            </h4>
          </div>
        </div>

        <div className=" shadow-md p-2 rounded-md grid grid-cols-1 md:grid-cols-2 gap-3 my-0">
          <div className="col-md-6">
            <div className="form-group mt-6">
              <div>
                <label className="input-label text-sm " htmlFor="vat_tax">
                  Vat/tax (%)
                </label>
              </div>
              <div>
                <input
                  type="number"
                  name="vat_tax"
                  id="vat_tax"
                  className="form-control border w-full h-[45px] "
                  placeholder="Vat/tax"
                  min="0"
                  step=".01"
                  required
                  value={tax}
                  onChange={handleTaxChange}
                />
              </div>

              <div>
                <a href="javascript:void(0)" className="floating-date-toggler">
                  &nbsp;
                </a>
                <span className="offcanvas"></span>
                <div className="floating--date" id="floating--date">
                  <div className="card shadow--card-2">
                    <div className="card-body">
                      <div className="floating-date-inner ">
                        <div className="item">
                          <div>
                            <label
                              className="input-label"
                              htmlFor="minimum_delivery_time"
                            >
                              Add Zone
                            </label>
                          </div>
                          <div>
                            <div className="mb-4">
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                name="zone"
                                options={
                                  data?.zones?.length > 0
                                    ? data?.zones?.map((doc) => ({
                                        label: doc.name,
                                        _id: doc._id,
                                      }))
                                    : [] // Provide a default empty array if data is empty or null
                                }
                                // onChange={handleAutocompleteChange("unit")}
                                sx={{ minWidth: { xs: 10, md: "fit" } }}
                                renderInput={(params) => (
                                  <TextField {...params} label="Zone" />
                                )}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div>
                            <label
                              className="input-label"
                              htmlFor="minimum_delivery_time"
                            >
                              Minimum Time
                            </label>
                          </div>
                          <div>
                            <input
                              id="minimum_delivery_time"
                              type="number"
                              // name="minimum_delivery_time"
                              className="form-control h-[45px] border w-full "
                              placeholder="Ex : 30"
                              pattern="^[0-9]{2}$"
                              // required
                              value={minimumDeliveryTime}
                              onChange={handleMinimumDeliveryTimeChange}
                            />
                          </div>
                        </div>
                        <div className="item">
                          <div>
                            <label
                              className="input-label"
                              htmlFor="maximum_delivery_time"
                            >
                              Maximum Time
                            </label>
                          </div>
                          <div>
                            <input
                              id="maximum_delivery_time"
                              type="number"
                              // name="maximum_delivery_time"
                              className="form-control h-[45px] w-full border"
                              placeholder="Ex : 60"
                              pattern="[0-9]{2}"
                              // required
                              value={maximumDeliveryTime}
                              onChange={handleMaximumDeliveryTimeChange}
                            />
                          </div>
                        </div>
                        <div className="relative">
                          <select
                            // name="delivery_time_type"
                            id="delivery_time_type"
                            className="appearance-none border border-[#24bac3`] rounded-md mt-5 py-2 pl-3 pr-10 focus:outline-none focus:border-[#24bac3]  focus:ring-offset-indigo-200 focus:ring-offset-2 focus:ring-opacity-50 sm:text-sm"
                            value={deliveryTimeType}
                            onChange={handleDeliveryTimeTypeChange}
                          >
                            <option value="min">Minutes</option>
                            <option value="hours">Hours</option>
                            <option value="days">Days</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 mt-4 flex items-center px-2 text-gray-700">
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="item smaller">
                          <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border mt-4 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#24bac3] hover:bg-[#24bac3] focus:outline-none focus:ring-2 focus:ring-offset-2 "
                            // onClick={handleDeliveryTimeSubmit}
                          >
                            {" "}
                            Done
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="position-relative mt-6 ">
              <div>
                <label className="input-label text-sm" htmlFor="tax">
                  Estimated Delivery Time ( Min &amp; Maximum Time)
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="time_view"
                  className="form-control border w-full h-[45px]"
                  readOnly
                />
              </div>
              <div className="col-md-12 mt-4">
                <APIProvider apiKey={API_KEY}>
                  <div style={{ width: "37vw", height: "50vh" }}>
                    <GoogleMap
                      polygon={false}
                      marker={true}
                      setPoints={setPoints}
                    />
                  </div>
                </APIProvider>
              </div>
            </div>
          </div>
        </div>
        <div className="card border mt-5">
          <div className="card-header border p-4 ">
            <h4 className="card-title m-0 flex items-center">
              <span className="card-header-icon mr-2 ">
                <i className="tio-user">
                  <FaUser />
                </i>
              </span>
              <span>Owner information</span>
            </h4>
          </div>

          <div className="md:flex md:items-center gap-4  m-4 overflow-hidden">
            <div className="mb-0 w-full ">
              <label
                className="block text-md font-medium text-gray-700"
                htmlFor="f_name"
              >
                First name
              </label>
              <input
                type="text"
                name="firstName"
                className="mt-1 p-4 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[#24bac3] rounded-md"
                placeholder="First name"
                required
              />
            </div>

            <div className="mb-0 w-full">
              <label
                className="block text-md font-medium text-gray-700"
                htmlFor="l_name"
              >
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                className="mt-1 border p-4  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[#24bac3] rounded-md"
                placeholder="Last name"
                required
              />
            </div>

            <div className="mb-0 w-full">
              <label
                className="block text-md font-medium text-gray-700"
                htmlFor="l_name"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="mt-1 border p-4  focus:ring-indigo-500 focus:border-indigo-500 block  w-full shadow-sm sm:text-sm border-[#24bac3] rounded-md"
                placeholder="Phone"
                required
              />
            </div>
          </div>
        </div>

        <div className="card border mt-5">
          <div className="card-header border p-4 ">
            <h4 className="card-title m-0 flex items-center">
              <span className="card-header-icon mr-2 ">
                <i className="tio-user">
                  <FaUser />
                </i>
              </span>
              <span>Account Information</span>
            </h4>
          </div>

          <div className="md:flex md:items-center gap-4  m-4 overflow-hidden">
            <div className="mb-0 w-full ">
              <label
                className="block text-md font-medium text-gray-700"
                htmlFor="f_name"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 p-4 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[#24bac3] rounded-md"
                placeholder="admin@admin.com"
                required
              />
            </div>

            <div className="mb-0 w-full">
              <label
                className="block text-md font-medium text-gray-700"
                htmlFor="l_name"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="mt-1 border p-4  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[#24bac3] rounded-md"
                placeholder="*****"
                required
              />
            </div>

            <div className="mb-0 w-full">
              <label
                className="block text-md font-medium text-gray-700"
                htmlFor="l_name"
              >
                Confirm password
              </label>
              <input
                type="password"
                // name="password"
                className="mt-1 border p-4  border-red-300 focus:border-indigo-500 block  w-full shadow-sm sm:text-sm  rounded-md"
                placeholder="8+ Charactes required "
                required
              />
            </div>
          </div>
          <div class="flex flex-row-reverse gap-2">
            <button
              type="submit"
              class="bg-[#24bac3] text-white font-bold py-2 px-4 rounded w-[100px] md:w-[100px]"
              disabled={loading}
            >
              <span
                className={`${
                  loading ? "block" : "hidden"
                } loading loading-dots loading-sm`}
              ></span>
              <span className={`${loading ? "hidden" : "block"}`}>Submit</span>
            </button>
            <button
              type="reset"
              id="reset_btn"
              class="bg-gray-300 text-gray-700 py-2 px-4 rounded w-[100px] md:w-[100px]"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withAuth(AddStore);
