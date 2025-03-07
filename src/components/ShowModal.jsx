import React from 'react'
import { ArrowRight, X } from 'lucide-react';

const CustomModal = ({ closeModal }) => {
  return (<>
    <div className='bg-[#00000080] fixed top-0 left-0 right-0 bottom-0 ' onClick={closeModal}></div>

    <div className='p-8 w-106 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white shadow-[0px_8px_40px_0px_#0000001F]'>
      <h1 className='text-center txt-color font-semibold leading-8 text-[20px]'>Sign in to your account</h1>
      <div className='mt-5'>
        <p className='text-sm leading-5 txt-color '>Email Address</p>
        <input
          type="text"
          className='outline-none txt-color w-full border border-[#E4E7E9] rounded-[2px] mt-2  h-11 '

        />
      </div>
      <div className='mt-4'>
        <div className='flex items-center justify-between'>

          <p className='text-sm leading-5 txt-color'>Password</p>
          <p className='font-medium text-sm  text-[#2DA5F3] leading-5 '>Forget Password</p>
        </div>
        <input
          type="text"
          className='outline-none txt-color w-full border border-[#E4E7E9] rounded-[2px] mt-2  h-11 '

        />
      </div>

      <button className='bg-[#FA8232] mt-4 h-12 w-full flex items-center justify-center font-bold text-sm leading-8 gap-2  '>
        LOGIN
        <ArrowRight className='text-white' />

      </button>
      <div className='text-center mt-6'>
        <p className='text-sm leading-5 text-[#77878F] '>Don’t have account</p>

        <p className='uppercase font-bold text-sm leading-8 text-[#FA8232] tracking-[1.2%] mt-3 '>Create account</p>
      </div>

    </div>
  </>

  )
}

export default CustomModal