import React from 'react'
import image1 from '../assets/Product/Image.png'
import image2 from '../assets/Product/Image2.png'
import image3 from '../assets/Product/Image3.png'
import image4 from '../assets/Product/Image4.png'
import image5 from '../assets/Product/Image5.png'
import image6 from '../assets/Product/Image6.png'
import image7 from '../assets/Product/Image7.png'
import image8 from '../assets/Product/Image8.png'
import image9 from '../assets/Product/Image9.png'
import image10 from '../assets/Product/Image10.png'
import image11 from '../assets/Product/Image11.png'
import image12 from '../assets/Product/Image12.png'


const Product = () => {
    const iteams1 = [

        {
            name: "FLASH SALE TODAY",
            img: image1,
            details: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
            price: "$1,500"
        },
        {

            img: image4,
            details: "Simple Mobile 4G LTE Prepaid Smartphone",
            price: "$1,500"
        },
        {

            img: image9,
            details: "4K UHD LED Smart TV with Chromecast Built-in",
            price: "$1,500"
        },

    ]
    const iteams2 = [

        {

            img: image2,
            details: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$1,500"
        },
        {

            img: image6,
            details: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
            price: "$1,500"
        },
        {

            img: image10,
            details: "Sony DSCHX8 High Zoom Point & Shoot Camera",
            price: "$1,500"
        },

    ]
    const iteams3 = [

        {

            img: image3,
            details: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
            price: "$1,500"
        },
        {

            img: image7,
            details: "Sony DSCHX8 High Zoom Point & Shoot Camera",
            price: "$1,500"
        },
        {
            name: "",

            img: image11,
            details: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
            price: "$1,500"
        },

    ]
    const iteams4 = [

        {

            img: image4,
            details: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...",
            price: "$1,500"
        },
        {

            img: image8,
            details: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...",
            price: "$1,500"
        },
        {

            img: image12,
            details: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...",
            price: "$1,500"
        },

    ]

    const heading = ["FLASH SALE TODAY",]
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex items-start p-18 gap-6 '>

                {/* item 1 */}
                <div className='flex flex-col items-start ' >
                    <h1 className='font-semibold leading-6 txt-color '>FLASH SALE TODAY</h1>
                    {iteams1.map((item, index) => (



                        <div className='mt-4 p-3 flex items-center gap-3 border border-[#E4E7E9]  '>
                            <div>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='w-49 '>
                                <p className='text-sm leading-5 txt-color'>{item.details}</p>
                                <p className='mt-2 font-semibold text-sm text-[#2DA5F3]'>{item.price}</p>

                            </div>

                        </div>



                    ))}
                </div>

                {/* item-2 */}
                <div className='flex flex-col items-start ' >
                    <h1 className='font-semibold leading-6 txt-color '>BEST SELLERS</h1>
                    {iteams2.map((item, index) => (



                        <div className='mt-4 p-3 flex items-center gap-3 border border-[#E4E7E9]  '>
                            <div>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='w-49 '>
                                <p className='text-sm leading-5 txt-color'>{item.details}</p>
                                <p className='mt-2 font-semibold text-sm text-[#2DA5F3]'>{item.price}</p>

                            </div>

                        </div>



                    ))}
                </div>

                {/* item-3 */}
                <div className='flex flex-col items-start ' >
                    <h1 className='font-semibold leading-6 txt-color '>TOP RATED</h1>
                    {iteams3.map((item, index) => (



                        <div className='mt-4 p-3 flex items-center gap-3 border border-[#E4E7E9]  '>
                            <div>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='w-49 '>
                                <p className='text-sm leading-5 txt-color'>{item.details}</p>
                                <p className='mt-2 font-semibold text-sm text-[#2DA5F3]'>{item.price}</p>

                            </div>

                        </div>



                    ))}
                </div>

                {/* item-4 */}

                <div className='flex flex-col items-start ' >
                    <h1 className='font-semibold leading-6 txt-color '>NEW ARRIVAL</h1>
                    {iteams4.map((item, index) => (



                        <div className='mt-4 p-3 flex items-center gap-3 border border-[#E4E7E9]  '>
                            <div>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='w-49 '>
                                <p className='text-sm leading-5 txt-color'>{item.details}</p>
                                <p className='mt-2 font-semibold text-sm text-[#2DA5F3]'>{item.price}</p>

                            </div>

                        </div>



                    ))}
                </div>


            </div>




        </div>
    )
}

export default Product