import React, { useEffect, useState } from "react";
import { Button, Card } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import withAuth from "../HOC/withAuth";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import { createProduct } from "../helpers/products";
import { useMutation, useQuery } from "react-query";
import {
  getAdminCategories,
  getAdminSubCategories,
} from "../helpers/categories";
import { getAdminUnits } from "../helpers/units";
import { getAdminAttributes } from "../helpers/attributes";
import { getAdminStores } from "../helpers/store";
import { MdOutlineCancel } from "react-icons/md";
import Chip from "@mui/material/Chip";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";

function AddNew() {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["admin"]);
  const [images, setImages] = useState([]);
  const [thumbnail, setThumbnail] = useState([]);
  const [attributeArray, setattributeArray] = useState([]);
  const [zoneId, setZoneId] = useState(null);

  //GET ALL CATEGORIES
  const {
    isError: isError1,
    isLoading: isLoading1,
    data: data1,
    refetch: refetch1,
  } = useQuery(
    ["categories", { cookies }], // Use a unique key and any relevant parameters
    () => getAdminCategories(cookies) // Pass a function that returns a promise
  );

  //GET ALL Main Categories
  const {
    isError: isError2,
    isLoading: isLoading2,
    data: data2,
    refetch: refetch2,
  } = useQuery(
    ["subcategories", { cookies }], // Use a unique key and any relevant parameters
    () => getAdminSubCategories(cookies) // Pass a function that returns a promise
  );

  //GET ALL UNITS
  const {
    isError: isError3,
    isLoading: isLoading3,
    data: data3,
    refetch: refetch3,
  } = useQuery(
    ["units", { cookies }], // Use a unique key and any relevant parameters
    () => getAdminUnits(cookies) // Pass a function that returns a promise
  );

  //GET ALL ATTRIBUTES
  const {
    isError: isError4,
    isLoading: isLoading4,
    data: data4,
    refetch: refetch4,
  } = useQuery(
    ["attribute", { cookies }], // Use a unique key and any relevant parameters
    () => getAdminAttributes(cookies) // Pass a function that returns a promise
  );

  //GET ALL STORES
  const {
    isError: isError5,
    isLoading: isLoading5,
    data: data5,
    refetch: refetch5,
  } = useQuery(
    ["stores", { zoneId, cookies }], // Use a unique key and any relevant parameters
    () => getAdminStores(null, cookies) // Pass a function that returns a promise
  );

  const [autoComplete, setAutoComplete] = useState({
    store: "",
    category: "",
    subCategory: "",
    unit: "",
    variants: [],
    discounttype: "",
  });

  const [inputValues, setInputValues] = useState(
    Array(autoComplete.variants.length).fill("")
  );

  const handleAutocompleteChange = (name) => (event, newValue) => {
    // Using name attribute to identify the field
    event.preventDefault();

    if (name === "discounttype") {
      return setAutoComplete({
        ...autoComplete,
        [name]: newValue?.label,
      });
    }
    if (name === "variants") {
      return setAutoComplete({
        ...autoComplete,
        [name]: newValue,
      });
    }
    return setAutoComplete({
      ...autoComplete,
      [name]: newValue?._id,
    });
  };

  const productMutation = useMutation(createProduct, {
    onSuccess: (data) => {
      setIsLoading(false);
      if (data.success === true) {
        return Swal.fire({
          icon: "success",
          title: "Product Created",
          timer: "3000",
          confirmButtonText: "Ok",
          confirmButtonColor: "#33996A",
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show",
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide",
          },
        }).then((result) => {
          if (
            result.isConfirmed ||
            result.dismiss === Swal.DismissReason.timer
          ) {
            navigate("/List");
          }
        });
      }
      if (data.success === false) {
        return Swal.fire({
          icon: "error",
          title: data?.error || data?.errors || "something went wrong",
          timer: "2000",
          confirmButtonText: "Ok",
          confirmButtonColor: "#33996A",
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show",
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide",
          },
        });
      }
    },
    onError: (error) => {
      setIsLoading(false);
      return Swal.fire({
        icon: "error",
        title: error || "something went wrong",
        timer: "2000",
        confirmButtonText: "Ok",
        confirmButtonColor: "#33996A",
        showClass: {
          popup: "swal2-show",
          backdrop: "swal2-backdrop-show",
          icon: "swal2-icon-show",
        },
        hideClass: {
          popup: "swal2-hide",
          backdrop: "swal2-backdrop-hide",
          icon: "swal2-icon-hide",
        },
      });
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    formData.append("discounttype", autoComplete.discounttype);
    formData.append("store", autoComplete.store);
    formData.append("category", autoComplete.category);
    autoComplete.subCategory != "" &&
      formData.append("subCategory", autoComplete.subCategory);
    formData.append("unit", autoComplete.unit);
    // formData.append("totalUnit", autoComplete.unit);
    // formData.append("variant", autoComplete.attribute);
    if (attributeArray.length > 0) {
      formData.append("variant", JSON.stringify(attributeArray));
    }
    productMutation.mutate({ formData: formData, cookies: cookies });
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    const maxFiles = 5;

    if (files.length + images.length > maxFiles) {
      alert(`You can upload maximum ${maxFiles} images.`);
      return;
    }

    const selectedImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages([...images, ...selectedImages]);
  };

  const handleThumbnailChange = (event) => {
    const files = event.target.files;

    const selectedThumbnail = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setThumbnail([...selectedThumbnail]);
  };

  const handleRemoveImage = (indexToRemove) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
  };

  const [attributeCombinations, setAttributeCombinations] = useState([]);

  // function to generate variant combinations
  function generateCombinations(
    variantsArray,
    currentIndex,
    currentCombination,
    combinations
  ) {
    // Base case: if currentIndex is equal to the length of variantsArray, we have completed one combination
    if (currentIndex === variantsArray.length) {
      combinations.push(currentCombination.join("-"));
      return;
    }

    // Iterate over the variants at the current index if variants exist
    if (variantsArray[currentIndex].variants) {
      for (let i = 0; i < variantsArray[currentIndex].variants.length; i++) {
        // Add the current variant to the current combination
        currentCombination[currentIndex] =
          variantsArray[currentIndex].variants[i];
        // Recur for the next index
        generateCombinations(
          variantsArray,
          currentIndex + 1,
          [...currentCombination],
          combinations
        );
      }
    } else {
      // If variants don't exist, move to the next index
      generateCombinations(
        variantsArray,
        currentIndex + 1,
        [...currentCombination],
        combinations
      );
    }
  }

  // generate variant combinations
  useEffect(() => {
    const combinations = [];
    generateCombinations(autoComplete.variants, 0, [], combinations);
    setAttributeCombinations(combinations);
  }, [autoComplete.variants]);

  // Function to add a new parameter to the object in the variants array with a specific label
  const addValueToVariant = async (label, value, index) => {
    setAutoComplete((prevState) => {
      const updatedVariants = prevState.variants.map((variant) => {
        // If the label of the current variant matches the provided label
        if (variant.label === label) {
          // Update the variant object with the new value inside variants field
          return {
            ...variant,
            variants: variant.variants ? [...variant.variants, value] : [value],
          };
        }
        // If the label doesn't match, return the variant object as is
        return variant;
      });

      // Update the state with the updated variants array
      return { ...prevState, variants: updatedVariants };
    });

    // Empty input field
    setInputValues((prevState) => {
      const updatedValues = [...prevState];
      updatedValues[index] = ""; // Clear the input value
      return updatedValues;
    });
  };

  const handleDelete = (item, index) => {
    setAutoComplete((prevState) => {
      const updatedVariants = prevState.variants.map((variant, i) => {
        if (variant.label === item.label) {
          const updatedVariant = {
            ...variant,
            variants: variant.variants.filter((_, i) => i !== index),
          };
          return updatedVariant;
        }
        return variant;
      });
      return { ...prevState, variants: updatedVariants };
    });
  };

  return (
    <>
      {" "}
      <div className="page-header flex flex-wrap gap-15 justify-between items-center">
        <h1 className="page-header-title flex items-center">
          <span className="page-header-icon">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/items.png"
              className="w-22"
              alt=""
            />
          </span>
          <span className="ml-2">Add new item</span>
        </h1>

        <div className="flex items-end flex-wrap">
          <button className=" flex items-center mr-2 mt-5">
            <Link
              to={"/"}
              className="flex items-center rounded-sm gap-2 outline outline-2 outline-offset-2 ... p-2 px-8 text-[#24bac3] hover:bg-[#20A7AF] hover:text-white"
            >
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/product-gallery.png"
                className="w-22"
                alt=""
              />
              <span>Add Info From Gallery</span>
            </Link>
          </button>
          <div
            className=" py-1 flex items-center mb-1  gap-5 justify-center"
            type="button"
          >
            <p className="mr-5 px-5 mt-5">See how it works!</p>
            <div>
              <i className="tio-info-outlined"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap  justify-between gap-4">
            <div className="w-full md:w-full">
              {/* Delete this <TabComponent2 placeholder={"New Item"} /> */}
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-12">
                  <div className="p-4 rounded-lg">
                    <label htmlFor="title" className="text-sm font-bold mb-2">
                      Name
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="title"
                        className="form-control w-full bg-white border border-gray-300 rounded px-3 py-2  focus:outline-none focus:border-[#24C9DE]"
                        maxLength="100"
                        placeholder="New Item"
                        required
                      />
                    </div>
                    <div className="mt-5">
                      <label
                        className="block mb-1 text-sm font-medium text-gray-700"
                        htmlFor="description"
                      >
                        Short description
                      </label>
                      <textarea
                        type="text"
                        name="shortDescription"
                        id="description"
                        className="bg-white w-full min-h-40 border focus:outline-none focus:border-[#24C9DE]"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-full">
              <Card className="bg-white rounded-lg  overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Item Image
                    </h2>
                    <small className="text-gray-500">Ratio 1:1</small>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center items-center mb-6 relative">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2 ">
                      {images.length > 0 &&
                        images.map((image, index) => (
                          <div className="w-44 h-44 flex items-center justify-center p-1 border-dashed border-2 border-gray-400 rounded relative">
                            <button
                              className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex justify-center items-center"
                              onClick={() => handleRemoveImage(index)}
                            >
                              <MdOutlineCancel size="24px" />
                            </button>
                            <img
                              key={index}
                              className="rounded object-cover w-full h-full mx-auto my-auto"
                              src={image}
                              alt={`Uploaded Image ${index + 1}`}
                            />
                          </div>
                        ))}
                    </div>
                    <div
                      className={`w-44 h-44 relative rounded-md overflow-hidden bg-gray-200  ${
                        images.length >= 5 ? "hidden" : "block"
                      }`}
                    >
                      <img
                        className="object-cover w-full h-full"
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/upload-img.png"
                        alt="Thumbnail"
                      />
                      <label
                        htmlFor="uploadInput"
                        className="absolute inset-0 flex justify-center items-center cursor-pointer bg-black bg-opacity-50 text-white text-sm font-semibold rounded-md opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      >
                        <input
                          id="uploadInput"
                          type="file"
                          name="itemImage"
                          className="hidden"
                          accept="image/*"
                          multiple
                          onChange={handleImageChange}
                          required
                        />
                        <i className="fas fa-upload mr-2"></i>Upload Image
                      </label>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="bg-white rounded-lg  overflow-hidden mt-6">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Item Thumbnail
                    </h2>
                    <small className="text-red-500">* Ratio 1:1</small>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="w-44 h-44 relative rounded-md overflow-hidden bg-gray-200">
                      <img
                        className="object-cover w-full h-full"
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/upload-img.png"
                        alt="Thumbnail"
                      />
                      <img
                        className="absolute top-0 rounded object-cover w-full h-full "
                        src={thumbnail[0]}
                      />
                      <label className="absolute inset-0 flex justify-center items-center cursor-pointer bg-black bg-opacity-50 text-white text-sm font-semibold rounded-md opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                        <input
                          id="uploadInput"
                          type="file"
                          name="itemThumbnail"
                          className="hidden"
                          accept="image/*"
                          multiple
                          onChange={handleThumbnailChange}
                          required
                        />
                        <i className="fas fa-upload mr-2"></i>Upload Image
                      </label>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className=" py-6 w-full">
              <div className="bg-white rounded-lg ">
                <div className="px-6 py-4 border-b">
                  <h5 className="text-lg font-semibold text-gray-800">
                    <span className="mr-2">
                      <i className="text-primary fas fa-cogs"></i>
                    </span>
                    Store & Category Info
                  </h5>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Store */}
                    <div className="col-span-1">
                      <div className="mb-4">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          name="store"
                          options={
                            data5?.store?.length > 0 &&
                            data5?.store?.map((doc) => ({
                              label: doc.storeName,
                              _id: doc._id,
                            }))
                          }
                          onChange={handleAutocompleteChange("store")}
                          sx={{ minWidth: { xs: 10, md: "fit" } }}
                          renderInput={(params) => (
                            <TextField {...params} label="Store" />
                          )}
                          required
                        />
                      </div>

                      {/* Category */}
                    </div>
                    <div className="col-span-1">
                      <div className="mb-4">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          name="category"
                          options={
                            data1?.category?.length > 0
                              ? data1?.category?.map((doc) => ({
                                  label: doc.name,
                                  id: doc.id,
                                  _id: doc._id,
                                }))
                              : []
                          }
                          onChange={handleAutocompleteChange("category")}
                          sx={{ minWidth: { xs: 10, md: "fit" } }}
                          renderInput={(params) => (
                            <TextField {...params} label="Category" />
                          )}
                          required
                        />
                      </div>

                      {/* Sub Category */}
                    </div>
                    <div className="col-span-1">
                      <div className="mb-4">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          name="subCategory"
                          options={
                            data2?.category?.length > 0
                              ? data2?.category?.map((doc) => ({
                                  label: doc.name,
                                  id: doc.id,
                                  _id: doc._id,
                                }))
                              : []
                          }
                          onChange={handleAutocompleteChange("subCategory")}
                          sx={{ minWidth: { xs: 10, md: "fit" } }}
                          renderInput={(params) => (
                            <TextField {...params} label="Sub category" />
                          )}
                        />
                      </div>

                      {/* Units */}
                    </div>
                    <div className="col-span-1">
                      <div className="mb-4">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          name="unit"
                          options={
                            data3?.data?.length > 0
                              ? data3?.data?.map((doc) => ({
                                  label: doc.name,
                                  _id: doc._id,
                                }))
                              : []
                          }
                          onChange={handleAutocompleteChange("unit")}
                          sx={{ minWidth: { xs: 10, md: "fit" } }}
                          renderInput={(params) => (
                            <TextField {...params} label="Unit" />
                          )}
                          required
                        />
                      </div>

                      {/* Maximum Purchase Quantity */}
                    </div>
                    <div className="col-span-1">
                      <div className="mb-4">
                        <TextField
                          id="outlined-basic"
                          name="maximumPurchaseQuantityLimit"
                          label="Maximum Purchase Quantity Limit "
                          variant="outlined"
                          className="w-full"
                          required
                        />
                      </div>

                      {/* Other fields */}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className=" py-6 w-full">
              <div className="bg-white rounded-lg ">
                <div className="px-6 py-4 border-b">
                  <h5 className="text-lg font-semibold text-gray-800">
                    <span className="mr-2">
                      <LocalOfferIcon />
                    </span>
                    Price Information
                  </h5>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="col-span-1">
                      <div className="mb-4">
                        <TextField
                          id="outlined-basic"
                          label="Price"
                          name="price"
                          variant="outlined"
                          className="w-full"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="mb-4">
                        <TextField
                          id="outlined-basic"
                          label="Total stock"
                          name="totalUnit"
                          variant="outlined"
                          className="w-full"
                          disabled={
                            attributeCombinations.length > 0 &&
                            attributeCombinations != ""
                              ? true
                              : false
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="mb-4">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          name="discounttype"
                          options={[{ label: "Amount" }, { label: "Percent" }]}
                          sx={{ minWidth: { xs: 10, md: "fit" } }}
                          onChange={handleAutocompleteChange("discounttype")}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="
                            Discount type"
                            />
                          )}
                          required
                        />
                      </div>

                      {/* Other fields */}
                    </div>
                    <div className="col-span-1">
                      <div className="mb-4">
                        <TextField
                          id="outlined-basic"
                          name="discount"
                          label="Discount"
                          variant="outlined"
                          className="w-full"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className=" py-6 w-full">
              <div className="bg-white rounded-lg ">
                <div className="px-6 py-4 border-b">
                  <h5 className="text-lg font-semibold text-gray-800">
                    <span className="mr-2">
                      <i className="tio-label-outlined"></i>
                    </span>
                    Attribute
                  </h5>
                </div>
                <div className="p-4">
                  <div className="gap-4">
                    <div className="col-span-1 w-full">
                      <div className="mb-4">
                        <Autocomplete
                          multiple
                          disablePortal
                          id="combo-box-demo"
                          name="attribute"
                          sx={{ minWidth: { xs: 10, md: 990 } }}
                          options={
                            data4?.data?.length > 0
                              ? data4?.data?.map((doc) => ({
                                  label: doc.name,
                                  _id: doc._id,
                                }))
                              : []
                          }
                          onChange={handleAutocompleteChange("variants")}
                          y
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              // sx={{ minWidth:  {xs: 10, md: 1200} }}
                              className="w-full"
                              label="Attribute"
                            />
                          )}
                          required
                        />
                      </div>

                      {autoComplete.variants.length > 0 && (
                        <div className="flex flex-col gap-2 p-2 w-full">
                          <div className="flex justify-between items-center">
                            {autoComplete.variants.map((item, index) => (
                              <div key={index}>
                                <h1>{item.label}</h1>
                                <div className={"container"}>
                                  {item?.variants?.map((doc, docindex) => (
                                    <Chip
                                      key={docindex}
                                      size="small"
                                      onDelete={() => {
                                        return (
                                          handleDelete(item, docindex),
                                          setattributeArray([])
                                        );
                                      }}
                                      label={doc}
                                    />
                                  ))}
                                </div>
                                <Input
                                  type="text"
                                  value={inputValues[index]} // Use individual state variable for each input field
                                  onBlur={async (e) => {
                                    e.target.value != "" &&
                                      (await addValueToVariant(
                                        item?.label,
                                        e.target.value,
                                        index
                                      ));
                                  }}
                                  onChange={(e) => {
                                    setInputValues((prevState) => {
                                      const updatedValues = [...prevState];
                                      updatedValues[index] = e.target.value;
                                      return updatedValues;
                                    });
                                  }}
                                  onKeyDown={async (e) => {
                                    if (e.key === "Enter") {
                                      e.target.value != "" &&
                                        (await addValueToVariant(
                                          item?.label,
                                          e.target.value,
                                          index
                                        ));
                                    }
                                  }}
                                  className="w-60"
                                />
                              </div>
                            ))}
                          </div>
                          <div className="w-full py-2 h-fit">
                            <table className="w-full table table-responsive">
                              <thead className="w-full bg-teal-100 h-11 text-[1.8vh]">
                                <tr>
                                  <th className="text-center">
                                    <span>Variant</span>
                                  </th>
                                  <th className="text-center">
                                    <span>Variant Price</span>
                                  </th>
                                  <th className="text-center">
                                    <span>Stock</span>
                                  </th>
                                  <th className="text-center">
                                    <span>Actions</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {attributeCombinations.length > 0 &&
                                  attributeCombinations?.map((item, index) => (
                                    <tr key={index}>
                                      <td className="text-center py-5">
                                        <label htmlFor="">{item}</label>
                                      </td>
                                      <td className="px-3">
                                        <input
                                          className="w-full border h-11 rounded px-3"
                                          type="text"
                                          onChange={(e) => {
                                            const updatedArray = [
                                              ...attributeArray,
                                            ];
                                            updatedArray[index] = {
                                              ...updatedArray[index],
                                              variantPrice: e.target.value,
                                            };
                                            setattributeArray(updatedArray);
                                          }}
                                          value={
                                            attributeArray[index]?.variantPrice
                                          }
                                        />
                                      </td>
                                      <td className="px-3">
                                        <input
                                          className="w-full border h-11 rounded px-3"
                                          type="text"
                                          onChange={(e) => {
                                            const updatedArray = [
                                              ...attributeArray,
                                            ];
                                            updatedArray[index] = {
                                              ...updatedArray[index],
                                              variantStock: e.target.value,
                                              variantSold: 0,
                                            };
                                            setattributeArray(updatedArray);
                                          }}
                                          value={
                                            attributeArray[index]?.variantStock
                                          }
                                        />
                                      </td>
                                      <td className="px-3 text-center">
                                        <button
                                          type="button"
                                          className="px-8 p-2 bg-[#24BAC3] hover:bg-[#20A7AF] text-white rounded-md"
                                          onClick={() => {
                                            const updatedArray = [
                                              ...attributeArray,
                                            ];
                                            if (
                                              updatedArray[index]?.variantName
                                            ) {
                                              const filteredArray =
                                                updatedArray.filter(
                                                  (doc) =>
                                                    doc.variantName !==
                                                    updatedArray[index]
                                                      ?.variantName
                                                );
                                              setattributeArray(filteredArray);
                                            } else {
                                              updatedArray[index] = {
                                                ...updatedArray[index],
                                                variantName: item,
                                              };
                                              setattributeArray(updatedArray);
                                            }
                                          }}
                                        >
                                          {attributeArray[index]
                                            ?.variantName ? (
                                            <span>❌ Remove</span>
                                          ) : (
                                            "✔️ Add"
                                          )}
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Maximum Purchase Quantity */}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className=" py-6 w-full">
              <div className="bg-white rounded-lg ">
                <div className="px-6 py-4 border-b">
                  <h5 className="text-lg font-semibold text-gray-800">
                    <span className="mr-2">
                      <LocalOfferIcon />
                    </span>
                    Tags
                  </h5>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <TextField
                      id="outlined-basic"
                      className="w-full"
                      label=" Tags"
                      name="tags"
                      variant="outlined"
                      placeholder="Search tags"
                      sx={{ minWidth: { xs: 10, md: 990 } }}
                      required
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="reset"
              id="reset_btn"
              className=" px-8 p-2 mr-4 bg-[#f3f4f5] hover:bg-[#DBDCDC] rounded-md"
            >
              Reset
            </button>
            <button
              type="submit"
              id="submitButton"
              className=" px-8 p-2 mr-4 bg-[#24BAC3] hover:bg-[#20A7AF] text-white rounded-md"
              disabled={loading}
            >
              <span
                className={`${
                  loading ? "block" : "hidden"
                } loading loading-dots loading-sm`}
              ></span>
              <span className={`${loading ? "hidden" : "block"}`}>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default withAuth(AddNew);
