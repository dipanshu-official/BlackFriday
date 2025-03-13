import { Search } from 'lucide-react'
import React from 'react'

const HelpCenter = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='bg-img pt-18 '>
                <span className='txt-color font-semibold text-sm leading-5 bg-[#EFD33D]  px-4 py-2'>HELP CENTER</span>
                <h1 className='font-semibold text-[32px] leading-10 txt-color mt-4'>How we can help you!</h1>
                <div className='flex gap-3 items-center border border-[#E4E7E9] p-3 mt-6 max-w-min '>

                    <Search className='h-6 w-6 text-[#FA8232]' />
                    <input type="text"
                        placeholder='Enter your question or keyword'
                        className='outline-none placeholder:leading-6 mr-28  placeholder:text-[#77878F] txt-color'
                    />
                    <button className='uppercase px-6 font-bold text-sm leading-12 tracking-[1.2%] bg-[#FA8232]'>Search</button>
                </div>




            </div>
        </div>
    )
}

export default HelpCenter