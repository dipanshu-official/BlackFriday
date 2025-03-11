import React from 'react'
import image from '../assets/Mackbook/Image.png'
import { ArrowRight } from 'lucide-react'

const Mackbook = () => {
    return (
        <div className='max-w-7xl mx-auto mt-18 '>
            <div className=' flex items-center justify-between bg-[#FFE7D6]  '>
                <div className='py-20 pl-18 w-full '>
                    <div>

                        <span className='bg-[#2DA5F3] px-3 py-[6px] font-semibold text-sm leading-5'>SAVE UP TO $200.00</span>
                        <h1 className='font-semibold leading-14 text-5xl txt-color mt-3'>Macbook Pro</h1>
                        <p className='my-5 txt-color text-2xl leading-8 '>
                            Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
                        </p>
                        <button className='flex items-center gap-2 px-6 font-bold leading-14 uppercase bg-[#FA8232] '>
                        Shop now
                        <ArrowRight/>

                        </button>

                    </div>


                </div>
                <div className='w-full relative'>
                    <img src={image} alt="" />
                    <div className='bg-[#FFCEAD] px-7 py-10 rounded-full border-6 border-[#FFFFFF] absolute top-10 left-0'>
                        <p className='txt-color font-semibold texxt-[20px] leading-7 '>$1999</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Mackbook