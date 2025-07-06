import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';
import Ads1 from "../../assets/images/Ads1.jpeg"
import Ads2 from "../../assets/images/Ads2.jpeg"
import Ads3 from "../../assets/images/Ads3.jpg"
import Ads4 from "../../assets/images/Ads4.jpeg"
import Ads5 from "../../assets/images/Ads5.jpeg"
import Ads6 from "../../assets/images/Ads6.jpeg"


const AdsBannerSlider = (props) => {
  return (
    <div className='!py-4 w-full'>
         <Swiper
           slidesPerView={props.items}
           spaceBetween={10} 
           navigation={true}
           modules={[Navigation,Autoplay]}
            className="smlBtn"
            autoplay={{
            delay: 2500,
            disableOnInteraction: false}}>

            <SwiperSlide>
               <BannerBox img={Ads1}  link={"/"}/>
            </SwiperSlide>
            <SwiperSlide>
               <BannerBox img={Ads2}  link={"/"}/>
            </SwiperSlide>
            <SwiperSlide>
               <BannerBox img={Ads3}  link={"/"}/>
            </SwiperSlide>
            <SwiperSlide>
               <BannerBox img={Ads4}  link={"/"}/>
            </SwiperSlide>
            <SwiperSlide>
               <BannerBox img={Ads5}  link={"/"}/>
            </SwiperSlide>
            <SwiperSlide>
               <BannerBox img={Ads6}  link={"/"}/>
            </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default AdsBannerSlider
