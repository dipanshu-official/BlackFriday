import React from 'react'
import { ArrowRight } from 'lucide-react'
import img1 from '../assets/Newsletter/google.png'
import img2 from '../assets/Newsletter/Frame.png'
import img3 from '../assets/Newsletter/philips.png'
import img4 from '../assets/Newsletter/toshiba.png'
import img5 from '../assets/Newsletter/samsung.png'


const Newsletter = () => {
    return (
        <div className='bg-[#1B6392]'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col  items-center justify-center py-18'>
                    <div>
                        <h1 className='font-semibold leading-10 text-[32px] text-center '>Subscribe to our newsletter</h1>
                        <p className='leading-6 mt-3 text-center'>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et <br /> cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
                    </div>
                    <div className='mt-8 flex items-center bg-white shadow-[0px_12px_24px_0px_#0000001F] p-3  '>
                        <input type="text" name="" id=""
                            placeholder='Email address '
                            className='placeholder:leading-6 w-104 txt-color placeholder:text-[#77878F] outline-none '
                        />
                        <button className='bg-[#FA8232] font-bold text-sm leading-12 tracking-[1.2%] uppercase px-6 flex items-center gap-2'>
                        Subscribe
                        <ArrowRight className='w-5 h-5'/>

                        </button>

                    </div>
                    <div className='flex items-center gap-12 mt-8'>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />


                    </div>

                </div>
            </div>
        </div>

        
    )
}

export default Newsletter