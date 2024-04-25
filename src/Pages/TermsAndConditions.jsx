import React from "react";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import withAuth from "../HOC/withAuth";

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const { params } = useParams();

  return (
    <div className="h-full w-auto">
      <div className="px-5 py-3 flex gap-3">
        <a onClick={() => navigate("/privacy_policy")}>
          <h1>Privacy Policy</h1>
        </a>
        <a onClick={() => navigate("/terms_and_conditions")}>
          <h1>Terms & Conditions</h1>
        </a>
      </div>
      <div className="shadow rounded flex flex-col">
        <div className="px-5 py-3 ">
          <div className="flex gap-1 items-center">
            <MdOutlinePrivacyTip size="20px" />
            <h1 className="font-bold">Terms & Conditions Editor</h1>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-3 px-5 py-3">
          <h1 className="font-semibold">Terms & Conditions</h1>
          <textarea
            className="flex h-24 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 resize-none "
            type="text"
            placeholder="Write your T&C here"
            id="name"
          ></textarea>
        </div>
        <div className="self-end w-fit px-5 py-3">
          <button className="bg-sky-500 rounded px-10 font-semibold py-2 text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(TermsAndConditions);
