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
    const iteams = [
        {

            img: image1,
            details: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$1,500"
        },
        {

            img: image1,
            details: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$1,500"
        },
        {

            img: image1,
            details: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$1,500"
        },
        {

            img: image1,
            details: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$1,500"
        },
        {

            img: image1,
            details: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$1,500"
        },
        {

            img: image1,
            details: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$1,500"
        },
        {

            img: image1,
            details: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$1,500"
        },
        {

            img: image1,
            details: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$1,500"
        },
        {

            img: image1,
            details: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$1,500"
        },
        {

            img: image1,
            details: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$1,500"
        },
        {

            img: image1,
            details: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$1,500"
        },
        {

            img: image1,
            details: "Samsung Electronics Samsung Galexy S21 5G",
            price: "$1,500"
        },
    ]

    const heading = ["FLASH SALE TODAY",]
    return (
        <div>
            <h1 className='font-semibold leading-6 txt-color '>FLASH SALE TODAY</h1>
            <div className='grid grid-cols-4  gap-6 '>

                <div className='mt-4 p-3 grid grid-cols-2 border  '>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                    <div className='w-49 '>
                        <p className='text-sm leading-5 txt-color'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                        <p className='mt-2 font-semibold text-sm text-[#2DA5F3]'>dafd</p>

                    </div>

                </div>
            </div>




        </div>
    )
}

export default Product