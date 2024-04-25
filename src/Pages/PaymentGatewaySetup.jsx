import { Switch } from "@mui/material";
import React from "react";
import { FaUsersGear } from "react-icons/fa6";

import { IoSettingsOutline } from "react-icons/io5";
import Stripe from "../assets/stripe.png";
import Razorpay from "../assets/razorpay.png";
import withAuth from "../HOC/withAuth";

const PaymentGatewaySetup = () => {
  return (
    <div className="h-full w-auto">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center text-[2.5vh] font-bold">
          <IoSettingsOutline />
          <h1>Zone Settings</h1>
        </div>
        <div className="shadow rounded">
          <div className="px-5 py-5 flex-col ">
            <div className="flex gap-3 items-center">
              <FaUsersGear />
              <h1>Payment Method</h1>
            </div>
          </div>
          <hr />
          <div className="px-5 py-5 flex md:flex-row flex-col gap-5">
            <div className="flex items-center md:w-[32%] justify-between border-[1px] rounded px-3">
              <h1>Cash on Delivery</h1>
              <Switch size="medium" />
            </div>
            <div className="flex items-center md:w-[32%] justify-between border-[1px] rounded px-3">
              <h1>Digital Payment</h1>
              <Switch size="medium" />
            </div>
            <div className="flex items-center md:w-[32%] justify-between border-[1px] rounded px-3">
              <h1>Offline Payment</h1>
              <Switch size="medium" />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-5">
          <div className="flex flex-col md:w-1/2 shadow rounded gap-3">
            <div className="flex justify-between  items-center py-5 px-5">
              <h1 className="font-semibold">Stripe</h1>
              <Switch size="medium" />
            </div>
            <hr />
            <div className="w-full flex justify-center h-fit py-6">
              <img className="self-end h-20" src={Stripe} alt="" />
            </div>
            <div className="flex flex-col px-5">
              <select className="border py-3 px-3 rounded" name="" id="">
                <option value="Test">Test</option>
                <option value="Live">Live</option>
              </select>
            </div>
            <div className="flex flex-col px-5 text-[2vh] gap-2">
              <h1>Api Key</h1>
              <input
                className="border rounded px-3 h-10"
                placeholder=""
                type="text"
              />
            </div>
            <div className="flex flex-col px-5 text-[2vh] gap-2">
              <h1>Published Key</h1>
              <input
                className="border rounded px-3 h-10"
                placeholder=""
                type="text"
              />
            </div>
            <div className="flex flex-col px-5 text-[2vh] gap-2">
              <h1>Payment Gateway Title</h1>
              <input
                className="border rounded px-3 h-10"
                placeholder=""
                type="text"
                value="Stripe"
              />
            </div>
            <div className="self-end px-5 text-[2vh]">
              <button className="px-10 py-2 bg-green-900 text-white rounded">
                Save
              </button>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col md:w-1/2 shadow rounded gap-3">
            <div className="flex justify-between  items-center py-5 px-5">
              <h1 className="font-semibold">Razorpay</h1>
              <Switch size="medium" />
            </div>
            <hr />
            <div className="w-full flex justify-center h-fit py-6">
              <img className="self-end h-20" src={Razorpay} alt="" />
            </div>
            <div className="flex flex-col px-5">
              <select className="border py-3 px-3 rounded" name="" id="">
                <option value="Test">Test</option>
                <option value="Live">Live</option>
              </select>
            </div>
            <div className="flex flex-col px-5 text-[2vh] gap-2">
              <h1>Api Key</h1>
              <input
                className="border rounded px-3 h-10"
                placeholder=""
                type="text"
              />
            </div>
            <div className="flex flex-col px-5 text-[2vh] gap-2">
              <h1>Published Key</h1>
              <input
                className="border rounded px-3 h-10"
                placeholder=""
                type="text"
              />
            </div>
            <div className="flex flex-col px-5 text-[2vh] gap-2">
              <h1>Payment Gateway Title</h1>
              <input
                className="border rounded px-3 h-10"
                placeholder=""
                type="text"
                value="Stripe"
              />
            </div>
            <div className="self-end px-5 text-[2vh]">
              <button className="px-10 py-2 bg-green-900 text-white rounded">
                Save
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(PaymentGatewaySetup);
