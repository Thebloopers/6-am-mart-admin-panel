import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import Select from "react-select";
import logo from "../assets/logo.png";
import icon from "../assets/Boostup_icon.png";
import { FaGear } from "react-icons/fa6";
import ReactDOM from "react-dom";
import TimezoneSelect from "react-timezone-select";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import withAuth from "../HOC/withAuth";

const BusinessSettings = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  return (
    <div className="h-full md:w-auto w-auto lg:w-full">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center w-fit md:text-[2.5vh] font-bold">
          <IoSettingsOutline />
          <h1>Business Settings</h1>
        </div>
        {/* <div className='tabs flex gap-5 items-center'>
                    <h1>Business Information</h1>
                    <h1>Order Settings</h1>
                    <h1>Refund Settings</h1>
                    <h1>Stores</h1>
                    <h1>Deliveryman</h1>
                    <h1>Customers</h1>
                    <h1>Languages</h1>
                    <h1>Landing Page</h1>
                    <h1>Websocket</h1>
                    <h1>Disbursement</h1>
                </div> */}
        <div className="flex flex-col shadow rounded px-6 py-6 gap-2">
          <div className="flex justify-between items-center border-[1px] border-cyan-500 px-2 py-1 rounded text-[1.9vh] text-cyan-600 font-semibold">
            <div className="flex items-center gap-1">
              <IoMdSettings className="text-[2.5vh]" />
              <h1>Maintenance Mode</h1>
            </div>
            <Switch size="medium" />
          </div>
          <h1 className="text-[2.1vh]">
            By turning the ‘Maintenance Mode’ ON all your apps and customer
            website will be disabled temporarily. Only the Admin Panel Admin
            Landing Page & Store Panel will be functional.
          </h1>
        </div>
        <div className="flex items-center gap-3 text-[2vh] font-semibold px-2 py-2">
          <FaUser />
          <h1>Company Information</h1>
        </div>
        <div className="py-5 px-5 shadow rounded flex flex-col  gap-3">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex flex-col gap-1 w-72 text-[2vh]">
              <h1>Company Name</h1>
              <input
                className="h-11 border p-3 rounded"
                placeholder="New company"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 w-72 text-[2vh]">
              <h1>Email</h1>
              <input
                className="h-11 border p-3 rounded"
                placeholder="Ex: ex@example.com"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-1 w-72 text-[2vh]">
              <h1>Phone</h1>
              <input
                className="h-11 border p-3 rounded"
                placeholder="New company"
                type="tel"
              />
            </div>
            <div className="flex flex-col gap-1 w-72 text-[2vh]">
              <h1>Country</h1>
              {/* <input className='h-11 border p-3 rounded' placeholder='New company' type="" />
               */}
              <Select
                classNames={{
                  control: () => "h-11",
                }}
                options={countries}
                value={selectedCountry}
                onChange={(selectedOption) =>
                  setSelectedCountry(selectedOption)
                }
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-3 items-center">
            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-col gap-2 w-72 md:w-auto text-[2vh]">
                <h1>Address</h1>
                <textarea
                  className="resize-none border h-24"
                  name=""
                  id=""
                  cols="10"
                  rows="10"
                ></textarea>
              </div>
              <div className="flex md:flex-row flex-col gap-5 text-[2vh]">
                <div className="flex flex-col gap-1 w-full text-[2vh]">
                  <h1>Latitude</h1>
                  <input
                    className="h-11 border p-3 rounded w-fit md:w-auto"
                    placeholder="New company"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full text-[2vh]">
                  <h1>Longitude</h1>
                  <input
                    className="h-11 border p-3 rounded w-fit md:w-auto"
                    placeholder="New company"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row text-[2vh] h-fit md:items-center">
                <div className="flex flex-col gap-2 h-full">
                  <h1>Logo ( 3:1 )</h1>
                  <div className="md:h-[100%] md:w-[90%] border-2 p-1 border-dashed rounded flex items-center">
                    <form className="" action="">
                      <div className="relative">
                        <input
                          id="dropzone-file"
                          type="file"
                          className="absolute md:h-full md:w-full h-fit w-fit opacity-0"
                        />
                        <img className="md:w-full w-fit" src={logo} alt="" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:h-full h-fit">
                  <h1>Favicon ( 1:1 )</h1>
                  <div className=" border-2 p-1 border-dashed rounded w-fit">
                    <form className="" action="">
                      <div className="relative ">
                        <input
                          id="dropzone-file"
                          type="file"
                          className="absolute h-full w-full opacity-0"
                        />
                        <img className="h-44 md:h-auto" src={icon} alt="" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[90%] h-fit border py-3 px-3 border-green-500 rounded">
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bhopal+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps trackers</a>
              </iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 text-[2.2vh] font-semibold px-2 py-2">
          <FaGear />
          <h1>General Settings</h1>
        </div>
        <div className="py-5 px-5 shadow rounded grid md:grid-cols-3 gap-5">
          <div className="flex flex-col w-full justify-between">
            <h1>Time Zone</h1>
            <TimezoneSelect
              classNames={{
                control: () => "h-11 text-[1.8vh]",
              }}
              value={timezone}
              onChange={setTimezone}
            />
          </div>
          <div className="flex flex-col w-full justify-between">
            <h1>Time Format</h1>
            <select className="h-11 border p-3 rounded" name="timeformat" id="">
              <option value="12 hour">12 hour</option>
              <option value="12 hour">24 hour</option>
            </select>
          </div>
          <div className="flex flex-col w-full justify-between">
            <h1>Copyright Text</h1>
            <textarea
              className="h-11 border p-3 rounded"
              placeholder="Ex: Copyright Text"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full justify-between">
            <h1>Cookies Text</h1>
            <textarea
              className="h-11 border p-3 rounded"
              placeholder="Ex: Cookies Text"
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 text-[2.2vh] font-semibold px-2 py-2">
          <HiOutlineBuildingOffice2 />
          <h1>Business Rules Setup</h1>
        </div>
        <div className="py-5 px-5 shadow rounded grid md:grid-cols-3 gap-5">
          <div className="flex flex-col w-full justify-between">
            <h1>Default Commission Rate On Order (%) </h1>
            <input
              className="h-11 border p-3 rounded text-[2vh]"
              placeholder="Ex: 10"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full justify-between">
            <h1>Commission Rate On Delivery Charge (%)</h1>
            <input
              className="h-11 border p-3 rounded text-[2vh]"
              placeholder="Ex: 5"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full justify-between">
            <h1>Who Will Confirm Order</h1>
            <form action="">
              <div className="flex gap-6 border rounded px-4 py-2">
                <div className="flex gap-1">
                  <input type="radio" /> <label htmlFor="">Store</label>
                </div>
                <div className="flex gap-1">
                  <input type="radio" /> <label htmlFor="">Deliveryman</label>
                </div>
              </div>
            </form>
          </div>
          <div className="flex items-center w-full justify-between border-[1px] font-semibold rounded px-3 text-[1.9vh]">
            <h1>Include TAX Amount</h1>
            <Switch size="medium" />
          </div>
          <div className="flex items-center w-full justify-between border-[1px] font-semibold rounded px-3 text-[1.9vh]">
            <h1>Customer’s Food Preference</h1>
            <Switch size="medium" />
          </div>
          <div className="flex items-center w-full justify-between border-[1px] font-semibold rounded px-3 text-[1.9vh]">
            <h1>Order Notification For Admin</h1>
            <Switch size="medium" />
          </div>
          <div className="flex flex-col w-full justify-between">
            <h1>Order Notification Type</h1>
            <form action="">
              <div className="flex gap-6 border rounded px-4 py-2">
                <div className="flex gap-1">
                  <input type="radio" /> <label htmlFor="">Firebase</label>
                </div>
                <div className="flex gap-1">
                  <input type="radio" /> <label htmlFor="">Manual</label>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full">
            <div className="w-full justify-between flex items-center">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                Free Delivery Over
              </label>
              <Switch size="medium" />
            </div>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              id="name"
            ></input>
          </div>
          <div className="flex items-center w-full justify-between border-[1px] font-semibold rounded px-3 h-fit text-[1.9vh] self-end">
            <h1>Guest Checkout</h1>
            <Switch size="medium" />
          </div>
        </div>
        <div className="flex flex-col shadow-lg bg-slate-100">
          <div className="flex items-center px-5 py-5 gap-1 text-[2.2vh] font-semibold">
            <h1>Additional Charge</h1>
          </div>
          <hr />
          <div className="flex md:flex-row flex-col gap-3 px-3 py-6 items-end">
            <div className="flex items-center w-full justify-between border-[1px] font-semibold rounded px-3 text-[1.9vh] h-fit bg-white">
              <h1>Additional Charge</h1>
              <Switch size="medium" />
            </div>
            <div className="flex flex-col gap-1 w-full text-[2vh]">
              <h1>Additional Charge Name</h1>
              <input
                className="h-11 border p-3 rounded"
                placeholder="New company"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 w-full text-[2vh]">
              <h1>Charge Amount</h1>
              <input
                className="h-11 border p-3 rounded"
                placeholder="New company"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col shadow-lg bg-slate-100">
          <div className="flex items-center px-5 py-5 gap-1 text-[2.2vh] font-semibold">
            <h1>Payment</h1>
          </div>
          <hr />
          <div className="flex md:flex-row flex-col gap-3 px-3 py-6 items-end">
            <div className="flex items-center w-full justify-between border-[1px] font-semibold rounded px-3 text-[1.9vh] h-fit bg-white">
              <h1>Partial Payment</h1>
              <Switch size="medium" />
            </div>
            <div className="flex flex-col w-full justify-between">
              <h1>Who Will Confirm Order</h1>
              <form action="">
                <div className="flex gap-6 border rounded px-4 py-2 bg-white">
                  <div className="flex gap-1">
                    <input type="radio" /> <label htmlFor="">Store</label>
                  </div>
                  <div className="flex gap-1">
                    <input type="radio" /> <label htmlFor="">Deliveryman</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col shadow-lg bg-slate-100">
          <div className="flex items-center px-5 py-5 gap-1 text-[2.2vh] font-semibold">
            <h1>Additional Charge</h1>
          </div>
          <hr />
          <div className="flex md:flex-row flex-col gap-3 px-3 py-6 items-end">
            <div className="flex flex-col gap-1 w-full text-[2vh]">
              <h1>Minimum Shipping Charge</h1>
              <input
                className="h-11 border p-3 rounded"
                placeholder="New company"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 w-full text-[2vh]">
              <h1>Per Km Shipping Charge</h1>
              <input
                className="h-11 border p-3 rounded"
                placeholder="New company"
                type="text"
              />
            </div>
          </div>
          <div className="w-full h-fit flex py-3 px-3 justify-end gap-3 text-[1.9vh]">
            <button className="px-8 py-2 rounded-md bg-gray-200 font-semibold">
              Reset
            </button>
            <button className="px-6 py-2 rounded-md bg-cyan-500 text-white ">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(BusinessSettings);
