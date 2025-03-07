import React from 'react'
import img1 from '../assets/List/Package.png'
import img2 from '../assets/List/Trophy.png'
import img3 from '../assets/List/CreditCard.png'
import img4 from '../assets/List/Headphones.png'



const List = () => {
    const items = [
        {
            img: img1,
            name: "Fasted Delivery",
            details: "Delivery in 24/H"
        },
        {
            img: img2,
            name: "24 Hours Return",
            details: "100% money-back guarantee"
        },
        {
            img: img3,
            name: "Secure Payment",
            details: "Your money is safe"
        },
        {
            img: img4,
            name: "Support 24/7",
            details: "Live contact/message"
        },
    ]
    return (
        <div className='max-w-7xl mx-auto'>

            <div className='mt-6 p-4 '>
                <div className='grid grid-cols-4 gap-14 items-center'>
                    {items.map((item)=>(
                         <div className='flex items-center gap-4 '>
                         <div className=' '>
                             <img src={item.img} alt="" />
                         </div>
                         <div className='flex flex-col gap-1 '>
                             <h1 className='font-medium text-sm txt-color leading-5 uppercase'>{item.name}</h1>
                            <p className='text-sm leading-5 text-[#5F6C72] '>{item.details}</p>
                         </div>
                     </div>

                    ))

                   
                    }


                </div>
            </div>



        </div>
    )
}

export default List