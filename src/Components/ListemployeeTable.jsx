import SearchIcon from "@mui/icons-material/Search";
import ExportButton from "./ExportButton";



const ListemployeeTable = () => {
    const tableData = [

        {
            img: "https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
        }

    ];
  return (
<div className="overflow-x-auto max-w-[340px] py-2 px-3 mt-4 min-h-[400px]  border-gray-300 md:max-w-full relative">
            <div className="flex items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 mr-4">
                </h2>
                {/* <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                    0
                </span> */}
                <form className="ml-auto flex items-center">
                    <input
                        id="datatableSearch"
                        type="search"
                        name="search"
                        className="form-input border border-gray-300 rounded-l-lg px-4 py-3"
                        placeholder="Ex: Search Title ..."
                        aria-label="Search here"
                    />
                    <button
                        type="submit"
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-4 py-3 rounded-r-lg "
                    >
                        <SearchIcon />

                    </button>
                </form>

                <ExportButton />
            </div>
            <table className="table-auto min-w-full border-collapse border border-gray-200">
                <thead className="bg-gray-100 text-[#677788]">
                    <tr>
                        <th className="px-4 text-[13px] py-2 text-left">SI</th>
                        <th className="px-4 text-[13px]  py-2 flex gap-1 justify-center">
                            <span className="">id</span>
                           
                        </th>


                        <th className="px-4 text-[13px] py-2 text-left">Created At	</th>
                        <th className="px-4 text-[13px] py-2 text-left">Disburse Amount	</th>
                        <th className="px-4 text-[13px] py-2 text-left">Payment Method	</th>
                        <th className="px-4 text-[13px] py-2 text-left">Status</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {tableData.map((data, index) => (

                        <div className="flex py-8 items-center justify-center top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 absolute" key={index}>/
                            <div>

                                <img className="h-40" src={data.img} alt="" />
                                <p className="text-center">No data found</p>
                            </div>
                        </div>

                    ))}
                </tbody>
                {/* <div className="absolute left-96">
        <img className="h-[30vh]" src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg" alt="" />
      </div> */}
            </table>


        </div>
          )
}

export default ListemployeeTable