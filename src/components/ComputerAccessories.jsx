import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import img1 from '../assets/ComputerAccessories/Image.png'
import img2 from '../assets/ComputerAccessories/Image-1.png'
import img3 from '../assets/ComputerAccessories/Image-2.png'
import img4 from '../assets/ComputerAccessories/Image-3.png'
import img5 from '../assets/ComputerAccessories/Image-4.png'
import img6 from '../assets/ComputerAccessories/Image-5.png'
import img7 from '../assets/ComputerAccessories/Image-6.png'
import img8 from '../assets/ComputerAccessories/Image-7.png'
import img9 from '../assets/ComputerAccessories/ImageM.png'





const ComputerAccessories = () => {
    const [items, setItems] = useState([
        {
            img: img1,
            name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
            price: "$360",
            num: "(994)"

        },
        {
            img: img2,
            name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
            price: "$80",
            num: "(798)"

        },
        {
            img: img3,
            name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
            price: "$70",
            num: "(600)"

        },
        {
            img: img4,
            name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
            price: "$250",
            num: "(492)"

        },
        {
            img: img5,
            name: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$2,300",
            num: "(740)"

        },
        {
            img: img6,
            name: "4K UHD LED Smart TV with Chromecast Built-in",
            price: "$220",
            num: "(556)"

        },
        {
            img: img7,
            name: "Wired Over-Ear Gaming Headphones with USB",
            price: "$1,500",
            num: "(536)"

        },
        {
            img: img8,
            name: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
            price: "$1,200",
            num: "(423)",
            discount: "$1600"

        },
    ])


    const updateRating = (id, newRating) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, rating: newRating } : item
            )
        );
    };
    return (
        <div className='max-w-7xl mx-auto mt-18'>
            <div className='flex  gap-6'>


                <div className='flex-1'>

                    <div className='flex justify-between items-center  '>
                        <div>
                            <h1 className='font-semibold text-[24px] leading-8 txt-color'>Computer Accessories</h1>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <ul className='flex items-center text-sm leading-5 text-[#5F6C72]'>
                                    <li className='txt-color p-2'>All Product</li>
                                    <li className='p-2'>Keyboard & Mouse</li>
                                    <li className='p-2'>Headphone</li>
                                    <li className='p-2'>Webcam</li>
                                    <li className='p-2'>Printer</li>
                                </ul>
                            </div>
                            <div>
                                <p className='flex items-center gap-2 text-[#FA8232] font-semibold text-sm leading-5 '>
                                    Browse All Product
                                    <ArrowRight />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-y-10 items-center gap-4'>
                        {items.map((item, index) => (
                            <div className='flex flex-col p-4 '>
                                <img src={item.img} alt="" />
                                <div className='flex items-center gap-1'>
                                    <p className='flex'>
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <span
                                                key={index}
                                                className={`cursor-pointer text-2xl ${index < item.rating ? "text-yellow-400" : "text-gray-300"
                                                    }`}
                                                onClick={() => updateRating(item.id, index + 1)} // ⭐ Click to update rating
                                            >
                                                ★
                                            </span>
                                        ))}

                                    </p>
                                    <p className='text-[12px] leading-4 text-[#77878F]'>{item.num}</p>
                                </div>
                                <p className='text-sm leading-5 txt-color mt-2 '>{item.name}</p>
                                <p className='mt-2 text-[#2DA5F3] font-semibold leading-5'>{item.price}</p>

                            </div>
                        ))}


                    </div>
                </div>
                <div className='flex flex-col items gap-6 w-78 '>
                    <div className='bg-[#F7E99E] p-8  flex flex-col items-center justify-center'>
                        <div >
                            <div className='flex items-center justify-center'>

                            <img src={img9 } alt="" />
                            </div>
                            <h1 className='font-semibold text-center text-[28px] leading-8 txt-color'>Xiaomi True Wireless Earbuds</h1>
                            <p className='leading-6 text-[#475156] mt-2'>Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.</p>
                            <div className='flex items-center justify-center mt-4 '>
                                <p className='text-sm leading-5 text-[#475156]'>Only for:</p>
                                <p className='bg-white px-3 py-[6px] text-2xl font-semibold leading-6 txt-color '>$299 USD</p>
                            </div>
                            <button className='flex mt-6  items-center justify-center gap-2 font-bold text-sm leading-12 bg-[#FA8232] w-full uppercase tracking-[1.2%]'>
                                Shop now
                                <ArrowRight/>
                            </button>
                        </div>
                       
                    </div>

                    <div className='bg-[#124261] py-10 flex flex-col gap-6 items-center justify-center'>
                        <div >
                            <p className='bg-[#FFFFFF1F] text-center font-semibold text-sm leading-5 px-3 py-[6px] '>SUMMER SALES</p>
                            <h1 className='font-semibold text-[28px] text-center leading-8 mt-3'>37% DISCOUNT</h1>
                            <p className='text-[18px] leading-6 mt-3 '> only for <span className='font-semibold text-[18px] leading-6 text-yellow-600 '>SmartPhone</span> product.</p>
                        </div>
                        <button className='bg-[#2DA5F3] px-[70px] font-black text-sm uppercase tracking-[1.2%] flex items-center gap-2 leading-12'>
                        Shop now
                        <ArrowRight/>
                        </button>

                    </div>
                    

                </div>


            </div>


        </div>
    )
}

export default ComputerAccessories