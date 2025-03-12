import React from 'react'

const TrackOrderDetail = () => {
  return (
    <div className='max-w-7xl mx-auto p-6'>
        <div className='flex  justify-between items-center p-6 bg-[#FDFAE7] border border-[#F7E99E]'>
          <div>
            <h1 className='text-xl leading-7 txt-color'>#96459761</h1>
            <div className='flex items-center mt-2 '>
              <p className='text-sm leading-5 text-[#475156] '>4 Products</p>
              <p className='text-sm px-2 leading-5 text-[#475156] '>.</p>
              <p className='text-sm leading-5 text-[#475156] '>Order Placed in 17 Jan, 2021 at 7:32 PM</p>
            </div>
          </div>
          <div>
            <h1 className='font-semibold text-[28px] leading-8 text-[#2DA5F3]'>$1199.00</h1>
          </div>

          <p className='my-6 text-sm leading-5 text-[#475156] '>Order expected arrival <span className='font-medium text-sm txt-color'>23 Jan, 2021</span> </p>


        </div>

    </div>
  )
}

export default TrackOrderDetail