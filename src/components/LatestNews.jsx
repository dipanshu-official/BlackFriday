import React from 'react'
import img1 from "../assets/LatestNews/image1.png"
import img2 from "../assets/LatestNews/image2.png"
import img3 from "../assets/LatestNews/image3.png"
import { ArrowRight } from 'lucide-react'
import image1 from '../assets/LatestNews/UserCircle.png'
import image2 from '../assets/LatestNews/CalendarBlank.png'
import image3 from '../assets/LatestNews/ChatCircleDots.png'



const LatestNews = () => {

  const items = [
    {
      img: img1,
      account: "Kristin",
      date: "19Dec, 2013",
      messege: "453",
      mainName: "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
      details: "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus."
    },
    {
      img: img2,
      account: "Robert",
      date: "28 Nov, 2015",
      messege: "738",
      mainName: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
      details: "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. "
    },
    {
      img: img3,
      account: "Arlene",
      date: "9 May, 2014",
      messege: "826",
      mainName: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
      details: "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus."
    },
  ]
  return (
    <div className='bg-[#F2F4F5]'>
      <div className='max-w-7xl mx-auto p-18'>
        <h1 className='font-semibold text-[32px] txt-color text-center leading-10 text-'>Latest News</h1>
        <div className=' flex items-center gap-6'>
          {items.map((item, index) => (
            <div className='mt-10 p-8 flex flex-col bg-white '>
              <div>
                <img src={item.img} alt="" />
              </div>
              <div className='flex items-center justify-between gap-4 mt-6'>
                <div className='flex items-center gap-[6px]'>
                  <img src={image1} alt="" className='' />
                  <p className='text-sm leading-5 text-[#475156] '>{item.account}</p>
                </div>
                <div className='flex items-center gap-[6px]'>
                  <img src={image2} alt="" className='' />
                  <p className='text-sm leading-5 text-[#475156] '>{item.date}</p>
                </div>
                <div className='flex items-center gap-[6px]'>
                  <img src={image3} alt="" className='' />
                  <p className='text-sm leading-5 text-[#475156] '>{item.messege}</p>
                </div>


              </div>
              <div>
                <div className='mt-2'>
                  <h1 className='font-medium text-lg leading-6 txt-color'>{item.mainName}</h1>
                  <p className='leading-6 text-[#77878F] mt-3'>{item.details}</p>
                </div>

                <button className='flex mt-6 items-center gap-2 text-[#FA8232] font-bold tracking-[1.2%] leading-12 text-sm uppercase px-6 border-[2px] border-[#FFE7D6] shadow-[0px_8px_24px_0px_#0000000A]'>
                  Read more
                  <ArrowRight />

                </button>
              </div>



            </div>

          ))}


        </div>
      </div>

    </div>
  )
}

export default LatestNews