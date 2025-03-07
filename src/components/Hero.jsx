import React from 'react'
import img1 from '../assets/Hero/Image.png'
import img2 from '../assets/Hero/image4.png'
import img3 from '../assets/Hero/image5.png'


import { ArrowRight, X } from 'lucide-react';


const Hero = () => {
    return (
        <div className='max-w-7xl mx-auto mt-6'>


            <div className=' flex  gap-6  '>

                <div className='flex items-center gap-9 bg-[#F2F4F5] p-14'>
                    <div className='w-full'>
                        <div className='flex items-center gap-2'>
                            <p className='border-t h-[2px] w-6 bg-[#2DA5F3]'></p>
                            <p className='font-semibold text-sm leading-5 text-[#2484C2]'>THE BEST PLACE TO PLAY</p>
                        </div>
                        <div>

                            <h1 className='font-semibold text-5xl leading-14 txt-color mt-1'>Xbox Consoles</h1>
                            <p className='text-lg mt-4 leading-6 text-[#475156] '>Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                        </div>
                        <button className='bg-[#FA8232] rounded-[2px] font-bold mt-6 tracking-[1.2%] leading-14 uppercase flex items-center gap-3 px-8'>
                            Shop Now
                            <ArrowRight className='h-6 w-6' />

                        </button>

                    </div>
                    <div className='w-full'>
                        <div>
                            <img src={img1} alt="" />
                        </div>
                    </div>

                </div>

                <div className='flex flex-col gap-6 justify-between'>
                    <div className='bg-[#191C1F] flex items-center  '>
                        <div className='pl-10 py-11 w-full'>
                            <div>
                                <p className='font-medium text-sm leading-5 uppercase text-[#EBC80C]'>Summer Sales</p>
                                <h1 className='font-semibold text-2xl leading-8'>New Google Pixel 6 Pro</h1>
                                <button className='bg-[#FA8232] font-bold mt-4 text-sm tracking-[1.2%] leading-12 uppercase flex items-center gap-2 px-6'>
                                    Shop Now
                                    <ArrowRight className='h-5 w-5' />

                                </button>
                            </div>

                        </div>
                        <div className='w-full relative'>
                            <div className=''>

                            <p className='font-semibold absolute right-4 top-6 leading-6 text-[#141414] bg-[#EFD33D] py-2 px-4'>29% OFF</p>
                            </div>
                            <img src={img3} alt="" className='h-50 mt-9 ' />
                        </div>


                    </div>
                    <div className='flex items-center gap-5 bg-[#F2F4F5]'>
                        <div className='py-11 pl-8'>
                            <img src={img2} alt="" />
                        </div>
                        <div className='py-10 pr-10'>
                            <h1 className='font-semibold leading-8 text-2xl txt-color '>Xiaomi FlipBuds Pro</h1>
                            <p className='font-semibold text-lg leading-6 text-[#2DA5F3]'> $299 USD</p>

                            <button className='bg-[#FA8232] font-bold mt-5 text-sm tracking-[1.2%] leading-12 uppercase flex items-center gap-2 px-6'>
                                Shop Now
                                <ArrowRight className='h-5 w-5' />

                            </button>
                        </div>


                    </div>

                </div>






            </div>

        </div>
    )
}

export default Hero