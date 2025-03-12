import React, { useState } from 'react'
import img from '../assets/BestFeature/Image.jpg'
import { ArrowRight, Star } from 'lucide-react'
import img1 from '../assets/BestFeature/Image.png'
import img2 from '../assets/BestFeature/Image-1.png'
import img3 from '../assets/BestFeature/Image-2.png'
import img4 from '../assets/BestFeature/Image-3.png'
import img5 from '../assets/BestFeature/Image-5.png'
import img6 from '../assets/BestFeature/Image-6.png'
import img7 from '../assets/BestFeature/Image-7.png'
import img8 from '../assets/BestFeature/Image-8.png'


const BestFeature = () => {


    const [items, setItems] = useState([
        {
            img: img1,
            rating: 5,
            name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
            price: "$70",
            num: "(738)"

        },
        {
            img: img2,
            start: 5,
            name: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$360",
            num: "(536)"

        },
        {
            img: img3,
            start: 5,
            name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
            price: "$80",
            num: "(423)"


        },
        {
            img: img4,
            start: 5,
            name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
            price: "$80",
            num: "(816)"


        },
        {
            img: img5,
            start: 5,
            name: "Wired Over-Ear Gaming Headphones with USB",
            price: "$1,500",
            num: "(816)"


        },
        {
            img: img6,
            start: 4,
            name: "Wired Over-Ear Gaming Headphones with USB",
            price: "$1,500",
            num: "(647)"


        },
        {
            img: img7,
            start: 5,
            name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
            price: "$250",
            num: "(877)"

        },
        {
            img: img8,
            start: 5,
            name: "4K UHD LED Smart TV with Chromecast Built-in",
            price: "$220",
            num: "(426)"


        },
    ])

    const updateRating = (id, newRating) => {
        setItems((prevItems) =>
            prevItems.map((items) =>
                items.id === id ? { ...items, rating: newRating } : items
            )
        );
    };


    return (
        <div className='max-w-7xl mx-auto mt-18'>
            <div className='flex  gap-6'>

                <div className='flex flex-col items '>
                    <div className='bg-[#F3DE6D] pt-8 w-78 flex flex-col items-center justify-center'>
                        <p className='font-semibold text-sm leading-5 text-center text-[#BE4646]'>COMPUTER & ACCESSORIES</p>
                        <h1 className='txt-color font-semibold text-center leading-10 text-[32px] mt-2 '>32% Discount</h1>
                        <p className='leading-6 text-[#475156] text-center mt-3'>For all ellectronics products</p>
                        <div className='flex items-center mt-4'>
                            <p className='font-medium text-sm leading-5 txt-color '>Offers ends in:</p>
                            <p className='bg-white font-semibold text-sm leading-5 txt-color'>ENDS OF CHRISTMAS</p>
                        </div>
                        <button className='bg-[#FA8232] px-6 font-bold flex items-center gap-3 leading-14 tracking-[1.2%] mt-8'>
                            Shop now
                            <ArrowRight />
                        </button>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>

                </div>
                <div className='flex-1'>

                    <div className='flex justify-between items-center  '>
                        <div>
                            <h1 className='font-semibold text-[24px] leading-8 txt-color'>Featured Products</h1>
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            <div>
                                <ul className='flex items-center justify-center text-sm leading-5 text-[#5F6C72]'>
                                    <li className='txt-color p-2'>All Product</li>
                                    <li className='p-2'>Smart Phone</li>
                                    <li className='p-2'>Laptop</li>
                                    <li className='p-2'>Headphone</li>
                                    <li className='p-2'>TV</li>
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
                    <div className='grid grid-cols-4 items-center gap-4'>
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


            </div>


        </div>
    )
}

export default BestFeature