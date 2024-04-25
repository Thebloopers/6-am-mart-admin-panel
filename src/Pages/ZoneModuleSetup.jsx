import { Switch } from "@mui/material";
import React from "react";
import { FiEdit } from "react-icons/fi";
import withAuth from "../HOC/withAuth";

const ZoneModuleSetup = () => {
  return (
    <div className="h-full w-auto">
      <div className="flex gap-2 items-center py-2 mb-1">
        <FiEdit size="32px" />
        <h1 className="font-bold text-[2.5vh]">Zone Settings</h1>
      </div>
      <div className="px-5 py-3 shadow rounded">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="text-[2vh] font-semibold">Select Payment Method</h1>
            <h1 className="bg-red-50 border-2 rounded border-red-300 px-1 py-1 text-red-400 text-[1.6vh] font-semibold w-fit">
              NB: MUST Select At Least ‘One’ Payment Method.
            </h1>
          </div>
          <div className="flex md:flex-row flex-col gap-6 md:items-center text-[1.8vh]">
            <div className="flex gap-2">
              <input defaultChecked type="checkbox" name="" id="" />
              <h1>Cash on Delivery</h1>
            </div>
            <div className="flex gap-2">
              <input defaultChecked type="checkbox" name="" id="" />
              <h1>Digital Payment</h1>
            </div>
            <div className="flex gap-2">
              <input defaultChecked type="checkbox" name="" id="" />
              <h1>Offline Payment</h1>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-5 md:items-end">
            <div className="md:w-full w-fit">
              <div className="w-full justify-between flex items-center">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="name"
                >
                  Increase Delivery Charge (%)
                </label>
                <Switch size="medium" />
              </div>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                id="name"
                placeholder="Ex: 100"
              ></input>
            </div>
            <div className="md:w-full w-fit flex flex-col gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                Increase Delivery Charge Message
              </label>

              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                id="name"
                placeholder="Ex: Rainy season"
              ></input>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 text-[2vh]">
              <h1>Choose Business Module</h1>
            </div>
            <div className="flex w-fit md:w-full gap-1 border h-10 rounded px-2 py-1 text-[1.9vh]">
              <h1 className="bg-emerald-100 py-1 px-4">Grocery</h1>
            </div>
            <div className="flex flex-col mt-2 gap-1">
              <div className="rowflex-1 flex justify-between  text-[2vh]">
                <h1 className="w-1/4">Module Name</h1>
                <h1 className="w-40">Per km delivery charge ($)</h1>
                <h1 className="w-40">Minimum delivery charge ($)</h1>
                <h1 className="w-40">Maximum delivery charge ($)</h1>
                <h1 className="w-40">Maximum cod order amount ($)</h1>
              </div>
              <div className="flex justify-between text-[2vh]">
                <input
                  disabled
                  className="w-1/4 border px-2 py-2 rounded"
                  type="text"
                  value="Grocery"
                />
                <input
                  value="5"
                  className="w-40 px-2 border rounded"
                  type="number"
                />
                <input
                  value="10"
                  className="w-40 px-2 border rounded"
                  type="number"
                />
                <input
                  placeholder="Enter Amount"
                  className="w-40 px-2 border rounded"
                  type="number"
                />
                <input
                  value="50000"
                  className="w-40 px-2 border rounded"
                  type="number"
                />
              </div>
            </div>
          </div>
          <button className="self-end px-6 py-3 bg-cyan-500 rounded text-white text-[2vh] font-semibold">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ZoneModuleSetup);
