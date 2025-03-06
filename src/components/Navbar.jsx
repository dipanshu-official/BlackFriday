import React from 'react'
import { useState } from 'react'
import img1 from '../assets/Navbar/Twitter.png'
import img2 from '../assets/Navbar/Facebook.png'
import img3 from '../assets/Navbar/Pinterest.png'
import img4 from '../assets/Navbar/Reddit.png'
import img5 from '../assets/Navbar/Youtube.png'
import img6 from '../assets/Navbar/Instagram.png'
import img7 from '../assets/Navbar/ShoppingCart.png'
import img8 from '../assets/Navbar/Heart.png'
import img9 from '../assets/Navbar/User.png'
import img10 from '../assets/Nav/English.png'
import img11 from '../assets/Nav/Mandarin.png'
import img12 from '../assets/Nav/Rusion.png'


import { ChevronDown, ChevronUp, Search } from 'lucide-react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLng, setcurrentLng] = useState("Eng")

    return (
        <div className='bg-[#1B6392] '>
            <div className='max-w-7xl mx-auto  flex justify-between items-center'>
                <div>
                    <p className='font-normal text-sm leading-5 py-4'>Welcome to Clicon online eCommerce store. </p>
                </div>
                <div className='flex items-center gap-3'>
                    <p className=''>Follow us:</p>
                    <div className='flex items-center gap-3'>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                    </div>

                    <div class="w-0.5 h-7 bg-white mx-6"></div>
                    <div className='flex items-center gap-6'>
                        <div className='relative inline-block'>
                            <p className='flex items-center gap-1 text-sm leading-5'>
                                {currentLng}
                                {!isOpen ? <ChevronDown
                                    size={20}
                                    onClick={() => setIsOpen(!isOpen)}

                                /> : <ChevronUp
                                    size={20}
                                    onClick={() => setIsOpen(!isOpen)}
                                />}

                            </p>
                            {isOpen && (
                                <div className='bg-[#E4E7E9] shadow-[0px_8px_40px_0px_#0000001F] p-4 pr-8 absolute space-y-2 border border-[#E4E7E9] right-0 top-4'>
                                    <div>
                                        <p onClick={() => {
                                            setcurrentLng("ENG")
                                        }} className='flex items-center gap-3 txt-color leading-5 text-sm'>
                                            <img src={img10} alt="" />
                                            English
                                        </p>
                                        <p onClick={() => {
                                            setcurrentLng("MAN")
                                        }} className='flex items-center gap-3 txt-color leading-5 text-sm'>
                                            <img src={img11} alt="" />
                                            Mandarin
                                            {currentLng === "MAN" && <img src={img11} alt="" />}
                                        </p>
                                        <p className='flex items-center  gap-3 txt-color leading-5 text-sm'>
                                            <img src={img12} alt="" />
                                            Russian
                                        </p>
                                    </div>

                                </div>
                            )}
                        </div>

                        <div>
                            <p className='flex items-center gap-1 text-sm leading-5'>
                                USD
                                {!isOpen ? <ChevronDown
                                    size={20}
                                    onClick={() => setIsOpen(!isOpen)}

                                /> : <ChevronUp
                                    size={20}
                                    onClick={() => setIsOpen(!isOpen)}
                                />}
                            </p>
                        </div>
                    </div>

                </div>


            </div>


            <div class="w-full h-px border-t  bg-white"></div>

            <div className='max-w-7xl flex justify-between items-center mx-auto'>
                <div className='flex items-center'>
                    <p className='h-8 w-8 rounded-full bg-white'></p>
                    <h1 className='font-bold leading-10 text-[32px] py-6 '>CLICON</h1>
                </div>
                <div className='bg-white flex items-center py-[14px] px-5  '>
                    <input
                        type="text"
                        placeholder='Search for anything...'
                        className='outline-none placeholder:text-[#77878F] txt-color placeholder:text-sm text-sm leading-5 placeholder:leading-5 w-[646px]'
                    />
                    <div className=''>
                        <Search size={20} className='text-[#191C1F]' />
                    </div>
                </div>
                <div className='flex items-center gap-6 '>
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img9} alt="" />

                </div>

            </div>



        </div>
    )
}

export default Navbar