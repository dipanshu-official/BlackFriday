import React from 'react'
import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';



const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <>
            {
                isVisible && (
                    <div className=' bg-[#191C1F] '>
                        <div className='flex justify-between items-center w-full  mx-auto'>
                            <div className='flex items-center justify-center gap-3'>
                                <p className='bg-[#F3DE6D] rotate-3 px-[10.3px] py-[6.52px] font-semibold txt-color leading-7 text-7'>Black</p>
                                <p className='font-semibold text-2xl leading-8  '>Friday</p>
                            </div>
                            <div className='py-4'>
                                <div className='flex items-center justify-center  gap-2'>
                                    <p className='font-medium text-sm leading-5 '>Up to</p>
                                    <p className='text-[#EBC80C] font-semibold text-[40px] leading-8 '>59%</p>
                                    <p className='font-semibold leading-7 text-[20px]'>OFF</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[243px]'>
                                <div className='bg-[#EBC80C]'>
                                    <button className='uppercase font-bold text-sm txt-color pl-6 pr-3 py-1 leading-8 flex items-center gap-2'>
                                        shop now
                                        <ArrowRight size={20} />
                                    </button>

                                </div>
                                <div className='bg-[#303639] p-2 m-4 '>
                                    <X onClick={()=>setIsVisible(false)} />

                                </div>



                            </div>

                        </div>

                    </div>
                )
            }
      
            
        </>
    )

        
}

export default Header