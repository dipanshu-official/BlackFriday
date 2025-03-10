import React, { useState, useEffect } from "react";
import { ArrowRight, Star, Heart, Eye, ShoppingCart ,ShoppingBag } from "lucide-react";
import img from '../assets/BestFile/Image.png'
import img1 from '../assets/BestFile/Image1.png'
import img2 from '../assets/BestFile/Image2.png'
import img3 from '../assets/BestFile/Image3.png'
import img4 from '../assets/BestFile/Image4.png'
import img5 from '../assets/BestFile/Image5.png'
import img6 from '../assets/BestFile/Image6.png'
import img7 from '../assets/BestFile/Image7.png'
import img8 from '../assets/BestFile/Image8.png'



const RealTimeClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Get day, hours, minutes, and seconds
  const date = time.getDate().toString().padStart(2, "0")
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <p className="font-semibold txt-color leading-6 flex gap-3 bg-[#F3DE6D] px-3 py-[6px]">
      <span>{date}d</span>
      <span>{hours}h</span>
      <span>{minutes}m</span>
      <span>{seconds}s</span>
    </p>

  );
};

const BestFile = () => {
  const items = [
    {
      img: img1,
      name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      price: "$2,300"
    },
    {
      img: img2,
      name: "Simple Mobile 4G LTE Prepaid Smartphone",
      price: "$220"
    },
    {
      img: img3,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: "$1,50",
      lastPrice: "$865"
    },
    {
      img: img4,
      name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
      price: "$1,200"
    },
    {
      img: img5,
      name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
      price: "$299"
    },
    {
      img: img6,
      name: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
      price: "$70",
      lastPrice: "$865"

    },
    {
      img: img7,
      name: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
      price: "$160"
    },
    {
      img: img1,
      name: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
      price: "$250",
      lastPrice: "$360"

    },

  ]
  const [rating, setRating] = useState(0);
  return (
    <div className="max-w-7xl mx-auto mt-18 ">
      {/* time and date section here */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="font-semibold text-2xl leading-8 txt-color">Best Deals</h1>
          <div className="flex items-center gap-3 ">
            <p className="font-normal text-sm leading-5 text-black">Deals ends in</p>
            <RealTimeClock className='' />
          </div>
        </div>
        <div>
          <p className="flex items-center gap-2 font-semibold text-sm leading-5 text-[#2DA5F3] cursor-pointer">
            Browse All Products <ArrowRight />
          </p>
        </div>
      </div>
      {/* time and section end here  */}



      <div className="flex items-start mt-6 ">
        <div className="p-6 flex flex-col items-start justify-center gap-6 ">
          <div>
            <img src={img} alt="" className="w-full h-auto" />


          </div>
          <div >
            <div className="flex items-center ">

              {[...Array(5)].map((_, starIndex) => (
                <Star key={starIndex} className="text-[#EBC80C] w-5 h-5" aria-label="star" />
              ))}

              <p className="text-sm leading-5 text-[#77878F]"> (52,677)</p>
            </div>
            <div className="mt-[6px]">
              <p className="txt-color leading-6 ">Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...</p>
            </div>

            <div className="flex items-center gap-1 my-3">
              <p className="leading-6 text-[#ADB7BC] line-through">$865.99</p>
              <p className="leading-6 text-[#2DA5F3]"> $442.12</p>
            </div>

            <div >
              <p className="text-sm leading-5 text-[#5F6C72]">Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.</p>
            </div>

            <div className="flex items-center gap-2 mt-6 ">
              <div className="bg-[#FFE7D6] p-3">
                <Heart className="txt-color h-4 w-[18px]  " />

              </div>
              <div>
                <button className="flex items-center gap-3 bg-[#FA8232] text-sm  font-bold leading-12 tracking-[1.2%] px-6">
                  <ShoppingCart className="h-4 w-6" />

                  Add to card
                </button>


              </div>
              <div className="bg-[#FFE7D6] p-3">
                <Eye className="txt-color h-4 w-[18px]" />

              </div>



            </div>






          </div>
        </div>

        {/* card section start here  */}
        <div className="grid grid-cols-4 ">

          {items.map((item, index) => (
            <div className="p-4" key={index}>
              <div className="relative">
                <img src={item.img} alt="" className="h-full w-auto " on />
                {/* <div className="absolute inset-0 flex items-center  justify-center gap-4 bg-[#00000033] hover:bg-[#00000033] transition-all duration-300 group-hover:bg-[#00000033] opacity-0 group-hover:opacity-100 ">
                  <div className="bg-white p-3 rounded-full">

                  <Heart className="text-black  w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                  </div>
                  <div className="bg-white p-3 rounded-full">

                  <ShoppingCart className="text-white w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                  </div>
                  <div className="bg-white p-3 rounded-full">

                  <ShoppingBag className="text-white w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
                  </div>
                </div> */}
              </div>
              <div className="mt-2">
                <p className="text-sm leading-5 txt-color ">{item.name}</p>
              </div>
              <div className="flex items-center gap-2 mt-2  ">
                <p className="text-sm leading-5 text-[#929FA5] line-through">{item.lastPrice}</p>
                <p className="font-semibold leading-5 text-[#2DA5F3]">{item.price}</p>
              </div>

            </div>

          ))}



        </div>
      </div>



    </div>
  );
};

export default BestFile;
