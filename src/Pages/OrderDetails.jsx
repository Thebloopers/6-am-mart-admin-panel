import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const OrderDetails = () => {
  return (
    <>
      <div className="page-header">
        <div className="flex items-center">
          <div className="flex-1 mb-2 sm:mb-0">
            <h1 className="page-header-title flex items-center">
              <span className="page-header-icon">
                <img
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/shopping-basket.png"
                  className="w-5 mx-2"
                  alt=""
                />
              </span>
              <span>
                Order details{" "}
                <span className="badge badge-soft-dark rounded-full ml-1">
                  1
                </span>
              </span>
            </h1>
          </div>
          <div className="flex sm:ml-4">
            {/* <a  className="btn-icon btn-sm btn-soft-secondary rounded-full mr-1" data-toggle="tooltip" data-placement="top" title="Previous order">
            <i className="tio-chevron-left"></i>
          </a>
          <a  className="btn-icon btn-sm btn-soft-secondary rounded-full" data-toggle="tooltip" data-placement="top" title="Next order">
            <i className="tio-chevron-right"></i>
          </a> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-8">
        <div className="col-lg-8 order-print-area-left shadow-md p-4 w-full md:w-2/3 border rounded-md">
          <div className="card mb-3 mb-lg-5">
            <div className="card-header border-0 flex-wrap">
              <div className="order-invoice-left flex justify-between ">
                <div>
                  <h1 className="page-header-title flex items-center gap-5px font-bold">
                    Order #100099
                  </h1>
                  <span className="mt-2 flex items-center gap-5px">
                    <i className="tio-date-range"></i>
                    02 Jan 2024 04:54:pm
                  </span>
                  <h6 className="mt-2 pt-1 mb-2 flex items-center gap-5px">
                    <i className="tio-shop"></i>
                    <span>Store</span> <span>:</span>{" "}
                    <span className="badge badge-soft-primary border-[#5CF7FF] bg-[#E5FEFF] text-[#24BAC3]">
                      Online market
                    </span>
                  </h6>
                  <div className="hs-unfold mt-1">
                    <h5>
                      <button className="btn btn-outline hover:border-[#20A7AF] border-[#20A7AF] text-[#24bac3] hover:text-[#E5E5E5] hover:bg-[#20A7AF] flex items-center gap-5px">
                        <i className="tio-poi"></i>
                        Show locations on map
                      </button>
                    </h5>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <Link className="btn bg-[#24bac3] hover:bg-[#20A7AF] text-[white] hover:text-[#E5E5E5] font-regular flex items-center gap-5px">
                    <i className="tio-print mr-1"></i>
                    <span>Print invoice</span>
                  </Link>
                </div>
              </div>
              <div className="order-invoice-right mt-3 mt-sm-0">
                <div className="text-right mt-3 order-invoice-right-contents text-uppercase space-y-4">
                  <h6>
                    <span>Status</span> <span>:</span>
                    <span className="badge badge-soft-success border-[#5CDDC7] text-[#00C9A7] bg-[#E5F9F6] ml-4 ml-sm-3 ">
                      Delivered
                    </span>
                  </h6>
                  <h6 className="text-uppercase">
                    <span>Payment method</span> <span>:</span>
                    <span className="ml-4">Wallet</span>
                  </h6>
                  <h6>
                    <span>Reference code</span> <span>:</span>
                    <button className="btn btn-outline border-[#5CDDC7] text-[#00C9A7] hover:bg-[#24BAC3] btn-sm ml-4">
                      Add
                    </button>
                  </h6>
                  <h6 className="text-uppercase">
                    <span>Order Type</span>
                    <span>:</span>
                    <span className="badge badge-soft-primary m-0 border-[#B5EBEF] bg-[#E5FEFF] text-[#24BAC3] ml-4">
                      Delivery
                    </span>
                  </h6>
                  <h6>
                    <span>Payment status</span>
                    <span>:</span>
                    <span className="badge badge-soft-success border-[#5CDDC7] text-[#00C9A7] bg-[#E5F9F6] ml-4 ml-sm-3">
                      Paid
                    </span>
                  </h6>
                </div>
              </div>
            </div>

            <div className="card-body px-0">
              <div className="table-responsive">
                <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table dataTable no-footer mb-0">
                  <thead className="thead-light bg-[#F8FAFD] text-[black]">
                    <tr>
                      <th>#</th>
                      <th>Item details</th>
                      <th className="text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>1</div>
                      </td>
                      <td>
                        <div className="flex">
                          <a className="">
                            <img
                              className=" rounded  w-[82px]"
                              src="https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239a7117c441.png"
                              data-onerror-image="https://6ammart-admin.6amtech.com/public/assets/admin/img/100x100/2.png"
                              alt="Image Description"
                            />
                          </a>
                          <div className="media-body">
                            <div>
                              <strong className="line--limit-1">
                                Suruchi Premium Green Chili Pickle
                              </strong>
                              <h6>3 x $ 90.00</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div>
                          <h5>$ 270.00</h5>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mx-3"></div>
              <div className="flex justify-end mb-3 mt-4 mx-0">
                <div className="col-md-9 col-lg-8">
                  <ul className="text-right  space-y-4 font-bold">
                    <li className="flex  justify-between">
                      <div className="col-6">Items price:</div>
                      <span className="col-6 font-light">$ 270.00</span>
                    </li>
                    <li className="flex  justify-between">
                      <div className="col-6">Subtotal (TAX Included):</div>
                      <div className="col-6 font-light ">$ 270.00</div>
                    </li>
                    <li className="flex  justify-between">
                      <div className="col-6">Discount:</div>
                      <div className="col-6 font-light">- $ 21.60</div>
                    </li>
                    <li className="flex  justify-between">
                      <div className="col-6">Coupon discount:</div>
                      <div className="col-6 font-light">- $ 0.00</div>
                    </li>
                    <li className="flex  justify-between">
                      <div className="col-6">Delivery fee:</div>
                      <div className="col-6 font-light">+ $ 600.00</div>
                    </li>
                    <hr className="col-12" />
                    <li className="flex  justify-between">
                      <div className="col-6">Delivery man tips:</div>
                      <div className="col-6 font-light">+ $ 0.00</div>
                    </li>
                    <li className="flex  justify-between">
                      <div className="col-6">Additional Charge:</div>
                      <div className="col-6 font-light">+ $ 10.00</div>
                    </li>
                    <li className="flex  justify-between">
                      <div className="col-6">Total:</div>
                      <div className="col-6 font-light">$ 858.40</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 md:pl-4 space-y-4">
          {/* Deliveryman Card */}
          <div className="card mt-2 shadow-md border">
            <div className="card-body">
              <h5 className="card-title mb-3 flex items-center gap-5px">
                <span className="card-header-icon">
                 <FaUser/>
                </span>
                <span>Deliveryman</span>
              </h5>
              {/* Deliveryman Information */}
              <Link className="media align-items-center deco-none customer--information-single flex gap-4">
                <div className="avatar avatar-circle w-20 h-20">
                  <img
                    className="avatar-img onerror-image"
                    src="https://6ammart-admin.6amtech.com/storage/app/public/delivery-man/2022-09-29-63351bf73345f.png"
                    alt="Image Description"
                  />
                </div>
                <div className="media-body">
                  <span className="text-body block text-hover-primary mb-1">
                    Jhon Doe
                  </span>
                  <span className="text--title font-semibold flex items-center">
                    <i className="tio-shopping-basket-outlined mr-2"></i>
                    15 Orders delivered
                  </span>
                  <span className="text--title font-semibold flex items-center">
                    <i className="tio-call-talking-quiet mr-2"></i>
                    +8**********
                  </span>
                  <span className="text--title font-semibold flex items-center">
                    <i className="tio-email-outlined mr-2"></i>
                    d**********@6amtech.com
                  </span>
                </div>
              </Link>
              <hr />
              {/* Last Location */}
              <div className="flex justify-between items-center">
                <h5>Last location</h5>
              </div>
              <span className="block">
                <a
                  target="_blank"
                  href="https://maps.google.com/maps?z=12&amp;t=m&amp;q=loc:23.8373522+90.3756587"
                >
                  <i className="tio-map"></i> R9PG+XCH, Dhaka District, BD
                </a>
              </span>
            </div>
          </div>
          {/* Customer Information Card */}
          <div className="card mt-2 shadow-md border">
            <div className="card-body pt-3">
              <h5 className="card-title mb-3 flex items-center gap-5px">
                <span className="card-header-icon">
             <FaUser/>
                </span>
                <span>Customer information</span>
              </h5>
              {/* Customer Information */}
              <Link className="media align-items-center deco-none customer--information-single flex gap-4">
                <div className="avatar avatar-circle w-20 h-20 rounded-full">
                  <img
                    className="avatar-img onerror-image"
                    data-onerror-image="https://6ammart-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"
                    alt="Image Description"
                  />
                </div>
                <div className="media-body">
                  <span className="fz--14px text--title font-semibold text-hover-primary block">
                    Marjahan Sultana
                  </span>
                  <span>4 Orders</span>
                  <span className="text--title font-semibold flex items-center">
                    <i className="tio-call-talking-quiet mr-2"></i>
                    <span>+8**********</span>
                  </span>
                  <span className="flex items-center">
                    <i className="tio-email mr-2"></i>
                    <span>m**********@gmail.com</span>
                  </span>
                </div>
              </Link>
              <hr />
              {/* Delivery Information */}
              <div className="delivery--information-single mt-3">
                <h5 className="card-title mb-3 flex items-center gap-5px">
                  <span className="card-header-icon">
                    <i className="tio-user"></i>
                  </span>
                  <span>Customer info</span>
                </h5>
                <span className="name">Name</span>
                <span>:</span>
                <span className="info ml-4">Marjahan Sultana</span>
                <br />
                <span className="name">Contact</span>
                <span>:</span>
                <a className="deco-none info ml-4" href="tel:+8*********000">
                  +8*********000
                </a>
                <hr />
                <div className="mt-4">
                  <Link
                    target="_blank"
                    className="flex items-center text-[#00868F]"
                  >
                    <i className="tio-poi"></i>Unknown Location Found
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-2 mt-2 shadow-md border">
            <div className="card-header border-0 text-center pb-0 flex justify-between p-4 font-bold">
              <h4 className="m-0">Delivery proof</h4>
              <button
                className="btn btn-outline border-[#009BC5] hover:border-[#009BC5] hover:bg-[#24BAC3] text-[#009BC5]  btn-sm"
               
              >
                Add
              </button>
            </div>
            <div className="card-body pt-2">
              {/* Add your card body content here */}
            </div>
          </div>

          <div className="card mt-2 shadow-md">
            <div className="card-body">
              <h5 className="card-title mb-3 flex items-center gap-5px">
                <span className="card-header-icon">
                <FaUser/>
                </span>
                <span>Store Information</span>
              </h5>
              {/* Deliveryman Information */}
              <Link className="media align-items-center deco-none customer--information-single flex gap-4">
                <div className="avatar avatar-circle w-20 h-20">
                  <img
                    className="avatar-img onerror-image"
                    src="https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-6239604ade310.png"
                    alt="Image Description"
                  />
                </div>
                <div className="media-body">
                  <span className="text-body block text-hover-primary mb-1">
                    Online market
                  </span>
                  <span className="text--title font-semibold flex items-center">
                    <i className="tio-shopping-basket-outlined mr-2"></i>
                    15 Orders
                  </span>
                  <span className="text--title font-semibold flex items-center">
                    <i className="tio-call-talking-quiet mr-2"></i>
                    +8**********
                  </span>
                  <span className="text--title font-semibold flex items-center">
                    <i className="tio-email-outlined mr-2"></i>
                    d**********@6amtech.com
                  </span>
                </div>
              </Link>
              <hr />
              {/* Last Location */}

              <span className="block text-[#00868F]">
                <Link target="_blank">
                  <i className="tio-map "></i> R9PG+XCH, Dhaka District, BD
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
