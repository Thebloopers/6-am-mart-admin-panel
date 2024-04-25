import React, { useState, useEffect, useRef } from "react";

const ColumnsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const [columns, setColumns] = useState({
    Name: true,
    Email: true,
    "Total Order": true,
    Status: true,
    Actions: true,
  });

  const handleToggle = (column) => {
    setColumns((prevColumns) => ({
      ...prevColumns,
      [column]: !prevColumns[column],
    }));
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center justify-between w-full py-2 px-4 rounded hover:text-[#14B19E]  text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-semibold">Columns</span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 top-12 left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="p-4">
            {Object.entries(columns).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between mb-2">
                <span className="text-sm">{key}</span>
                <label className="switch-toggle relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={value}
                    onChange={() => handleToggle(key)}
                  />
                  <div
                    className={`block ${
                      value ? "bg-[#14B09D]" : "bg-[#E7EAF3]"
                    } w-10 h-6 rounded-full`}
                  ></div>
                  <div
                    className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 transform ${
                      value ? "translate-x-full" : ""
                    }`}
                  ></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColumnsDropdown;
