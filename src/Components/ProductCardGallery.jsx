import React from 'react';

function ProductCardGallery() {
  return (
    <div className="col-12 mt-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <img className="object-cover w-full md:h-20" src="https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-623992773ee73.png" alt="Product Image" />
            </div>
            <div className='text-xl font-semibold mb-2 md:ml-8 md:w-3/4'>Orange Imported (± 50 gm)</div>
            <div className='flex justify-end w-full items-center'>
              <div className="text-xl font-semibold mb-2 flex-wrap"></div>
              <button className="outline outline-2 outline-offset-2 ... p-2 px-8 rounded-sm text-[#24bac3] hover:bg-[#20A7AF] hover:text-white">Use this product info</button>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-normal mb-2">General Information</h4>
              <ul className="list-disc list-inside">
                <li><strong>Category:</strong> Fruits & Vegetables</li>
                <li><strong>Sub Category:</strong> Fresh Fruits</li>
                <li><strong>Is Organic:</strong> No</li>
                <li><strong>Unit:</strong> Kg</li>
              </ul>
            </div>
            <div>
              <h4 className="font-normal mb-2">Available Variations</h4>
              {/* Add content for available variations */}
            </div>
            <div>
              <h4 className="font-normal mb-2">Tags</h4>
              <p>Imported, Orange</p>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          <div>
            <h4 className="font-normal mb-2">Description</h4>
            <p className="text-gray-600">The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae, native to China. It is also called sweet orange.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardGallery;
