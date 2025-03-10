import React from 'react'
import { ArrowRight } from 'lucide-react';
import img2 from '../assets/Footer/Apple.png'
import img1 from '../assets/Footer/Playstore.png'



const Footer = () => {
    function Card({ label }) {
        return (
            <div className="flex items-center justify-center ">
                <p className='py-[6px] px-3 border rounded-[2px] border-[#303639] text-white font-medium text-sm  '>{label}</p>

            </div>
        );
    }


    return (
        <div className='bg-[#191C1F]'>
            <div className='max-w-7xl mx-auto   '>
                <div className='flex  items-start gap-20 pt-18 justify-start'>

                    {/* CLICON */}

                    <div>
                        <div className='flex items-center'>
                            <p className='h-8 w-8 rounded-full bg-white'></p>
                            <h1 className='font-bold leading-10 text-[32px]  '>CLICON</h1>
                        </div>
                        <div className='mt-6'>
                            <p className='text-sm leading-5 text-[#77878F]'>Customer Supports:</p>
                            <p className='font-medium leading-6 mt-1 text-[18px] '>(629) 555-0129</p>
                            <p className='leading-6 text-[#ADB7BC]'>4517 Washington Ave. </p>
                            <p className='leading-6 text-[#ADB7BC]'>Manchester, Kentucky 39495</p>
                            <p className='font-medium leading-6 mt-3 '>info@kinbo.com</p>
                        </div>


                    </div>

                    {/* Top Category */}

                    <div>
                        <h1 className='font-medium leading-6 uppercase'>Top Category</h1>
                        <div className='font-medium text-sm text-[#929FA5] leading-5 mt-5 flex flex-col gap-2'>
                            <p>Computer & Laptop</p>
                            <p>SmartPhone</p>
                            <p>Headphone</p>
                            <p className='text-white flex items-center gap-2 '>
                                <div className='border-t h-[2px] w-6 bg-[#EBC80C] '></div>
                                Accessories
                            </p>
                            <p>Camera & Photo</p>
                            <p>TV & Homes</p>
                            <p className='flex items-center gap-2 text-[#EBC80C]'>
                                Browse All Product
                                <ArrowRight />
                            </p>
                        </div>

                    </div>

                    {/* Quick links */}
                    <div>
                        <h1 className='font-medium leading-6 uppercase'>Quick links</h1>
                        <div className='font-medium text-sm text-[#929FA5] leading-5 mt-5 flex flex-col gap-2'>
                            <p>Shop Product</p>
                            <p>Shoping Cart</p>
                            <p>Wishlist</p>
                            <p>Compare</p>
                            <p>Track Order</p>
                            <p>Customer Help</p>
                            <p>About Us</p>
                        </div>


                    </div>
                    {/* Download APp */}
                    <div>
                        <h1 className='font-medium leading-6 uppercase'>Download APp</h1>
                        <div>
                            <div className='bg-[#303639] px-5 mt-4 w-44 '>
                                <div className='flex items-center gap-4 w-44'>
                                    <img src={img1} alt="" />
                                    <div className='flex flex-col gap-1 items-start py-4'>
                                        <p className='text-[11px] leading-3'>Get it now</p>
                                        <p className='font-semibold leading-5 text-sm '>Google Play</p>
                                    </div>
                                </div>




                            </div>
                            <div className='bg-[#303639] px-5 mt-4 w-44 '>
                                <div className='flex items-center gap-4 '>
                                    <img src={img2} alt="" />
                                    <div className='flex flex-col gap-1 items-start py-4'>
                                        <p className='text-[11px] leading-3'>Get it now</p>
                                        <p className='font-semibold leading-5 text-sm '>App Store</p>
                                    </div>
                                </div>




                            </div>
                        </div>


                    </div>
                    {/* Popular Tag */}
                    <div>
                        <h1 className='font-medium leading-6 uppercase'>Popular Tag</h1>
                        <div className="flex flex-col items-start justify-start gap-2 mt-4">
                            {/* Row 1 */}
                            <div className="flex items-center justify-start  gap-2">
                                <Card label="Game" />
                                <Card label="Asus Laptops" />
                                <Card label="TV" />
                                <Card label="iPhone" />
                            </div>

                            {/* Row 2 */}
                            <div className="flex  items-center justify-start  gap-2">
                                <Card label="Macbook " />
                                <Card label="SSD" />
                                <Card label="Graphics Card" />
                            </div>

                            {/* Row 3 */}
                            <div className="flex items-center justify-start  gap-2">
                                <Card label="Power Bank " />
                                <Card label="Smart TV" />
                                <Card label="Speaker" />
                            </div>

                            {/* Row 4 */}
                            <div className="flex items-center justify-start  gap-2">
                                <Card label="Tablet" />
                                <Card label="Microwave" />
                                <Card label="Samsung" />
                            </div>
                        </div>


                    </div>
                </div>


            </div>

            <div className='mt-18'>
                <p className='text-center border py-6 text-[#ADB7BC] shadow-[inset_0px_1px_0px_0px_#303639] 0px 1px 0px 0px  ;'>Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
            </div>

        </div>
    )
}

export default Footer