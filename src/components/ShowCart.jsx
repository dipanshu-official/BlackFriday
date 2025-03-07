import React from 'react'
import mainImg from '../assets/Shopping/MainImage.png'
import img1 from '../assets/Shopping/01.png'
import img2 from '../assets/Shopping/02.png'
import img3 from '../assets/Shopping/03.png'
import img4 from '../assets/Shopping/04.png'
import img5 from '../assets/Shopping/05.png'
import img6 from '../assets/Shopping/06.png'




const ShowCart = ({ closeCart }) => {
    return (
        <>

            <div className='bg-[#00000080] fixed top-0 left-0 right-0 bottom-0 ' onClick={closeCart}></div>

            <div className='p-10 bg-white border-[#E4E7E9] absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 shadow-[0px_8px_40px_0px_#0000001F] w-[80%]'>
                <div className='flex gap-14 '>
                    <div>
                        <div>
                            <img src={mainImg} alt="" />
                        </div>
                        <div className='mt-6 flex items-center gap-2'>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                            <img src={img6} alt="" />


                        </div>

                    </div>
                    <div></div>
                </div>
            </div>
        </>

    )
}

export default ShowCart