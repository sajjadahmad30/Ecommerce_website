import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";


const HomeSlider = () => {
  return (
    <div className="homeSlider !py-4">
      <div className="container">
      <Swiper navigation={true}
       modules={[Navigation,Autoplay]} 
       autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
        spaceBetween={10} 
        className="sliderHome">
        <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
          <img src={image1} alt="" />  
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
          <img src={image2} alt="" />  
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
          <img src={image3} alt="" />  
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
          <img src={image4} alt="" />  
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
          <img src={image5} alt="" />  
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
          <img src={image6} alt="" />  
          </div>
          </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default HomeSlider
