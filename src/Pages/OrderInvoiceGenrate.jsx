import React from 'react'

const OrderInvoiceGenrate = () => {
    const printDiv = (divName) => {
        const printContents = document.getElementById(divName).innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
      };
  return (
    
    <div className="content container mx-auto py-8">
    <div className="flex justify-center items-center mb-6">
       
          <div className="space-x-2">
            <button
              className="btn bg-[#006161] text-white hover:bg-[#007981]"
              onClick={() => printDiv("printableArea")}
            >
              Print Invoice
            </button>
            <button
              
              className=" btn  btn-error text-white "
            >
              Back
            </button>
          </div>
        </div>
    <div id="printableArea">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md px-8 py-6">
      <h1 className="text-xl font-bold">Order Invoice</h1>
        
        <hr className="my-4 non-printable" />
        <div className="flex flex-col justify-center items-center mb-6">
          <div className=' flex flex-col items-center text-center '>
            <img
              className="w-[50px]"
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/invoice-logo.png"
              alt="Company Logo"
            />
            <div className="text-sm mt-2">
              <h2 className="font-semibold">Online Market</h2>
              <p>House: 00, Road: 00, City-000, Country</p>
              <p>Phone: 0**********</p>
            </div>
          </div>
          <div className="text-center">
            <img
              className="w-[400px] h-[15px]"
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/invoice-star.png"
              alt="Star"
            />
            <h2 className="text-lg font-semibold">Cash Receipt</h2>
            <img
              className="w-[400px] h-[15px]"
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/invoice-star.png"
              alt="Star"
            />
          </div>
          <div>
            <p className="text-sm">Order id: 100099</p>
            <p className="text-sm">02/Jan/2024 04:54:pm</p>
          </div>
        </div>
        <div className="mb-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Customer Details</h3>
          <p>Contact Name: Marjahan Sultana</p>
          <p>Phone: +8*********000</p>
          <p>Address: Unknown Location Found</p>
        </div>
        <table className="w-full border-collapse mb-6 border">
          <thead>
            <tr className=''>
              <th className="text-left border">Description</th>
              <th className="text-center border">Quantity</th>
              <th className="text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left border">
                Suruchi Premium Green Chili Pickle <br />
                <div className="price">$ 90.00</div>
              </td>
              <td className="text-center border">3</td>
              <td className="text-right border">$ 270.00</td>
            </tr>
          </tbody>
        </table>
        <div className="mb-6 border p-2">
          <h3 className="text-lg font-semibold mb-2">Summary</h3>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-start">
            <div className=''>
              <dt className=''>Subtotal (TAX Included):
              <span className=''>$ 270.00</span>
              </dt>
              <dt className=''>Discount:
              <span>- $ 21.60</span>
              </dt>
              <dt>Coupon Discount:
              <span>- $ 0.00</span>
              </dt>
            </div>
            <div>
              <dt>Delivery Man Tips:
              <span>+ $ 0.00</span>
              </dt>
              <dt>Delivery Charge:
              <span>$ 600.00</span>
              </dt>
              <dt>Additional Charge:
              <span>+ $ 10.00</span>
              </dt>
              <dt className="font-semibold">Total:
              <span className="font-semibold">$ 858.40</span>
              </dt>
            </div>
          </dl>
          <div className="flex justify-between mt-4 border-t">
            <div className='flex gap-8'>
              <p>Paid by: Wallet</p>
              <p>Amount: 858.4</p>
              <p>Change: 0</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="h-2"
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/invoice-star.png"
            alt="Star"
          />
          <h2 className="text-lg font-semibold">THANK YOU</h2>
          <img
            className="h-2"
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/invoice-star.png"
            alt="Star"
          />
          <div className="text-sm mt-2 text-center">
            © Bootsup Digital .
            <span className="block">2021-2023 BoostUp Digital.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OrderInvoiceGenrate
