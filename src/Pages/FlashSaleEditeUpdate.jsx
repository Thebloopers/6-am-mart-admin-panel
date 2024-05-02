import React from 'react'

import TabsComponent from "../Components/TabsComponent";
import withAuth from "../HOC/withAuth";

function FlashSaleEditeUpdate() {
  return (
    <>
    <div class="">
        <div class="max-w-4xl">
          <h1 class="text-2xl font-bold flex items-center">
            <span class="mr-3">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/condition.png"
                class="w-8 h-8"
                alt=""
              />
            </span>
            <span>Flash sale setup</span>
          </h1>
        </div>
      </div>

      <div className="p-2 mt-8 shadow-md rounded-md">
        <TabsComponent/>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <div className="rounded-lg bg-[#F8F9FC] p-6">
                <h2 className="text-xl font-bold mb-4">Discount Bearer</h2>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="adminDiscount"
                  >
                    Admin (%)
                  </label>
                  <input
                    type="number"
                    min=".01"
                    step="0.001"
                    max="100"
                    name="admin_discount_percentage"
                    className="form-input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="adminDiscount"
                    placeholder="Ex: 50"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="storeDiscount"
                  >
                    Store owner (%)
                  </label>
                  <input
                    type="number"
                    min=".01"
                    step="0.001"
                    max="100"
                    name="vendor_discount_percentage"
                    className="form-input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="storeDiscount"
                    placeholder="Ex: 50"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-[#F8F9FC] rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Validity</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="from"
                    >
                      Start date
                    </label>
                    <input
                      type="datetime-local"
                      id="from"
                      className="form-input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required=""
                      name="start_date"
                      min="2024-03-28"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="to"
                    >
                      End date
                    </label>
                    <input
                      type="datetime-local"
                      id="to"
                      className="form-input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required=""
                      name="end_date"
                      min="2024-03-28"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5 space-x-4">
          <button
            type="reset"
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#24bac3] text-white rounded-md hover:bg-[#20A7AF] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update
          </button>
        </div>
      </div>
      
    </>
  )
}

export default FlashSaleEditeUpdate
