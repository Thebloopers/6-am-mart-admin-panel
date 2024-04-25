import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ButtonContainer from "../Components/ButtonContainer";
import withAuth from "../HOC/withAuth";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  // Add more movie options as needed
];

const AddFund = () => {
  const [customer, setCustomer] = useState(null);
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");

  const handleReset = () => {
    setCustomer(null);
    setAmount("");
    setReference("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
    // Reset form fields after submission
    handleReset();
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/money.png"
            alt="Money Icon"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold mx-2">Add Fund</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Autocomplete
              disablePortal
              id="customer-autocomplete"
              options={top100Films}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Customer"
                  placeholder="Select Customer by Name or Phone"
                  fullWidth
                />
              )}
              value={customer}
              onChange={(event, newValue) => {
                setCustomer(newValue);
              }}
            />
            <TextField
              label="Amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              fullWidth
              onChange={(e) => setAmount(e.target.value)}
            />
            <TextField
              label="Reference (Optional)"
              placeholder="Enter reference"
              value={reference}
              fullWidth
              onChange={(e) => setReference(e.target.value)}
            />
          </div>
          <ButtonContainer onReset={handleReset} onSubmit={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default withAuth(AddFund);
