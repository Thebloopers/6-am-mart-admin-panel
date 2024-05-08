import { Button, Card, Switch } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ItemListTable from "../Components/ItemListTable";
import SearchIcon from "@mui/icons-material/Search";
import ExportButton from "../Components/ExportButton";
import withAuth from "../HOC/withAuth";
import { useCookies } from "react-cookie";
import {
  getAllAdminProducts,
  handleDeleteProduct,
  handleVisibilityChange,
} from "../helpers/products";
import { signout } from "../helpers/auth";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import {
  getAdminCategories,
  getAdminSubCategories,
} from "../helpers/categories";
import { getAdminStores } from "../helpers/store";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const top100Films = [
  { label: "Organic Shop (Main Demo Zone)", year: 1994 },
  { label: "Eorange (سوبر ماركت)", year: 1972 },
  { label: "Family supermarket (Main Demo Zone)", year: 1974 },
  { label: "Fresh local (Main Demo Zone)", year: 2008 },
  { label: "Online market (Main Demo Zone)", year: 1957 },
  { label: "Sk General Store (Main Demo Zone)", year: 1993 },
  { label: "Smart Shopping (Main Demo Zone)", year: 1994 },
];
const AllZones = [
  { label: "All Zones", year: 1994 },
  { label: "Main Demo Zone", year: 1972 },
];

function List() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["admin"]);

  //GET ALL CATEGORIES
  const {
    isError: isError1,
    isLoading: isLoading1,
    data: data1,
    refetch: refetch1,
  } = useQuery(
    ["categories", { cookies }], // Use a unique key and any relevant parameters
    () => getAdminCategories(cookies) // Pass a function that returns a promise
  );

  //GET ALL Main Categories
  const {
    isError: isError2,
    isLoading: isLoading2,
    data: data2,
    refetch: refetch2,
  } = useQuery(
    ["subcategories", { cookies }], // Use a unique key and any relevant parameters
    () => getAdminSubCategories(cookies) // Pass a function that returns a promise
  );

  //GET ALL STORES
  const {
    isError: isError3,
    isLoading: isLoading3,
    data: data3,
    refetch: refetch3,
  } = useQuery(
    ["stores", { cookies }], // Use a unique key and any relevant parameters
    () => getAdminStores(cookies) // Pass a function that returns a promise
  );

  // GET ALL PRODUCTS
  const {
    isError: isError6,
    isLoading: isLoading6,
    data: data6,
    refetch: refetch6,
  } = useQuery(
    ["products", { cookies }], // Use a unique key and any relevant parameters
    () => getAllAdminProducts(cookies) // Pass a function that returns a promise
  );

  //status change
  const statusChangeMutation = useMutation(handleVisibilityChange, {
    onSuccess: (data) => {
      if (data.success === true) {
        refetch6();
        return Swal.fire({
          icon: "success",
          title: "Product Status Updated",
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

  const handleStatusChange = (item) => {
    statusChangeMutation.mutate({ productId: item?._id, cookies: cookies });
  };

  //Handle Delete
  const deleteMutation = useMutation(handleDeleteProduct, {
    onSuccess: (data) => {
      if (data.success === true) {
        refetch6();
        return Swal.fire({
          icon: "success",
          title: "Product Deleted",
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

  const handleDelete = (item) => {
    return Swal.fire({
      icon: "warning",
      title: "Are You Sure",
      text: "You want to delete this product",
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#33996A",
      showCancelButton: true,
      cancelButtonColor: "rgb(239 68 68)",
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
      if (result.isConfirmed) {
        deleteMutation.mutate({ productId: item?._id, cookies: cookies });
      }
    });
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <div className="py-2 px-6">
        <div className="flex items-center">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/items.png"
            className="w-5 h-5"
            alt=""
          />
          <h1 className="text-xl font-bold text-gray-800">Item list</h1>
          <span className="badge badge-soft-dark ml-2 text-sm bg-slate-300">
            {data6?.data?.length}
          </span>
        </div>
      </div>

      <Card className="py-6 w-full mt-2">
        <div className="bg-white rounded-lg ">
          <div className="px-6 py-4 border-b">
            <h5 className="text-lg font-semibold text-gray-800">
              <span className="mr-2"></span>
              Search Data
            </h5>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-1">
                <div className="mb-4">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={
                      data3?.store?.length > 0 &&
                      data3?.store?.map((doc) => ({
                        label: doc.storeName,
                        _id: doc._id,
                      }))
                    }
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField {...params} label=" All Store" />
                    )}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="mb-4">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={AllZones}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField {...params} label="All Zones" />
                    )}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="mb-4">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={
                      data1?.category?.length > 0 &&
                      data1?.category?.map((doc) => ({
                        label: doc.name,
                        _id: doc._id,
                      }))
                    }
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField {...params} label="All category" />
                    )}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="mb-4">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={
                      data2?.category?.length > 0 &&
                      data2?.category?.map((doc) => ({
                        label: doc.name,
                        _id: doc._id,
                      }))
                    }
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField {...params} label=" All Sub category" />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mt-8">
        <div className="flex flex-col md:flex-row md:items-center py-4 px-6 bg-gray-100 shadow-md rounded-lg">
          <form className="flex items-center mb-4 md:mb-0 md:mr-4">
            <div className="relative">
              <input
                id="datatableSearch"
                name="search"
                value=""
                type="search"
                className="form-input h-10  pr-10 pl-4 rounded-lg focus:outline-none focus:ring focus:border-[#24BAC3]"
                placeholder="Search item by name"
                aria-label="Search here"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 px-3 py-2 bg-[#99a7ba] text-white rounded-r-lg focus:outline-none hover:bg-[#8A96A7]"
              >
                <SearchIcon />
              </button>
            </div>
          </form>
          <div className="flex flex-wrap justify-start md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <ExportButton />
            <button className="bg-[#24bac3] hover:bg-[#20A7AF] p-2 px-5 ml-4 rounded-md text-white">
              Limited stock
            </button>
            <button
              type="button"
              onClick={() => navigate("/Addnew")}
              className="bg-[#24bac3] hover:bg-[#20A7AF] p-2 px-5 rounded-md  text-white"
            >
              Add Product
            </button>
          </div>
        </div>
        {/* Delete This <ItemListTable /> */}

        <div className="overflow-x-auto max-w-[345px] md:max-w-full mt-4 shadow-sm ">
          <table className="table-auto min-w-full border-collapse  border border-gray-200">
            <thead className="bg-gray-100">
              <tr className=" text-sm">
                <th className=" px-4 py-2 ">Sl</th>
                <th className=" px-4 py-2 ">Product Information</th>
                <th className=" px-4 py-2 ">Category</th>
                <th className=" px-4 py-2 ">Sub-Category</th>
                <th className=" px-4 py-2 ">(₹) Price</th>
                <th className=" px-4 py-2">Stock</th>
                <th className=" px-4 py-2">Sold</th>
                <th className=" px-4 py-2 ">Featured</th>
                <th className=" px-4 py-2  text-center">Status</th>
                <th className=" px-4 py-2  text-center">Action</th>
              </tr>
            </thead>
            <tbody id="set-rows  ">
              {isLoading6 ? (
                <span className="text-center">No Products found</span>
              ) : data6?.error === "Token has expired" ||
                data6?.error === "Invalid token" ? (
                signout(removeCookie, () => {
                  navigate("/login");
                  return null;
                })
              ) : (
                data6?.data?.length > 0 &&
                data6?.data?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <span className="ml-5">{index + 1}</span>
                    </td>
                    <td>
                      <div className="flex items-center whitespace-nowrap gap-3 ml-5">
                        <div>
                          <img
                            className="circle w-10"
                            data-onerror-image="https://6ammart-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"
                            src={`https://rent-karoo.s3.ap-south-1.amazonaws.com/${item.itemThumbnail[0]}`}
                            alt="image"
                          />
                        </div>

                        <div className="flex items-center">
                          <div className="text-sm text-center ">
                            {item?.name ? item?.name : "-"}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="text-center   text-sm font-light">
                      {item?.category?.name ? item?.category?.name : "-"}
                    </td>

                    <td className="text-center text-sm font-light whitespace-nowrap">
                      {item?.subCategory?.name ? item?.subCategory?.name : "-"}
                    </td>

                    <td className="text-center items-center">
                      {item?.price ? item?.price : 0}
                    </td>
                    <td className=" text-center font-light">
                      {item?.stock ? item?.stock : 0}
                    </td>
                    <td className=" text-center font-light">
                      {item?.sold ? item?.sold : 0}
                    </td>
                    <td className="text-center">
                      <i>
                        <Switch {...label} />
                      </i>{" "}
                    </td>
                    <td className="">
                      <i>
                        {" "}
                        <Switch
                          {...label}
                          checked={item?.isVisible ? true : false}
                          onChange={() => handleStatusChange(item)}
                        />
                      </i>
                    </td>
                   
                    <td className="py-3 px-2  text-center whitespace-nowrap     ">
                  <button className="bg-orange-300 border border-orange-500 text-[#ff7500] text-center font-semibold py-1 px-3 rounded md:mr-2"
                  
                  >
                  
                    <IoEyeSharp />
                  </button>
                  <button className="bg-[#00c9db1a] ml-1 border border-[#00c9db99] hover:text-[#00c9db99] text-[#00c9db] text-center font-semibold py-1 px-3 rounded md:mr-2"
                  onClick={() => handleDelete(item)}
                  >
                  <MdDelete />
                  </button>
                </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

export default withAuth(List);
