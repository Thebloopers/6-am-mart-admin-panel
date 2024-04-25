import { Switch } from '@mui/material'
import React from 'react'
import { GoGear } from 'react-icons/go'

const OrderSettings = () => {
  return (
    <div className='h-full w-auto'>
      <div>
        <div className='flex flex-col shadow-lg'>
          <div className='flex flex-wrap px-5 py-5 text-[1.8vh] justify-around gap-4'>
            <div className='flex items-center w-[32%] justify-between border-[1px] rounded px-3'>
              <h1>Order Delivery Verification</h1>
              <Switch size='medium' />
            </div>
            <div className='flex items-center w-[32%] justify-between border-[1px] rounded px-3'>
              <h1>Place Order By Prescription</h1>
              <Switch size='medium' />
            </div>
            <div className='flex items-center w-[32%] justify-between border-[1px] rounded px-3'>
              <h1>Home Delivery</h1>
              <Switch size='medium' />
            </div>
            <div className='flex items-center w-[32%] justify-between border-[1px] rounded px-3'>
              <h1>Takeaway</h1>
              <Switch size='medium' />
            </div>
            <div className='flex items-center w-[32%] justify-between border-[1px] rounded px-3'>
              <h1>Schedule Order</h1>
              <Switch size='medium' />
            </div>
            <div className='flex flex-col  w-[32%] justify-between'>
              <h1>Scheduled Order</h1>
              <div className='gap-3 flex'>
              <input className='rounded border-[1px] h-10 w-full' type="text" />
                <select className='border-[1px] rounded px-1' name="" id="">
                  <option value="Minutes">Min</option>
                  <option value="Hours">Hours</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSettings