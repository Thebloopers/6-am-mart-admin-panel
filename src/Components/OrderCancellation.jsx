import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import OrderTable from './OrderTable'
import NewStore from '../Pages/NewStore'
import ToggleButton from '../Components/ToggleButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const OrderCancellation = () => {

    const tableData = [

        {
          "id": 1,
          "storeName": "Ordered the wrong food",
          "imageUrl": "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-62395ac6e1750.png",
          "ratings": 'Customer',
          "totalProducts": 4,
          "totalOrders": 2,
          "statusChecked": true,
          "actionUrl": "https://6ammart-admin.6amtech.com/admin/store/recommended-store-remove/1"
        },
        {
            "id": 2,
            "storeName": "Bad weather, can't deliver.",
            "imageUrl": "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-62395ac6e1750.png",
            "ratings": 'Deliveryman',
            "totalProducts": 4,
            "totalOrders": 2,
            "statusChecked": true,
            "actionUrl": "https://6ammart-admin.6amtech.com/admin/store/recommended-store-remove/1"
          },
      
      ];



    return (
        <div className='h-full w-auto'>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-2 items-center'>
                    <FaRegFileAlt />
                    <h1 className='font-semibold'>Order Cancellation Messages</h1>
                </div>
                <div className='px-3 py-3 shadow rounded flex flex-col'>
                    <div className='flex gap-3 text-[2vh]'>
                        <div className='flex flex-col gap-1 w-full'>
                            <h1>Order Cancellation Reason (Default)</h1>
                            <input placeholder='Ex: Item is Broken' className='border-[1px] rounded px-3 w-full h-10' type="text" />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <h1>User Type</h1>
                            <select className='border-[1px] h-full rounded px-3' name="" id="">
                                <option value="Admin">Admin</option>
                                <option value="Store">Store</option>
                                <option value="Customer">Customer</option>
                                <option value="Deliveryman">Deliveryman</option>
                            </select>
                        </div>
                    </div>
                        <div className='w-fit flex items-end gap-3 text-[1.9vh] self-end pt-5 font-semibold'>
                            <button className='px-10 py-2 rounded-md bg-gray-100'>Reset</button>
                            <button className='px-10 py-2 rounded-md bg-cyan-500 text-white'>Update</button>
                        </div>
                        <div className='overflow-x-auto max-w-[350px] md:max-w-full mt-4 shadow-sm'>
                <table className="table-auto min-w-full border-collapse  border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr className=' text-sm'>
                      <th className=" px-4 py-2 ">Sl</th>
                      <th className=" px-4 py-2 ">Reason</th>
                      <th className=" px-4 py-2 ">Type</th>
                      <th className=" px-4 py-2">Status</th>
                      {/* <th className=" px-4 py-2 ">Featured</th> */}
                      {/* <th className=" px-4 py-2  text-center">Status</th> */}
                      <th className=" px-4 py-2  text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody id="set-rows  ">
                    {tableData?.map(item => (
                      <tr key={item.id}>
                        <td><span className="ml-5">{item.id}</span></td>
                        <td >
                          <div className='flex items-center gap-3 ml-5'>
                            <div>
                              {/* <img className=" circle w-10" data-onerror-image="https://6ammart-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg" src={item.imageUrl} /> */}
                            </div>

                            <div className="   ">
                              <div className="text-sm text-center ">{item.storeName}</div>
                              {/* <div className="font-light text-sm">Id: {item.id}</div> */}
                            </div>


                          </div>
                        </td>

                        <td className='flex text-center gap-1 items-center ml-5 p-3'><i className="  "></i>{item.ratings}</td>
                        {/* <td className=' text-center'>{item.totalProducts}</td> */}
                        {/* <td className='text-center'> {item.totalOrders}</td> */}
                        <td className=''>
                          <label className="toggle-switch flex justify-center items-center toggle-switch-sm  " htmlFor={`publishCheckbox${item.id}`}>
                            <ToggleButton id={`publishCheckbox${item.id}`} checked={item.statusChecked} />
                          </label>
                        </td>


                        <td className="py-3 px-2 m-2   flex items-center justify-center ">
                          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded md:mr-2">
                            <EditIcon />
                          </button>
                          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3  rounded">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* <NewStore /> */}
                </div>
            </div>
        </div>
    )
}

export default OrderCancellation