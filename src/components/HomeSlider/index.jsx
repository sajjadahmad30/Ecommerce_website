import React, { useState } from 'react'
import HomeSlider from '../../Pages/Home'
import HomeCatSlider from '../HomeCatSlider/HomeCatSlider'
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from '../AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from '../ProductsSlider';
import BlogItem from '../BlogItem';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Navigation module only
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from '../Footer';
import HomeSliderV2 from '../HomeSliderV2';
import BannerBoxV2 from '../BannerBoxV2';
import BannerBoxV2Img1 from "../../assets/images/BannerBoxV2Img.jpg"
import BannerBoxV2Img2 from "../../assets/images/BannerBoxV2Img2.jpg"

const Home = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
     {/* <HomeSlider/> */}

     {/*HomeSlider can use or HomeSliderV2 or used both or very good.  */}

    <section className='!py-6'>
      <div className="container flex !gap-5">
        <div className="part1 w-[70%]">
          <HomeSliderV2 />
        </div>
        <div className="part2 w-[30%] flex items-center justify-between flex-col gap-5">
          <BannerBoxV2 info="left" image={BannerBoxV2Img1} />
          <BannerBoxV2 info="right" image={BannerBoxV2Img2} />
        </div>
      </div>
    </section>


     <HomeCatSlider/>

      <section className='bg-white !py-8'>
        <div className="container">
          <div className="flex items-center justify-between">
            
            <div className="leftSection">
              <h2 className='text-[22px] font-[600]'>Popular Products</h2>
              <p className='text-[14px] font-[400]'>Do not miss the current offers until the end of march.</p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
              </Tabs>
            </div>
            
          </div>

        {/* import the productsSlider */}
          <ProductsSlider items={5}/>

        </div>
      </section>

      {/* Free Shipping Section */}
     <section className='!py-16 !bg-white !mt-5'>
      <div className="container">
        <div className="freeShipping border-2 border-[#ff5252] !px-3 !p-4 w-[90%] !mx-auto flex items-center justify-between rounded-md !mb-7">
        
         <div className="col1  flex items-center gap-4">
         <FaShippingFast className='text-[50px]'/>
         <span className='text-[20px] font-[600] uppercase'>Free Shipping</span>
         </div>

          <div className="col2">
            <p className='mb-0 font-[500]'>Free Delivery Now on your First order and over $200</p>
          </div>

          <div className="col3">
            <p className='text-[25px] font-bold'>-Only $200*</p>
          </div>

        </div>

        {/* AdsBannerSlider imported here */}
        <AdsBannerSlider items={4}/>
      </div>
     </section>


    <section className='!py-5 bg-white !pt-0'>
      <div className="container">
      <h2 className='text-[22px] font-[600]'>Latest Products</h2>
        <ProductsSlider items={6}/>

        <AdsBannerSlider items={2} />
      </div>
    </section>


    <section className='!py-5 bg-white !pt-0'>
      <div className="container">
      <h2 className='text-[22px] font-[600]'>Future Products</h2>
        <ProductsSlider items={6}/>

        <AdsBannerSlider items={3} />
      </div>
    </section>


    <section className='blogSection !py-5 !pb-8 !pt-0 bg-white'>
      <div className="container">
        <h3 className='!text-[20px] !font-[600]  !mb-4'>From the Blog</h3>
      <Swiper
      modules={[Navigation]}     
      navigation                  
      spaceBetween={30}
      slidesPerView={4}
    >
      <SwiperSlide>
        <BlogItem/>
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem/>
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem/>
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem/>
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem/>
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem/>
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem/>
      </SwiperSlide>
    </Swiper>
      </div>
    </section>


    <Footer/>

    </>
  )
}

export default Home
