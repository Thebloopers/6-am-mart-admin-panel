import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ProductCardGallery from "../Components/ProductCardGallery";
import withAuth from "../HOC/withAuth";

const AllStore = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

function ProductGallery() {
  return (
    <>
      <div className="py-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/group.png"
                className="w-5 mr-2"
                alt=""
              />
              <h1 className="text-xl font-bold text-gray-800">
                Product Gallery
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <form
          id="search-form"
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent form submission for now
          }}
        >
          <input
            type="hidden"
            name="_token"
            value="pIcrDdObVoASKtGCiblGUv5gTbala4r9WVYktCtN"
            autoComplete="off"
          />
          <input type="hidden" value="1" name="product_gallery" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="col-span-1">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={AllStore}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="All Store" />
                )}
              />
            </div>
            <div className="col-span-1">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={AllStore}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="All Category" />
                )}
              />
            </div>
            <div className="col-span-1">
              <TextField
                id="outlined-basic"
                label="Search Name"
                variant="outlined"
                placeholder="Search Name"
                sx={{ width: "100%" }}
              />
            </div>
            <div className="col-span-1 flex justify-end items-center">
              <button
                type="submit"
                className="border p-2 h-10 px-12 rounded-md text-white bg-[#24bac3] hover:bg-[#20A7AF]"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-8">
        <ProductCardGallery />
        <ProductCardGallery />
        <ProductCardGallery />
      </div>
    </>
  );
}

export default withAuth(ProductGallery);
