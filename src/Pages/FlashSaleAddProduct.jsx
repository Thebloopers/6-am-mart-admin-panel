import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchBox from "../Components/SearchBox";
import ToggleButton from "../Components/ToggleButton";
import { MdDelete } from "react-icons/md";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  { label: "The Lord of the Rings: The Return of the King", year: 2003 },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  { label: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { label: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  { label: "The Lord of the Rings: The Two Towers", year: 2002 },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  { label: "Star Wars: Episode IV - A New Hope", year: 1977 },
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
  { label: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", year: 1964 },
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
  { label: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
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
  { label: "Eternal Sunshine of the Spotless Mind", year: 2004 },
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

const FlashSaleAddProduct = () => {
    const initialData = [
        {
          id: 1,
          productName: 'Orange Imported (± 50 gm)',
          store: 'Organic Shop',
          stock: 20,
          qtySold: 4,
          price: '$ 2.40',
          status: true,
         
        },
        // Add more data here as needed
      ];
    
      const [tableData, setTableData] = useState(initialData);
    
  return (
    <>
 <div className="page-heade py-4 px-6">
        <h1 className="page-header-title flex items-center text-xl font-bold">
          <span className="page-header-icon mr-2">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/condition.png"
              className="w-6 h-6"
              alt=""
            />
          </span>
          <span>Flash sale product setup</span>
        </h1>
      </div>

    <div className="w-full  p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <form
          className="space-y-6"
        >
          
          <input type="hidden" name="flash_sale_id" value="1" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="mb-4">
              <label htmlFor="choice_item" className="block text-gray-700 mb-2">
                Select item
              </label>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                renderInput={(params) => <TextField {...params} label="" placeholder="---Select---" />}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="total_stock" className="block text-gray-700 mb-2">
                Total stock
              </label>
              <input
                type="number"
                placeholder="Ex: 10"
                className="block w-full  py-4 px-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-indigo-500"
                name="stock"
                min="0"
                id="quantity"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="discount_type" className="block text-gray-700 mb-2">
                Discount type
              </label>
              <select
                name="discount_type"
                id="discount_type"
                className="block w-full  py-[18px] px-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-indigo-500"
              >
                <option value="percent">Percent</option>
                <option value="amount">Amount</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="discount_amount" className="block text-gray-700 mb-2">
                Discount
              </label>
              <input
                type="number"
                min="0"
                max="9999999999999999999999"
                value="0"
                step="0.001"
                name="discount"
                className="block w-full  py-4 px-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-indigo-500"
                id="discount_amount"
                placeholder="Ex: 100"
              />
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <button
              type="reset"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400 mr-2"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#24bac3] text-white hover:text-[#E5E5E5] rounded-md hover:bg-[#20A7AF] focus:outline-none focus:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

    <div className="mt-8 border shadow-md bg-white rounded-md">
      <div className="card ">
        <div className="card-header py-2 border-0">
          <div className="search--button-wrapper flex flex-wrap justify-between p-2">
            <div className="card-title">
              Flash sale product list
              <span className="badge badge-soft-dark ml-2" id="itemCount">10</span>
            </div>
            <div>
            <form className="search-form">
              <div className="input-group input--group">
                <SearchBox/>
              </div>
            </form>

            </div>
          </div>
        </div>

        <div className="table-responsive datatable-custom max-w-[375px] overflow-auto md:max-w-full">
          <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options='{"order":[],"orderCellsTop":true,"paging":false}'>
            <thead className="bg-[#F8FAFD]">
              <tr className="text-center">
                <th className="border-0">Sl</th>
                <th className="border-0">Product</th>
                <th className="border-0">Store</th>
                <th className="border-0">Stock for this sale</th>
                <th className="border-0">Qty Sold</th>
                <th className="border-0">Price</th>
                <th className="border-0">Status</th>
                <th className="border-0">Action</th>
              </tr>
            </thead>
            <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{item.productName}</td>
              <td className="text-center">{item.store}</td>
              <td className="text-center">{item.stock}</td>
              <td className="text-center">{item.qtySold}</td>
              <td className="text-center">{item.price}</td>
              <td className="text-center">
                <ToggleButton
                  type="checkbox"
                  defaultChecked={item.status}
                  onChange={() => {
                    // Toggle status logic here
                  }}
                />
              </td>
              <td className="text-center">
                <button
                  className="btn btn-sm btn-outline btn-error"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this item?')) {
                      // Perform delete operation
                      // You can use fetch or axios to make a DELETE request
                      fetch(item.deleteUrl, { method: 'DELETE' })
                        .then(response => {
                          if (response.ok) {
                            // Remove item from tableData state
                            setTableData(prevData =>
                              prevData.filter(dataItem => dataItem.id !== item.id)
                            );
                          } else {
                            // Handle error if DELETE request fails
                            console.error('Failed to delete item');
                          }
                        })
                        .catch(error => console.error('Error:', error));
                    }
                  }}
                >
                 <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
          </table>
        </div>
        <hr />
        <div className="page-area">
          {/* Pagination or additional controls */}
        </div>
      </div>
    </div>
    </>
  );
};

export default FlashSaleAddProduct;
