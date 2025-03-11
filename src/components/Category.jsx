import React from 'react';
import img1 from '../assets/Category/Image.png';
import img2 from '../assets/Category/Image-1.png';
import img3 from '../assets/Category/Image-2.png';
import img4 from '../assets/Category/Image-3.png';
import img5 from '../assets/Category/Image-4.png';
import img6 from '../assets/Category/Image-5.png';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SampleNextArrow = () => {
  return (
    <div className='bg-[#FA8232] p-3 rounded-full absolute'>
      <ArrowRight className='h-6 w-6 ' />
    </div>
  );
};

const SamplePrevArrow = () => {
  return (
    <div className='bg-[#FA8232] p-3 rounded-full absolute'>
      <ArrowLeft className='h-6 w-6 ' />
    </div>


  );
};

const Category = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const items = [
    { img: img1, name: 'Computer' },
    { img: img2, name: 'SmartPhone' },
    { img: img3, name: 'Headphones' },
    { img: img4, name: 'Accessories' },
    { img: img5, name: 'Camera & Photo' },
    { img: img6, name: 'TV & Homes' },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <h1 className="txt-color text-center font-semibold text-[32px] leading-10">
        Shop with Categories
      </h1>
      <div className="flex items-center gap-[18px] mt-10">
          {items.map((item, index) => (

            <div key={index} className="flex flex-col items-center px-7 py-6">
              <img src={item.img} alt={item.name} />
              <p className="mt-4 txt-color font-medium leading-6 text-center">
                {item.name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
