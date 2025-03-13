import { ArrowRight } from 'lucide-react'
import React from 'react'
import Navbar from '../components/Navbar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'



const NeedHelp = () => {
    return (
        <div className='max-w-7xl mx-auto py-18'>
            <div className='flex items-start justify-between flex-2'>
                <h1 className='font-semibold text-[32px] leading-10 txt-color'>
                    Frequently Asked Questions
                </h1>




                <div className='p-8 bg-[#FBF4CE] flex flex-col items-start gap-6  w-106   '>
                    <div>

                        <h1 className='font-medium text-lg leading-6 txt-color'>Don’t find your answer, Ask for support.</h1>
                        <p className='text-sm leading-5 text-[#475156] mt-3 '>Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis primis in faucibu raesent eget sem purus.</p>
                    </div>
                    <div className='w-full'>
                        <input
                            type="text"
                            placeholder='Email address'
                            className='py-3 pl-4 w-full  outline-none bg-white text-sm leading-5 placeholder:text-[#77878F] txt-color '
                        />

                        <input
                            type="text"
                            placeholder='Subject'
                            className='py-3 pl-4 w-full mt-3  outline-none bg-white text-sm leading-5 placeholder:text-[#77878F] txt-color '
                        />

                        <input
                            type="text"
                            placeholder='Message (Optional)'
                            className=' pl-4 w-full mt-3 h-22  outline-none bg-white text-sm leading-5 placeholder:text-[#77878F] txt-color '
                        />



                    </div>
                    <button className='flex items-center gap-2 bg-[#FA8232] px-6 font-bold leading-12 text-sm tracking-[1.2%] uppercase'>
                        Send message
                        <ArrowRight />
                    </button>


                </div>
            </div>
        </div>
    )
}

const NeedHelpPage = () => {
    return (
        <div>
            <Navbar />
            <Nav />
            <NeedHelp />
            <Footer />

        </div>
    )
}

export default NeedHelpPage