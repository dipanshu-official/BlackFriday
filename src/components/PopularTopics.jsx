import React from 'react'
import clsx from 'clsx'

const PopularTopics = () => {
    const items = [
        {
            name: "How do I return my item?"
        },
        {
            name: "What are the 'Delivery Timelines'?"
        },
        {
            name: "How to cancel Clicon Order."
        },
        {
            name: "What is Clicons Returns Policy?"
        },
        {
            name: "What is 'Discover Your Daraz Campaign 2022'?"
        },
        {
            name: "Ask the Digital and Device Community"
        },
        {
            name: "How long is the refund process?"
        },
        {
            name: "What is the Voucher & Gift Offer in this Campaign?"
        },
        {
            name: "How to change my shop name?"
        },


    ]
    return (
        <div className='max-w-7xl mx-auto py-18'>
            <h1 className='text-center txt-color font-semibold text-2xl leading-8'>Popular Topics</h1>
            <div className='grid grid-cols-3 items-center gap-6 mt-10 '>
                {items.map((item, index) => (

                    <div key={index}>
                        <ul className="list-disc txt-color">
                            <li className={clsx("leading-6 ",index===3 && "text-[#FA8232]")}>{item.name}</li>
                        </ul>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default PopularTopics