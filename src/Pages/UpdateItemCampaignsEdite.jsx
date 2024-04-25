import React from "react";
import TabsComponent from "../Components/TabsComponent";
import TabComponent2 from "../Components/TabComponents2";
import { Autocomplete, Box, Card, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];

const UpdateItemCampaignsEdite = () => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Handle file upload logic here
  };
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      <div class="">
        <h1 class="page-header-title flex items-start">
          <span class="page-header-icon rounded-full  mr-3">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/edit.png"
              class="w-8 h-8"
              alt=""
            />
          </span>
          <span class="text-xl md:text-2xl font-semibold">Update Campaign</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-6">
        {/* Item Info Section */}
        <Card className="w-full md:w-1/2">
          <div className="bg-white rounded-md p-4">
            <div className="flex items-center mb-4">
              <span className="bg-blue-500 rounded-md p-2 mr-2">
                <i className="text-white tio-fastfood"></i>
              </span>
              <h5 className="text-xl font-semibold">Item Info</h5>
            </div>
            {/* Default Language Form */}
            <TabComponent2 placeholder={"betterBody"} />
            {/* English Language Form (Hidden by default) */}
            {/* Add similar styling for other language forms if needed */}
          </div>
        </Card>

        {/* Item Image Section */}
        <div className="w-full md:w-1/2">
          <Card className="bg-white rounded-lg p-6">
            <div className="flex items-center mb-4">
              <span className="bg-blue-500 rounded-full p-2 mr-3">
                <i className="text-white tio-image"></i>
              </span>
              <h5 className="text-xl font-semibold">Item Image</h5>
            </div>
            <div className="text-center mb-4">
              <img
                className="w-48 h-48 object-cover rounded-md mx-auto"
                id="viewer"
                src="https://6ammart-admin.6amtech.com/storage/app/public/campaign/2023-10-19-6530bc90a4ac9.png"
                alt="campaign image"
                onError={(e) => {
                  e.target.src =
                    "https://6ammart-admin.6amtech.com/public/assets/admin/img/100x100/2.png";
                }}
              />
            </div>
            <div className="text-center">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Choose Image
              </label>
              <div className="flex justify-center">
                <label className="flex items-center px-4 py-2  text-black border rounded-md cursor-pointer ">
                  <i className="mr-2 tio-add"></i>

                  <input
                    type="file"
                    className=""
                    accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className=" py-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h5 className="text-xl font-bold text-gray-800 flex items-center">
              <span className="mr-2">
                <i className="tio-dashboard-outlined text-primary"></i>
              </span>
              Item Details
            </h5>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="store_id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Store
                </label>
                <select
                  name="store_id"
                  id="store_id"
                  className="mt-1 px-2 block w-full border-gray-300 rounded-md py-4 border focus:ring-primary focus:border-primary sm:text-sm"
                  disabled
                >
                  <option value="5" selected>
                    Family supermarket
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="total_stock"
                  className="block text-sm font-medium text-gray-700"
                >
                  Total stock
                </label>
                <input
                  type="number"
                  name="current_stock"
                  id="quantity"
                  className="mt-1 px-2 block w-full border-gray-300 rounded-md py-4 border focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="maximum_cart_quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Maximum cart quantity
                </label>
                <input
                  type="number"
                  name="maximum_cart_quantity"
                  id="cart_quantity"
                  className="mt-1 px-2 block w-full border-gray-300 rounded-md py-4 border focus:ring-primary focus:border-primary sm:text-sm"
                 
                  min="0"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="category_id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                 
                  renderInput={(params) => (
                    <TextField {...params} label="" />
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="sub_categories"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sub category
                </label>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                 
                  renderInput={(params) => (
                    <TextField {...params} label="" />
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="veg"
                  className="block text-sm font-medium text-gray-700"
                >
                  Item type
                </label>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                 
                  renderInput={(params) => (
                    <TextField {...params} label="" />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h5 className="text-xl font-bold text-gray-800 flex items-center">
            <span className="mr-2">
              <i className="tio-dollar-outlined text-primary"></i>
            </span>
            Amount
          </h5>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="mt-1 block border py-4 px-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Enter price (e.g., 100)"
                min="1"
                max="100000"
                step="0.01"
                required
            
              />
            </div>
            <div>
              <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
                Discount
                <span className="input-label-secondary text--title" data-tip="tooltip" data-for="discountTip">
                  <i className="tio-info-outlined ml-1 text-gray-400"></i>
                </span>
              </label>
              <input
                type="number"
                name="discount"
                id="discount"
                className="mt-1 border py-4 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Enter discount (e.g., 10)"
                min="0"
                max="100000"
                defaultValue="0"
              />
            </div>
            <div>
              <label htmlFor="discount_type" className="block text-sm font-medium text-gray-700">
                Discount Type
              </label>
              <select
                name="discount_type"
                id="discount_type"
                className="mt-1 block border py-4 px-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                defaultValue="percent"
              >
                <option value="percent">Percent</option>
                <option value="amount">Amount</option>
              </select>
            </div>
            <div>
              <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
                Unit
              </label>
              <select
                name="unit"
                id="unit"
                className="mt-1 block border py-4 px-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                defaultValue="1"
              >
                <option value="1">Kg</option>
                <option value="2">Pcs</option>
                <option value="3">Ltr</option>
                <option value="4">Pack</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className=" py-6 w-full shadow-md bg-white mt-4 rounded-md">
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
                <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Box sx={{ minWidth: 1200 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Attribute
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label=""
                        onChange={handleChange}
                      >
                        <MenuItem value={"color"}>Color</MenuItem>
                        <MenuItem value={"type"}>Type</MenuItem>
                        <MenuItem value={"Size"}>Size</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 mt-4">
      <div className="card shadow-lg rounded-lg overflow-hidden">
        <div className="card-header bg-white py-4">
          <h5 className="card-title flex items-center">
            <span className="card-header-icon">
              <i className="tio-date-range text-primary"></i>
            </span>
            <span>Time schedule</span>
          </h5>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date_from" className="block text-sm font-medium text-gray-700">
                Start date
              </label>
              <input
                type="date"
                id="date_from"
                className="mt-1 py-4 px-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                name="start_date"
                defaultValue="2023-10-19"
                required
              />
            </div>
            <div>
              <label htmlFor="date_to" className="block text-sm font-medium text-gray-700">
                End date
              </label>
              <input
                type="date"
                id="date_to"
                className="mt-1 py-4 px-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                name="end_date"
                defaultValue="2024-12-19"
                min="2023-10-19"
                required
              />
            </div>
            <div>
              <label htmlFor="start_time" className="block text-sm font-medium text-gray-700">
                Start time
              </label>
              <input
                type="time"
                id="start_time"
                className="mt-1 py-4 px-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                name="start_time"
                defaultValue="07:19"
              />
            </div>
            <div>
              <label htmlFor="end_time" className="block text-sm font-medium text-gray-700">
                End time
              </label>
              <input
                type="time"
                id="end_time"
                className="mt-1 py-4 px-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                name="end_time"
                defaultValue="23:19"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    
    </>
  );
};

export default UpdateItemCampaignsEdite;
