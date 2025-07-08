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
import BannerBoxV2 from '../BannerBoxV2';
import BannerBoxV2Img1 from "../../assets/images/BannerBoxV2Img.jpg"
import BannerBoxV2Img2 from "../../assets/images/BannerBoxV2Img2.jpg"
import BannerBoxV2Img3 from "../../assets/images/BannerBoxV2Img3.jpg"
import BannerBoxV2Img4 from "../../assets/images/BannerBoxV2Img4.jpg"
import BannerBoxV2Img5 from "../../assets/images/BannerBoxV2Img5.jpg"


const AdsBannerSliderV2 = (props) => {
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
               <BannerBoxV2  info="left" image={BannerBoxV2Img1} link={"/"}/>
            </SwiperSlide>
            <SwiperSlide>
               <BannerBoxV2  info="right" image={BannerBoxV2Img2} link={"/"}/>
            </SwiperSlide>
            <SwiperSlide>
               <BannerBoxV2  info="right" image={BannerBoxV2Img3} link={"/"}/>
            </SwiperSlide>
            <SwiperSlide>
               <BannerBoxV2  info="right" image={BannerBoxV2Img4}  link={"/"}/>
            </SwiperSlide>
            <SwiperSlide>
               <BannerBoxV2  info="right" image={BannerBoxV2Img5} link={"/"}/>
            </SwiperSlide>
            <SwiperSlide>
               <BannerBoxV2  info="right" image={BannerBoxV2Img2} link={"/"}/>
            </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default AdsBannerSliderV2
