import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import BannerImage1 from "../../assets/images/bannerImage3.jpg"
import BannerImage2 from "../../assets/images/bannerImage1.jpg"
import  Button  from '@mui/material/Button';

const HomeSliderV2 = () => {
  return (
    <Swiper
    loop={true}
    spaceBetween={30}
    effect={'fade'}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[EffectFade, Navigation, Pagination]}
    className="homeSliderV2"
  >
    <SwiperSlide>
      <div className="item w-full rounded-md overflow-hidden relative">
      <img src={BannerImage1} className='w-full h-[370px]'/>

      <div className="info absolute top-0 -right-[100%] opacity-0 transition-all duration-700 w-[50%] h-[100%] flex items-center justify-center flex-col z-50 !p-8">
        <h4 className='text-[18px] w-full text-left !mb-3 font-[500] relative -right-[100%] opacity-0'>Big Saving Days sale</h4>
        <h2 className='text-[30px] font-[700] w-full relative -right-[100%] opacity-0'>Women Solid round Green T-Shirt</h2>
        <h3 className='text-[18px] w-full text-left !mb-3 !mt-3 font-[500] flex items-center gap-3 relative -right-[100%] opacity-0'>Starting At Only <span className='text-[30px] font-[700] text-[#ff5252]'>$60.00</span></h3>
        <div className="w-full btn_ relative -bottom-[100%] opacity-0">
        <Button className='btn-org'>SHOP NOW</Button>
        </div>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
       <div className="item w-full rounded-md overflow-hidden relative">
        <img src={BannerImage2} className='w-full h-[370px]' />
        <div className="info absolute top-0 -right-[100%] opacity-0 transition-all duration-700 w-[50%] h-[100%] flex items-center justify-center flex-col z-50 !p-8">
        <h4 className='text-[18px] w-full text-left !mb-3 font-[500] relative -right-[100%] opacity-0'>Big Saving Days sale</h4>
        <h2 className='text-[30px] font-[700] w-full relative -right-[100%] opacity-0'>By Modern Female Uses Shopping</h2>
        <h3 className='text-[18px] w-full text-left !mb-3 !mt-3 font-[500] flex items-center gap-3 relative -right-[100%] opacity-0'>Starting At Only <span className='text-[30px] font-[700] text-[#ff5252]'>$99.00</span></h3>
        <div className="w-full btn_ relative -right-[100%] opacity-0">
        <Button className='btn-org'>SHOP NOW</Button>
        </div>
      </div>
      </div>
    </SwiperSlide>
  </Swiper>
  )
}

export default HomeSliderV2
