import React, { useRef, useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import imageZoom from '../../assets/images/fashionImages/womenImg1.jpg'; 
import imageZoom2 from '../../assets/images/fashionImages/womenImg2.jpg'; 
import imageZoom3 from '../../assets/images/fashionImages/fourthWomen1.jpg'; 
import imageZoom4 from '../../assets/images/fashionImages/fourthWomen2.jpg'; 
import imageZoom5 from '../../assets/images/fashionImages/thirdWomen1.jpg'; 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const ProductZoom = () => {
    
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();

    const goto = (index)=>{
        setSlideIndex(index);
        zoomSliderSml.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }
    
  return (
    <>
    <div className="flex gap-3 ">
       <div className="slider w-[15%]">
          <Swiper
          ref={zoomSliderSml}
               direction='vertical'
                slidesPerView={4}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="ZoomProductSliderThumbs !h-[475px] overflow-hidden"
              >
                <SwiperSlide>
                    <div className="item !rounded-md overflow-hidden cursor-pointer group" onClick={()=>goto(0)}>
                        <img src={imageZoom2} alt="" className='w-full transition-all group-hover:scale-105' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item !rounded-md overflow-hidden cursor-pointer group" onClick={()=>goto(1)}>
                        <img src={imageZoom} alt="" className='w-full transition-all group-hover:scale-105' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item !rounded-md overflow-hidden cursor-pointer group" onClick={()=>goto(2)}>
                        <img src={imageZoom3} alt="" className='w-full transition-all group-hover:scale-105' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item !rounded-md overflow-hidden cursor-pointer group" onClick={()=>goto(3)}>
                        <img src={imageZoom4} alt="" className='w-full transition-all group-hover:scale-105' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item !rounded-md overflow-hidden cursor-pointer group" onClick={()=>goto(4)}>
                        <img src={imageZoom5} alt="" className='w-full transition-all group-hover:scale-105' />
                    </div>
                </SwiperSlide>
                <SwiperSlide></SwiperSlide> 
          </Swiper>
       </div>


       <div className="zoomContainer w-[80%] !h-[475px] overflow-hidden rounded-md">
         <Swiper
         ref={zoomSliderBig}
                slidesPerView={1}
                spaceBetween={0}
                navigation={false}
              >
        <SwiperSlide>
      <InnerImageZoom zoomType='hover' zoomScale={1} src={imageZoom} />
      </SwiperSlide>
        <SwiperSlide>
      <InnerImageZoom zoomType='hover' zoomScale={1} src={imageZoom2} />
      </SwiperSlide>
        <SwiperSlide>
      <InnerImageZoom zoomType='hover' zoomScale={1} src={imageZoom3} />
      </SwiperSlide>
        <SwiperSlide>
      <InnerImageZoom zoomType='hover' zoomScale={1} src={imageZoom4} />
      </SwiperSlide>
        <SwiperSlide>
      <InnerImageZoom zoomType='hover' zoomScale={1} src={imageZoom5} />
      </SwiperSlide>
      </Swiper>
       </div>
    </div>
    </>
  )
}

export default ProductZoom
