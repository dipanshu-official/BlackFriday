import React from 'react'
import img from '../assets/TrackOrderDetails/Icon.png'
import img1 from '../assets/TrackOrderDetails/Icon-1.png'
import img2 from '../assets/TrackOrderDetails/Icon-2.png'
import img3 from '../assets/TrackOrderDetails/Icon-3.png'
import img4 from '../assets/TrackOrderDetails/Icon-4.png'
import img5 from '../assets/TrackOrderDetails/Icon-5.png'
import clsx from 'clsx'


const TrackOrderDetail = () => {
  const items = [
    {
      img: img,
      detail: "Your order has been delivered. Thank you for shopping at Clicon!",
      date: "23 Jan, 2021 at 7:32 PM"
    },
    {
      img: img1,
      detail: "Our delivery man (John Wick) Has picked-up your order for delvery. ",
      date: "23 Jan, 2021 at 2:00 PM"
    },
    {
      img: img2,
      detail: "Your order has reached at last mile hub.",
      date: "22 Jan, 2021 at 8:00 AM"
    },
    {
      img: img3,
      detail: "Your order on the way to (last mile) hub.",
      date: "21, 2021 at 5:32 AM"
    },
    {
      img: img4,
      detail: "Your order is successfully verified.",
      date: "20 Jan, 2021 at 7:32 PM"
    },
    {
      img: img5,
      detail: "Your order has been confirmed.",
      date: "19 Jan, 2021 at 2:61 PM"
    },
  ]
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

      <div>
        <h1 className='font-medium text-lg leading-6 txt-color my-6'>Order Activity</h1>
        <div className='flex flex-col items-start gap-4'>
          {items.map((item, index) => (

            <div className='flex items-center gap-4' key={index}>
              <div>
                <img src={item.img} alt="" className={clsx(index === 0, 4 && "bg-[#D5F0D3]",
                  index === 1, 2, 3 && "bg-[#D5F0D3]",

                )} />
              </div>
              <div>
                <p className='txt-color text-sm leading-5'>{item.detail}</p>
                <p className='mt-2 text-sm leading-5 text-[#77878F]'>{item.date}</p>
              </div>
            </div>
          ))}


        </div>

      </div>

    </div>
  )
}

export default TrackOrderDetail