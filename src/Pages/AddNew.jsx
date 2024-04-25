import { Button, Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import TabComponent2 from "../Components/TabComponents2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import withAuth from "../HOC/withAuth";

const label = { inputProps: { "aria-label": "Isorganic" } };

const top100Films = [
  { label: "Organic Shop (Main Demo Zone)", year: 1994 },
  { label: "Eorange (سوبر ماركت)", year: 1972 },
  { label: "Family supermarket (Main Demo Zone)", year: 1974 },
  { label: "Fresh local (Main Demo Zone)", year: 2008 },
  { label: "Online market (Main Demo Zone)", year: 1957 },
  { label: "Sk General Store (Main Demo Zone)", year: 1993 },
  { label: "Smart Shopping (Main Demo Zone)", year: 1994 },
];
const discountType = [{ label: "Amount ($)" }, { label: "Percent (%)" }];

function AddNew() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      {" "}
      <div className="page-header flex flex-wrap gap-15 justify-between items-center">
        <h1 className="page-header-title flex items-center">
          <span className="page-header-icon">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/items.png"
              className="w-22"
              alt=""
            />
          </span>
          <span className="ml-2">Add new item</span>
        </h1>

        <div className="flex items-end flex-wrap">
          <button className=" flex items-center mr-2 mt-5">
            <Link
              to={"/"}
              className="flex items-center rounded-sm gap-2 outline outline-2 outline-offset-2 ... p-2 px-8 text-[#24bac3] hover:bg-[#20A7AF] hover:text-white"
            >
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/product-gallery.png"
                className="w-22"
                alt=""
              />
              <span>Add Info From Gallery</span>
            </Link>
          </button>
          <div
            className=" py-1 flex items-center mb-1  gap-5 justify-center"
            type="button"
          >
            <p className="mr-5 px-5 mt-5">See how it works!</p>
            <div>
              <i className="tio-info-outlined"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mx-auto">
        <div className="flex flex-wrap  justify-between gap-4">
          <div className="w-full md:w-full">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <TabComponent2 placeholder={"New Item"} />
              </div>
            </div>
          </div>
          <div className=" w-full md:w-full">
            <Card className="bg-white rounded-lg  overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Item Image
                  </h2>
                  <small className="text-gray-500">Ratio 1:1</small>
                </div>
                <div className="flex justify-center items-center mb-6">
                  <div className="w-44 h-44 relative rounded-md overflow-hidden bg-gray-200">
                    <img
                      className="object-cover w-full h-full"
                      src="https://6ammart-admin.6amtech.com/public/assets/admin/img/upload-img.png"
                      alt="Thumbnail"
                    />
                    <label className="absolute inset-0 flex justify-center items-center cursor-pointer bg-black bg-opacity-50 text-white text-sm font-semibold rounded-md opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                      <input
                        type="file"
                        name="item_images[]"
                        className="hidden"
                        accept="image/*"
                      />
                      <i className="fas fa-upload mr-2"></i>Upload Image
                    </label>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="bg-white rounded-lg  overflow-hidden mt-6">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Item Thumbnail
                  </h2>
                  <small className="text-red-500">* Ratio 1:1</small>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-44 h-44 relative rounded-md overflow-hidden bg-gray-200">
                    <img
                      className="object-cover w-full h-full"
                      src="https://6ammart-admin.6amtech.com/public/assets/admin/img/upload-img.png"
                      alt="Thumbnail"
                    />
                    <label className="absolute inset-0 flex justify-center items-center cursor-pointer bg-black bg-opacity-50 text-white text-sm font-semibold rounded-md opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                      <input
                        type="file"
                        name="image"
                        className="hidden"
                        accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                      />
                      <i className="fas fa-upload mr-2"></i>Upload Image
                    </label>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className=" py-6 w-full">
            <div className="bg-white rounded-lg ">
              <div className="px-6 py-4 border-b">
                <h5 className="text-lg font-semibold text-gray-800">
                  <span className="mr-2">
                    <i className="text-primary fas fa-cogs"></i>
                  </span>
                  Store & Category Info
                </h5>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <div className="mb-4">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 250 }}
                        renderInput={(params) => (
                          <TextField {...params} label="Store" />
                        )}
                      />
                    </div>

                    {/* Other fields */}
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 250 }}
                        renderInput={(params) => (
                          <TextField {...params} label="Category" />
                        )}
                      />
                    </div>

                    {/* Other fields */}
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 250 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="
Sub category"
                          />
                        )}
                      />
                    </div>

                    {/* Other fields */}
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 250 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="
Unit"
                          />
                        )}
                      />
                    </div>

                    {/* Other fields */}
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4">
                      <TextField
                        id="outlined-basic"
                        label="Maximum Purchase Quantity Limit "
                        variant="outlined"
                        sx={{ width: 250 }}
                      />
                    </div>

                    {/* Other fields */}
                  </div>
                  <div className="mb-4">
                    {" "}
                    <Checkbox {...label} defaultChecked />
                    <span>Is organic</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className=" py-6 w-full">
            <div className="bg-white rounded-lg ">
              <div className="px-6 py-4 border-b">
                <h5 className="text-lg font-semibold text-gray-800">
                  <span className="mr-2">
                    <LocalOfferIcon />
                  </span>
                  Price Information
                </h5>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <div className="mb-4">
                      <TextField
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        sx={{ width: 250 }}
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4">
                      <TextField
                        id="outlined-basic"
                        label="Total stock"
                        variant="outlined"
                        sx={{ width: 250 }}
                      />
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div className="mb-4">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={discountType}
                        sx={{ width: 250 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="
                            Discount type"
                          />
                        )}
                      />
                    </div>

                    {/* Other fields */}
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4">
                      <TextField
                        id="outlined-basic"
                        label="Discount (%) "
                        variant="outlined"
                        sx={{ width: 250 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className=" py-6 w-full">
            <div className="bg-white rounded-lg ">
              <div className="px-6 py-4 border-b">
                <h5 className="text-lg font-semibold text-gray-800">
                  <span className="mr-2">
                    <i className="tio-label-outlined"></i>
                  </span>
                  Attribute
                </h5>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Box sx={{ minWidth: 1200 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Attribute
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={"color"}>Color</MenuItem>
                        <MenuItem value={"type"}>Type</MenuItem>
                        <MenuItem value={"Size"}>Size</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
            </div>
          </Card>
          <Card className=" py-6 w-full">
            <div className="bg-white rounded-lg ">
              <div className="px-6 py-4 border-b">
                <h5 className="text-lg font-semibold text-gray-800">
                  <span className="mr-2">
                    <LocalOfferIcon />
                  </span>
                  Tags
                </h5>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* <Box sx={{ minWidth: 1200 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Tags
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={"color"}>Color</MenuItem>
                        <MenuItem value={"type"}>Type</MenuItem>
                        <MenuItem value={"Size"}>Size</MenuItem>
                      </Select>
                    </FormControl>
                  </Box> */}
                  <TextField
                    id="outlined-basic"
                    label=" Tags"
                    variant="outlined"
                    placeholder="Search tags"
                    sx={{ minWidth: 1200 }}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="reset"
            id="reset_btn"
            className=" px-8 p-2 mr-4 bg-[#f3f4f5] hover:bg-[#DBDCDC] rounded-md"
          >
            Reset
          </button>
          <button
            type="submit"
            id="submitButton"
            className=" px-8 p-2 mr-4 bg-[#24BAC3] hover:bg-[#20A7AF] text-white rounded-md "
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default withAuth(AddNew);
