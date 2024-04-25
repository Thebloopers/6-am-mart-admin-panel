import React from "react";
import withAuth from "../HOC/withAuth";

const ReactSiteSetup = () => {
  return (
    <div className="h-full w-auto">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center text-[2.8vh] font-semibold">
          <h1>React Site Setup</h1>
        </div>
        <div className="px-3 py-3 flex flex-col shadow rounded gap-4">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col px-5 text-[2vh] gap-2 w-full">
              <h1>React License Code</h1>
              <input
                className="border rounded px-3 h-10"
                placeholder="React License Code"
                type="text"
              />
            </div>
            <div className="flex flex-col px-5 text-[2vh] gap-2 w-full">
              <h1>React Domain</h1>
              <input
                className="border rounded px-3 h-10"
                placeholder="React Domain"
                type="text"
              />
            </div>
          </div>
          <div className="self-end mt-2">
            <button className="px-4 py-2 rounded bg-sky-500 text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ReactSiteSetup);
