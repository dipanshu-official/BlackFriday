import React from 'react'
import img1 from '../assets/xoimi/image.png'
import img2 from '../assets/xoimi/Image2.png'

import { ArrowRight } from 'lucide-react'

const Xiaomi = () => {
    return (
        <div className='max-w-7xl mx-auto mt-18 '>
            <div className=' flex items-center justify-between  gap-6  '>
                <div className='p-11 w-full flex justify-between items-center bg-[#F2F4F5]  '>
                    <div>

                        <span className='bg-[#2DA5F3] px-3 py-[6px] font-semibold text-sm leading-5  '>INTRODUCING</span>
                        <h1 className='font-semibold leading-10 text-[32px] txt-color mt-2'>New Apple <br />
                            Homepod Mini</h1>
                        <p className='mt-3 txt-color text-lg leading-6 text-[#475156] '>
                            Jam-packed with innovation, HomePod mini delivers unexpectedly.
                        </p>
                        <button className='flex items-center mt-5 gap-2 px-6 font-bold leading-12 uppercase bg-[#FA8232] '>
                            Shop now
                            <ArrowRight />

                        </button>

                    </div>
                    <div>
                        <img src={img1} alt="" />
                    </div>


                </div>
                <div className='w-full'>
                    <div className=' w-full flex justify-between items-center bg-[#191C1F]  '>
                        <div className='py-11 pl-11'>

                            <span className='bg-[#EFD33D] px-3 py-[6px] font-semibold text-sm leading-5 text-black  '>INTRODUCING NEW</span>
                            <h1 className='font-semibold leading-10 text-[32px]  mt-2'>Xiaomi Mi 11 Ultra
                                12GB+256GB</h1>
                            <p className='mt-3  text-lg leading-6 text-[#475156] '>
                                *Data provided by internal laboratories. Industry measurment.
                            </p>
                            <button className='flex items-center mt-5 gap-2 px-6 font-bold leading-12 uppercase bg-[#FA8232] '>
                                Shop now
                                <ArrowRight />

                            </button>

                        </div>
                        <div className='relative top-10'>

                            <img src={img2} alt="" className='h-60 w-70' />
                            <div className='bg-[#2DA5F3] rounded-full px-[22px] py-[30px] absolute top-0 right-0'>
                                <p>$590</p>
                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Xiaomi