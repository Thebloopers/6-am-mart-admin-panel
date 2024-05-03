import React from 'react'

const BasicCampaingsEdite = () => {
  return (
    <>
     <div className="page-header">
      <h1 className="page-header-title flex items-center">
        <span className="page-header-icon mr-2">
          <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/campaign.png" className="w-8" alt="" />
        </span>
        <span>
          Update campaign
        </span>
      </h1>
    </div>

    <div className="max-w-full  bg-white rounded-lg shadow-lg p-6 mt-8">
      <form action="https://6ammart-admin.6amtech.com/admin/campaign/basic/update/6" method="post" id="campaign-form" encType="multipart/form-data">
        <input type="hidden" name="_token" value="Jn2MAiS454fBbUWpiTPISbCHAMRsYr7PPzBB68My" autoComplete="off" />
        <ul className="flex  space-x-4 mb-6">
         
          <li className="nav-item">
            <a className="nav-link lang_link" href="#" id="en-link">English(EN)</a>
          </li>
        
        </ul>
        <div className="lang_form" id="default-form">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="default_title">Title (Default)</label>
            <input type="text" name="title[]" id="default_title" className="mt-1 py-4 border px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="New campaign" value="Get Your Grocery Items" fdprocessedid="um9y3" />
          </div>
          <input type="hidden" name="lang[]" value="default" />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="exampleFormControlInput1">Short description (Default)</label>
            <textarea type="text" name="description[]" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border px-2 shadow-sm sm:text-sm border-gray-300 rounded-md ckeditor" style={{ height: '93px' }}>Get Your Grocery Items</textarea>
          </div>
        </div>
        {/* Other language forms (EN and AR) go here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="date_from">Start date</label>
            <input type="date" id="date_from" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border py-3 px-2 shadow-sm sm:text-sm border-gray-300 rounded-md" required name="start_date" value="2023-10-19" max="2023-12-30" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="date_to">End date</label>
            <input type="date" id="date_to" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full  border py-3 px-2 shadow-sm sm:text-sm border-gray-300 rounded-md" required name="end_date" value="2023-12-30" min="2023-10-19" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="start_time">Daily start time</label>
            <input type="time" id="start_time" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full  border py-3 px-2 shadow-sm sm:text-sm border-gray-300 rounded-md" name="start_time" value="07:40" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="end_time">Daily end time</label>
            <input type="time" id="end_time" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm  border py-3 px-2 sm:text-sm border-gray-300 rounded-md" name="end_time" value="22:41" />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Campaign image <span className="text-red-500">*</span> ( Ratio 900x300 )
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <img className="h-40 w-auto mx-auto" id="viewer" src="https://6ammart-admin.6amtech.com/storage/app/public/campaign/2023-10-19-6530a56f60ee3.png" data-onerror-image="https://6ammart-admin.6amtech.com/public/assets/admin/img/900x400/img1.jpg" alt="campaign image" />
              <div className="flex text-sm text-gray-600  border py-3 px-2">
                <label htmlFor="customFileEg1" className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                  {/* <span className=''>Upload a file</span> */}
                  <input type="file" name="image" id="customFileEg1" className="" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button type="reset" id="reset_btn" className="mr-2 py-2 px-4 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Reset</button>
          <button type="submit" className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#24bac3] hover:bg-[#20A7AF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Update</button>
        </div>
      </form>
    </div>
  



        

      
    </>
  )
}

export default BasicCampaingsEdite
