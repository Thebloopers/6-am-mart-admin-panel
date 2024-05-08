import React, { useState } from "react";
import withAuth from "../HOC/withAuth";
import { useCookies } from "react-cookie";
import { useQuery } from "react-query";
import { getAdminStores } from "../helpers/store";
import {
  getAdminCategories,
  getAllAdminCategoriesAndSub,
} from "../helpers/categories";
import { Autocomplete, TextField } from "@mui/material";

function Newsale() {
  const foodItems = [
    { name: "Food 1", qty: 2, unitPrice: 10 },
    { name: "Food 2", qty: 1, unitPrice: 15 },
    { name: "Food 3", qty: 3, unitPrice: 8 },
  ];

  const [loading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["admin"]);

  const {
    isError: isError1,
    isLoading: isLoading1,
    data: data1,
    refetch: refetch1,
  } = useQuery(
    ["adminstores", { cookies }], // Use a unique key and any relevant parameters
    () => getAdminStores(cookies) // Pass a function that returns a promise
  );

  const {
    isError: isError2,
    isLoading: isLoading2,
    data: data2,
    refetch: refetch2,
  } = useQuery(
    ["admincategories", { cookies }], // Use a unique key and any relevant parameters
    () => getAllAdminCategoriesAndSub(cookies) // Pass a function that returns a promise
  );

  const {
    isError: isError3,
    isLoading: isLoading3,
    data: data3,
    refetch: refetch3,
  } = useQuery(
    ["adminproducts", { cookies }], // Use a unique key and any relevant parameters
    () => getAllProductsOfAdmin(cookies) // Pass a function that returns a promise
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="order--pos-left bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Product Selection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-full sm:col-span-1">
            <Autocomplete
              disablePortal
              className="w-[50%]"
              id="combo-box-demo"
              name="store"
              options={
                data1?.store?.map((store) => ({
                  label: store?.storeName ?? "Unknown",
                  value: store?._id,
                })) ?? []
              }
              sx={{ width: 200 }}
              renderInput={(params) => (
                <TextField {...params} label="Choose Store" />
              )}
            />
          </div>
          <div className="col-span-full sm:col-span-1">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              name="category"
              options={
                data2?.category?.map((category) => ({
                  label: category?.name ?? "Unknown",
                  value: category?._id,
                })) ?? []
              }
              sx={{ width: 200 }}
              renderInput={(params) => (
                <TextField {...params} label="Select Category" />
              )}
            />
          </div>
          <div className="col-span-full">
            <form id="search-form" className="search-form">
              <div className="relative">
                <input
                  id="datatableSearch"
                  type="search"
                  value=""
                  name="search"
                  className="form-input h-12 w-full rounded-lg pl-10 pr-4 focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Search by product name"
                  disabled
                />
                <img
                  className="absolute top-3 left-3"
                  width="16"
                  height="16"
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/icons/search-icon.png"
                  alt="Search Icon"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="order--pos-right bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Billing Section</h2>
        <form>
          <div className="flex flex-col md:flex-row  justify-between p-3 rounded-lg">
            <div className="relative flex-1 w-full md:mx-2 mb-2 md:mb-0">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                name="customers"
                options={
                  data2?.category?.map((category) => ({
                    label: category?.name ?? "Unknown",
                    value: category?._id,
                  })) ?? []
                }
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="Select Customer" />
                )}
              />
            </div>

            <button
              className="bg-[#20A7AF] rounded font-regular py-3 px-6 text-white"
              id="add_new_customer"
              type="button"
            >
              Add new customer
            </button>
          </div>
          <div className="pos-delivery-option rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl flex items-center gap-2">
                <span className="card-title-icon">
                  <i className="tio-user"></i>
                </span>
                <span>
                  Delivery Information <small>(Home Delivery)</small>
                </span>
              </h5>
              <span
                className="delivery-edit-icon text-primary cursor-pointer"
                id="delivery_address"
                data-toggle="modal"
                data-target="#deliveryAddrModal"
              >
                <i className="tio-edit"></i>
              </span>
            </div>
            <div
              className="pos-delivery-options-info flex flex-wrap"
              id="del-add"
            ></div>
          </div>
        </form>
        <div id="cart-items" className="mt-6"></div>
        <div id="cart" className="w-full">
          <div className="flex flex-row overflow-x-auto px-2 cart-table-scroll">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[400px] bg-gray-100 table-fixed">
                <thead className="text-muted thead-light">
                  <tr className="text-center">
                    <th
                      className="w-1/4 md:w-auto border-b-0 border-t-0"
                      scope="col"
                    >
                      {" "}
                      {/* Adjust the width for mobile and desktop */}
                      Food
                    </th>
                    <th
                      className="w-1/4 md:w-auto border-b-0 border-t-0"
                      scope="col"
                    >
                      {" "}
                      {/* Adjust the width for mobile and desktop */}
                      QTY
                    </th>
                    <th
                      className="w-1/4 md:w-auto border-b-0 border-t-0"
                      scope="col"
                    >
                      {" "}
                      {/* Adjust the width for mobile and desktop */}
                      Unit price
                    </th>
                    <th
                      className="w-1/4 md:w-auto border-b-0 border-t-0"
                      scope="col"
                    >
                      {" "}
                      {/* Adjust the width for mobile and desktop */}
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="border-l border-r border-b">
                  {foodItems.map((item, index) => (
                    <tr key={index} className="text-center">
                      <td className="w-1/4 md:w-auto">{item.name}</td>{" "}
                      {/* Adjust the width for mobile and desktop */}
                      <td className="w-1/4 md:w-auto">{item.qty}</td>{" "}
                      {/* Adjust the width for mobile and desktop */}
                      <td className="w-1/4 md:w-auto">{item.unitPrice}</td>{" "}
                      {/* Adjust the width for mobile and desktop */}
                      <td className="w-1/4 md:w-auto">
                        <button>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="box p-3">
            <div className="grid grid-cols-1 md:grid-cols-2 text-dark">
              <div className="col-span-1 md:col-span-2">
                <div className="text-sm border-b pb-2">
                  Subtotal (TAX Included):
                  <div className="text-sm text-right">$ 0.00</div>
                </div>
                <div className="text-sm border-b pb-2">
                  Discount :<div className="text-sm text-right">- $ 0.00</div>
                </div>
                <div className="text-sm border-b pb-2">
                  Delivery fee :
                  <div className="text-sm text-right" id="delivery_price">
                    $ 0.00
                  </div>
                </div>
                <div className="text-sm border-b pb-2">
                  Total :
                  <div className="text-sm text-right" id="delivery_price">
                    $ 0.00
                  </div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-1"></div>
            </div>
            <form>
              <input
                type="hidden"
                name="_token"
                value="y2k5WiczC4Mhpwi1onz7teiD7bToNJXnrdS6H4re"
                autoComplete="off"
              />
              <input type="hidden" name="user_id" id="customer_id" />
              <div className=" mt-3 mb-3">
                <p className="mb-3">Paid By</p>
                <ul className="flex flex-col sm:flex-row gap-2">
                  <li>
                    <label className="block">
                      <input
                        type="radio"
                        name="type"
                        value="cash"
                        hidden
                        checked
                      />
                      <span className="text-sm border py-2 px-4 sm:px-12 block text-center sm:inline-block bg-[#334257] text-white">
                        Cash On Delivery
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="block">
                      <input type="radio" name="type" value="wallet" hidden />
                      <span className="text-sm border py-2 px-4 sm:px-12 block text-center sm:inline-block text-[#334257]">
                        Wallet
                      </span>
                    </label>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white mt-8">
                <div className="col-span-full md:col-span-1">
                  <button
                    type="button"
                    className=" h-12 hover:bg-red-400 border hover:text-white px-12 rounded-md "
                  >
                    Clear Cart
                  </button>
                </div>
                <div className="col-span-full md:col-span-1">
                  <button
                    type="submit"
                    className=" h-12 border text-white px-12 rounded-md bg-[#24BAC3]"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Newsale);
