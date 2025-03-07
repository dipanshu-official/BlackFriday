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
import CustomModal from './ShowModal'


import { ChevronDown, ChevronUp, Search, Check } from 'lucide-react';
import ShoppingCard from './ShoppingCard'
import ShowCart from './ShowCart'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const [currentLng, setcurrentLng] = useState("English")
    const [currentLng1, setcurrentLng1] = useState("USD")

    const [cart, setCart] = useState(false)
    const closeCart = () => {
        setCart(false)
      }


    const [card, setCard] = useState(false)
    const closeCard = () => {
      setCard(false)
    }

    const [showModal, setShowModal] = useState(false)
    const closeModal = () => {
        setShowModal(false)

    }



    return (
        <div className='bg-[#1B6392] '>
            <div className='container mx-auto'>
                <div className='max-w-7xl mx-auto flex justify-between items-center'>
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
                                <p className={`flex items-center gap-1 text-sm leading-5 `}>
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
                                    <div className='bg-[#E4E7E9]  shadow-[0px_8px_40px_0px_#0000001F] p-4  absolute  border border-[#E4E7E9] right-0 top-4'>
                                        <div className='w-30 space-y-3'>
                                            <p onClick={() => {
                                                setcurrentLng("English")
                                            }} className='flex items-center gap-3 txt-color leading-5 text-sm'>
                                                <img src={img10} alt="" />
                                                English
                                                {currentLng === "English" && <Check className='text-[#FA8232] h-4 w-4 ml-2 ' />}

                                            </p>
                                            <p onClick={() => {
                                                setcurrentLng("Mandarin")
                                            }} className='flex items-center gap-3 txt-color leading-5 text-sm'>
                                                <img src={img11} alt="" />
                                                Mandarin
                                                {currentLng === "Mandarin" && <Check className='text-[#FA8232] h-4 w-4 ' />}
                                            </p>
                                            <p onClick={() => {
                                                setcurrentLng("Russian")
                                            }}
                                                className='flex items-center  gap-3 txt-color leading-5 text-sm'>
                                                <img src={img12} alt="" />
                                                Russian
                                                {currentLng === "Russian" && <Check className='text-[#FA8232] h-4 w-4 ' />}


                                            </p>
                                        </div>

                                    </div>
                                )}
                            </div>

                            <div className='relative'>
                                <p className='flex items-center gap-1 text-sm leading-5 '>
                                    {currentLng1}
                                    {!isOpen1 ? <ChevronDown
                                        size={20}
                                        onClick={() => setIsOpen1(!isOpen1)}

                                    /> : <ChevronUp
                                        size={20}
                                        onClick={() => setIsOpen1(!isOpen1)}
                                    />}
                                </p>
                                {isOpen1 && (
                                    <div className='bg-[#E4E7E9]  shadow-[0px_8px_40px_0px_#0000001F] p-4  absolute  border border-[#E4E7E9] left-0 top-4'>
                                        <div className='w-30 space-y-3'>
                                            <p onClick={() => {
                                                setcurrentLng1("USD")
                                            }} className={`flex items-center gap-3  leading-5 text-sm ${currentLng1 === "USD" ? "text-[#FA8232]" : "text-[#5F6C72]"}`}>
                                                Dollar (USD)
                                                {currentLng1 === "USD" && <Check className='text-[#FA8232] h-4 w-4 ' />}



                                            </p>
                                            <p onClick={() => {
                                                setcurrentLng1("EUR")
                                            }} className={`flex items-center gap-3  leading-5 text-sm ${currentLng1 === "EUR" ? "text-[#FA8232]" : "text-[#5F6C72]"}`}>
                                                Euro (EUR)
                                                {currentLng1 === "EUR" && <Check className='text-[#FA8232] h-4 w-4 ' />}

                                            </p>

                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>

                    </div>


                </div>



                <div className='max-w-7xl mx-auto'>
                    <div class="w-full h-px border-t  bg-white"></div>


                    <div className='flex justify-between items-center '>


                        <div className='flex items-center'>
                            <p className='h-8 w-8 rounded-full bg-white'></p>
                            <h1 className='font-bold leading-10 text-[32px] py-6 '>CLICON</h1>
                        </div>
                        <div className='bg-white flex items-center py-[14px] px-5  '>
                            <input
                                type="text"
                                placeholder='Search for anything...'
                                className='outline-none placeholder:text-[#77878F] w-[30vw] txt-color placeholder:text-sm text-sm leading-5 placeholder:leading-5 '
                            />
                            <div className=''>
                                <Search size={20} className='text-[#191C1F]' />
                            </div>
                        </div>
                        <div className='flex items-center gap-6 '>
                            <div className='cursor-pointer' onClick={() => {
                                return setCard(true)
                            }}>
                                <img src={img7} alt="" />
                            </div>
                            {card && <ShoppingCard closeCard={closeCard}/>}
                            <div className='cursor-pointer'  onClick={() => {
                                return setCart(true)
                            }}>
                                <img src={img8} alt="" />
                            </div>
                            {cart && <ShowCart closeCart={closeCart}/>}
                            <div className='cursor-pointer'  onClick={() => setShowModal(true)}>

                                <img src={img9} alt="" />
                            </div>
                            {showModal && <CustomModal closeModal={closeModal} />}
                        </div>
                    </div>


                </div>
            </div>




        </div>
    )
}

export default Navbar