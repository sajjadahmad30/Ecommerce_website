import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import tabletImg from "../../assets/images/tabletimg.jpeg";
import airpods from "../../assets/images/airpods.jpg"
import shoes from "../../assets/images/shoes.jpeg"
import shirt from "../../assets/images/shity.jpeg"
import FShirt from "../../assets/images/f-shirt.jpeg"
import Purse from "../../assets/images/purse.webp"
import HandPurse from "../../assets/images/handpurse.jpeg"
import watch from "../../assets/images/watch.webp"
import smartWatch from "../../assets/images/smartWatch.jpeg"


const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider !py-8 !pt-4">
      <div className="container">
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/">
          <div className="item !py-7 !px-3 bg-white rounded-sm text-center flex justify-center items-center flex-col">
            <img src={tabletImg} alt="" className='w-[120px]' />
            <h3 className='text-[15px] font-[500] !mt-3'>Smart Tablet</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item !py-6 !px-3 bg-white rounded-sm text-center flex justify-center items-center flex-col">
            <img src={airpods} alt="" className='w-[104px]' />
            <h3 className='text-[15px] font-[500] !mt-3'>Airpods</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item  !py-6 !px-3 bg-white rounded-sm text-center flex justify-center items-center flex-col">
            <img src={shoes} alt="" className='w-[85px]' />
            <h3 className='text-[15px] font-[500] !mt-3'>New Shoes</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item  !py-6 !px-3 bg-white rounded-sm text-center flex justify-center items-center flex-col">
            <img src={shirt} alt="" className='w-[95px]' />
            <h3 className='text-[15px] font-[500] !mt-3'>T-Shirt</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item  !py-6 !px-3 bg-white rounded-sm text-center flex justify-center items-center flex-col">
            <img src={FShirt} alt="" className='w-[90px]' />
            <h3 className='text-[15px] font-[500] !mt-3'>Lady Shirt</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item !py-6 !px-3 bg-white rounded-sm text-center flex justify-center items-center flex-col">
            <img src={Purse} alt="" className='w-[110px]' />
            <h3 className='text-[15px] font-[500] !mt-3'>Leather Purse</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item  !py-6 !px-3 bg-white rounded-sm text-center flex justify-center items-center flex-col">
            <img src={HandPurse} alt="" className='w-[104px]' />
            <h3 className='text-[15px] font-[500] !mt-3'>Hand Purse</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item  !py-6 !px-3 bg-white rounded-sm text-center flex justify-center items-center flex-col">
            <img src={watch} alt="" className='w-[105px]' />
            <h3 className='text-[15px] font-[500] !mt-3'>New Design Watch</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
          <div className="item !py-7 !px-3 bg-white rounded-sm text-center flex justify-center items-center flex-col">
            <img src={smartWatch} alt="" className='w-[120px]' />
            <h3 className='text-[15px] font-[500] !mt-3'>Smart Watch</h3>
          </div>
          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
          <Link to="/">
          <div className="item  !py-6 !px-3 bg-white rounded-sm text-center flex justify-center items-center flex-col">
            <img src={shoes} alt="" className='w-[85px]' />
            <h3 className='text-[15px] font-[500] !mt-3'>New Shoes</h3>
          </div>
          </Link>
        </SwiperSlide>

      </Swiper>
      </div>
    </div>
  )
}

export default HomeCatSlider
