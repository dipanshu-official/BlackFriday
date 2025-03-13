import React from 'react'
import img1 from '../assets/CustomerSupportPage/Assist/Truck.png'
import img2 from '../assets/CustomerSupportPage/Assist/LockOpen.png'
import img3 from '../assets/CustomerSupportPage/Assist/CreditCard.png'
import img4 from '../assets/CustomerSupportPage/Assist/User.png'
import img5 from '../assets/CustomerSupportPage/Assist/Stack.png'
import img6 from '../assets/CustomerSupportPage/Assist/Notepad.png'
import img7 from '../assets/CustomerSupportPage/Assist/CreditCard.png'
import img8 from '../assets/CustomerSupportPage/Assist/Storefront.png'


const Assist = () => {
    const items = [
        {
            img: img1,
            name: "Track Order"
        },
        {
            img: img2,
            name: "Reset Password"
        },
        {
            img: img3,
            name: "Payment Option"
        },
        {
            img: img4,
            name: "User & Account"
        },
        {
            img: img5,
            name: "Wishlist & Compare"
        },
        {
            img: img6,
            name: "Shipping & Billing"
        },
        {
            img: img7,
            name: "Shoping Cart & Wallet"
        },
        {
            img: img8,
            name: "Sell on Clicon"
        },
    ]
    return (
        <div className='max-w-7xl mx-auto py-18'>
            <h1 className='font-semibold leading-10 text-[32px] txt-color text-center'>What can we assist you with today?</h1>
            <div className="grid grid-cols-4 gap-6 mt-10">
                {items.map((item, index) => (

                    <div
                    key={index}
                    className='flex items-center gap-4 border-2 border-[#FFE7D6] p-6 '>
                        <img src={item.img} alt="" />
                        <p className='font-medium leading-6 txt-color'>{item.name}</p>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Assist