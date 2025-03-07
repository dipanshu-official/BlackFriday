import React from 'react'
import { X, ArrowRight } from 'lucide-react'
import img1 from '../assets/Shopping/Image.png'

const ShoppingCard = ({ closeCard }) => {
    return (<>
        <div className='bg-[#00000080] fixed top-0 left-0 right-0 bottom-0 ' onClick={closeCard}></div>

        <div className='w-94 px-6 pb-6 absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border border-[#E4E7E9] shadow-[0px_8px_40px_0px_#0000001F '>
            <div className='py-4'>
                <h1 className='font-medium leading-6 text-black '>Shopping Cart <span className='leading-6 text-gray-700'>(02)</span> </h1>

            </div>
            <div className='mt-5'>
                <div className='flex items-center'>
                    <div className='border border-[#E4E7E9]'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='py-3 pl-4'>
                        <p className='text-sm leading-5 txt-color '>Canon EOS 1500D DSLR Camera Body+ 18-55 mm</p>
                        <div className='flex items-center mt-2'>
                            <p className='text-sm leading-5 text-[#5F6C72] '>1 x</p>
                            <p className='font-semibold text-sm leading-5 text-[#2DA5F3] '>$1,500</p>
                        </div>
                    </div>
                    <div>
                        <X className='h-4 w-4 text-[#929FA5]' />

                    </div>
                </div>

            </div>
            <div className='mt-5'>
                <div className='flex items-center'>
                    <div className='border border-[#E4E7E9]'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='py-3 pl-4'>
                        <p className='text-sm leading-5 txt-color '>Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone</p>
                        <div className='flex items-center mt-2 '>
                            <p className='text-sm leading-5 text-[#5F6C72] '>2 x</p>
                            <p className='font-semibold text-sm leading-5 text-[#2DA5F3] '>$1,500</p>
                        </div>
                    </div>
                    <div>
                        <X className='h-4 w-4 text-[#929FA5]' />

                    </div>
                </div>

            </div>
            <div className='h-[1.5px] w-full bg-[#E4E7E9] my-5 '></div>
            <div className='flex items-center justify-between'>
                <p className='text-sm leading-5 text-[#475156]  '>Sub-Total:</p>
                <p className='font-medium txt-color text-sm leading-5'>$2038.00 USD</p>
            </div>
            <div className='flex flex-col gap-3'>

                <button className='flex items-center justify-center text-sm font-bold leading-12 tracking-[1.2%] gap-2 uppercase w-full bg-[#FA8232] mt-5 '>
                    Checkout now
                    <ArrowRight />

                </button>
                <button className=' text-[#FA8232] font-bold leading-12 text-sm tracking-[1.2%] uppercase text-center border-[2px] border-[#FFE7D6]'>
                    View Cart
                </button>
            </div>



        </div>
    </>

    )
}

export default ShoppingCard