import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import TrackOrderDetail from './TrackOrderDetail';

const TrackOrder = () => {
    const [showFirst, setShowFirst] = useState(true);

    return (
        <>
        {showFirst ? <div className='max-w-7xl mx-auto pt-12 pb-31'>
            <div className='flex flex-col  '>
                <h1 className='font-semibold text-[32px] leading-10 txt-color'>Track Order</h1>
                <p className='leading-6 text-[#5F6C72] mt-4'>To track your order please enter your order ID in the input field below and press the “Track Order”<br /> button. this was given to you on your receipt and in the confirmation email you should have received.</p>
                <div className='grid grid-cols-2 gap-6 mt-6 w-2/3 '>
                    <div >
                        <p className='text-sm leading-5 txt-color'>Order ID</p>
                        <input
                            type="text"
                            required
                            placeholder='ID...'
                            className='placeholder:text-sm w-full  py-3 mt-2 outline-none placeholder:leading-5 placeholder:text-[#77878F]   pl-4 txt-color  border border-[#E4E7E9]'
                        />
                        <p className='flex text-center mt-4 items-center gap-2 text-sm leading-5 text-[#5F6C72]'>
                            <span className='h-5 w-5 border border-[#5F6C72] rounded-full'>!</span>
                            Order ID that we sended to your in your email address.
                        </p>
                    </div>
                    <div>
                        <p className='text-sm leading-5 txt-color'>Billing Email</p>
                        <input
                            type="text"
                            required
                            placeholder='Email address'
                            className='placeholder:text-sm w-full py-3 mt-2 outline-none placeholder:leading-5 placeholder:text-[#77878F] pl-4 txt-color  border border-[#E4E7E9]'
                        />
                    </div>
                </div>

            </div>
            <button onClick={() => {
              setShowFirst(false)
            }}
            className=' bg-[#FA8232] mt-8 flex items-center gap-2 font-bold uppercase tracking-[1.2%] leading-14 px-8'>
                Track Order
                <ArrowRight />
            </button>

        </div>: <TrackOrderDetail/> }
       
        </>
    )
}

export default TrackOrder