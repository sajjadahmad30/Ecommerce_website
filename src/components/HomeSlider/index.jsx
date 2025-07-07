import React, { useState } from 'react'
import HomeSlider from '../../Pages/Home'
import HomeCatSlider from '../HomeCatSlider/HomeCatSlider'
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from '../AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../ProductsSlider';

const Home = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
     <HomeSlider/>
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

     <br /><br /><br /><br />
    </div>
  )
}

export default Home
