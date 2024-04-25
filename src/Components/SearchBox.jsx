import React from 'react';
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = ({ placeholder }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <form className="flex items-center">
      <input
        id="datatableSearch"
        type="search"
        name="search"
        className="form-input border border-gray-300 rounded-l-lg px-4 md:py-3 py-4 md:mt-0 mt-4   w-full"
        placeholder={placeholder ? placeholder : "Ex: Name, Email, or Phone"}
        aria-label="Search here"
      />
      <button
        type="submit"
        className="bg-[#5faeb4] hover:bg-[#559DA2] border-[#5faeb4] text-gray-700 font-semibold px-4 md:p-3 py-4 rounded-r-lg sm:rounded-l-none  md:mt-0 mt-4 sm:mt-0"
      >
        <SearchIcon sx={{ color: "white" }} />
      </button>
    </form>
  );
};

export default SearchBox;
