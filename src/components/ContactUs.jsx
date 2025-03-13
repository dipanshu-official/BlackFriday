import React from 'react'
import img1 from '../assets/CustomerSupportPage/ContactUs/PhoneCall.png'
import img2 from '../assets/CustomerSupportPage/ContactUs/ChatCircleDots.png'
import { ArrowRight } from 'lucide-react'


const ContactUs = () => {
    return (
        <div className='bg-[#F2F4F5]'>

            <div className='max-w-7xl mx-auto py-18'>
                <div className='flex items-center justify-center flex-col'>

                    <p className='font-semibold text-sm leading-5  bg-[#2DA5F3] px-4 py-2 '>CONTACT US</p>
                    <h1 className='font-semibold txt-color text-center text-[32px] leading-10  mt-4'>Don’t find your answer. <br /> Contact with us</h1>

                </div>
                <div className='mt-10 flex justify-between items-center gap-6 '>
                    <div className='p-8 flex items-start gap-6 bg-white'>
                        <div className='p-6 bg-[#EAF6FE]'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='flex flex-col items-start gap-6'>
                            <div>
                                <h1 className='font-semibold text-lg leading-6 txt-color'>Call us now</h1>
                                <p className='text-sm leading-5 text-[#5F6C72] mt-2'>we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now</p>
                                <p className='text-2xl txt-color leading-8 mt-4'>+1-202-555-0126</p>
                            </div>
                            <button className='flex items-center gap-2 font-bold text-sm leading-12 tracking-[1.2%] uppercase bg-[#2DA5F3] px-6 '>
                            Call now
                            <ArrowRight/>
                            </button>

                        </div>

                    </div>
                    <div className='p-8 flex items-start gap-6 bg-white'>
                        <div className='p-6 bg-[#EAF7E9]'>
                            <img src={img2} alt="" />
                        </div>
                        <div className='flex flex-col items-start gap-6'>
                            <div>
                                <h1 className='font-semibold text-lg leading-6 txt-color'>Chat with us</h1>
                                <p className='text-sm leading-5 text-[#5F6C72] mt-2'>we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now</p>
                                <p className='text-2xl txt-color leading-8 mt-4'>Support@clicon.com</p>
                            </div>
                            <button className='flex items-center gap-2 font-bold text-sm leading-12 tracking-[1.2%] uppercase bg-[#2DB224] px-6 '>
                            Call now
                            <ArrowRight/>
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default ContactUs